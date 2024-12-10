import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncCategories, getAllCategories } from '../store/CategorySlice';


function NavBar() {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories);
    // const categoryStatus = useSelector(getAllCategoriesStatus);

    useEffect(() => {
        dispatch(fetchAsyncCategories());
    }, [dispatch]);

    return (
        <nav className="flex justify-center items-center h-10 bg-slate-50 shadow-lg">
            <ul className="flex justify-center items-center space-x-4">
                {
                    categories.slice(0, 8).map((category, idx) => (
                        <li className="px-5" key={idx}>
                            <Link to={`category/${category.slug}`} className="text-sm font-medium">{category.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}

export default NavBar;
