import React from 'react'
import { FcTodoList } from "react-icons/fc";
import { FaHome } from "react-icons/fa";
import { BiTask } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-violet-950 text-white py-2">
      <div className="logo">
        <span className='font-bold text-2xl mx-8 flex'><div>My Todo</div> <FcTodoList className='mt-1' /></span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className='cursor-pointer hover:font-bold transition-all duration-150 flex'><FaHome className='mt-1 mx-1' /><div>Home</div> </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-150 flex'><BiTask className='mt-1 mx-1' /><div>Your Task</div></li>
      </ul>

    </nav>
  )
}

export default Navbar
