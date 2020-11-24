import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    
    const login = () => {
        props.loggedIn()
    }
    
    
    

    return (
        <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <a className= {`nav-link btn btn-primary ${props.signedIn ? 'signedIn': 'signedOut' }`} data-toggle="modal" data-target="#modal">Login<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a className= {`nav-link btn btn-primary ${props.signedIn ? 'signedIn': 'signedOut' }`} data-toggle="modal" data-target="#modal-signup">Sign Up<span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item active">
                <a onClick={ login } className= {`nav-link btn btn-primary ${props.signedIn ? 'signedOut': 'signedIn' }`} href="/" >Log Out<span className="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
    </nav>
        {/* MODAL LOGIN */}
        <div id="modal" className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Login</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {/* FORM */}
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button onClick={ login } type="button" className="btn btn-primary" data-dismiss="modal">Login</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        {/* MODAL SIGN UP */}
        <div id="modal-signup" className="modal" tabindex="-1" role="dialog">
        <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Sign Up</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                {/* FORM */}
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Password Confirmation</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-primary" data-dismiss="modal">Sign Up</button>
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>

        </>





    )
}

export default Navbar;