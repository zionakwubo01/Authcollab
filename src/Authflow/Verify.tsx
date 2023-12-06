
const Verify = () => {
    return (
        <div className='h-[100vh] w-full b flex items-center justify-center'>
              <div className='h-[70%] w-[25%]  flex items-center  flex-col'>
                <div className='text-[30px]'>Verify</div>
                <h2 className='text-[12px] flex justify-start w-full'>Work email</h2>
                <input className='w-full h-[35px] pl-3 border-2 text-[12px] bg-white rounded-sm' type="text" placeholder='Enter email'/>
                <p className='text-[12px] text-center mt-2'>we just sent you a tempoary verification code. <br /> Please check your inbox and paste the verification <br /> code below</p>
              <div className='w-full h-[25%]  mt-3 flex flex-col justify-between'>
                <p className='text-[12px] '>Verification code </p>
                <input className='w-full h-[35px] pl-3 text-[12px]  border-2 bg-white rounded-sm' type="text" placeholder='paste verification code'/>
                <button className='w-full h-[35px] pl-3  border-2 bg-red-200 border-red-500 rounded-sm text-[12px] text-[red] '> Verify Code</button>
                <p className='text-[12px] w-full text-center'>you've successfully verified your account </p>
              </div>
              <div className='h-[150px] w-full  flex justify-center items-center flex-col gap-4'>
                    <button className='w-full h-[35px] rounded-sm text-[12px] border-2'>Continue with Google</button>
                    <button className='w-full h-[35px] rounded-sm text-[12px] border-2'>Continue with Apple</button>
              </div>
              </div>
        </div>
    )
}

export default Verify