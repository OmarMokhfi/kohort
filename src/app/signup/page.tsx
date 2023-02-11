"use client";

import { createNewAccount } from "@/api/auth";
import EmailInput from "@/components/form/EmailInput";
import PasswordInput from "@/components/form/PasswordInput";
import TextInput from "@/components/form/TextInput";
import PieGraphic from "@/components/graphics/PieGraphic";
import WavesGraphic from "@/components/graphics/WavesGraphic";
import Logo from "@/components/Logo";
import ToastMessage from "@/components/notifications/Message";
import { AUTH_PROVIDERS } from "@/constants/AuthProviders";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface IDictionary<> {
  [id: string]: string;
}

const ERRORS: IDictionary = {
  server_error: "An error occured during registration please try again.",
  unique_error: "User with the provided email already exists.",
};

export default function Signup() {
  const [message, setMessage] = useState({
    type: "",
    message: "",
  });
  const searchParams = useSearchParams();
  const callbackUrl =
    searchParams.get("ref") == "create-event" ? "/groups/events/create" : "/";
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      setMessage({
        type: "",
        message: "",
      });
      createNewAccount({
        ...values,
        provider: AUTH_PROVIDERS.credentials,
      }).then(
        (res) => {
          setMessage({
            type: "success",
            message:
              "Account created successfully! Please check your inbox to active it.",
          });
        },
        (err) => {
          setMessage({
            type: "error",
            message: ERRORS[err.message] ?? ERRORS["server_error"],
          });
        }
      );
    },
  });

  const loginGoogle = (e: any) => {
    e.preventDefault();
    signIn("google", { callbackUrl: callbackUrl });
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
          className="pt-[60px] bg-white text-black md:w-[500px] z-10 relative"
          onSubmit={formik.handleSubmit}
        >
          <div className="space-y-8 w-full px-[40px]">
            <h1 className="flex flex-col space-y-1 text-3xl font-bold text-center">
              <span className="text-xl">Kohort Time</span>{" "}
              <span>Let&apos;s sign up.</span>
            </h1>
            <div className="w-full space-y-6">
              {message.message.length > 0 && <ToastMessage {...message} />}
              <TextInput
                placeholder="First Name"
                name="first_name"
                onChange={formik.handleChange}
                value={formik.values.first_name}
              />
              <TextInput
                placeholder="Last Name"
                name="last_name"
                onChange={formik.handleChange}
                value={formik.values.last_name}
              />
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
              />
            </div>
            <button className="bg-black w-full rounded py-3 px-16 text-white text-xl font-bold hover:opacity-80">
              Sign Up
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
          <div className="w-full py-6 mt-[40px] text-center bg-bluish">
            <p>
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-orange font-bold">Log In</span>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
