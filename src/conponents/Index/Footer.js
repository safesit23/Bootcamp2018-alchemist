import React from 'react';
import styled from 'styled-components';
const Header = styled.h2`
text-align: center;
`;
const Footer = ()=>(
    <div>
        <Header>WE ARE SOCIAL!</Header>
        <div className='d-flex justify-content-center'>
        <img src='/static/images/social-buttons-sprite.png' alt='social'/>
        </div>
        <img src='/static/images/footerBG.png' alt='footer'/>
    </div>
);

export default Footer;