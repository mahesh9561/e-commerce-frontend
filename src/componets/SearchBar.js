// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSearchTerm, setSearchResults, setLoading, setError } from '../store/searchSlice';
// import _ from 'lodash';

// function SearchBar() {
//     const dispatch = useDispatch();
//     const [query, setQuery] = useState('');
//     const searchTerm = useSelector((state) => state.search.searchTerm);

//     // Debounced search function
//     const debouncedSearch = _.debounce((searchQuery) => {
//         dispatch(setSearchTerm(searchQuery)); // Set the search term in Redux
//         dispatch(setLoading()); // Set loading to true
//         console.log(searchQuery)
//         // Simulate an API call
//         // 'https://dummyjson.com/products/search?q=phone'
//         fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
//             .then((response) => response.json())
//             .then((data) => {
//                 dispatch(setSearchResults(data.results)); // Update search results in Redux
//             })
//             .catch((error) => {
//                 dispatch(setError(error.message)); // Handle error
//             });
//     }, 500); // Wait 500ms after the user stops typing

//     useEffect(() => {
//         if (query.trim()) {
//             debouncedSearch(query);
//         }
//     }, [query, debouncedSearch]);

//     const handleInputChange = (e) => {
//         setQuery(e.target.value); // Update local state, which triggers the effect
//     };

//     return (
//         <div>
//             {/* <div className='col-span-3 mx-5'>
//                 <InputBox />
//             </div> */}
//             <input
//                 type="text"
//                 value={query}
//                 onChange={handleInputChange}
//                 placeholder="Search here..."
//                 className="w-full p-2 border-4 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//         </div>
//     );
// }

// export default SearchBar;
