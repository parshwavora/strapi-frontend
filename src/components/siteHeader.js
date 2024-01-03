import React from 'react'
import { Link } from 'react-router-dom';
import  './siteheader.css';
export default function SiteHeader() {
  return (
    <div className='siteheader'>
<ul>
  <li><Link to="/">Home</Link></li>
  <li> <Link to="/resturants/1">Resturants</Link></li>
  <li> <Link to="/category/3">Categories</Link></li>
</ul>
    </div>
  )
}
