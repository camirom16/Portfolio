import { styled } from "styled-components";
import HeaderWordChange from "./HeaderWordChange";
import About from "./About";
import Projects from "./Projects";
import Separation from "./Separation";
import Contact from "./Contact";
import Footer from "./Footer";

const HeroPage = () => {
    return (
        <HeroPageContainer>

            <Content>

                <Background src='../src/images/portfolio-bg.jpg' alt='background' />

                <PageContainer>
                    <div>
                        <Title>Web</Title>
                        <Title>developer</Title>
                    </div>

                    <HeaderWordChange />

                </PageContainer>

            </Content>

            <About />
            <Separation />
            <Projects />
            <Contact />
            <Footer />

        </HeroPageContainer>
    )
};

const HeroPageContainer = styled.div`
    width: 100%;
    height: 100%;
`
const Content = styled.div`
    position: relative;
    z-index: -1;
`;

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    height: 100vh;
    padding-left: 10%;
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
`;

const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-size: 12vw;
    color: #ffffffdc;
    text-shadow: 5px 5px 5px #87047e;
    line-height: 0.9;
`;

export default HeroPage;