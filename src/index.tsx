import * as React from "react";
import * as ReactDOM from "react-dom";

import { InstanceFactory } from "./components/ioc/InstanceFactory";
import "style/common.css";
import { observer } from "mobx-react-lite";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./views/Main";
// import { useNavigate } from "react-router"

InstanceFactory.initIOC();

const LazyMain = React.lazy(
  () => import(/* webpackChunkName: "Main" */ "./views/Main")
);

const root = document.createElement("div");
root.id = "app";
document.body.appendChild(root);

const App = observer((props?: any) => {
  // const navigate = useNavigate()
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
});

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("app")
);
