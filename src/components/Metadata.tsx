import React from "react";
import cx from "classnames";
import { Features } from "../App";
import { SoundcloudTrack } from "../soundcloud";
import styles from "./Metadata.module.scss";

export interface MetadataProps {
  feature: Features;
  track: SoundcloudTrack;
}

export function Metadata({ feature, track }: MetadataProps) {
  const minutes = Math.floor(track.duration / 1000 / 60);
  const seconds = Math.floor((track.duration / 1000) % 60);
  return (
    <span
      className={cx(styles.metadata, {
        [styles.player]: feature === "Player",
        [styles.search]: feature === "Search",
      })}
    >
      <span className={styles.title}>{track.title.trim()}</span>
      <span className={styles.username}>{track.user.username}</span>
      <time className={styles.duration} dateTime={`${minutes}m ${seconds}s`}>
        {minutes}:{seconds.toString().padStart(2, "0")}
      </time>
    </span>
  );
}
