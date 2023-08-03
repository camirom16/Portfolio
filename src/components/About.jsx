import { styled } from "styled-components";
import { CssIcon, Html, JavaScript } from "../assets/data/CustomIcons";
import { FaReact } from "react-icons/fa";

const About = () => {
    return (
        <AboutContainer>

            <Content>

                <Info>
                    <Title>About me</Title>
                    <Textcontainer> 
                        <p>Hi! My name is Camila Romero <span>[she/her]</span>. </p>
                        
                        <p>Originally trained as a nurse, I have seamlessly transitioned 
                        into the world of web development, bringing a unique perspective 
                        and a passion for problem-solving. </p>
                        
                        <p>I possesses exceptional communication skills and an innate ability 
                        to empathize with end-users, ensuring that every web project is not 
                        just functional but also user-friendly and intuitive.</p>
                    
                        <p>With a hunger for knowledge and an unyielding drive to excel, 
                        I have rapidly honed my web development skills, 
                        mastering a wide array of languages and frameworks.</p>
                    </Textcontainer>

                    <Languages>
                        <Button><Html />HTML</Button>
                        <Button><CssIcon />CSS</Button>
                        <Button><JavaScript />JavaScript</Button>
                        <Button><FaReact /> React</Button>
                    </Languages>
                </Info>

                <div>
                    <Photo src='../../images/photo-frame.png' alt='photo' />
                </div>
            
            </Content>

        </AboutContainer>
    )
};

const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    background-color: black;
    width: 100%;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Info = styled.div`
    width: 50vw;
`;

const Button = styled.button`
    color: #ffffffb4;
    background-color: #151515;
    border: none;
    border-radius: 25px;
    width: 100%;
    padding: 5% 2%;
    font-size: 1vw;

    @media (max-width: 768px) {
        font-size: 2vw;
        padding: 1% 1%;
    }
`;

const Languages = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 30px;
    margin: 0 auto;
`;

const Textcontainer = styled.div`
    color: white;
    font-family: 'Lato', sans-serif;
    text-align: justify;
    font-size: 1.5vw;
    margin-bottom: 20px;

    & span {
        color: #fd9301;
    }

    & p {
        padding-bottom: 10px;
    }
`;

const Title = styled.h1`
    color: white;
    font-family: 'Arvo', serif;
    font-size: 6vw;
    text-align: center;
    padding-bottom: 10px;
`;

const Photo = styled.img`
    width: 35vw;
`;

export default About;