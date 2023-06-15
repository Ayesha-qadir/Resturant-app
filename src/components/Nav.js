
import React from 'react'
export default function Nav({filterItem}) {
 
  return (
    <>
    <div>
    <nav className="navbar navbar-expand-lg  bg-dark navbar-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="/">Resturant APP </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">

        <button className='btn btn-dark'onClick={()=>filterItem("All Menu")} >All Menu</button>
        </li>
        <li className="nav-item">
         <button className='btn btn-dark' onClick={()=>filterItem("Breakfast")}> Breakfast</button>
        </li>
        <li className="nav-item">
        <button className='btn btn-dark' onClick={()=>filterItem("lunch")}> Lunch</button>
        </li>
        <li className="nav-item ">
        <button className='btn btn-dark' onClick={()=>filterItem("Dinner")}> Dinner</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
    </>
  )
}
