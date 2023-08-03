import { styled } from "styled-components";

const Contact = () => {
    return (
        <FormContainer>
            <Title>Reach out</Title>
            
            <Form>
                    <Label htmlFor="name">Name: </Label>
                    <Input type="text" id="name" />
                

                    <Label htmlFor="email">Email: </Label>
                    <Input type="email" id="email" />
                
                    <Label htmlFor="phone">Phone: </Label >
                    <Input type="tel" id="phone" />
                
                    <Label htmlFor="message">Message: </Label>
                    <TextArea></TextArea>

                <ButtonContainer>
                    <Button type="submit">Send ✉️</Button>
                </ButtonContainer>

            </Form>
        </FormContainer>
    )
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('src/images/contact-bg.jpg');
    background-position: center;
    background-size: cover;
    color: white;
    width: 100%;
    height: 100vh;
`;

const Form = styled.form`
    background-color: rgba(0, 0, 0, 0.5);
    font-family: 'Barlow Condensed', sans-serif;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    width: 30vw;
    padding: 40px;
    text-align: right;
`;

const Title = styled.h1`
    font-family: 'Arvo', serif;
    font-size: 6vw;
    padding-bottom: 20px;
`;

const Label = styled.label`
    font-size: 2vw;
    text-align: start;
    padding-left: 38px;
`;

const Input = styled.input`
    font-size: 1.5vw;
    border-radius: 3px;
    width: 25vw;
    height: 3vh;
    margin: 15px 15px 15px 40px;
    padding: 5px;
    text-align: center;
    background-color: #1f1f1f;
    font-family: 'Lato', sans-serif;
    border: none;
    color: white;
`;

const TextArea = styled.textarea`
    font-size: 1.5vw;
    border: none;
    border-radius: 3px;
    width: 25vw;
    height: 12vh;
    margin: 15px 15px 15px 40px;
    padding: 5px;
    color: white;
    background-color: #1f1f1f;
    font-family: 'Lato', sans-serif;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    font-size: 18px;
    margin-top: 20px;
    padding: 10px;
    border: 2px solid white;
    color: white;
    background-color: black;
    border-radius: 25px;
    width: 10vw;
`;

export default Contact;