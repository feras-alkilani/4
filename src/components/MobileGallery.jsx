"use client";
import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

const MobileImages = [
  {
    src: "/assets/images/iphone_01.png",
    title: "iPhone",
    speed: 10
  },
  {
    src: "/assets/images/iphone_02.png",
    title: "iPhone",
    speed: 20
  },
  {
    src: "/assets/images/iphone_03.png",
    title: "iPhone",
    speed: 10
  },
  {
    src: "/assets/images/iphone_04.png",
    title: "iPhone",
    speed: 20
  },
  {
    src: "/assets/images/iphone_05.png",
    title: "iPhone",
    speed: 10
  }
];

export default function MobileGallery() {
  return (
    <ParallaxProvider>
      <div className="flex gap-10 mx-auto justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px]">
        {MobileImages.map(({ src, title, speed }) => (
          <Parallax key={src} speed={speed}>
            <Image key={src} src={src} width={279} height={576} alt={title} />
          </Parallax>
        ))}
      </div>
    </ParallaxProvider>
  );
}
