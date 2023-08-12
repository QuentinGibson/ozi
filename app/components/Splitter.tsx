import { motion, AnimatePresence, AnimationProps } from "framer-motion"
interface Props {
  word: string
}
export default function Splitter({word}: Props) {
  const characters = word.split('')
  const introTween = (index: number) => ({delay: index * 0.02 + 1, duration: 0.2, type: "tween"})
  const middleTween =  (index: number) => ({delay: index * 0.02 + 1, duration: 0.2, type: "tween"})
  
  return (
    <div>
      <AnimatePresence>
        <div className="text-4xl inline-block overflow-hidden">
          {characters.map((char, index) => {
            return (
              <motion.p className="char inline-block" animate={{y: index % 2 === 0 ? "-100%" : "100%"}} initial={{y: 0}} transition={introTween(index)} key={index}>
                {char}
              </motion.p>
            )
          })}
        </div>

        <div className="text-4xl inline-block overflow-hidden">
          {characters.map((char, index) => {
            return (
              <motion.p 
                className="char inline-block" 
                animate={{y: index % 2 === 0 ? [100, 0,-100] : [-100,0, 100]}} 
                initial={{y: 0}} 
                transition={{delay: index * 0.02 + 1.4, duration: 1, type: "tween", times: [0, 0.1, 0.9] }} 
                key={index}
              >
                {char}
              </motion.p>
            )
          })}
        </div>
      </AnimatePresence>
    </div>
  )

}
