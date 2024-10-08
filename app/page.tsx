"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Volume1 } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function Home() {
  const [enteredKey, setEnteredKey] = useState("");
  const [error, setError] = useState("");
  const [isImage, setIsImage] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const router = useRouter();

  const handleSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (enteredKey === process.env.NEXT_PUBLIC_CONTORL_PANEL_PASSKEY) {
      setIsImage(false);
      router.push("/secret-url-239487235928");
    } else {
      setIsImage(true);
      setError("Really? Come on, bro... it's ez.");
      handleSound();
    }
  };

  return (
    <div className="px-4 flex items-center h-full justify-center">
      <div className="flex flex-col gap-6 items-center justify-center">
        <div className="flex flex-col items-center">
          <p className="text-xl">Did you find the Pass Key? :)</p>
          <div className="flex gap-2 mb-4 items-center text-muted-foreground">
            <Volume1 />
            <p className="text-lg">
              Turn on the sound, for a better experience :)
            </p>
          </div>

          {error && (
            <p className="flex items-center justify-center text-destructive">
              {error}
            </p>
          )}

          <InputOTP
            maxLength={6}
            value={enteredKey}
            onChange={(value) => setEnteredKey(value)}
          >
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>

        <Button className="w-full" onClick={(e) => validatePasskey(e)}>
          Let&apos;s gooo! 🚀
        </Button>

        {isImage && (
          <Image
            priority
            className="h-[30rem] w-[30rem] object-cover absolute -top-10 -z-10"
            src="/image.png"
            alt="Image"
            width={500}
            height={500}
          />
        )}
      </div>
      <audio ref={audioRef} src="/error.mp3" preload="auto" />
    </div>
  );
}
