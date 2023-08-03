import { styled } from "styled-components";
import data from "../assets/data/data";

const Projects = () => {
    return (
        <ProjectsContainer>
            <Title>Projects</Title>

            <Content>
                {data.projects.map((project) => {
                    return (
                        <div key={project.id}>
                            <Info>
                                <ImgCont>
                                    <Img src={project.src} alt={project.name} />
                                </ImgCont>

                                <Button>See project</Button>
                                
                                <Name>{project.name}</Name>
                                <Text>{project.description}</Text>
                            </Info>

                        </div>
                    )
                })}
            </Content>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: white;
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    font-family: 'Arvo', serif;
    font-size: 6vw;
    padding-bottom: 20px;
`;

const Content = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 50vw;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`;

const ImgCont = styled.div`
    max-width: 50vw;
`;

const Img = styled.img`
    width: 20vw;
    height: auto;
    border-radius: 60px;
    padding: 2vw;
    margin: 1vw;
    background-color: #6d01a7;
    box-shadow: 0 4px 8px 0 #4f3788, 0 6px 20px 0 #4f3788;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 768px) {
        width: 20vw;
        padding: 2vw;
        margin: 1vw;
    }
`;

const Button = styled.button`
    border: none;
    border-radius: 25px;
    background-color: #fdc101;
    font-size: 2vw;
    padding: 10px 25px;
    color: white;
    position: relative;
    bottom: 35px;
    font-family: 'Arvo', serif;
    font-weight: bold;
    box-shadow: 0 4px 8px 0 #fe8101, 0 6px 20px 0 #fe8101;
`;

const Name = styled.p`
    font-size: 2vw;
    font-family: 'Arvo', serif;
`;

const Text = styled.p`
    text-align: center;
    width: 80%;
    font-size: 1vw;
    font-family: 'Lato', sans-serif;
`;

export default Projects;