import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBell } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    return (
        <>
            <Nav className="navbar" >
                {/* <ul>
                    <li>ddd</li>
                    <li>ddd</li>
                    <li>ddd</li>
                    <li>ddd</li>
                    <li>ddd</li>
                    <li>ddd</li>
                </ul> */}
                <Container fluid="md">
                    <div>

                    </div>
                    <div className='right-nav'>
                        <div className='notification'>
                            <FontAwesomeIcon className='icon-fa-bell' icon={faBell} />
                            <p className='notification-count'></p>
                        </div>
                        <img className='img-profile' src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' alt='' />
                        <div className='section-name'>
                            <p className='name-profile'>Narathip</p>
                            <FontAwesomeIcon className='icon-fa-angle-down' icon={faAngleDown} />
                        </div>
                    </div>
                </Container>
            </Nav>

        </>

    )
}