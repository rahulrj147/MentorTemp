import React, { useEffect, useState } from "react";
import ReactStars from "react-rating-stars-component";
import "../../App.css";
// Icons
import { FaStar } from "react-icons/fa";
// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector";
import { ratingsEndpoints } from "../../services/apis";

function ReviewSlider() {
  const [reviews, setReviews] = useState([]);
  const truncateWords = 15;

  useEffect(() => {
    (async () => {
      const { data } = await apiConnector(
        "GET",
        ratingsEndpoints.REVIEWS_DETAILS_API
      );
      if (data?.success) {
        setReviews(data?.data);
      }
    })();
  }, []);

  return (
    <div className="text-white">
      <div className="w-full mx-auto my-[50px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {reviews.map((review, i) => {
          return (
            <div key={i} className="flex flex-col h-40 gap-3 w-full bg-richblack-800 p-3 text-[14px] text-richblack-25">
              <div className="flex items-center gap-4">
                <img
                  src={
                    review?.user?.image
                      ? review?.user?.image
                      : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                  }
                  alt=""
                  className="h-9 w-9 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <h1 className="font-semibold text-richblack-5">{`${review?.user?.firstName} ${review?.user?.lastName}`}</h1>
                  <h2 className="text-[12px] font-medium text-richblack-500">
                    {review?.course?.courseName}
                  </h2>
                </div>
              </div>
              <p className="font-medium text-richblack-25">
                {review?.review.split(" ").length > truncateWords
                  ? `${review?.review.split(" ").slice(0, truncateWords).join(" ")} ...`
                  : `${review?.review}`}
              </p>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-yellow-100">
                  {review.rating.toFixed(1)}
                </h3>
                <ReactStars
                  count={5}
                  value={review.rating}
                  size={20}
                  edit={false}
                  activeColor="#ffd700"
                  emptyIcon={<FaStar />}
                  fullIcon={<FaStar />}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ReviewSlider;