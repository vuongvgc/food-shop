import { useActions } from "../hook/useActions";
import { useEffect } from "react";
const CategoriesList: React.FC = () => {
  const { getCategoriesMeal } = useActions();
  useEffect(() => {
    getCategoriesMeal();
  });
  return <div>CategoriesList</div>;
};
export default CategoriesList;
