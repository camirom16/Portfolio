import { styled } from "styled-components";
import HeaderWordChange from "./HeaderWordChange";

const HeroPage = () => {
    return (
        <div>

            <Content>

                <Background src='src/images/portfolio-bg.jpg' alt='background' />

                <PageContainer>
                    <div>
                        <Title>Web</Title>
                        <Title>developer</Title>
                    </div>

                    <HeaderWordChange />

                </PageContainer>

            </Content>

        </div>
    )
}

const Content = styled.div`
    position: relative;
    z-index: -1;
`;

const PageContainer = styled.div`
    border: 2px solid red;
    position: relative;
    width: 99vw;
    height: 85vh;
    padding-top: 100px;
    z-index: 1; 
`;

const Background = styled.img`
    background-size: contain ;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -2; 
`

const Title = styled.h1`
    /* font-family: 'Outfit', sans-serif; */
    /* font-family: 'Borel', cursive; */
    font-family: 'Arvo', serif;
    font-size: 12vw;
    color: #ffffffdc;
    text-shadow: 5px 5px 5px #87047e;
`

export default HeroPage;