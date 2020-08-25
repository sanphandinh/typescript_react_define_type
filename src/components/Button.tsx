import React, { FC } from "react";

type Props = JSX.IntrinsicElements["button"];

const Button: FC<Props> = ({ ...props }) => {
  return <button {...props} />;
};
export default Button;
