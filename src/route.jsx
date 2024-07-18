import {
    Routes,
    Route
} from "react-router-dom";

import Login from '../src/components/Login/index';


function PageNotFound() {
    return (
        <div>
            404. Not Found Data With URL
        </div>
    )
}

function Route() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Login />}>

                </Route>

            </Routes>
        </>
    )
}