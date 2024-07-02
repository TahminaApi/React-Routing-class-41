import React from 'react';
import { Link } from 'react-router-dom';

const Users = ({ user }) => {
    const { name, id, email } = user;
    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name} ID:{id}</h2>
                    <p>{email}</p>
                    <div className="card-actions">
                        <Link to={`/user-details/${id}`}><button className="btn btn-primary">User-Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Users;