import React from 'react';
import { Img, spring, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

interface MyImageProps {
  src: string;
}

export const MyImage: React.FC<MyImageProps> = ({ src }) => {
  const frame = useCurrentFrame();
  const { fps, durationInFrames } = useVideoConfig();
  const scale = spring({
    frame,
    fps,
    config: {
      damping: 200,
      mass: 0.5,
    },
  });
  const opacity = interpolate(frame, [0, durationInFrames / 5], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
      <Img
        src={src}
        style={{
          width: '100%',
          height: 'auto',
          transform: `scale(${scale})`,
          opacity,
        }}
      />
    </div>
  );
};
