import React, { useState, useRef, useEffect } from "react";

export default function Rilat() {
  const VideoPlayer = ({ src, className }) => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        isPlaying ? video.play() : video.pause();
        video.muted = isMuted;
      }
    }, [isPlaying, isMuted]);

    const togglePlay = () => setIsPlaying(!isPlaying);
    const toggleMute = () => setIsMuted(!isMuted);

    const baseButtonStyle =
      "absolute w-9 h-9 flex items-center justify-center rounded-full border border-white bg-white/20 backdrop-blur-sm";

    return (
      <div className={`relative rounded-[30px] overflow-hidden ${className}`}>
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        />

        {/* Mute Button - Bottom Left */}
        <button
          onClick={toggleMute}
          className={`${baseButtonStyle} bottom-3 left-3`}
        >
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white"/>
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white"/>
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>

        {/* Play/Pause Button - Bottom Right */}
        <button
          onClick={togglePlay}
          className={`${baseButtonStyle} bottom-3 right-3`}
        >
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <rect x="6" y="4" width="4" height="16" />
              <rect x="14" y="4" width="4" height="16" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <polygon points="5 3 19 12 5 21 5 3" />
            </svg>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="hidden md:block">
      <div className="flex justify-center flex-wrap gap-2 mt-10 ml-[5px]">
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[404px] mt-[150px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[322px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[437px] h-[788px] mt-[210px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[396px] mt-[150px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[399px] mt-[250px]" />
      </div>
      <div className="flex justify-center flex-wrap gap-2 mt-4 ml-[5px]">
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[404px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[322px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[396px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[396px]" />
        <VideoPlayer src="/videos/1r.mp4" className="w-[220px] h-[399px]" />
      </div>
    </div>
  );
}
