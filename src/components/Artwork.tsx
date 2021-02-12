import React from "react";
import { SoundcloudTrack } from "../soundcloud";
import styles from "./Artwork.module.scss";

export interface ArtworkProps {
  track: SoundcloudTrack
}

export function Artwork({ track }: ArtworkProps) {
  return (
    <img
      className={styles.artwork}
      aria-hidden
      alt=""
      src={track.artwork_url}
    />
  )
}
