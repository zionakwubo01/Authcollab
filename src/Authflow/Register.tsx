import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { createUser } from "../API/api"
const Register = () => {

    const schema = yup.object({
        userName: yup.string().required("enter your user name"),
        password: yup.string().required("entervyour password"),
        email: yup.string().email().required("enter your email")
    })


    const {
        reset,
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })


    const handlesubmitshow = handleSubmit((data: any) => {
        const { userName, password, email } = data
        createUser({ userName, password, email }).then((res: any) => {

            console.log(res)
        })
    })

    return (
        <div>
            <div className="w-[100%] h-[100vh] 
            flex items-center justify-center
            ">
                <form onSubmit={handlesubmitshow}>
                    <div className="w-[370px] min-h 
                 bg-white flex flex-col items-center justify-center
                 gap-[20px] border-solid border-[0.5px] border-gray-400
                 rounded-[5px]
                 ">
                        <div className="font-bold text-[40px]
                    mt-[50px] 
                    ">Sign up</div>
                        <div className="w-[96%] min-h 
                    flex flex-col gap-[15px]
                    ">
                            <input
                                type="text"
                                placeholder="enter your name"
                                className="h-[40px] w-[100%] bg-white
                     rounded-[5px] border-[1px] border-solid border-blue-700
placeholder:pl-[10px] 
                     "
                                {...register("userName")}
                            />
                            <input
                                placeholder="enter password"
                                className="h-[40px] w-[100%] bg-white
                     rounded-[5px]  border-[1px] border-solid border-blue-700
placeholder:pl-[10px]
                     "
                                type="password"
                                {...register("password")}
                            />
                            <input
                                placeholder="enter email"
                                className="h-[40px] w-[100%] bg-white
                     rounded-[5px]  border-[1px] border-solid border-blue-700
placeholder:pl-[10px]
                     "
                                type="email"
                                {...register("email")}
                            />
                        </div>
                        <button
                            className="w-[350px] h-[40px] bg-white
                        border-[1px] border-solid
                        border-gray-500 rounded-[5px]
                        "
                        >
                            continue with google
                        </button>
                        <button
                            type="submit"
                            className="w-[350px] h-[40px] bg-black
                        border-[1px] border-solid
                        border-gray-500 rounded-[5px]
                        text-white  mb-[60px]
                        "
                        >
                            Login
                        </button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register