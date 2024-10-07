"use client";

import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Separator } from "@/components/ui/separator";
import { useConfetti } from "@/hooks/useConfetti";
import { useState } from "react";

const SecretUrl = () => {
  const [enteredKey, setEnteredKey] = useState("");

  useConfetti();

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

          <span className="absolute -top-36 left-20 rotate-45">5691</span>
          <span className="absolute -bottom-28 rotate-[140deg]">4852</span>
          <span className="absolute right-24 -bottom-10 rotate-[50deg]">
            1563
          </span>
        </ul>
      </div>

      <div className="absolute bottom-2 right-2">
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
      </div>
    </div>
  );
};

export default SecretUrl;
