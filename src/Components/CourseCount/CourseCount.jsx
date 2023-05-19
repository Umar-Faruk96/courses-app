import React from "react";
import "./course-count.css";

const UserCount = (props) => {
  const purchased = props.coursePurchased;
  const length = purchased.length;
  const prices = purchased.map((course) => course.price);
  const totalPrice = prices.reduce((prev, cur) => prev + cur, 0);
  const total = (totalPrice / 2).toFixed(2);
  console.log(totalPrice);
  //   const friend = friendList.map((friend) => friend.name);

  return (
    <aside className="text-center border-start px-1 pt-3">
      <h2 className="fs-5 fw-semibold">
        Course Purchased: <small className="fs-6">{length}</small>
      </h2>
      <p>
        Prices (tax inc.): <small>${total}</small>
      </p>
      <hr />
      <button className="rounded border-0">Buy Now</button>
    </aside>
  );
};

export default UserCount;
