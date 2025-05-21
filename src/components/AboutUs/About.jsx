import React from 'react'
import Ronaldo from '../../assets/Videos/ronaldo.mp4'
import Ronaldo2 from '../../assets/Videos/Ronaldo2.mp4'
import Ronaldo3 from '../../assets/Videos/Ronaldo3.mp4'
import Ronaldo4 from '../../assets/Videos/Ronaldo4.mp4'
import PIC1 from '../../assets/Images/RonaldoIMG1.png'
import PIC2 from '../../assets/Images/RonaldoIMG2.png'
import VK from '../../assets/Videos/VK_video.mp4'
import VK_I from '../../assets/Images/VK.png'
import VK_I2 from '../../assets/Images/VK_I2.png'
import VK_v2 from '../../assets/Videos/VK_video2.mp4'
// import Aman from '../../assets/Images/Aman.jpg'

function About() {
  return (
    <>
      <div className='m-3 mr-3 border border-black rounded-lg'>
        <h1 className='font-bold'>Hey Have You Visited This Website....</h1>
        <p className='m-[12px] border border-black rounded-2xl p-[12px] bg-blue-200'>
          This website is built for representing the stars of Total Gaming. You can find the members of this group and their achievements. This website is not yet completed — until that, go and <strong>SUBSCRIBE THE CHANNELS BELOW...</strong>
        </p>
        <button className='border border-black rounded-[5px] bg-pink-200 p-[4px] mb-4'>
          <a href="https://www.youtube.com/@cristiano" target="_blank" rel="noopener noreferrer">UR. Ronaldo</a>
        </button>
      </div>
      <div className='border border-black rounded-[10px] m-3'>
        <h1 className='font-bold text-center mb-7'>Want to Know More About GOATS? Watch This.....</h1>
        <div className='flex justify-center gap-4 flex-wrap items-centerborder border border-black rounded-[5px]  bg-orange-100 m-[10px] py-[10px] '>
          <video className='h-[400px] w-[400px] ' src={Ronaldo} controls poster={PIC1} width="600" />
          <video className='h-[400px] w-[400px] ' src={VK} controls poster={VK_I} width="600" />
          <video className='h-[400px] w-[400px] ' src={VK_v2} controls poster={VK_I2} width="600" />
          <video className='h-[400px] w-[400px] ' src={Ronaldo4} controls poster={PIC2} width="600" />
        </div>
      </div>
    </>
  )
}

export default About
