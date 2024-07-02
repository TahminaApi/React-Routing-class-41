import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData();
    const { name, email, website, id } = user;
    return (
        <div className="min-h-screen">
            <h1>User-Details</h1>
            <div>
                <div className="card bg-base-300 w-96 mx-auto my-10  shadow-xl">
                    <figure className="px-10 pt-10">
                        <img
                            src="https://via.placeholder.com/600/d32776"
                            alt="Shoes"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Name: {name} ID: {id}</h2>
                        <p>{email}</p>
                        <p>{website}</p>

                    </div>
                </div>

            </div>

        </div>
    );
};

export default UserDetails;