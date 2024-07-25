import { spring, staticFile } from 'remotion';
import {
  AbsoluteFill,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
  Audio
} from 'remotion';
import { Title } from './Title';
import { z } from 'zod';
import { zColor } from '@remotion/zod-types';
import { ChineseText } from './ChineseText';
import { EnglishText } from './EnglishText';
import { MyImage } from './MyImage';
import { TitleImage } from './TitleImage';

export const myCompSchema = z.object({
  titleText: z.string(),
  titleColor: zColor(),
});

export const HelloWorld: React.FC<z.infer<typeof myCompSchema>> = ({
  titleText: propOne,
  titleColor: propTwo,
}) => {
  const frame = useCurrentFrame();
  const { durationInFrames, fps } = useVideoConfig();

  const textTranslationProgress = spring({
    frame: frame - 25,
    fps,
    config: {
      damping: 100,
    },
  });

  const textTranslation = interpolate(
    textTranslationProgress,
    [0, 1],
    [0, -150]
  );

  const opacity = interpolate(
    frame,
    [durationInFrames - 25, durationInFrames - 15],
    [1, 0],
    {
      extrapolateLeft: 'clamp',
      extrapolateRight: 'clamp',
    }
  );

  return (
    <AbsoluteFill style={{ backgroundColor: 'black' }}>
      <Audio src={staticFile("background.mp3")} />
      <AbsoluteFill style={{ opacity }}>
        <Sequence from={0} durationInFrames={47}>
          <TitleImage src={staticFile('/ImageTitle.png')}/>
          <Title titleText={propOne} titleColor={propTwo} />
          <Audio src={staticFile("/TitleAudio.mp3")} />
        </Sequence>
        <Sequence from={47} durationInFrames={422}>
          <MyImage src={staticFile('/Image1.png')} />
          <ChineseText text="在遥远的古代，有一条连接东西方的贸易路线——海上丝绸之路。这条路线不仅传递了丝绸、瓷器等商品，也带来了香料、药材等珍贵物品。" />
          <EnglishText text="In ancient times, there was a trade route connecting the East and the West—the Maritime Silk Road. This route not only transported silk, porcelain, and other goods but also brought precious items like spices and medicinal herbs." />
          <Audio src={staticFile("/Speech1.mp3")} />
        </Sequence>
        <Sequence from={469} durationInFrames={300}>
          <MyImage src={staticFile("/Image2.png")} />
          <ChineseText text="丁香就是其中一种重要的香料，它原产于印度尼西亚的摩鹿加群岛，在古代被称为“香料群岛”。" />
          <EnglishText text="Among these precious items was clove, an important spice. It originates from the Maluku Islands in Indonesia, which were known as the 'Spice Islands' in ancient times." />
          <Audio src={staticFile("/Speech2.mp3")} />
        </Sequence>
        <Sequence from={769} durationInFrames={222}>
          <MyImage src={staticFile("/Image3.png")} />
          <ChineseText text="丁香香气浓郁，用途广泛，在古代被人们用作焚香、烹饪、药用等。" />
          <EnglishText text="Clove has a strong aroma and was widely used in ancient times for incense burning, cooking, and medicinal purposes." />
          <Audio src={staticFile("/Speech3.mp3")} />
        </Sequence>
        <Sequence from={991} durationInFrames={249}>
          <MyImage src={staticFile('/Image4.png')} />
          <ChineseText text="丁香在古代贸易中占据着重要地位，被运往世界各地，成为古代海上丝绸之路上的重要商品。" />
          <EnglishText text="Clove held a significant place in ancient trade, being transported worldwide and becoming an essential commodity on the Maritime Silk Road." />
          <Audio src={staticFile("/Speech4.mp3")} />
        </Sequence>
        <Sequence from={1240} durationInFrames={379}>
          <MyImage src={staticFile("/Image5.png")} />
          <ChineseText text="丁香的历史充满了传奇故事，例如，郑和下西洋时就曾带回大量丁香，而西方殖民者也曾为了争夺丁香资源而发动战争。" />
          <EnglishText text="The history of clove is filled with legendary tales. For instance, Zheng He's voyages to the West brought back large quantities of clove, and Western colonizers waged wars to control clove resources." />
          <Audio src={staticFile("/Speech5.mp3")} />
        </Sequence>
        <Sequence from={1619} durationInFrames={316}>
          <MyImage src={staticFile('/Image6.png')} />
          <ChineseText text="如今，丁香的应用更加广泛，不仅作为食品香料，也成为重要的医药原料，还被用于制作香薰精油等。" />
          <EnglishText text="Today, clove's applications are even more extensive. It is used as a food spice, a vital medicinal ingredient, and in the production of essential oils for aromatherapy." />
          <Audio src={staticFile("/Speech6.mp3")} />
        </Sequence>
        <Sequence from={1935} durationInFrames={275}>
          <MyImage src={staticFile('/Image7.png')} />
          <ChineseText text="丁香也具有丰富的文化价值，在西方，丁香代表着爱情，在东方，丁香则代表着友情、幸福等美好寓意。" />
          <EnglishText text="Clove also holds rich cultural value. In the West, it symbolizes love, while in the East, it represents friendship and happiness." />
          <Audio src={staticFile("/Speech7.mp3")} />
        </Sequence>
        <Sequence from={2210} durationInFrames={221}>
          <MyImage src={staticFile("/Image8.png")} />
          <ChineseText text="相信随着时代的发展，丁香将继续发挥其独特的价值，为人类健康和生活带来更多益处。" />
          <EnglishText text="As time progresses, clove will continue to play its unique role, bringing more benefits to human health and daily life." />
          <Audio src={staticFile("/Speech8.mp3")} />
        </Sequence>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
