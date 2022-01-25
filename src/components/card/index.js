import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const CardProduct = (props) => {
  return (
      <Link className='card' to={props.link}>
          <div className='card-img'>
              <img src={props.image} alt='product' />
          </div>
          <div className='card-desc'>
              <p className='desc-judul'>{props.title}</p>
              <h3 className='desc-harga'>{props.price}</h3>
              <p  className='desc-rate'><i className="fas fa-star" /> {props.ratestar} || {props.ratesold}</p>
          </div>
      </Link>
  );
};

CardProduct.defaultProps = {
    link      : '/',
    image     : 'https://images.tokopedia.net/img/cache/900/product-1/2020/8/28/69830966/69830966_9e71df49-6c7e-40de-a0d5-f771cc8f0704_800_800',
    title     : 'ASUS TUF GAMING F15 FX506LH i5-10300H 8GB 512GB GTX1650 4GB W10 144HZ',
    price     : 'Rp 12.799.000',
    ratestar  : '4.5',
    ratesold  : 'sold 500'
}

export default CardProduct;
