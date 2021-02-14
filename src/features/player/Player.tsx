import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPlayerMode, selectPlayerTrack, togglePlayback } from "./playerSlice";
import { Artwork } from "../../components/Artwork";
import { Metadata } from "../../components/Metadata";
import styles from "./Player.module.scss";

export function Player() {
  const dispatch = useDispatch();
  const mode = useSelector(selectPlayerMode);
  const track = useSelector(selectPlayerTrack);
  const onClick = () => dispatch(togglePlayback())

  return (
    <div className={styles.player}>
      <Artwork track={track} feature="Player" />
      <Metadata track={track} feature="Player" />
      <button className={styles.button} onClick={onClick}>
        {["idle", "pause"].includes(mode) ? (
          <>▶️</>
        ) : (
          <>⏸</>
        )}
      </button>
    </div>
  );
}
