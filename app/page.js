'use client'
import Image from "next/image";
import { motion } from 'framer-motion';



import './page.css';
import image_one from '../public/4.jpg';
import image_two from '../public/3.jpg';
import image_three from '../public/2.jpg';
import image_four from '../public/1.jpg';


export default function Home() {
  return (
    <main>
      <div id='mobile_container'>
        <div id='tic_container'>
          <div className='tic'>
            <motion.p  animate={{ width: 65 }} transition={{ duration: 0.5 ,ease: "easeIn", }}>Your</motion.p>

            <motion.span  animate={{ x: 0 }} >
              <Image className='image' src={image_one} height={20} width={60} alt='3' quality={100}/>
            </motion.span>
          </div>

          <div className='tic'>
            <motion.p animate={{ width: 150 }} transition={{duration: 0.6, ease: "easeIn"}} >All-In-One</motion.p>

            <motion.span initial={{ x: 125 }} animate={{ x: 0 }} >
              <Image className='image' src={image_two} height={20} width={60} alt='1' />
            </motion.span>
          </div>

          <div className='tic'>
            <motion.span initial={{ x: -25 }} animate={{ x: 0 }}>
              <Image className='image' src={image_three} height={20} width={60} alt='2' />
            </motion.span>
            <motion.p animate={{ width: 130}} transition={{duration: 0.7, ease: "easeIn"}}>Creative</motion.p>
          </div>

          <p>Powerhouse</p>

          <div className='tic'>
            <motion.span initial={{ x: 202 }} animate={{ x: 0 }} transition={{duration: 0.5, ease: "easeIn"}}>
              <Image className='image' src={image_four} height={20} width={60} alt='5'  quality={100}/>
            </motion.span>
          </div>
        </div>

        <motion.div initial={{opacity: 0, x: -5}} animate={{opacity:1, x: 0}} transition={{duration: 0.8, ease: "easeIn"}} className='QnA'>
          <h1>Who are we*</h1>
          <p>We don't just create, we shape, refine, and reimagine until every detail aligns with a vision that stands apart. Whatever the challenge, we make it unmistakably yours.</p>
        </motion.div>
        <motion.div initial={{opacity: 0, x: -5}} animate={{opacity:1, x: 0}} transition={{duration: 1, ease: "easeIn"}} className='QnA'>
          <h1>What we do*</h1>
          <p>We support founders and creators, from early stages to high rises. From 0 to 100, we're here with you all the way, whether that be full service disign or custom software development. We can help.</p>
        </motion.div>
        <button id='top'>Request a quote</button>
        <motion.button initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1, ease: "easeIn"}} id='bottom'>Get to know us</motion.button>
      </div>
    </main>
  );
}
