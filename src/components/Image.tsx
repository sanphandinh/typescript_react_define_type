import React, { FC } from "react";
import { MakeRequired } from "../utils/defineType.util";
type Props = MakeRequired<JSX.IntrinsicElements["img"], "alt" | "src">;
const Image: FC<Props> = ({ alt, ...allProps }) => {
  return <img alt={alt} {...allProps} />;
};

export default Image;
