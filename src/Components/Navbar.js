import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsDog</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/newsDog-cb">Home</Link>
                        </li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/business">Business</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/general">General</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/entertainment">Entertainment</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/health">Health</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/science">Science</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/sports">Sports</Link></li>
                        <li className="nav-item"> <Link className="nav-link" to="/newsDog-cb/technology">Technology</Link></li>
                      
                    </ul>
                    
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
