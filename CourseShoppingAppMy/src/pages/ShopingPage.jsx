import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import CourseItem from "../components/CourseItem";
import { cleareList, total } from "../redux/Slices/CourseSlice";
function ShopingPage() {
  const { courseList, totals } = useSelector((state) => state.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(total());
  }, [courseList]);
  return (
    <div className="main">
      <Navbar />
      <h1 className="mainHead">My Basket</h1>
      {courseList.length >= 1 ? (
        <div className="bottomMain">
          <div className="courseListContainer">
            {courseList.map((course) => {
              return <CourseItem key={course.id} {...course} />;
            })}
          </div>
          <footer>
            <div className="totalAmount">Total Amount : {totals}$</div>
            <button
              className="clearCourseList"
              onClick={() => dispatch(cleareList())}
            >
              Clear Basket
            </button>
          </footer>
        </div>
      ) : (
        <div className="mainHead">Your Basket is empty</div>
      )}
    </div>
  );
}

export default ShopingPage;
