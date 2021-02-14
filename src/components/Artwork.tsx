import React from "react";
import cx from "classnames";
import { Features } from "../App";
import { SoundcloudTrack } from "../soundcloud";
import styles from "./Artwork.module.scss";

export interface ArtworkProps {
  feature: Features
  track: SoundcloudTrack
}

export function Artwork({ feature, track }: ArtworkProps) {
  const [loaded, setLoaded] = React.useState(false)

  React.useEffect(() => {
    const img = new Image();
    img.src = track.artwork_url
    img.onload = () => setLoaded(true)
  }, [track.artwork_url])

  console.log(loaded)
  return (
    <div className={cx(styles.artwork, {
      [styles.player]: feature === "Player",
      [styles.search]: feature === "Search",
    })}>
      <img
        className={cx(styles.image, { [styles.loaded]: loaded })}
        aria-hidden
        alt=""
        src={track.artwork_url}
      />
    </div>
  )
}
