import React,{Fragment} from 'react';
import {Container} from 'reactstrap';
import styled from 'styled-components';

const slideElement = ['WEB & APP', 'BRANDING', 'CARTOONS'];

const Landing = styled.div`
    padding: 200px 0;
`;

const Topic = styled.h1`
  color: white;
  text-align: center;
  font-size: 5em;
`;
class ToptextSection extends React.Component{
    state = {position: 0}
    componentDidMount(){
        setInterval(()=>{
            this.setState({position: this.state.position+1});
            if(this.state.position>2){
                this.setState({position:0});
            }
        },2000);
    }
    render(){
        return(
            <Fragment>
                <Container>
                <Landing >
                    <Topic>I LOVE TO MAKE</Topic>
                    <Topic>{slideElement[this.state.position]}</Topic>
                    <Topic>LOOK AWESOME</Topic>
                </Landing>
                </Container>
            </Fragment>
        );
    }
}
export default ToptextSection;