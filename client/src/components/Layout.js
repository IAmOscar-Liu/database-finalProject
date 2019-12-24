import React from 'react';
import  './Layout.css';

function Layout(prop) {
    return (
        <div className={`layout-container ${prop.isUserOpen ? "open":""}`}>
            {prop.children}
        </div>
    )
}

export default Layout
