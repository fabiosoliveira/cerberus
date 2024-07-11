"use client";

import Link from "next/link";
import Navbar from "@/components/Navbars/AuthNavbar.js";
import FooterSmall from "@/components/Footers/FooterSmall.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const { push } = useRouter();

  const [message, setMessage] = useState<string>("");

  function btnLoginClick(): void {
    push("/register");
  }

  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/register_bg_2.png')",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6">
                    <div className="flex content-center items-center justify-center mb-5">
                      <Image
                        src={"/img/cerberus.png"}
                        width={128}
                        height={128}
                        alt="Cerberus"
                      />
                    </div>
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in with your MetaMask and start bot trading today.
                      </h6>
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5 inline-flex items-center"
                        type="button"
                        onClick={btnLoginClick}
                      >
                        <Image
                          src="/img/metamask.svg"
                          width={64}
                          height={64}
                          alt="MetaMask"
                        />
                        <span>Click to Connect</span>
                      </button>
                      <div>{message}</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mt-6 relative">
                  <Link href="/register" className="text-blueGray-200">
                    <small>Create new account</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
