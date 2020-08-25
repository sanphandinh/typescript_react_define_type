import React, { FC } from "react";

type Props = {
  name?: string;
};

const LoginMsg: FC<Props> = ({ name = "san.pd" }) => {
  return <p>Good, {name}</p>;
};

export default LoginMsg;
