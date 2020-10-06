import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Auth</Link>
            <div>
                <div className="d-flex">
                    <NavLink className="btn btn-success mr-2" to="/" exact>
                        Inicio
                    </NavLink>
                    <NavLink className="btn btn-danger mr-2" to="/admin">
                        Admin
                    </NavLink>
                    <NavLink className="btn btn-warning mr-2" to="/login">
                        Login
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar
