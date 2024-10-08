import React from 'react'
import './Blog.css'
import { BlogData } from './BlogData'
import { Footer } from '../Index';
import { Link } from 'react-router-dom';

const Blog = () => {

  return (
    <>

      <div className="blog">
        <h3>My Blog</h3>
        <p >
          <Link to={"/"}>Home
          </Link>
          <div className="fa fa-chevron-right"></div> <span>Blog</span></p>
        <div className="blogItems">
          {
            BlogData.map((value, key) => (
              <div key={key} className="blogItem1" id='blogItem1'>
                <div className="image">
                  <img src={value.img} alt="" />
                </div>
                <div className="content">
                  <a href='#blogItem1'>{value.title}</a>
                  <h6>{value.heading}</h6>
                  <p>By Mr Opeyemi Qudus Ayinde / {value.date}</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Blog