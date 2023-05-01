import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store, persistor, sagaMiddleware } from "./Redux/store";

import App from "./App";
import { PersistGate } from "redux-persist/integration/react";
import watchSagas from "./Redux/store/sagas";

sagaMiddleware.run(watchSagas);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
