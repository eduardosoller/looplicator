"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer, { type WaveSurferOptions } from "wavesurfer.js";
import PlaySvg from "../Svg/Play";
import PauseSvg from "../Svg/Pause";
import PlayerLoaderSvg from "../Svg/PlayerLoader";
import { secondary } from "../Fonts";
import "./styles.css";

export default function AudioPlayer({ playlist }: { playlist: Playlist[] }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [tracks] = useState<Playlist[]>(playlist);
  const [currentTrack, setCurrentTrack] = useState<number | null>(null);
  const [loadingTrack, setLoadingTrack] = useState<boolean>(false);
  const [error, setError] = useState("");

  const waveSurferOptions = (ref: any): WaveSurferOptions => {
    return {
      container: ref,
      waveColor: "#505059",
      progressColor: "#084cf9",
      cursorColor: "#37d300",
      barWidth: 2,
      barRadius: 5,
      normalize: true,
      height: 70,
    };
  };

  useEffect(() => {
    const options = waveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    return () => {
      wavesurfer.current && wavesurfer.current.destroy();
    };
  }, []);

  //plays in loop
  wavesurfer.current?.on("finish", () => {
    wavesurfer.current?.play();
  });

  const handlePlayPause = () => {
    if (currentTrack === null) handleToggleTrack(tracks[0].url, false, 0);
    setPlaying(!playing);
    wavesurfer.current && wavesurfer.current?.playPause();
  };

  const handleToggleTrack = (
    track_url: string,
    autoplay: boolean,
    index: number
  ) => {
    if (wavesurfer.current) {
      wavesurfer.current.seekTo(0);
      setCurrentTrack(index);
      setError("");
      setLoadingTrack(true);
      wavesurfer.current
        .load(track_url)
        .then(() => {
          setLoadingTrack(false);
          if (autoplay) {
            wavesurfer.current?.play();
            setPlaying(true);
          }
        })
        .catch((error) => {
          wavesurfer.current?.empty();
          error.message === "Failed to fetch"
            ? setError("Error loading track")
            : setError("There's an error");
        });
    }
  };
  return (
    <div className="player">
      <div className="waveform" ref={waveformRef}>
        <div className={`${secondary.className} track-title`}>
          {currentTrack !== null && tracks[currentTrack].title}
        </div>
        <div className={`${secondary.className} status`}>{error}</div>
        <div className="controls">
          {loadingTrack ? (
            <PlayerLoaderSvg width={40} height={40} color="#084cf9" />
          ) : (
            <div onClick={handlePlayPause}>
              {playing ? (
                <PauseSvg width={40} height={40} color="#084cf9" />
              ) : (
                <PlaySvg width={40} height={40} color="#084cf9" />
              )}
            </div>
          )}
        </div>
      </div>
      <div className={`${secondary.className} playlist`}>
        {playlist.map((item: any, index: number) => (
          <div
            onClick={() => handleToggleTrack(item.url, true, index)}
            className={"track" + (currentTrack === index ? " current" : "")}
            key={item.title}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
