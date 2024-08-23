'use client';
import { useRef, useState } from 'react';
import { CiPause1, CiPlay1 } from "react-icons/ci";

export default function AboutVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        muted
      >
        <source src="/videos/about-vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent video click event from firing
            handlePlayPause();
          }}
          className={`bg-black/40 text-white border-2 border-white p-4 rounded-full text-center transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}
        >
          {isPlaying ? <CiPause1 className="text-3xl" /> : <CiPlay1 className="text-3xl" />}
        </button>
      </div>
    </div>
  );
}
