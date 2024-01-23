"use client";
import { useEffect, useRef, useState } from "react";
import WaveSurfer, { WaveSurferOptions } from "wavesurfer.js";
import PlaySvg from "../Svg/Play";
import PauseSvg from "../Svg/Pause";
import PlayerLoaderSvg from "../Svg/PlayerLoader";
import { secondary } from "../Fonts";
import "./styles.css";

type Playlist = {
  title: string;
  url: string;
};
export default function AudioPlayer({ playlist }: { playlist: Playlist[] }) {
  const waveformRef = useRef<HTMLDivElement>(null);
  const wavesurfer = useRef<WaveSurfer | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [tracks] = useState<Playlist[]>(playlist);
  const [currentTrack, setCurrentTrack] = useState<number>(0);
  const [loadingTrack, setLoadingTrack] = useState<boolean>(false);

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
    // console.log("useEffect", tracks.length);
    // if (tracks.length <= 0) return;
    const options = waveSurferOptions(waveformRef.current);
    wavesurfer.current = WaveSurfer.create(options);
    handleToggleTrack(tracks[0].url, false, 0);
    return () => {
      wavesurfer.current && wavesurfer.current.destroy();
    };
  }, [tracks]);

  const handlePlayPause = () => {
    setPlaying(!playing);
    wavesurfer.current?.playPause();
  };
  wavesurfer.current?.on("load", () => {
    setLoadingTrack(true);
  });
  wavesurfer.current?.on("ready", () => {
    setLoadingTrack(false);
  });

  const handleToggleTrack = (
    track_url: string,
    autoplay: boolean,
    index: number
  ) => {
    wavesurfer.current?.empty();
    setCurrentTrack(index);
    wavesurfer.current?.load(track_url).then((_) => {
      if (autoplay) {
        wavesurfer.current?.play();
        setPlaying(true);
      }
    });
  };
  return (
    <div className="player">
      <div className="waveform" ref={waveformRef} />
      <div className={`${secondary.className} track-title`}>
        {tracks[currentTrack].title}
      </div>
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
      <div className={`${secondary.className} playlist`}>
        {playlist.map((item: any, index: number) => (
          <div
            onClick={() => handleToggleTrack(item.url, true, index)}
            className={"track " + (currentTrack === index && "current")}
            key={item.title}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
