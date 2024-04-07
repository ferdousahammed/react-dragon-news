import { useContext } from "react";
import { CategoryIdContext } from "../../components/NewsProvider/NewsProvider";
import Header from "../../components/Header/Header";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const NewsDetails = () => {
  const { newsDetails } = useContext(CategoryIdContext);

  const {
    _id,
    category_id,
    rating,
    total_view,
    author,
    image_url,
    details,
    title,
  } = newsDetails;
  return (
    <div>
      <Header />
      <h3 className="text-dark text-xl font-semibold lead my-5">Dragon News</h3>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
        <div className="lg:col-span-3 border-2 border-dark06 lg:p-7 p-4 rounded-md space-y-7">
          <div className="w-full">
            <img className="rounded-md w-full" src={image_url} alt="" />
          </div>
          <h3 className="text-dark text-2xl font-bold">{title}</h3>
          <p className="text-dark text-opacity-80 leading-6">{details}</p>
          <button className="text-white font-md text-xl px-4 py-2 bg-rose600 flex gap-2 items-center">
            <FaArrowLeft />
            <Link to={"/"}>All news in this category</Link>
          </button>
        </div>
        <div>
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
