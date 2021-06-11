import React from 'react';
import { Route } from 'react-router';

import Header from "./components/Header";
import TableQL from "./components/TableQL";
import User from './components/User';

const index = () => {
    return (
        <div>
            <Header />
            <TableQL />
        </div>
    );
}

export default index;
