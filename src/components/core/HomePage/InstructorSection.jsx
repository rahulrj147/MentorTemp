import React from 'react'
import CTAButton from "../../../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/instructor.mp4";
import HighlightText from './HighlightText';

const InstructorSection = () => {
  return (
    <div>
        <div className="flex flex-col lg:flex-row gap-20  items-center">
         <div className="mx-3  my-7 rounded-4xl shadow-[10px_-5px_50px_-5px] shadow-blue-500">
                   <video
                     className="h-auto rounded-4xl bg-transparent w-[1200px]  shadow-[2px_2px_80px]"
                     muted
                     loop
                     autoPlay
                     
                   >
                     <source src={Instructor} type="video/mp4" />
                   </video>
                 </div>
          <div className="lg:w-[50%] mx-5 flex gap-10 flex-col">
            <h1 className="lg:w-[50%] text-4xl text-gray-800 font-semibold ">
              Become an
              <HighlightText text={"instructor"} />
            </h1>

            <p className="font-medium text-[16px] text-justify w-[90%] text-gray-700">
              Instructors from around the world teach millions of students on
              MentorWay. We provide the tools and skills to teach what you
              love.
            </p>

            <div className="w-fit">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex 
                 items-center gap-3">
                  Start Teaching Today
                  <FaArrowRight />
                </div>
              </CTAButton>
            </div>
          </div>
        </div>
    </div>
  )
}

export default InstructorSection