import styles from './AudioPlayer.module.scss';

const AudioPlayer = ({ src }: { src: string }) => {
  return (
    <li className={styles.eachSong}>
      <audio controls src={src} />
    </li>
  );
};
export default AudioPlayer;
