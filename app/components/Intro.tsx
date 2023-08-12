import { Controls, PlayState, SplitChars, Timeline, Tween } from "react-gsap"

export default function Intro() {
  return (
    <>
      <div className="intro">
        <div className="intro__center intro__title">
          <Timeline 
            delay={0.4}
            ease="expo.inOut"
            target={
            <SplitChars
              wrapper={
              <h2 id="center-title-initial" className="intro__title intro__title--large inline-block" />
            }
            >
              DOPE 23
            </SplitChars>
          }
          >
            <Tween 
              to={{y: (pos: number) => pos % 2 ? '140%': '-140%', opacity: 1}} 
              stagger={0.02} 
            >
            </Tween>
          </Timeline>
        </div>
        <div className="intro__center intro__title">
          <Tween
            from={{y: (pos: number) => pos % 2 ? '140%': '-140%', opacity: 1}}
            to={{y: 0}}
            stagger={0.02} >
            <SplitChars
              wrapper={
              <h2 id="center-title" className="intro__title inline-block" />
            }
            >
              DOPE 23
            </SplitChars>
          </Tween>
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
      </>
  )
}
