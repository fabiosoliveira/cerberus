"use client";

import { useEffect, useState } from "react";
import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import Image from "next/image";

const UserDropdown = () => {
  const [wallet, setWallet] = useState<string>("");

  useEffect(() => {
    const wallet = localStorage.getItem("wallet");
    setWallet(wallet || "");
  }, []);

  return (
    <>
      <a className="text-blueGray-500 block" href="/settings">
        <div className="items-center flex">
          <span className="w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full">
            <Image
              alt={wallet}
              className="w-full rounded-full align-middle border-none shadow-lg"
              src={generateAvatarURL(wallet)}
            />
          </span>
        </div>
      </a>
    </>
  );
};

export default UserDropdown;
