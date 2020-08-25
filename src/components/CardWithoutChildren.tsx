import React, { FC } from "react";

type Props = {
  title: string;
  content: React.ReactNode;
  children?: never;
};

const CardWithoutChildren: FC<Props> = ({ title, content, children }) => {
  return (
    <div
      style={{
        border: "1px solid red"
      }}
    >
      <div style={{ border: "1px solid yellow" }}>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default CardWithoutChildren;
