import React from "react";
import { useSelector /*, useDispatch */ } from "react-redux";
import { selectPlayerTrack } from "./playerSlice";
import styles from "./Player.module.scss";

export function Player() {
  // const dispatch = useDispatch();
  const track = useSelector(selectPlayerTrack);

  return (
    <div className={styles.player}>
      <img
        className={styles.artwork}
        aria-hidden
        alt=""
        src={track.artwork_url}
      />
      <div className={styles.title}>{track.title}</div>
      <div className={styles.username}>{track.user.username}</div>
    </div>
  );
}
