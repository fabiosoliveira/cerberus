"use client";

import Navbar from "@/components/Navbars/AuthNavbar.js";
import FooterSmall from "@/components/Footers/FooterSmall.js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type User = {
  name: string;
  email: string;
  checkTos: boolean;
};

export default function Register() {
  const { push } = useRouter();

  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    checkTos: false,
  });

  function btnSaveClick(): void {
    console.log(user);

    // push("/activate");
  }

  function onUserChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setUser((prevState: any) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
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
                        Sign up filling the form below. Your MetaMask will
                        prompt to save.
                      </h6>
                    </div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={user.name}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          onChange={onUserChange}
                          placeholder="Name"
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={user.email}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          onChange={onUserChange}
                          placeholder="Email"
                        />
                      </div>

                      <div>
                        <label className="inline-flex items-center cursor-pointer">
                          <input
                            id="checkTos"
                            type="checkbox"
                            checked={user.checkTos}
                            className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                            onChange={onUserChange}
                          />
                          <span className="ml-2 text-sm font-semibold text-blueGray-600">
                            I agree with the{" "}
                            <a
                              href="#pablo"
                              className="text-lightBlue-500"
                              onClick={(e) => e.preventDefault()}
                            >
                              Privacy Policy
                            </a>
                          </span>
                        </label>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 w-full"
                          type="button"
                          onClick={btnSaveClick}
                        >
                          Create Account
                        </button>
                        <div>{message}</div>
                      </div>
                    </form>
                  </div>
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
