import React, {useEffect, useState} from 'react'
import Swiper  from 'swiper'
import 'swiper/swiper-bundle.css'
import { Link } from 'react-router-dom'
import './style.css'
import './navbar.css'

import BannerImage from '../images/banner-image.png'
import LeftSwiper from '../icons/swipe-left.png'
import Shield from '../icons/shieldtag.png'
import User from '../icons/user.png'
import Pricetag from '../icons/pricetag.png'
import Cart from '../icons/cart.png'
import Qualitytag from '../icons/quality.png'
import ProductItem1 from '../images/product-item1.jpg'
import ProductItem2 from '../images/product-item2.jpg'
import ProductItem3 from '../images/product-item3.jpg'
import ProductItem4 from '../images/product-item4.jpg'
import ProductItem5 from '../images/product-item5.jpg'
import ProductItem6 from '../images/product-item6.jpg'
import ProductItem7 from '../images/product-item7.jpg'
import ProductItem8 from '../images/product-item8.jpg'
import ProductItem9 from '../images/product-item9.jpg'
import ProductItem10 from '../images/product-item10.jpg'
import PostItem1 from '../images/post-item1.jpg'
import PostItem2 from '../images/post-item2.jpg'
import PostItem3 from '../images/post-item3.jpg'
import InstagramItem1 from '../images/insta-item1.jpg'
import InstagramItem2 from '../images/insta-item2.jpg'
import InstagramItem3 from '../images/insta-item3.jpg'
import InstagramItem4 from '../images/insta-item4.jpg'
import InstagramItem5 from '../images/insta-item5.jpg'
import MainLogo from '../images/main-logo.png'
import Dhl from '../images/dhl.png'
import MasterCard from '../images/mastercard.jpg'
import Visa from '../images/visa.jpg'
import PayPal from '../images/paypal.jpg'
import MasterCard1 from '../images/shippingcard.png'
import SingleImage from '../images/single-image1.png'
import Header from './Header'

export default function Index() {




  useEffect(()=>{
    const mySwiper = new Swiper('.main-swiper',{
      speed:500,
      navigation:{
        nextEl: '.swiper-arrow-prev',
        prevEl: '.swiper-arrow-next',
      },
    });
    return ()=> {
      mySwiper.destroy();
    }
  },[])

  useEffect(()=>{
    const mySwiper = new Swiper('.product-swiper',{
      //  loop: true,
      slidesPerView: 4,
      spaceBetween: 10,
      pagination: {
        el: '#mobile-products .swiper-pagination',
        type: 'bullets',
        clickable:true,
      },
      breakpoints:{
        0:{
          slidesPerView: 2,
          spaceBetween:20,
        },
        980:{
          slidesPerView: 4,
          spaceBetween: 20,
        }
      }
    });


    return ()=> {
      mySwiper.destroy();
    }
  },[])


  useEffect (()=>{
    const mySwiper = new Swiper(".product-watch-swiper",{
      loop:true,
      slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
    });
     return ()=> {
      mySwiper.destroy();
    }
  },[])



  return (
    <div>
   
    <div className="search-popup">
        <div className="search-popup-container">

          <form role="search" method="get" className="search-form" action="">
            <input type="search" id="search-form" className="search-field" placeholder="Type and press enter" value="" name="s" />
            <button type="submit" className="search-submit"><svg className="search"></svg></button>
          </form>

          <h5 className="cat-list-title">Browse Categories</h5>
          
          <ul className="cat-list">
            <li className="cat-list-item">
              <Link to="/" title="Mobile Phones">Mobile Phones</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Smart Watches">Smart Watches</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Headphones">Headphones</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Accessories">Accessories</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Monitors">Monitors</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Speakers">Speakers</Link>
            </li>
            <li className="cat-list-item">
              <Link to="/" title="Memory Cards">Memory Cards</Link>
            </li>
          </ul>
        </div>
    </div>
    <Header/>
    {/* <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="index.html">
            <img src={Imagelogo} alt='img logo' className="logo"/>
          </Link>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="/bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <img className='navbar-icon' src={ToggleIcon} alt='toggler' />
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <Link className="navbar-brand" to="index.html">
                <img src={Imagelogo} alt='imag' className="logo"/>
              </Link>
              <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="/bdNavbar"></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link me-4 active" to="/billboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/company">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/mobile-products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/smart-watches">Watches</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/yearly-sale">Sale</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/latest-blog">Blog</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" to="/" role="button" aria-expanded="false">Pages</Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="about.html" className="dropdown-item">About</Link>
                    </li>
                    <li>
                      <Link to="blog.html" className="dropdown-item">Blog</Link>
                    </li>
                    <li>
                      <Link to="shop.html" className="dropdown-item">Shop</Link>
                    </li>
                    <li>
                      <Link to="cart.html" className="dropdown-item">Cart</Link>
                    </li>
                    <li>
                      <Link to="checkout.html" className="dropdown-item">Checkout</Link>
                    </li>
                    <li>
                      <Link to="single-post.html" className="dropdown-item">Single Post</Link>
                    </li>
                    <li>
                      <Link to="single-product.html" className="dropdown-item">Single Product</Link>
                    </li>
                    <li>
                      <Link to="contact.html" className="dropdown-item">Contact</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <div className="user-items ps-5">
                    <ul className="d-flex justify-content-end list-unstyled">
                      <li className="search-item pe-3">
                        <Link to="/" className="search-button">
                            <img src={SearchIcon} alt='search icon' className='search'/>
                        </Link>
                      </li>
                      <li className="pe-3">
                        <Link to="/">
                          <svg className="user">
                            <use xlink:to="/user"></use> 
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="cart.html">
                          <svg className="cart">
                          <use xlink:to="/cart"></use> 
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header> */}
    <section id="billboard" className="position-relative overflow-hidden bg-light-blue">
      <div className="swiper main-swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="container backimag">
              <div className="row d-flex align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase  pb-5">Your Products Are Great.</h1>
                    <Link to="shop.html" className="btn btn-medium btn-success text-uppercase btn-rounded-none">Shop Product</Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src={BannerImage} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="swiper-slide">
            <div className="container">
              <div className="row d-flex flex-wrap align-items-center">
                <div className="col-md-6">
                  <div className="banner-content">
                    <h1 className="display-2 text-uppercase text-dark pb-5">Technology Hack You Won't Get</h1>
                    <Link to="shop.html" className="btn btn-medium btn-dark text-uppercase btn-rounded-none">Shop Product</Link>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="image-holder">
                    <img src={BannerImage} alt="banner"/>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-prev">
        <img src={LeftSwiper} alt='left swiper' className='leftswipe'/>
      </div>
      <div className="swiper-icon swiper-arrow swiper-arrow-next">
        <svg className="chevron-right">
          {/* <use xlink:to="/chevron-right" /> */}
        </svg>
      </div>
    </section>
    <section id="company-services" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <img src={Cart} alt='cart icon' className='cart-outline' />
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Free delivery</h3>
                <p>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <img src={Qualitytag} alt='quality' className='quality'/>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Quality guarantee</h3>
                <p>Dolor sit amet orem ipsu mcons ectetur adipi elit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <img src={Pricetag} alt='price icon' className='price-tag'/>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">Daily offers</h3>
                <p>Amet consectetur adipi elit loreme ipsum dolor sit.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pb-3">
            <div className="icon-box d-flex">
              <div className="icon-box-icon pe-3 pb-3">
                <img src={Shield} alt='shield tag' className='shield-plus'/>
              </div>
              <div className="icon-box-content">
                <h3 className="card-title text-uppercase text-dark">100% secure payment</h3>
                <p>Rem Lopsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="mobile-products" className="product-store position-relative padding-large no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Mobile Products</h2>
            <div className="btn-right">
              <Link to="/" className="btn btn-medium btn-normal text-uppercase">Go to Shop</Link>
            </div>
          </div>
          <div className="swiper product-swiper ">
            <div className="swiper-wrapper ">
              <div className="swiper-slide ">
                <div className="product-card position-relative ">
                  <div className="image-holder">
                    <img src={ProductItem1} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button  d-flex">
                      <Link to="/" className="btn btn-medium btn-black ">Add to Cart
                        <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>                   
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Iphone 10</Link>
                    </h3>
                    <span className="item-price text-primary">$980</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem2} alt='produt image 2' className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                              <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Iphone 11</Link>
                    </h3>
                    <span className="item-price text-primary">$1100</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem3} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                            <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                        </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Iphone 8</Link>
                    </h3>
                    <span className="item-price text-primary">$780</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem4} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                              <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Iphone 13</Link>
                    </h3>
                    <span className="item-price text-primary">$1500</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem5} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                          <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Iphone 12</Link>
                    </h3>
                    <span className="item-price text-primary">$1300</span>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    <section id="smart-watches" className="product-store padding-large position-relative">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Smart Watches</h2>
            <div className="btn-right">
              <Link to="shop.html" className="btn btn-medium btn-normal text-uppercase">Go to Shop</Link>
            </div>
          </div>
          <div className="swiper product-watch-swiper">
            <div className="swiper-wrapper ">
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem6} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                          <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Pink watch</Link>
                    </h3>
                    <span className="item-price text-primary">$870</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem7} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                          <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">Heavy watch</Link>
                    </h3>
                    <span className="item-price text-primary">$680</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem8} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                            <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">spotted watch</Link>
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem9} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                        <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between align-items-baseline pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">black watch</Link>
                    </h3>
                    <span className="item-price text-primary">$650</span>
                  </div>
                </div>
              </div>
              <div className="swiper-slide ">
                <div className="product-card position-relative">
                  <div className="image-holder">
                    <img src={ProductItem10} alt="product-item" className="img-fluid"/>
                  </div>
                  <div className="cart-concern position-absolute">
                    <div className="cart-button d-flex">
                      <Link to="/" className="btn btn-medium btn-black">Add to Cart
                        <img src={Cart} alt='cart icon' className='cart-outline img-fluid '/>
                      </Link>
                    </div>
                  </div>
                  <div className="card-detail d-flex justify-content-between pt-3">
                    <h3 className="card-title text-uppercase">
                      <Link to="/">black watch</Link>
                    </h3>
                    <span className="item-price text-primary">$750</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination position-absolute text-center"></div>
    </section>
    <section id="yearly-sale" className="bg-light-blue overflow-hidden mt-5 padding-xlarge new-year">
      <div className="row d-flex flex-wrap align-items-center">
        <div className="col-md-6 col-sm-12">
          <div className="text-content offset-4 padding-medium">
            <h3><span className='text' style={{color:"blueviolet"}}>10%</span> off</h3>
            <h2 className="display-2 pb-5 text-uppercase text-danger">New year sale</h2>
            <Link to="/" className="btn btn-medium btn-success text-uppercase btn-rounded">Shop Sale</Link>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          
        </div>
      </div>
    </section>
    <section id="latest-blog" className="padding-large">
      <div className="container">
        <div className="row">
          <div className="display-header d-flex justify-content-between pb-3">
            <h2 className="display-7 text-dark text-uppercase">Latest Posts</h2>
            <div className="btn-right">
              <Link to="/" className="btn btn-medium btn-normal text-decoration-none text-uppercase">Read Blog</Link>
            </div>
          </div>
          <div className="post-grid d-flex flex-wrap justify-content-between">
            <div className="col-lg-4 col-sm-12 post-grid">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img src={PostItem1} alt="post-item" className="img-fluid"/>
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">feb 22, 2023</span>
                  <span className="meta-category">- Gadgets</span>
                </div>
                <h3 className="card-title">
                  <Link to="/">Get some cool gadgets in 2023</Link>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 post-grid">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img src={PostItem2} alt="post-item" className="img-fluid"/>
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">feb 25, 2023</span>
                  <span className="meta-category">- Technology</span>
                </div>
                <h3 className="card-title">
                  <Link to="/">Technology Hack You Won't Get</Link>
                </h3>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 post-grid">
              <div className="card border-none me-3">
                <div className="card-image">
                  <img src={PostItem3} alt="post-item" className="img-fluid"/>
                </div>
              </div>
              <div className="card-body text-uppercase">
                <div className="card-meta text-muted">
                  <span className="meta-date">feb 22, 2023</span>
                  <span className="meta-category">- Camera</span>
                </div>
                <h3 className="card-title">
                  <Link to="/">Top 10 Small Camera In The World</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="testimonials" className="position-relative">
      <div className="container">
        <div className="row">
          <div className="review-content position-relative">
            <div className="swiper-icon swiper-arrow swiper-arrow-prev position-absolute d-flex align-items-center">
              <svg className="chevron-left">
                {/* <use xlink:to="/chevron-left" /> */}
              </svg>
            </div>
            <div className="swiper testimonial-swiper">
              <div className="quotation text-center">
                <svg className="quote">
                  {/* <use xlink:to="/quote" /> */}
                </svg>
              </div>
              <div className="swiper-wrapper">
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote>“Tempus oncu enim pellen tesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellen tesque pretium feugiat vel morbi suspen dise sagittis lorem habi tasse morbi.”</blockquote>
                    <div className="rating">
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-half">
                        {/* <use xlink:to="/star-half"></use> */}
                      </svg>
                      <svg className="star star-empty">
                        {/* <use xlink:to="/star-empty"></use> */}
                      </svg>
                    </div>
                    <div className="author-detail">
                      <div className="name text-dark text-uppercase pt-2">Emma Chamberlin</div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide text-center d-flex justify-content-center">
                  <div className="review-item col-md-10">
                    <i className="icon icon-review"></i>
                    <blockquote>“A blog is a digital publication that can complement a website or exist independently. A blog may include articles, short posts, listicles, infographics, videos, and other digital content.”</blockquote>
                    <div className="rating">
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-fill">
                        {/* <use xlink:to="/star-fill"></use> */}
                      </svg>
                      <svg className="star star-half">
                        {/* <use xlink:to="/star-half"></use> */}
                      </svg>
                      <svg className="star star-empty">
                        {/* <use xlink:to="/star-empty"></use> */}
                      </svg>
                    </div>
                    <div className="author-detail">
                      <div className="name text-dark text-uppercase pt-2">Jennie Rose</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-icon swiper-arrow swiper-arrow-next position-absolute d-flex align-items-center">
              <svg className="chevron-right">
                {/* <use xlink:to="/chevron-right" /> */}
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </section>
    <section id="subscribe" className="container-grid padding-large position-relative overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="subscribe-content bg-dark d-flex flex-wrap justify-content-center align-items-center padding-medium">
            <div className="col-md-6 col-sm-12">
              <div className="display-header pe-3">
                <h2 className="display-7 text-uppercase text-light">Subscribe Us Now</h2>
                <p>Get latest news, updates and deals directly mailed to your inbox.</p>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <form className="subscription-form validate">
                <div className="input-group flex-wrap">
                  <input className="form-control btn-rounded-none" type="email" name="EMAIL" placeholder="Your email address here" required=""/>
                  <button className="btn btn-medium btn-primary text-uppercase btn-rounded-none" type="submit" name="subscribe">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="instagram" className="padding-large overflow-hidden no-padding-top">
      <div className="container">
        <div className="row">
          <div className="display-header text-uppercase text-dark text-center pb-3">
            <h2 className="display-7">Shop Our Insta</h2>
          </div>
          <div className="d-flex flex-wrap">
            <figure className="instagram-item pe-2">
              <Link to="/" className="image-link position-relative">
                <img src={InstagramItem1} alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    <Link to="/instagram"></Link>
                  </svg>
                </div>
              </Link>
            </figure>
            <figure className="instagram-item pe-2">
              <Link to="/" className="image-link position-relative">
                <img src={InstagramItem2} alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    {/* <use xlink:to="/instagram"></use> */}
                  </svg>
                </div>
              </Link>
            </figure>
            <figure className="instagram-item pe-2">
              <Link to="/" className="image-link position-relative">
                <img src={InstagramItem3} alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    {/* <use xlink:to="/instagram"></use> */}
                  </svg>
                </div>
              </Link>
            </figure>
            <figure className="instagram-item pe-2">
              <Link to="/" className="image-link position-relative">
                <img src={InstagramItem4} alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    {/* <use xlink:to="/instagram"></use> */}
                  </svg>
                </div>
              </Link>
            </figure>
            <figure className="instagram-item pe-2">
              <Link to="/" className="image-link position-relative">
                <img src={InstagramItem5} alt="instagram" className="insta-image"/>
                <div className="icon-overlay position-absolute d-flex justify-content-center">
                  <svg className="instagram">
                    {/* <use xlink:to="/instagram"></use> */}
                  </svg>
                </div>
              </Link>
            </figure>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer" className="overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="footer-top-area">
            <div className="row d-flex flex-wrap justify-content-between">
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu">
                  <img src={MainLogo} alt="logo"/>
                  <p>Nisi, purus vitae, ultrices nunc. Sit ac sit suscipit hendrerit. Gravida massa volutpat aenean odio erat nullam fringilla.</p>
                  <div className="social-links">
                    <ul className="d-flex list-unstyled">
                      <li>
                        <Link to="/">
                          <svg className="facebook">
                            {/* <use xlink:to="/facebook" /> */}
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <svg className="instagram">
                            {/* <use xlink:to="/instagram" /> */}
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <svg className="twitter">
                            {/* <use xlink:to="/twitter" /> */}
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <svg className="linkedin">
                            {/* <use xlink:to="/linkedin" /> */}
                          </svg>
                        </Link>
                      </li>
                      <li>
                        <Link to="/">
                          <svg className="youtube">
                            {/* <use xlink:to="/youtube" /> */}
                          </svg>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-sm-6 pb-3">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Quick Links</h5>
                  <ul className="menu-list list-unstyled text-uppercase">
                    <li className="menu-item pb-2">
                      <Link to="/">Home</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">About</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Shop</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Blogs</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu text-uppercase">
                  <h5 className="widget-title pb-2">Help & Info Help</h5>
                  <ul className="menu-list list-unstyled">
                    <li className="menu-item pb-2">
                      <Link to="/">Track Your Order</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Returns Policies</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Shipping + Delivery</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Contact Us</Link>
                    </li>
                    <li className="menu-item pb-2">
                      <Link to="/">Faqs</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 pb-3">
                <div className="footer-menu contact-item">
                  <h5 className="widget-title text-uppercase pb-2">Contact Us</h5>
                  <p>Do you have any queries or suggestions? <Link to="mailto:">yourinfo@gmail.com</Link>
                  </p>
                  <p>If you need support? Just give us a call. <Link to="">+55 111 222 333 44</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
    </footer>
    <div id="footer-bottom">
      <div className="container">
        <div className="row d-flex flex-wrap justify-content-between">
          <div className="col-md-4 col-sm-6">
            <div className="Shipping d-flex">
              <p>We ship with:</p>
              <div className="card-wrap ps-2">
                <img src={Dhl} alt="visa"/>
                <img src={MasterCard1} alt="mastercard"/>
              </div>
    </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="payment-method d-flex">
              <p>Payment options:</p>
              <div className="card-wrap ps-2">
                <img src={Visa} alt="visa"/>
                <img src={MasterCard} alt="mastercard"/>
                <img src={PayPal} alt="paypal"/>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6">
            <div className="copyright">
              <p> Copyright 2023 MiniStore. Design by <Link to="/">Mihretu Endeshaw</Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>

  )
}
