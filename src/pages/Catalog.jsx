import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import Course_Card from '../components/core/Catalog/Course_Card';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import { useSelector } from "react-redux"
import Error from "./Error"

const Catalog = () => {
{
  // all of the category is added by admin
   }  
    const { loading } = useSelector((state) => state.profile)
  const { catalogName } = useParams()
  const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null);
    const [categoryId, setCategoryId] = useState("");

    //Fetch all categories
    useEffect(()=> {
        const getCategories = async() => {
          
            const res = await apiConnector("GET", categories.CATEGORIES_API);
           
            const category_id = 
            res?.data?.data?.filter((ct) => ct.name.split(" ").join("-").toLowerCase() === catalogName)[0]._id;
           
            setCategoryId(category_id);
        }
        getCategories();
    },[catalogName]);

    useEffect(() => {
        const getCategoryDetails = async() => {
            try{
                const res = await getCatalogaPageData(categoryId);
                console.log("Printing res: ", res);
                setCatalogPageData(res);
            }
            catch(error) {
                console.log(error)
            }
        }
        if(categoryId) {
            getCategoryDetails();
        }
        
    },[categoryId]);


    if (loading || !catalogPageData) {
        return (
          <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
            <div className="spinner"></div>
          </div>
        )
      }
      if (!loading && !catalogPageData.success) {
        return <div>
          <Error />
        </div>
      }
    
      return (
        <div >
          {/* Hero Section */}
          <div className="box-content ml-8  text-black pt-10  px-4 mt-12 ">

        
            <div className="mx-auto flex min-h-[160px]  max-w-maxContentTab flex-col justify-center gap-4 lg:max-w-maxContent ">
              <p className="text-sm font-bold text-gray-600">
                {`Home / Catalog / `}
                <span className="text-pink-900 text-xl capitalize">
                  {catalogPageData?.data?.selectedCategory?.name}
                </span>
              </p>
              <p className="text-3xl text-gray-700 capitalize">
                {catalogPageData?.data?.selectedCategory?.name}
              </p>
              <p className="max-w-[870px]  text-gray-700">
                {catalogPageData?.data?.selectedCategory?.description}
              </p>
            </div>
          </div>
    
          {/* Section 1 */}
          <div className=" mx-auto  ml-4 box-content w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="text-emerald-700  ml-4 lg:text-4xl text-2xl font-bold">Courses to get you started</div>
            <div className="my-4 flex border-b border-b-gray-600 text-sm">
              <p
                className={`px-4 py-2  text-[18px]  ${
                  active === 1
                    ? "border-b border-b-pink-25  underline font-semibold text-yellow-25"
                    : "text-gray-500"
                } cursor-pointer`}
                onClick={() => setActive(1)}
              >
                Most Populer
              </p>
              <p
                className={`px-4 py-2  text-[18px] ${
                  active === 2
                    ? "border-b border-b-red-500 font-bold underline  text-yellow-25"
                    : "text-gray-500"
                } cursor-pointer`}
                onClick={() => setActive(2)}
              >
                New
              </p>
            </div>
            <div className='w-auto ' >
              <CourseSlider
                Courses={catalogPageData?.data?.selectedCategory?.courses}
              />
            </div>
          </div>
          {/* Section 2 */}
          <div className=" ml-4 mx-auto box-content w-full  max-w-maxContentTab px-4 py-12 ">
            <div className="text-blue-500  ml-4 lg:text-4xl text-2xl font-bold">
              Top courses in {catalogPageData?.data?.differentCategory?.name}
            </div>
            <div className="w-auto">
              <CourseSlider
                Courses={catalogPageData?.data?.differentCategory?.courses}
              />
            </div>
          </div>
    
          {/* Section 3 */}
          <div className=" mx-auto box-content  w-full max-w-maxContentTab px-4 py-12 lg:max-w-maxContent">
            <div className="text-yellow-500  ml-8 mx-auto lg:text-4xl text-2xl font-bold">Frequently Bought</div>
            <div className="py-8 w-10/12 mx-auto  ">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                {catalogPageData?.data?.mostSellingCourses
                  ?.slice(0, 4)
                  .map((course, i) => (
                    <Course_Card course={course} key={i} Height={"h-[400px]"} />
                  ))}
              </div>
            </div>
          </div>
    
          <Footer />
        </div>
      )
    }
    
    export default Catalog