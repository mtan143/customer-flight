import React from 'react';

import ListPage from './pages/ListPage';
import { Route, Routes  } from "react-router-dom";
//   import { useMatch } from "@reach/router"
import { useMatch } from "react-router-dom";

ListFlight.propTypes = {
    
};

function ListFlight(props) {
    const match = useMatch();
    return (
        <div>
            Product Feature
            <Routes>
                <Route path="/products"  element={<ListPage />} />
            </Routes>
        </div>
    );
}

export default ListFlight;