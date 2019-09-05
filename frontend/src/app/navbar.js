import React from 'react';

function NavigationBar() {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row"
            style={{position: 'sticky', top: 0, zIndex: 1071}}>
      <a className="navbar-brand" href="#">
        <img className="d-block" width="36" height="36" src="logo64.png"/>
      </a>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Button</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Action</a>
          </li>
        </ul>
      </div>

      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item">
          <a className="nav-link" href="#">Somthng</a>
        </li>
      </ul>
      <a className="btn btn-light d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3">Btn Link</a>
    </header>
  )
}

export default NavigationBar;