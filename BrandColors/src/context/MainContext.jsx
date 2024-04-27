import { createContext, useEffect, useState } from "react";
import BrandsData from "../brands.json";

const MainContext = createContext();

function MainProvider({ children }) {
  const brandsArray = [];
  const [brandList, setBrandList] = useState(brandsArray);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [copied, setCopied] = useState({ colorText: "", isCopy: false });
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search !== "") {
      setBrandList(
        brandList.filter((brand) =>
          brand.title.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else {
      setBrandList(brandsArray);
    }
  }, [search]);

  Object.keys(BrandsData).map((key) => brandsArray.push(BrandsData[key]));

  const data = {
    brandList,
    selectedBrands,
    setSelectedBrands,
    setBrandList,
    copied,
    setCopied,
    open,
    setOpen,
    search,
    setSearch,
  };
  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}

export default MainContext;
export { MainProvider };
