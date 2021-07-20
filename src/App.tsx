import { Provider } from "react-redux";
import { store } from "./states";
import HomePage from "./pages/HomePage";
import "./style/main.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
};
export default App;
