import { useState } from "react";
import { styled } from "styled-components";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSendButton = () => {
        console.log(formData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.phone && formData.message) {
            setFormData({
                name: "",
                email: "",
                phone: "",
                message: "",
            });
            return (
                window.alert("Thank you! I'll contact you soon! 😄!")
            )
        } else {
            return (
                window.alert("Please fill out all required fields 😊")
            ) 
        }
    }

    return (
        <FormContainer>
            <Title>Reach out</Title>
    
            <Form onSubmit={handleSubmit}>
                <Label htmlFor="name">Name and Last Name : </Label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required="required"
                />
        
                <Label htmlFor="email">Email : </Label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required="required"
                />
        
                <Label htmlFor="phone">Phone : </Label>
                <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required="required"
                />
        
                <Label htmlFor="message">Message : </Label>
                <TextArea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required="required"
                ></TextArea>
        
                <ButtonContainer>
                    <Button type="submit" onClick={handleSendButton}>Send ✉️</Button>
                </ButtonContainer>
            </Form>
        </FormContainer>
    );
}

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url('../src/images/contact-bg.jpg');
    background-position: center;
    background-size: cover;
    color: white;
    width: 100%;
    min-height: 100vh;
`;

const Form = styled.form`
    background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(37, 37, 37, 0.7));
    font-family: 'Barlow Condensed', sans-serif;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 400px;
    padding: 40px;
    text-align: right;
`;

const Title = styled.h1`
    font-family: 'Arvo', serif;
    font-size: 4vw;
    padding-bottom: 20px;
`;

const Label = styled.label`
    font-size: 2vw;
    text-align: start;
    padding-left: 20px;
`;

const Input = styled.input`
    font-size: 1.5vw;
    border-radius: 3px;
    width: 100%;
    margin: 15px 0;
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
    width: 100%;
    height: 12vh;
    margin: 15px 0;
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
    font-family: 'Arvo', serif;
    font-size: 1vw;
    margin-top: 20px;
    padding: 2% 5%;
    border: 2px solid white;
    color: white;
    background-color: black;
    border-radius: 25px;
`;

export default Contact;