import { Provider } from "react-redux";
import { store } from "./states";
import CategoriesList from "./components/CategoriesList";
import "./style/main.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CategoriesList />
    </Provider>
  );
};
export default App;
