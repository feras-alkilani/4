import React from "react";
import Image from "next/image";

export default function AutoSlider({ images, duration }) {
  return (
    <div className="slider h-72 mt-10 overflow-hidden flex">
      <div
        className="flex gap-5 cursor-pointer animate-swipe hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...images, ...images, ...images].map(({ src, title, author }) => (
          <div key={src} className="flex flex-col items-start flex-shrink-0">
            <Image
              src={src}
              height={195}
              width={195}
              alt={title}
              className="w-50 h-52 object-cover rounded-md"
            />
            <span className="pt-2">{title}</span>
            <span className="text-gray-400">{author}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
