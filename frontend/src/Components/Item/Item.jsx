import React from 'react';
import PropTypes from 'prop-types';
import './Item.css';
import { Link } from 'react-router-dom';

const Item = (props) => {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img  onClick={window.scrollTo(0,0)} src={props.image} alt={props.name} />
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="item-price-old">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

Item.defaultProps = {
  image: '',
  name: 'Unnamed Product',
  new_price: 0,
  old_price: 0,
};

Item.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  image: PropTypes.string,
  name: PropTypes.string,
  new_price: PropTypes.number,
  old_price: PropTypes.number,
};

export default Item;
