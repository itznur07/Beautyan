import { Provider } from "react-redux";
import MainNavigation from "./Navigation/MainNavigation";
import { store } from "./redux/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
