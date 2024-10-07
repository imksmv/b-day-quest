"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function encryptPasskey(passkey: string) {
  return btoa(passkey);
}

export function decryptPasskey(passkey: string) {
  return atob(passkey);
}

export default function Home() {
  const [enteredKey, setEnteredKey] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const encryptedPasskey = localStorage.getItem("accessKey");

  useEffect(() => {
    const encryptedKey = encryptedPasskey && decryptPasskey(encryptedPasskey);

    if (encryptedKey === process.env.NEXT_PUBLIC_CONTORL_PANEL_PASSKEY) {
      router.push("/control-panel");
    } else {
    }
  }, [encryptedPasskey, router]);

  const validatePasskey = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    if (enteredKey === process.env.NEXT_PUBLIC_CONTORL_PANEL_PASSKEY) {
      const encryptedPasskey = encryptPasskey(enteredKey);

      localStorage.setItem("accessKey", encryptedPasskey);
    } else {
      setError("Are you stoooopid?. Come on bro, it is ez...");
    }
  };

  return (
    <div className="flex items-center h-full justify-center">
      <div className="flex flex-col gap-6 justify-center">
        <div>
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

        <Button onClick={(e) => validatePasskey(e)}>Decrypt!</Button>
      </div>
    </div>
  );
}
