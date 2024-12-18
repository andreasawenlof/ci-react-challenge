import React from 'react';
import css from './css/Sidebar.module.css'

const Sidebar = () => {
    return (
    <div className={css.sidebar}>
        <a href="#fisk" target="_blank">My Photos</a>
        <a href="#furk" target="_blank">My Illustrations</a>
        <a href="#gunnar" target="_blank">My Paintings</a>
    </div>
    );
}

export default Sidebar;