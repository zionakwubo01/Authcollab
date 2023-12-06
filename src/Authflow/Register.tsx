
const Register = () => {
    return (
        <div>
            <div className="w-[100%] h-[100vh] 
            flex items-center justify-center
            ">
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
                            placeholder="enter your email address"
                            className="h-[40px] w-[100%] bg-white
                     rounded-[5px] border-[1px] border-solid border-blue-700
placeholder:pl-[10px]
                    
                     "
                        />
                        <input
                            placeholder="enter password"
                            className="h-[40px] w-[100%] bg-white
                     rounded-[5px]  border-[1px] border-solid border-blue-700
placeholder:pl-[10px]
                     "
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
                        className="w-[350px] h-[40px] bg-black
                        border-[1px] border-solid
                        border-gray-500 rounded-[5px]
                        text-white  mb-[60px]
                        "
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register