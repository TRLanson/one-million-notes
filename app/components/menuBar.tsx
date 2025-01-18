import React from 'react';

const MenuBar: React.FC = () => {
    const styles = {
        menuBar: {
            backgroundColor: '#333',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0.5rem 1rem',
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
        } as React.CSSProperties,
        menuItems: {
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'space-around',
            width: '100%',
        } as React.CSSProperties,
        menuItem: {
            marginRight: '1rem',
        } as React.CSSProperties,
        link: {
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
        } as React.CSSProperties,
        linkHover: {
            textDecoration: 'underline',
        },
    };

    return (
        <nav style={styles.menuBar}>
            <ul style={styles.menuItems}>
                <li style={styles.menuItem}>
                    <a href="/home" style={styles.link}>
                        Home
                    </a>
                </li>
                <li style={styles.menuItem}>
                    <a href="/about" style={styles.link}>
                        Our Story
                    </a>
                </li>
                <li style={styles.menuItem}>
                    <a href="/contact" style={styles.link}>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default MenuBar;


