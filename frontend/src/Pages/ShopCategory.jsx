import React, { useContext } from 'react';
import './Css/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  

  return (
    <div className="shop-category">
      {/* Display the banner */}
      <img className="shopcategory-banner" src={props.banner} alt="Category Banner" />

      {/* Sorting and index section */}
      <div className="shopcategory-indexsort">
        <p>
          <span> Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt="Dropdown Icon" />
        </div>
      </div>

      {/* Products display */}
      <div className="shopcategory-products">
        {/* Ensure `all_product` is defined and map over it */}
        {all_product &&
          all_product.map((item, i) => {
            if (props.category === item.category) {
              console.log("hello world")
              return (
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              );
            }
            return null; // Skip items that don't match the category
          })}
      </div>
      <div className="shopcategory-loadmore">
        Explore more
      </div>
    </div>
  );
};

export default ShopCategory;
