import { Audio, staticFile } from 'remotion';
interface MyAudioProps {
  src: string;
}
export const MyAudio: React.FC<MyAudioProps> = ({ src }) => {
  return <Audio src={staticFile(src)} />;
};
