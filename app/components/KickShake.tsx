import { Tween } from "react-gsap";

export default function KickRoute() {
  return (
    <Tween
      to={{ x: -2, rotation: -1, scale: 1.1 }}
      ease="power1.inOut"
      duration={0.2}
      yoyo
    >
      <h1 className="text-9xl text-white">BLACK</h1>
    </Tween>
  );
}
