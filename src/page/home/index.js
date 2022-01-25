import React from 'react';
import { Link } from 'react-router-dom';
import { CardProduct, Header} from '../../components';
import './style.css'

const Home = () => {
  return (
    <>
    <Header />
    <div className='home'>
        <div className='home-row'>
          <CardProduct 
            link='/detail-product/1'
          /> 
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </div>
        <nav className='home-sidenav'>
            <div className='sidenav-list'>
                <h4>Brand</h4>
                  <Link to='/' className='list-nav'>HP</Link>
                  <Link to='/' className='list-nav'>MSI</Link>
                  <Link to='/' className='list-nav'>Dell</Link>
                  <Link to='/' className='list-nav'>Acer</Link>
                  <Link to='/' className='list-nav'>Asus</Link>
                  <Link to='/' className='list-nav'>Omen</Link>
                  <Link to='/' className='list-nav'>Apple</Link>
                  <Link to='/' className='list-nav'>Xiaomi</Link>
                  <Link to='/' className='list-nav'>Lenovo</Link>
                  <Link to='/' className='list-nav'>Huawei</Link>
                  <Link to='/' className='list-nav'>Samsung</Link>
            </div>
            <div className='sidenav-list'>
                <h4>category</h4>
                  <Link to='/' className='list-nav'>Study</Link>
                  <Link to='/' className='list-nav'>Gaming</Link>
                  <Link to='/' className='list-nav'>Business</Link>
                  <Link to='/' className='list-nav'>Notebook</Link>
                  <Link to='/' className='list-nav'>Ultrabook</Link>
                  <Link to='/' className='list-nav'>Chromebook</Link>
            </div>
            <div className='sidenav-list'>
                <h4>Price</h4>
                  <Link to='/' className='list-nav'>- 1.000.000</Link>
                  <Link to='/' className='list-nav'>1.000.000 - 3.000.000</Link>
                  <Link to='/' className='list-nav'>3.000.000 - 5.000.000</Link>
                  <Link to='/' className='list-nav'>7.000.000 - 9.000.000</Link>
                  <Link to='/' className='list-nav'>+ 10.000.000</Link>
            </div> 
        </nav>
    </div>
    </>
  );
};

export default Home;
