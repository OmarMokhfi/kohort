"use client";

import EmailInput from "@/components/form/EmailInput";
import PasswordInput from "@/components/form/PasswordInput";
import PieGraphic from "@/components/graphics/PieGraphic";
import WavesGraphic from "@/components/graphics/WavesGraphic";
import Logo from "@/components/Logo";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "ob.mokhfi@gmail.com",
      password: "Azerty",
    },
    onSubmit: (values) => {
      signIn("credentials", { ...values, callbackUrl: "/" });
    },
  });

  const loginGoogle = () => {
    signIn("google");
  };

  return (
    <main className="w-full min-h-screen py-24 bg-dark-noise flex flex-col items-center space-y-12">
      <Logo className="text-white" />
      <div className="relative px-4">
        <div className="absolute bottom-0 left-0 translate-y-[50px] -translate-x-1/2">
          <PieGraphic className="w-[170px]" />
        </div>
        <div className="absolute top-4 right-0 translate-x-1/2 z-20">
          <WavesGraphic className="w-[120px]" />
        </div>
        <form
          className="pt-[60px] bg-white text-black md:min-w-[500px] z-10 relative"
          onSubmit={formik.handleSubmit}
        >
          <div className="space-y-8 w-full px-[40px]">
            <h1 className="flex flex-col space-y-1 text-3xl font-bold text-center">
              <span>Welcome back.</span> <span>Let's sign in.</span>
            </h1>
            <div className="w-full space-y-6">
              <EmailInput
                placeholder="Email Address"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <PasswordInput
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                right={
                  <div>
                    <p>
                      <span>Forgot your password? </span>
                      <span className="text-orange cursor-pointer">Reset</span>
                    </p>
                  </div>
                }
              />
            </div>
            <button className="bg-black w-full rounded py-3 px-16 text-white text-xl font-bold hover:opacity-80">
              Log In
            </button>
            <div className="flex justify-center gap-x-3 items-center">
              <hr className="w-full border-black" />
              <p>Or</p>
              <hr className="w-full border-black" />
            </div>
            <button
              onClick={loginGoogle}
              className="bg-white border border-black w-full rounded py-3 px-16 text-black flex items-center justify-center space-x-4 text-xl font-bold hover:opacity-40"
            >
              <FcGoogle size={22} />
              <span className="hidden md:block">Continue with Google</span>
            </button>
          </div>
          <div className="w-full py-6 mt-[40px] text-center bg-blue">
            <p>
              Don't have an account yet?{" "}
              <Link href="/signup">
                <span className="text-orange">Sign up</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
