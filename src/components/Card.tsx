import React, { FC } from "react";
import { WithChildren } from "../utils/defineType.util";

// type Props = {
//   title: string;
//   children: React.ReactNode;
// }

type PropsWithChild = WithChildren<{
  title: string;
}>;

const Card: FC<PropsWithChild> = ({ title, children }) => {
  return (
    <div
      style={{
        border: "1px solid red"
      }}
    >
      <div style={{ border: "1px solid yellow" }}>{title}</div>
      <div>{children}</div>
    </div>
  );
};

export default Card;
