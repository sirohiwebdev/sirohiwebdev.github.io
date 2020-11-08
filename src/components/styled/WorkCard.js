import Styled from "styled-components";

export const WorkCard = Styled.div`

@media only screen and (max-width: 768px){
    width: 100%
}

width: 450px;
border-radius: 4px;
border: 4px solid #FFF;
height: 300px;
margin-bottom: 4rem;
background-color: #FFF;
background-image: url(${props => props.source});
background-size: 100% auto;
background-repeat: no-repeat;
background-position: center;
position: relative;
box-shadow: 0px 0px 30px -10px rgba(0,23,30,0.6);
transition: all 0.2s ease-in;
overflow: hidden;



.card-overlay{
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: -100%;
    opacity: 0.2;
    left: 0;
    background-color: #2e86c1DD;
    transition: all 0.3s ease-in;
}

:hover{
    box-shadow: 0px 0px 100px -30px rgba(0,23,30,0.6);
}

:hover > .card-overlay{
    bottom:0;
    opacity:0.9
}

`;
