import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const Leftsidebar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])
    return (
        <div>
            <h2 className="text-3xl">All Categories</h2>

            {
                categories.map(category =>
                    <NavLink
                        className='block text-2xl no-underline my-5'
                        key={category.id}
                        to={`/category/${category.id}`}
                    >{category.name}
                    </NavLink>)
            }

        </div>
    );
};

export default Leftsidebar;