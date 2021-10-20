import React from 'react'

function Filters({category}) {
    return (
        <li className="feedFilters__item">
            {category}
        </li>
    )
}

export default Filters
