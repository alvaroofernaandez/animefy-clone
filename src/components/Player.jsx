import { useEffect, useState, useRef } from "react";
import { usePlayerStore } from "../store/playerStore";

export const Pause = () => (
  <svg height="16" width="16" role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = () => (
  <svg height="16" width="16" role="img" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

const CurrentSong = ({ image, title, artists }) => {
  return (
    <div
      className={`
      flex items-center gap-5 relative
      overflow-hidden
    `}
    >
      <picture className="w-16 h-16 bg-zinc-800 rounded-md shadow-lg overflow-hidden">
        <img src={image} alt={title} />
      </picture>

      <div>
        <h3 className="font-bold block">{title}</h3>
        <span className="text-xs text-slate-400 truncate">{artists?.join(', ')}</span>
      </div>
    </div>
  );
};

export function Player() {
  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore(
    (state) => state
  );
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { song, playlist } = currentMusic;
    if (song) {
      const src = `../public/music/${playlist?.id}/0${song.id}.mp3`;
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
  };

  const handleSeek = (e) => {
    const time = e.target.value;
    setCurrentTime(time);
    audioRef.current.currentTime = time;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex items-center justify-between w-full px-6 py-4 bg-[#181818] border-t border-[#282828]">
      <div className="w-1/4 flex items-center">
        <CurrentSong {...currentMusic.song} />
      </div>

      <div className="flex flex-col items-center w-1/2">
        <div className="flex items-center gap-4 mb-3">
          <button
            className="bg-white rounded-full p-2 hover:scale-105 transition-transform"
            onClick={handleClick}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>
        </div>

        <div className="flex items-center gap-2 w-full text-xs text-[#a7a7a7]">
          <span className="w-12 text-right">{formatTime(currentTime)}</span>
          <div className="w-full group">
            <input
              type="range"
              min="0"
              max={duration}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-[#535353] rounded-full appearance-none cursor-pointer
                        [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                        [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                        [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3
                        [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
                        hover:[&::-webkit-slider-thumb]:bg-[#229bc1] hover:[&::-moz-range-thumb]:bg-[#229bc1]
                        transition-all duration-200 ease-in-out
                        group-hover:h-2"
              style={{
                background: `linear-gradient(to right, #229bc1 0%, #229bc1 ${
                  (currentTime / duration) * 100
                }%, #535353 ${(currentTime / duration) * 100}%, #535353 100%)`,
              }}
            />
          </div>
          <span className="w-12">{formatTime(duration)}</span>
        </div>
      </div>

      <div className="flex items-center gap-4 w-1/4 justify-end">
        <svg
          className="w-5 h-5 text-[#a7a7a7]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M16 21c3.527-1.547 5.999-4.909 5.999-9S19.527 4.547 16 3v2c2.387 1.386 3.999 4.047 3.999 7S18.387 17.614 16 19v2z" />
          <path d="M16 7v10c1.225-1.1 2-3.229 2-5s-.775-3.9-2-5z" />
          <path d="M4 17h2.697l5.748 3.832a1.004 1.004 0 0 0 1.027.05A1 1 0 0 0 14 20V4a1 1 0 0 0-1.554-.832L6.697 7H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2z" />
        </svg>
        <div className="w-24 group">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-[#535353] rounded-full appearance-none cursor-pointer
                      [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3
                      [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white
                      [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:w-3 [&::-moz-range-thumb]:h-3
                      [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white
                      hover:[&::-webkit-slider-thumb]:bg-[#229bc1] hover:[&::-moz-range-thumb]:bg-[#229bc1]
                      transition-all duration-200 ease-in-out
                      group-hover:h-2"
            style={{
              background: `linear-gradient(to right, #229bc1 0%, #229bc1 ${
                volume * 100
              }%, #535353 ${volume * 100}%, #535353 100%)`,
            }}
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </div>
  );
}
