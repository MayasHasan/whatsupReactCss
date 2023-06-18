import React from 'react';
import './MainFooter.css';
import { BsEmojiLaughing,BsFillMicFill } from "react-icons/bs";
import { AiOutlinePaperClip } from "react-icons/ai";
const MainFooter = () => {
    return (
        <footer className="mainFooter flexCenter fullWidth ">
        <BsEmojiLaughing size={24} color="gray" />
      
          <span> <AiOutlinePaperClip size={24} color="gray" /> </span>
            <input type='text' placeholder='Type a message' />
          <span> <BsFillMicFill size={24} color="gray" /> </span>

        </footer>
    );
}

export default MainFooter;
