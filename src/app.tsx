import React, { FC } from "react";
import "reflect-metadata";
import "./app.scss";

console.log(process.env, "为什么这里打印输出为空对象{}");
console.log(process.env.BASE_URL, "为什么输出BASE_URL为undefined");
console.log(process.env.NODE_ENV, "为什么输出NODE_ENV是正常的");

const App: FC = props => {
  return <>{props.children}</>;
};

export default App;
