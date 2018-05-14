import React from 'react';
import Header from './Header/header-wo'
import {Link} from 'react-router-dom'
export default function AsideInfo() {
    return (
        <div>
            <Header/>
            <div className='info-x-level'>
                <aside>
                    <h1 className="banner-info">How it Works?</h1>
                    <h2 className="welcome-banner">We know losing weight isn't easy So we did the hard part for you</h2>
                    <ul>
                        <li className="changeinList">
                            First: You can start by using our Marcos calculater,<br/>
                            which calculates your recommended daily intake by using our super secert
                            algorithm
                        </li>
                        <br/>
                        <li className="changeinList">Second: You can take charge, of the food that you've eaten 
                        store them on your food dairy 
                        <br/> plus you can measure your workout and store them here as well.
                        </li>
                    </ul>
                </aside>
                <Link to="/signin">
                    <h1 className="hellothere">Return Here
                    </h1>
                </Link>
            </div>
        </div>
    )
}