import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

interface EnglishTextProps {
  text: string;
}

export const EnglishText: React.FC<EnglishTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'flex-end', alignItems: 'center', paddingBottom: '40%' }}>
      <div
        style={{
          fontSize: 50,
          color: 'yellow',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          padding: '10px',
          opacity,
          textShadow: '2px 2px 4px black, -2px -2px 4px black, -2px 2px 4px black, 2px -2px 4px black',
        }}
      >
        {text.split('\n').map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </AbsoluteFill>
  );
};
