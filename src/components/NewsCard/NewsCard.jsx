import { BsBookmark } from "react-icons/bs";
import { BsFillShareFill } from "react-icons/bs";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { BsEyeFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CategoryIdContext } from "../NewsProvider/NewsProvider";
const NewsCard = ({ displayNews }) => {
  const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: "#f59e0b",
    inactiveFillColor: "#ffedd5",
  };

  const {
    _id,
    category_id,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    title,
  } = displayNews;

  const { setNewsDetails } = useContext(CategoryIdContext);
  return (
    <div className="border-2 border-dark07 mt-5">
      <div className="bg-dark07 p-5">
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10">
            <img className="w-full rounded-full" src={author.img} alt="" />
          </div>
          <div className="flex justify-between w-full items-center">
            <div>
              <h3 className="text-dark font-semibold">{author.name}</h3>
              <p className="text-dark text-sm text-opacity-80">
                {author.published_date}
              </p>
            </div>
            <div className="flex gap-2">
              <BsBookmark />
              <BsFillShareFill />
            </div>
          </div>
        </div>
      </div>
      <div className="m-5 space-y-5">
        <h3 className="font-bold text-xl text-dark">{title}</h3>
        <div className="">
          <img
            className="w-full h-60 rounded-md object-cover"
            src={thumbnail_url}
            alt=""
          />
        </div>
        <p className="text-dark text-opacity-80 overflow-hidden text-ellipsis">
          {details.split(" ", 60).join(" ") + " ..."}{" "}
          <span className="font-semibold text-orange">
            <Link
              onClick={() => setNewsDetails(displayNews)}
              to={`/${category_id}/${_id}`}
            >
              Read More
            </Link>
          </span>
        </p>
        <hr className="border-dark06" />

        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <Rating
              style={{ maxWidth: 120 }}
              readOnly
              value={rating.number}
              itemStyles={customStyles}
            />
            <p className="font-medium text-dark text-opacity-80">
              {rating.number}
            </p>
          </div>
          <div className="flex gap-2 items-center text-dark text-opacity-80 font-medium">
            <BsEyeFill />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;

NewsCard.propTypes = {
  displayNews: PropTypes.object,
};
