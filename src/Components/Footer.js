import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer>
      <h4 className='inline-flex items-center gap-2'>Build with <span> <FaHeart/></span> by Mandeep Sharma</h4>
      {/* <h4>Copyright &copy; 2023 DS</h4> */}
      <div className='footerLinks'>
        <a href="https://github.com/Mandeepsharma0" target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/mandeep-sharma-90689426a/" target='_blank' rel="noreferrer"><FaLinkedin/></a>
        <a href="mailto:mandeepvashist921@gmail.com">
          <GrMail />
        </a>
        <a href="https://leetcode.com/u/mandeepsharma_/" target="_blank" rel="noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer