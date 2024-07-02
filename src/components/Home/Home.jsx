import React, { useEffect, useState } from 'react';
import User from "./User";
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    // const [users, setUsers] = useState([])
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then((res) => res.json())
    //         .then((data) => setUsers(data));
    // }, []);

    const users = useLoaderData();

    return (<div className="min-h-screen">
        <div className="grid grid-cols-3 gap-6">
            {
                users.map((user) => (
                    <User user={user} key={user.id}></User>
                ))}

        </div>
    </div>);
};

export default Home;