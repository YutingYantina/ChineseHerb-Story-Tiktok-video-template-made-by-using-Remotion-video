import React from 'react';
import { AbsoluteFill, interpolate, useCurrentFrame } from 'remotion';

interface ChineseTextProps {
  text: string;
}

export const ChineseText: React.FC<ChineseTextProps> = ({ text }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);

  return (
    <AbsoluteFill style={{ justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          fontSize: 60,
          color: 'white',
          textAlign: 'center',
          fontWeight: 'bold',
          fontFamily: 'Arial Black, sans-serif',
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
