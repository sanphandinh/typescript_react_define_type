import React, { FC } from "react";

type Props = Omit<JSX.IntrinsicElements["button"], "type">;

const SubmitButton: FC<Props> = ({ ...allProps }) => {
  return <button type="submit" {...allProps} />;
};

export default SubmitButton;
