import _ from 'lodash';
import React from "react";
import { BsSearch } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const { cartItem } = useSelector((state) => state.products);

  return (
    <>
      

      <div className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-2'>
              <h2>
                <Link to='/' className='text-white'>
                  Shopify
                </Link>
              </h2>
            </div>
            <div className='col-5'>
              <div class='input-group'>
                <input
                  type='text'
                  class='form-control p-2'
                  placeholder='Search product here...'
                  aria-label='Search product here...'
                  aria-describedby='basic-addon2'
                />
                <span class='input-group-text p-3' id='basic-addon2'>
                  <BsSearch className='fs-6' />
                </span>
              </div>
            </div>
            <div className='col-5'>
              <div className='header-upper-link d-flex align-items-center justify-content-between'>
                
                <div>
                  <Link
                    className='d-flex align-items-center gap-10 text-white gap-10'
                    to=''
                  >
                    <img src='/images/wishlist.svg' alt='img' />
                    <p className='mb-0'>
                      Favourit <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className='d-flex align-items-center  text-white gap-10'
                    to='/login'
                  >
                    <img src='/images/user.svg' alt='img' />
                    <p className='mb-0'>
                      Login <br /> Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link
                    className='d-flex position-relative align-items-center gap-10 text-white'
                    to='/cart'
                  >
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {_.size(cartItem)}
                    </span>
                    <img src='/images/cart.svg' alt='img' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <div style={{ display: "flex" }} className='dropdown'>
                    <span>
                      <img src='/images/menu.svg' alt='' />
                    </span>
                    <button
                      className='btn btn-secondary dropdown-toggle bg-transparent border-0 shadow-none '
                      type='button'
                      id='dropdownMenuButton1'
                      data-bs-toggle='dropdown'
                      aria-expanded='false'
                    >
                      <span className='me-3 d-inline-block'>
                        {" "}
                        Show Categories
                      </span>
                    </button>
                    <ul
                      className='dropdown-menu'
                      aria-labelledby='dropdownMenuButton1'
                    >
                      <li>
                        <Link to='' className='dropdown-item'>
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to='' className='dropdown-item'>
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link to='' className='dropdown-item'>
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='menu-link'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to=''>Our Store</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
