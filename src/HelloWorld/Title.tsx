import React from 'react';
import { spring, useCurrentFrame, useVideoConfig } from 'remotion';

const title: React.CSSProperties = {
  fontFamily: 'Arial, Gadget, sans-serif',
  fontWeight: 'bold',
  fontSize: 100,
  textAlign: 'center',
  position: 'absolute',
  bottom: 200, 
  width: '100%',
  color: '#FFFFFF', 
  textShadow: '2px 2px 4px black, -2px -2px 4px black, -2px 2px 4px black, 2px -2px 4px black',
};

const word: React.CSSProperties = {
  marginLeft: 10,
  marginRight: 10,
  display: 'inline-block',
};

export const Title: React.FC<{
  titleText: string;
  titleColor: string;
}> = ({ titleText, titleColor }) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();

  const words = titleText.split(' ');

  return (
    <h1 style={{ ...title, color: titleColor }}>
      {words.map((t, i) => {
        const delay = i * 5;

        const scale = spring({
          fps: videoConfig.fps,
          frame: frame - delay,
          config: {
            damping: 200,
          },
        });

        return (
          <span
            key={t}
            style={{
              ...word,
              transform: `scale(${scale})`,
            }}
          >
            {t}
          </span>
        );
      })}
    </h1>
  );
};
