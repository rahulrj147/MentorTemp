import React, { useRef } from 'react';
import Course_Card from './Course_Card';

const CourseSlider = ({ Courses }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative w-full">
      {Courses?.length ? (
        <>
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 rounded-full"
          >
            &#8592;
          </button>
          <div
            ref={sliderRef}
            className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth p-4"
            style={{ scrollSnapType: 'x mandatory', whiteSpace: 'nowrap' }}
          >
            {Courses.map((course, i) => (
              <div key={i} className="flex-shrink-0 w-[250px]">
                <Course_Card course={course} Height={'h-[250px]'} />
              </div>
            ))}
          </div>
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-gray-400 rounded-full"
          >
            &#8594;
          </button>
        </>
      ) : (
        <p className="text-xl text-gray-600">No Course Found</p>
      )}
    </div>
  );
};

export default CourseSlider;
