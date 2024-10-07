"use client";

// import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useEffect, useState } from "react";

export default function Home() {
  const [enteredKey, setEnteredKey] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");
  }, []);

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

        {/* <Button onClick={(e) => validatePasskey(e)}>Decrypt!</Button> */}
      </div>
    </div>
  );
}
