"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { useConfetti } from "@/hooks/useConfetti";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

const SecretUrl = () => {
  const [enteredKey, setEnteredKey] = useState("");
  const [error, setError] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const router = useRouter();

  const handleSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  useConfetti();

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (enteredKey === process.env.NEXT_PUBLIC_CONTORL_PANEL_PASSKEY_NUMBER_2) {
      router.push("/secret-image-1243145232");
    } else {
      setError("Nope!");
      handleSound();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full relative">
      <div className="flex flex-col items-center gap-5 relative">
        <Button className="w-fit" variant="link">
          <a
            href="https://txtmoji.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            You know what to do! 🎉
          </a>
        </Button>
        <ul className="flex shrink flex-col gap-4 max-w-[1000px] px-5">
          <li className="text-2xl">
            😯🙆👺👱🙇🙅🙎👱👰👔👓👸👣👏👚😫👡👴👘👲👓👥😫👯🙅🙎👪👥😶👩🙎👒👷🙉👨👙👹🙊👧👘👗👢👡👺👴👕👪👫😲🙄👬😯👫👯
          </li>
          <Separator className="h-1" />
          <li className="text-2xl">
            😯👯👸👦🙁😴🙃🙉🙇👫👣😫😫👘🙊👒🙁🙁😱👣👕👪🙂🙍🙈👰👷🙂🙉🙉👔👳🙁👏🙈👓👑👕👚👖👭👹👨👰👡👸👑👔🙎🙉👢🙃😰👱😷👕😴🙋👲👐👸🙎🙈🙅😹👬🙊👐👔👓👚🙉🙍👕🙈👷😽😽
          </li>
          <Separator className="h-1" />
          <li className="text-2xl">
            😸👹👚🙃😷👑👑🙁🙊👷👺🙄🙈👶👴👘👦😳👷🙅👖👘😯👨👐🙅👐👷👹😸👖👬👫👒👌👫👪😲👪🙄🙍👷👓😳👹👸👣👔👬😯👴🙎👰👰👏👧👌👳👒👸🙅👵😹😸🙇👒👷👒😸🙄👡🙊🙄🙉🙃🙁😽😽
          </li>

          <span className="absolute -bottom-36 left-40 rotate-[93deg]">
            5691
          </span>
          <span className="absolute -bottom-28 right-36 rotate-[140deg]">
            4852
          </span>
          <span className="absolute -bottom-24 left-52 rotate-[74deg]">
            1563
          </span>
          <span className="absolute -bottom-24 left-50 rotate-[24deg]">
            4253
          </span>
          <span className="absolute -bottom-24 left-96 rotate-[158deg]">
            5839
          </span>

          {error && (
            <p className="absolute -bottom-10 right-56 rotate-[-40deg] bg-destructive text-destructive-foreground">
              {error}
            </p>
          )}
        </ul>
      </div>

      <div className="absolute bottom-2 right-2 flex flex-col gap-2">
        <InputOTP
          maxLength={6}
          value={enteredKey}
          onChange={(value) => setEnteredKey(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
        </InputOTP>

        <Button
          size="icon"
          variant="ghost"
          className="w-full"
          onClick={(e) => validatePasskey(e)}
        >
          Give me my gift!
        </Button>
      </div>
      <audio ref={audioRef} src="/error.mp3" preload="auto" />
    </div>
  );
};

export default SecretUrl;
