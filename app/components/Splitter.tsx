import { ReactElement, RefObject, forwardRef, useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState } from "react";
import { SplitChars, Timeline, Tween } from "react-gsap";

interface SplitterTargetRef {
  top: RefObject<HTMLHeadingElement>
  center: RefObject<HTMLHeadingElement>
  bottom: RefObject<HTMLHeadingElement>
  div1: RefObject<ReactElement[]>
  div2: RefObject<ReactElement[]>
}

const SplitterTargets = forwardRef<SplitterTargetRef>((_props, ref) => {
  {
    const div1 = useRef<ReactElement[]>([])
    const div2 = useRef<ReactElement[]>([])
    const top = useRef<HTMLHeadingElement>(null)
    const center = useRef<HTMLHeadingElement>(null)
    const bottom = useRef<HTMLHeadingElement>(null)
    useImperativeHandle(ref, () => ({
      div1,
      div2,
      top,
      center,
      bottom
    }));
    return (
      <>
        <div className="relative" style={{ gridArea: "center" }}>
          <h2 className="absolute overflow-hidden">
            <SplitChars
              ref={(charRef: ReactElement) => div1.current.push(charRef)}
              wrapper={
                <span className="inline-block" />
              }
            >
              DOPE 23
            </SplitChars>
          </h2>
          <h2 className="">
            <SplitChars
              ref={(charRef: ReactElement) => div2.current.push(charRef)}
              wrapper={<span className="inline-block" />}
            >
              DOPE 23
            </SplitChars>
          </h2>
        </div>

        <h2 ref={center} id="center-title-repeated" className="intro__title intro__center" >DOPE 23</h2>
        <h2 ref={top} id="top-title" className="intro__title intro__top" >DOPE 23</h2>
        <h2 ref={bottom} id="bottom-title" className="intro__title intro__bottom" >DOPE 23</h2>
      </>
    )
  }

})


export default function Splitter() {
  const splitter = useRef<SplitterTargetRef | null>(null)
  const [topOffset, setTopOffset] = useState<number>(0)
  const [bottomOffset, setBottomOffset] = useState<number>(0)

  useLayoutEffect(() => {
    const targets = splitter.current
    const currentTopOffset = targets?.top.current?.offsetTop
    const currentCenterOffset = targets?.center.current?.offsetTop
    const currentBottomOffset = targets?.bottom.current?.offsetTop

    if (typeof currentTopOffset === "number" && typeof currentCenterOffset === "number") {
      setTopOffset(currentTopOffset - currentCenterOffset)
    }
    if (typeof currentBottomOffset === "number" && typeof currentCenterOffset === "number") {
      setBottomOffset(currentBottomOffset - currentCenterOffset)
    }

  }, [splitter])

  const tweenOffsetFunction = useMemo(() =>
    (pos: number) => pos % 2 ? bottomOffset : topOffset
    , [bottomOffset, topOffset])

  return (
    <>
      <Timeline
        target={<SplitterTargets ref={splitter} />}
        stagger={0.4}
        delay={0.7}
      >
        <Tween
          target="div1"
          duration={0.7}
          position={0}
          to={{ y: (pos: number) => pos % 2 ? "100%" : "-100%", opacity: 0 }}
        />
        <Tween
          target="div2"
          position={1}
          from={{ y: (pos: number) => pos % 2 ? "100%" : "-100%", opacity: 0 }}
          to={{ y: 0, opacity: 1 }}
        />
        <Tween
          target="div2"
          delay={0.2}
          duration={0.3}
          to={{ y: tweenOffsetFunction }}
        />
        <Tween
          target="div2"
          duration={0.1}
          to={{ opacity: 1 }}
        />
      </Timeline>
    </>
  )
}
