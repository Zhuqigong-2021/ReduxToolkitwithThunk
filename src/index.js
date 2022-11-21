import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { fetchUsers } from "./redux/user/userSlice";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

store.dispatch(fetchUsers());

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
