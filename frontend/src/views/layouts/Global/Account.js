import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../../../store';

const Account = () => {
    const store = useStore();
    return (
            <div className="dropdown py-sm-4 mt-sm-auto ms-auto ms-sm-0 flex-shrink-1">
                <a href="#" className="d-flex align-items-center text-dark-custom text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/mdo.png" alt="hugenerd" width="28" height="28" className="rounded-circle" />
                    <span className="d-none d-sm-inline mx-1">{store.getValue('auth.name')}</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-light text-small shadow" aria-labelledby="dropdownUser1">
                    <li><a className="dropdown-item" href="#">New project...</a></li>
                    <li><a className="dropdown-item" href="#">Settings</a></li>
                    <li>
                        <Link to={`${localStorage.getItem('role') }/profile`} className="dropdown-item">Profile</Link>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li><Link to="/sign-out" className="dropdown-item">Sign out</Link></li>
                </ul>
            </div>
    );
};

export default Account;