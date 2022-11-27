import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { DevSupport } from "@react-buddy/ide-toolbox";

import { App } from "./App";
import { ComponentPreviews, useInitial } from "./dev";
import reportWebVitals from "./reportWebVitals";

import { store } from "@/redux/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <App />
      </DevSupport>
    </Provider>
  </BrowserRouter>
  // {/*</React.StrictMode>*/}
);

reportWebVitals();
