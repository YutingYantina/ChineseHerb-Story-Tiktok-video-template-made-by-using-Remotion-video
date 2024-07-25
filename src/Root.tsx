import { Composition } from "remotion";
import { HelloWorld, myCompSchema } from "./HelloWorld/HelloWorld";
export const RemotionRoot: React.FC = () => {
  return (
      <Composition
        id="HelloWorld"
        component={HelloWorld}
        durationInFrames={2431} 
        fps={30}
        width={1080}
        height={1920}
        schema={myCompSchema}
        defaultProps={{
          titleText: "Story of Clove: 丁香的故事",
          titleColor: "#FFFFFF",
        }}
      />
  );
};
