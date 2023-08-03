import { styled } from "styled-components"
import { Folder, Github, Home, Linkedin, Mail, Menu, MessageCircle, User } from "../assets/data/CustomIcons";
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContainer>

            <ButtonMenu className="menu">
                <Menu className="icon" />
            </ButtonMenu>

            <div>
                <Button onClick={() => navigate("/")}><Home className="icon" /></Button>
                <Button onClick={() => navigate("/about")}><User className="icon" /></Button>
                <Button onClick={() => navigate("/projects")}><Folder className="icon" /></Button>
            </div>

            <div><Logo src="../../images/logo.png" alt="logo" /></div>

            <div>
                <ExternalLink href="https://www.linkedin.com/in/camila-romero-b7b1b3237" target="_blank">
                    <Linkedin className="icon" />
                </ExternalLink>

                <ExternalLink href="https://github.com/camirom16" target="_blank">
                    <Github className="icon" />
                </ExternalLink>

                <Button onClick={() => navigate("/contact")}><Mail className="icon" /></Button>
            </div>

            <ButtonMenu className="menu" onClick={() => navigate("/contact")}>
                <MessageCircle className="icon" />
            </ButtonMenu>

        </HeaderContainer>
    )
};

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

const ButtonMenu = styled.button`
    display: none;
    background-color: transparent;
    border-radius: 50px;
    border: none;
    padding: 10px;
    margin: 5px; 

    @media (max-width: 500px) {
        display: block;
    }

    &:hover {
        background-color: rgba(228, 81, 143, 0.5);
    }
`;

const Button = styled.button`
    background-color: transparent;
    border: none;
    border-radius: 50px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;

    @media (max-width: 500px) {
        display: none;
    }

    &:hover {
        background-color: rgba(228, 81, 143, 0.5);
    }
`;

const Logo = styled.img`
    width: 100px;
    padding: 10px 0;
`;

const ExternalLink = styled.a`
    padding: 10px;
    margin: 5px;
    color: white;
    background-color: transparent;
    border-radius: 50px;

    @media (max-width: 500px) {
        display: none;
    }

    &:hover {
        background-color: rgba(228, 81, 143, 0.5);
    }
`;

export default Header;