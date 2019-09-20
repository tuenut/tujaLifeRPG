import React from 'react';

function NavigationBar() {
  return (
    <header className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row"
            style={{position: 'sticky', top: 0, zIndex: 1071}}>
      <div className="navbar-brand" >
        <img className="d-block" width="36" height="36" src="logo64.png"/>
      </div>
      <div className="navbar-nav-scroll">
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <div className="nav-link">Home</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" >Link</div>
          </li>
          <li className="nav-item">
            <div className="nav-link" >Button</div>
          </li>
          <li className="nav-item">
            <div className="nav-link">Action</div>
          </li>
        </ul>
      </div>

      <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
        <li className="nav-item">
          <div className="nav-link">Somthng</div>
        </li>
      </ul>
      <div className="btn btn-light d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3">Btn Link</div>
    </header>
  )
}

export default NavigationBar;