<<<<<<< HEAD
import React from 'react'

const Login = () => {
    return (
        <div>

        </div>
    )
=======
import { AiFillEye } from "react-icons/ai";
import logo from "../assets/logo.jpg";
import { LuEyeOff } from "react-icons/lu";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavigateFunction, useNavigate } from "react-router-dom";
interface iSubmit {
  email: string;
  password: string;
>>>>>>> 9e98be477483697d1ae2e92f922b9f2faaf28e12
}

export const Login = () => {
  const navigate: NavigateFunction = useNavigate();

  const schema = yup.object({
    email: yup.string().required("Your name is required to continue"),
    password: yup.string().required("Please put in your password"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = handleSubmit((data: iSubmit) => {
    console.log(data);
  });

  return (
    <div>
      <div className="w-full flex flex-col items-center">
        <div className="w-[70%] h-[100px] flex items-center  ">
          <img src={logo} className="h-[30%]" />
        </div>
        <div className="w-[80%] h-[calc(100vh-100px)] mt-10 flex flex-col items-center ">
          <div className="text-[50px] font-bold text-[40px] font-mono">
            Login
          </div>
          <form
            onSubmit={onHandleSubmit}
            className="w-[70%] flex flex-col items-center mt-10 "
          >
            <div className="w-[300px] flex flex-col gap-2">
              <div className="text-[14px]">
                Email
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.email?.message}
                </div>
              </div>

              <div className="text-[14px]">
                Password
                <input
                  {...register("password")}
                  type="password"
                  placeholder="Enter your password..."
                  className="w-full rounded-sm border bg-[#f7f5f3] text-[#b3b1b0] px-2 py-1 outline-none "
                />
                <div className="w-full text-[11px] text-red-500 flex justify-end ">
                  {errors.password?.message}
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-md border border-red-200 cursor-pointer bg-[#fdf5f2] text-red-500 px-2 py-1 flex justify-center mt-5 "
              >
                Continue
              </button>

              <p className="hover:text-red-500 underline cursor-pointer w-full flex justify-center text-[12px]">
                Forgot Password?
              </p>
            </div>
          </form>

          <div className="text-center w-[100%] mt-20 text-[14px] text-[#b3b1b0] ">
            By clicking “Continue” above, you acknowledge that you have read and
            understood, <br /> and agree to Notion's{" "}
            <span className="underline cursor-pointer">Terms & Conditions</span>{" "}
            and <span className="underline cursor-pointer">Privacy Policy</span>
            .
          </div>
        </div>
      </div>
    </div>
  );
};
