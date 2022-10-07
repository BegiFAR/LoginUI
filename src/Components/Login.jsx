import React, { useState } from 'react'



function Login() {

    const [xPos, setXpos] = useState(0)
  
    const onClick = (direction) => {
        (direction === "left") ? setXpos(x => x - 100) : setXpos(x => x + 100)
    }

    return (
       
    <div className='flex flex-col h-screen justify-center items-center space-y-5 '>
       <div className=' overflow z-10 rounded-2xl shadow-2xl border-zinc-100 border border-r-0 border-b-0 border-opacity-30 backdrop-filter backdrop-blur-sm flex flex-col justify-center w-96 h-4/5 sm:h-3/5 bg-black bg-opacity-30 shadow-red-100/20'>
                 <div className='space-x-8 m-8 absolute top-10 w-80 rounded-xl  shadow-red-300/10'>
                     {/* LOGIN/REGISTER HIGHLIGHT */}
                    <div className=' translate-x  h-11 rounded-2xl absolute m-0  w-36 bg-white -z-10'></div>
                    <button className=' z-1 text-black text-[30px] font-bold' onClick={() => onClick("left")}>Login</button>
                    <button className=' pl-4  text-black text-[30px] font-bold'  >Register</button>
                 </div>
                {/* LOGIN */}
            <form className='space-y-5 translate-x-full absolute w-full  '>
              <center>
                  <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your username/email' required/>
              </center>
              <center>
                  <input className=' w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white'   type="password" placeholder='Enter your password' required/>
              </center>
              <center className='absolute inset-x left-10 w-90'>
                <input type="checkbox" className='hover:scale-125'/><span className='text-white text-md px-3'>Remember Password</span>
              </center>
              <center className='w-3/4 h-4'>
                  <a className='text-md absolute left-10 bottom-7 text-white  hover:text-bold hover:scale-105 border-spacing-5 duration-300 ' href="#">Forgot Password?</a>
              </center>
              <center> 
                  <button className='animate-bounce hover:animate-none w-40 relative sm:bottom-14 top-20 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Login</button>
              </center>  
          </form>

                {/* REGISTER */}
          <form className='space-y-1 absolute right-96 translate-x-full w-full'>
              <center >
                  <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your username' required/>
              </center>
              <center>
                  <input className='w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white' type="email" placeholder='Enter your email' required/>
              </center>
              <center>
                  <input className=' w-80 p-4 px-5 bg-transparent border border-transparent outline-none border-b-amber-800 rounded-lg text-white'  type="password" placeholder='Enter your password' required/>
              </center>
              <center className='absolute inset-x left-10 w-90 pt-5'>
                <input type="checkbox" className='hover:scale-125'/><span className='text-white text-md px-3 '>I agree to <span className='text-blue-400'>terms & conditions</span></span>
              </center>
             
              <center> 
                  <button className='animate-bounce hover:animate-none w-40 relative sm:bottom-14 top-20 p-2 px-6 bg-transparent border border-zinc-400 outline-none rounded-lg text-white hover:bg-white hover:text-black duration-300'  type="submit" value='Submit'>Register</button>
              </center>  
          </form>
       </div>
      
       
            
   </div>
            
      
    )
}

export default Login
