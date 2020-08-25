import React, { FC } from "react";

type Props = {
  greeting: string;
};

const Greeting: FC<Props> = ({ greeting }) => {
  return <p>Hi {greeting}</p>;
};

export default Greeting;
