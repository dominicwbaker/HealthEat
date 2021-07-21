import React from 'react';
import Wrapper from '../../Components/Wrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Wrapper>
                <div className="favoriteRecipes">
                    <h1>My Favorite Recipes</h1>
                </div>
                <div className="linkTo">
                    <button className="btn btn-danger createLink">
                        Create
                    </button>
                </div>
            </Wrapper>
        </div>
    )
}

export default Dashboard;