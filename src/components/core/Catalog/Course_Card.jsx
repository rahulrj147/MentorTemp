import React, { useEffect, useState } from 'react'
import RatingStars from '../../common/RatingStars'
import GetAvgRating from '../../../utils/avgRating';
import { Link } from 'react-router-dom';

const Course_Card = ({course, Height}) => {


    const [avgReviewCount, setAvgReviewCount] = useState(0);

    useEffect(()=> {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])


    
  return (
    <>
      <Link to={`/courses/${course._id}`}>
        <div className=" rounded-xl p-3.5 shadow-lg bg-white flex flex-col gap-2">
          <div className="rounded-lg ">
          <img
  src={course?.thumbnail}
  alt="course thumbnail"
  className={`w-[500px] ${Height}  mx-auto sm:h-28 md:h-48 lg:h-56 xl:h-64 2xl:h-72 rounded-xl object-cover`}
/>
          </div>
          <div className="flex flex-col gap-2 px-4 py-3">
            <p className="text-xl font-bold capitalize text-gray-600">{course?.courseName}</p>
            <p className="text-xl text-gray-600">
              {course?.instructor?.firstName} {course?.instructor?.lastName}
            </p>
            <div className='flex justify-between '>
            <p className="font-bold   p-2 px-4 border w-fit rounded-xl bg-blue-600 text-gray-100 ">Rs.{course?.price}</p>

            <div className="flex flex-col items-center ">
            <div className='flex items-center' >
            <span className="text-yellow-500 bold ">{avgReviewCount || 0}</span>
            <RatingStars Review_Count={avgReviewCount} />
            </div>
              <span className="text-gray-800">
                {course?.ratingAndReviews?.length} Ratings
              </span>
            </div>

            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default Course_Card
