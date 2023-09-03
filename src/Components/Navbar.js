import React from 'react'
import propTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/home">{props.Home}</a>
          </li>
          <li className="nav-item">
             <a className="nav-link" href ="/About">{props.About}</a>  {/* link to for not reload */}
          </li>
        </ul>
         {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>  */}

        <div className={`form-check form-switch text-${props.theme==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title : propTypes.string.isRequired,
                    Home:propTypes.string,
                    About :propTypes.string
                }

// Navbar.defaultProps = {title : "checkout",
//                         About : "About"
// }
