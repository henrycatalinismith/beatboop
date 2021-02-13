import React from "react";
import cx from "classnames";
import { Features } from "../App";
import { SoundcloudTrack } from "../soundcloud";
import styles from "./Metadata.module.scss";

export interface MetadataProps {
  feature: Features
  track: SoundcloudTrack
}

export function Metadata({ feature, track }: MetadataProps) {
  return (
    <span className={styles.metadata}>
      <span className={styles.title}>{track.title.trim()}</span>
      <span className={styles.username}>{track.user.username}</span>
      <span className={styles.duration}>
        {Math.floor(track.duration / 1000 / 60)}:
        {Math.floor(track.duration / 1000 % 60).toString().padStart(2, "0")}
      </span>
    </span>
  )
}
