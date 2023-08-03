import { styled } from "styled-components"
import deco from "../images/deco.jpg";

const Separation = () => {
    return (
        <Container>
            <Img src={deco} alt="separation" />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
`;

const Img = styled.img`
    border-radius: 150px;
    width: 90vw;
    height: 5vh;
`;

export default Separation;