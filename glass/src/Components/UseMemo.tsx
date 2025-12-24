import { motion } from "motion/react"


const UseMemo = () => {

  // const [count, increment, decrement, reset] = New(5);

  return (
    <div className="w-screen h-screen flex items-center overflow-hidden relative">
      
      <motion.div
        className="w-[200px] h-[200px] bg-red-500 absolute left-0"
        initial={{ x: "-200px", rotate: 0 }}
        animate={{ x: "100vw", rotate: 360 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />

      <motion.div
        className="w-[200px] h-[200px] bg-orange-500 absolute right-0"
        initial={{ x: "200px", rotate: 0 }}
        animate={{ x: "-100vw", rotate: -360 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity
        }}
      />
      count, 
      increment, 
      decrement, 
      reset,
    </div>
  )
}



export default UseMemo


//new subject: formik vs react-hook-form
// framer-motion in react is a popular library for adding animations and transitions to React applications. It provides a simple and declarative API for creating complex animations with minimal code. Framer Motion allows developers to animate components, handle gestures, and create interactive UIs with ease. It supports features like spring animations, keyframes, layout animations, and shared layout transitions, making it a powerful tool for enhancing user experience in React applications.
//initial
// animate
// transform
// transition


