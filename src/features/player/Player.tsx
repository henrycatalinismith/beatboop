import React from "react";
import { useSelector /*, useDispatch */ } from "react-redux";
import { selectPlayerTrack } from "./playerSlice";
import { Artwork } from "../../components/Artwork";
import { Metadata } from "../../components/Metadata";
import styles from "./Player.module.scss";

export function Player() {
  // const dispatch = useDispatch();
  const track = useSelector(selectPlayerTrack);

  return (
    <div className={styles.player}>
      <Artwork track={track} />
      <Metadata track={track} />
    </div>
  );
}
