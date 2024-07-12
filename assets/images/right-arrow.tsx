import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RightArrow = (props: SvgProps) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <Path
      fill="#6F767E"
      d="M10.293 13.793a1 1 0 1 0 1.414 1.414L17.5 9.414a2 2 0 0 0 0-2.828L11.707.793a1 1 0 1 0-1.414 1.414L15.086 7H1a1 1 0 0 0 0 2h14.086l-4.793 4.793Z"
    />
  </Svg>
);
export default RightArrow;
