import React, { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css"
import toast from 'react-hot-toast';
import { ChatState } from '../Context/ChatProvider';
import Navbar from '../components/common/Navbar';




const Home = () => {
  const {user} = ChatState(); 


  return (
    <div>
      
      <div className='w-[200px]'>
        {/* Navbar */}
        <Navbar userData={user}/>


        {/* Home */}

      </div>
    </div>
  )
}

export default Home