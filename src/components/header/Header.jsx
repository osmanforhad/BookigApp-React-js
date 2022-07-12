import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCar, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import './header.css';

const Header = () => {
  return (
    <div className="header">
    <div className="headerContainer">
      <div className="headerList">
        <div className="headerListItem active">
     <FontAwesomeIcon icon={faBed} />
     <span>Stays</span>
        </div>
        <div className="headerListItem">
     <FontAwesomeIcon icon={faPlane} />
     <span>Flight</span>
        </div>
        <div className="headerListItem">
     <FontAwesomeIcon icon={faCar} />
     <span>Car Rental</span>
        </div>
        <div className="headerListItem">
     <FontAwesomeIcon icon={faBed} />
     <span>Attractions</span>
        </div>
        <div className="headerListItem">
     <FontAwesomeIcon icon={faTaxi} />
     <span>Airport Taxi</span>
        </div>
      </div>
      <h1 className="headerTitle">A liftime of discounts? It's Genious.</h1>
      <p className="headerDesc">Get rewarded for your travels unlock instant savings of 10% or more with a free lambooking account</p>
      <button className="headerBtn">Sign in / Register</button>
      </div>
    </div>
  )
}

export default Header;