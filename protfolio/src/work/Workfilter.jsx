import React, { useEffect, useState } from 'react';
import { apiUrl, filterData } from './Data.jsx';
import Cards from './Cards';
import './Workfilter.css';

const Workfilter = () => {
    const [course, setcourses] = useState(null);
    const [category, setcategory] = useState(filterData[0].title);

    async function fetchdata() {
        try {
            let response = await fetch(apiUrl);
            let data = await response.json();
            setcourses(data.data);
        } catch (error) {
            console.log("Error fetching data");
        }
    }

    useEffect(() => {
        fetchdata();
    }, []);

    function filterhandler(title) {
        setcategory(title);
    }

    return (
        <div className='work-section'>
          
            <div className='work-header'>
                <h1 className="section-title">My Portfolio<span className="dot">.</span></h1>
            </div>

      
            <div className='filter-menu'>
                {filterData.map((data) => (
                    <button
                        key={data.id}
                      
                        className={`filter-btn ${category === data.title ? 'active-filter' : ''}`}
                        onClick={() => filterhandler(data.title)}
                    >
                        {data.title}
                    </button>
                ))}
            </div>

            <div className='work-container'>
                <Cards course={course} category={category} />
            </div>
        </div>
    );
}

export default Workfilter;