import {
  ReactElement,
  RefObject,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { SplitChars, Timeline, Tween } from "react-gsap";

interface SplitterTargetRef {
  top: RefObject<ReactElement[]>;
  center: RefObject<ReactElement[]>;
  bottom: RefObject<ReactElement[]>;
  div1: RefObject<ReactElement[]>;
  div2: RefObject<ReactElement[]>;
}

const SplitterTargets = forwardRef<SplitterTargetRef>((_props, ref) => {
  {
    const div1 = useRef<ReactElement[]>([]);
    const div2 = useRef<ReactElement[]>([]);
    const top = useRef<ReactElement[]>([]);
    const center = useRef<ReactElement[]>([]);
    const bottom = useRef<ReactElement[]>([]);
    useImperativeHandle(ref, () => ({
      div1,
      div2,
      top,
      center,
      bottom,
    }));
    return (
      <>
        <div
          className="relative flex w-full justify-center"
          style={{ gridArea: "center" }}
        >
          <h2 className="absolute overflow-hidden text-5xl">
            <SplitChars
              ref={(charRef: ReactElement) => div1.current.push(charRef)}
              wrapper={<span className="inline-block" />}
            >
              DOPE 23
            </SplitChars>
          </h2>
          <h2 className="overflow-hidden text-4xl">
            <SplitChars
              ref={(charRef: ReactElement) => div2.current.push(charRef)}
              wrapper={<span className="inline-block" />}
            >
              DOPE 23
            </SplitChars>
          </h2>
        </div>

        <h2 id="top-title" className="intro__top overflow-hidden text-5xl">
          <SplitChars
            ref={(charRef: ReactElement) => top.current.push(charRef)}
            wrapper={<span className="inline-block" />}
          >
            DOPE 23
          </SplitChars>
        </h2>
        <h2
          id="bottom-title"
          className="intro__bottom relative overflow-hidden text-3xl"
        >
          <SplitChars
            ref={(charRef: ReactElement) => bottom.current.push(charRef)}
            wrapper={<span className="inline-block" />}
          >
            DOPE 23
          </SplitChars>
        </h2>
      </>
    );
  }
});

export default function Splitter() {
  return (
    <>
      <Timeline target={<SplitterTargets />} stagger={0.4} delay={0.7}>
        <Tween
          target="div1"
          duration={0.7}
          position={0}
          to={{ y: (pos: number) => (pos % 2 ? "100%" : "-100%"), opacity: 0 }}
        />
        <Tween
          target="div2"
          position={1}
          from={{
            y: (pos: number) => (pos % 2 ? "100%" : "-100%"),
            opacity: 0,
          }}
          to={{ y: 0, opacity: 1 }}
        />
        <Tween
          target="top"
          position={2}
          from={{
            y: (pos: number) => (pos % 2 ? "100%" : "-100%"),
            opacity: 0,
          }}
          to={{ y: 0, opacity: 1 }}
        />
        <Tween
          target="bottom"
          position={2}
          from={{
            y: (pos: number) => (pos % 2 ? "100%" : "-100%"),
            opacity: 0,
          }}
          to={{ y: 0, opacity: 1 }}
        />

        <Tween target="div2" duration={0.7} position={3} to={{ opacity: 0 }} />
        <Tween target="top" duration={0.7} position={3} to={{ opacity: 0 }} />
        <Tween
          target="bottom"
          duration={0.7}
          position={3}
          to={{ opacity: 0 }}
        />
      </Timeline>
    </>
  );
}
