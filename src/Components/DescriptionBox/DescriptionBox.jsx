import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          E-commerce shopping revolutionizes the way we shop, offering
          convenience, variety, and competitive pricing. With just a few clicks,
          customers can explore endless options, compare products, and enjoy
          doorstep delivery, making online shopping an essential part of modern
          life.
        </p>
        <p>
          E-commerce offers unmatched convenience, a vast product variety, and
          competitive pricing. It simplifies shopping with doorstep delivery and
          effortless comparisons, making it an essential part of modern life,
          transforming how people shop and meet their everyday needs efficiently
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
