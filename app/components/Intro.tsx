import { ReactElement, forwardRef, useImperativeHandle, useRef, useState } from "react"
import { Controls, PlayState, SplitChars, Timeline, Tween } from "react-gsap"

const IntroTargets = forwardRef((props, ref) => {
  const div1 = useRef<ReactElement[]>([])
  const div2 = useRef<ReactElement[]>([])
  useImperativeHandle(ref, () => ({
    div1,
    div2,
  }));
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div>
        <div className="flex">
          <h2 className="absolute overflow-hidden">
            <SplitChars
              ref={(charRef: ReactElement) => div1.current.push(charRef)}
              wrapper={
                <div id="center-title-initial" className="intro__title intro__title--large inline-block" />
              }
            >
              DOPE 23
            </SplitChars>
          </h2>
          <h2 className="overflow-hidden">
            <SplitChars
              ref={(charRef: ReactElement) => div2.current.push(charRef)}
              wrapper={<div id="center-title" className="intro__title inline-block" />}
            >
              DOPE 23
            </SplitChars>
          </h2>
        </div>
      </div>
      {/* <h2 id="center-title-repeated" className="intro__title intro__center" >Summer 22</h2> */}
      {/* <h2 id="top-title" className="intro__title intro__top" >Summer 22</h2> */}
      {/* <h2 id="bottom-title" className="intro__title intro__bottom" >Summer 22</h2> */}

      {/* <div className="intro__title-row intro__top"> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* </div> */}
      {/* <div className="intro__title-row intro__mid-top"> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* </div> */}
      {/* <div className="intro__title-row intro__center"> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* </div> */}
      {/* <div className="intro__title-row intro__mid-bottom"> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* </div> */}
      {/* <div className="intro__title-row intro__bottom"> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* 	<h2 className="intro__title">Summer 22</h2> */}
      {/* </div> */}
    </div>
  )
})

export default function Intro() {
  const [playState, setPlayState] = useState(PlayState.play)
  return (
    <>
      <Timeline
        target={<IntroTargets />}
        duration={0.7}
        stagger={0.4}
        delay={1}
      >
        <Tween
          target="div1"
          position={0}
          to={{ y: (pos: number) => pos % 2 ? "100%" : "-100%", opacity: 0 }}
        />
        <Tween
          target="div2"
          position={1}
          from={{ y: (pos: number) => pos % 2 ? "100%" : "-100%", opacity: 0 }}
          to={{ y: 0, opacity: 1 }}
        />
      </Timeline>
    </>
  )
}
