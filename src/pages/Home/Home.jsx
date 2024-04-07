// import { useContext } from "react";
// import { AuthContext } from "../../components/AuthProvider/AuthProvider";
// import { createContext, useState } from "react";
import DragonNewsHome from "../../components/DragonNewsHome/DragonNewsHome";
import Header from "../../components/Header/Header";
import Highlights from "../../components/Highlights/Highlights";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import Navbar from "../../components/Navbar/Navbar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";

// export const CategoryIdContext = createContext(null);

const Home = () => {
  // const { greeting } = useContext(AuthContext);

  // const [activatedCategory, setActivatedCategory] = useState("0");
  // const [news, setNews] = useState([]);

  // const categoryInfo = {
  //   activatedCategory,
  //   setActivatedCategory,
  //   news,
  //   setNews,
  // };

  return (
    <div>
      <Header />
      <Highlights />
      <Navbar />
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6 lg:mt-20 mt-7">
        {/* <CategoryIdContext.Provider value={categoryInfo}> */}
        <LeftSideBar />
        <DragonNewsHome />
        {/* </CategoryIdContext.Provider> */}
        <RightSideBar />
      </div>
    </div>
  );
};

export default Home;
