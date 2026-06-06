import React from "react";
import ReactDOM from "react-dom";
import { BaseProvider, LightTheme } from "baseui";
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/font-awesome/css/all.css";

const engine = new Styletron();

ReactDOM.render(
  <StyletronProvider value={engine}>
    <BaseProvider theme={LightTheme}>
      <App />
    </BaseProvider>
  </StyletronProvider>,
  document.getElementById("root")
);

// Si vous voulez que votre application fonctionne hors ligne et se charge plus vite,
// vous pouvez remplacer unregister() par register() ci-dessous. Cela comporte certains pièges.
// En savoir plus sur les service workers : https://bit.ly/CRA-PWA
serviceWorker.unregister();
