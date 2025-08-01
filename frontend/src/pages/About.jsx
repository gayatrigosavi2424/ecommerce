import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'


const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>

      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] ' src={assets.about_img} alt="" />
        <div className='flex flex-col  justify-center gap-6 md:w-2/4 text-gray-600 '>
        <p>Forever was born out of a passion for innovation for innovation and a desire to revolutionize the way people shop online. Our journey began with simple idea:to provide a platform where customer can easily discover,explore and puches a wide range of products from the comfort of their home.</p>
        <p>Since our inception ,we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference .From fashion and beauty to electrinics and home essentials,we offer an expensive collection sourced from trusted brands and suppliers.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mision at forever is to empower customer with choice,convenience,and confidence.we're dedicated to providing a seamless shopping experience that exceeds expections,from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
       </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>We meticulously select and wait each product to ensure it meets our strength quality standards.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Convenience:</b>
        <p className='text-gray-600'>With our user friendly interface and hassle-free ordering process,shopping has never been easier.</p>
       </div>
       <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
        <b>Exceptional Customer Service:</b>
        <p className='text-gray-600'>Our team of dedicated professional is here to assist you the way,ensuring your satisfaction is our priority.</p>
       </div>
       </div>

       <NewsLetterBox />
    </div>
  )
}

export default About
