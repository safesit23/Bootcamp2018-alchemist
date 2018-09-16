import React, { Fragment } from 'react';
import styled from 'styled-components';

const link = {
    service:'SERVICE',
    portfolio:'PORFOLIO',
    logo:'static/images/logo.png',
    ournews:'OURNEWS',
    contactus:'CONTACTUS',
};

const Landing = styled.div`
 background-image: url('/static/images/top-bar-bg.png');
`;

const Linkstyle = styled.div`
    color: white;
`;
const Image = styled.img`
    height: 100px;
    width: auto;
`;

const Navbar=()=>(
    <Fragment>
        <Landing className='d-flex justify-content-center align-items-center'>
            <Linkstyle className='px-3'>{link.service}</Linkstyle>
            <Linkstyle className='px-3'>{link.portfolio}</Linkstyle>
            <Linkstyle className='px-3'><Image src={link.logo} /></Linkstyle>
            <Linkstyle className='px-3'>{link.ournews}</Linkstyle>
            <Linkstyle className='px-3'>{link.contactus}</Linkstyle>
        </Landing>
    </Fragment>
);
export default Navbar;