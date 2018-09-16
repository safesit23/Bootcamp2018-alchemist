import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'reactstrap';

const Landing = styled.div`
    margin-bottom: 40em;
`;

const Header = styled.h1`
    text-align: center;
`;

const Image = styled.img`
    border: 5px solid white;
`;

const imagesrc = 'static/images/1.jpg';
const ProjectSection = ()=>(
<Landing>
    <Header>RECENT PROJECT</Header>
    <Container >
    <Row>
        {
            [1,2,3,4,5,6].map((value,i) => (
                <Col key={value+i} lg={3} className='d-flex justify-content-center'>
                    <Image className='mx-2 my-2' src={imagesrc} alt='pic' />
                </Col>
            ))
        }

    </Row>
    </Container>
</Landing>
);

export default ProjectSection;