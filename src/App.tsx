import * as React from "react";
import "./styles.css";
import Basic from "./components/Basic";
import Greeting from "./components/Greeting";
import LoginMsg from "./components/LoginMsg";
import Card from "./components/Card";
import CardWithoutChildren from "./components/CardWithoutChildren";
import Button from "./components/Button";
import SubmitButton from "./components/SubmitButton";
import CustomButton from "./components/CustomButton";
import Image from "./components/Image";
export default function App() {
  return (
    <div className="App">
      <h1>Typescript + React: Define Type in React Typescript</h1>
      <h2>Project focus function component</h2>
      <hr />
      <h3>Very basic component</h3>
      <Basic />
      <hr />
      <h3>With basic Prop</h3>
      <Greeting greeting="San" />
      <hr />
      <h3>With option props and set default for props</h3>
      <LoginMsg /*name="san.pd"*/ />
      <hr />
      <h3>With children Prop</h3>
      <Card title="Greeting">{<p>Hello, my name San</p>}</Card>
      <hr />
      <h3>Without children props</h3>
      <CardWithoutChildren
        title="Greeting"
        content={<p>Hello, my nam San</p>}
      />
      <hr />
      <h3>Pass all attribute native element such as: button, input...</h3>
      <Button style={{ color: "red" }}>Hello</Button>
      <hr />
      <h3>Pass all attribute native element but without some props</h3>
      <SubmitButton>Submit</SubmitButton>
      <hr />
      <h3>Pass all attribute native and custom style</h3>
      <CustomButton type="primary">Custom</CustomButton>
      <hr />
      <h3>Component with required</h3>
      <Image alt="test" src="/" />
    </div>
  );
}
