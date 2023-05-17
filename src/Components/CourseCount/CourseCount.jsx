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
    <aside>
      <h2>
        Course Purchased: <small>{length}</small>
      </h2>
      <p>
        Prices (tax inc.): <small>${total}</small>
      </p>
      <hr />
      <button>Buy Now</button>
    </aside>
  );
};

export default UserCount;
