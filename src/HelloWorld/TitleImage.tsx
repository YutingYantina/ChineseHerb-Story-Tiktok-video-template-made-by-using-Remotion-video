import React from 'react';
import { AbsoluteFill, Img } from 'remotion';

interface TitleImageProps {
  src: string;
}

export const TitleImage: React.FC<TitleImageProps> = ({ src }) => {
  return (
    <AbsoluteFill>
      <Img src={src} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </AbsoluteFill>
  );
};
