import { Provider } from "react-redux";
import MainNavigation from "./src/Navigation/MainNavigation";
import { store } from "./src/redux/app/store";

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
