import React, { FC } from "react";

type Props = Omit<JSX.IntrinsicElements["button"], "type"> & {
  type: "primary" | "secondary";
};

const CustomButton: FC<Props> = ({ type, ...allProps }) => {
  const { className, ...rest } = allProps;
  return <button className={`btn-${type} ${className}`} {...rest} />;
};

export default CustomButton;
