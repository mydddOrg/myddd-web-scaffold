import * as React from "react";
import * as ReactDOM from "react-dom";
import { InstanceFactory } from "./components/ioc/InstanceFactory";
import "style/common.css";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";

InstanceFactory.initIOC();

const LazyMain = React.lazy(
  () => import(/* webpackChunkName: "Main" */ "./views/Main")
);

const root = document.createElement("div");
root.id = "app";
document.body.appendChild(root);

const App = observer((props?: any) => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
