import React, { useState } from 'react';
import { ModalBackground, ModalButtonsContainer, Front, LoginArea, FormGroup, FormField, FormLabel, Button, ButtonText, SignUp, IconWrapper, PasswordInputWrapper, RecoverPasswordContainer, InferiorText, ModalContent, ModalButton } from '../styled';
import Header from '../../header';
import Lock from '../../../assents/images/Lock.svg';
import EyeIcon from '../../../assents/images/Eye.svg';
import EyeClose from '../../../assents/images/Eyeclose.svg';
import Mail from '../../../assents/images/Mail.svg';
import ButtonsLogin from '../../buttonsLogin';

const FrontCard = ({ handleInputChangeIn, handleSignInFormSubmit, handleClick }) => {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState('');

    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSendPasswordReset = () => {
        if (!email) {
            alert('Please enter your email.');
            return;
        }
        alert(`Sending password reset to: ${email}`);
        closeModal();
    };

    const title = "Login";
    const subtitle = "Welcome back! <br/> Please login to continue";
    const buttonText = "Or Continue with Social Accounts"

    return (
        <Front>
            <Header title={title} subtitle={subtitle} flipback={handleClick} />
            <LoginArea>
                <FormGroup className="form__group field">
                    <IconWrapper className="first-icon">
                        <img src={Mail} alt="Email Icon" />
                    </IconWrapper>
                    <FormField
                        type="email"
                        className="form__field"
                        placeholder="Your email address"
                        name="email"
                        id="Login-email"
                        onChange={handleInputChangeIn}
                        required
                    />
                    <FormLabel htmlFor="Login-email" className="form__label first-label">Email Address</FormLabel>
                </FormGroup>
                <FormGroup className="form__group field">
                    <PasswordInputWrapper>
                        <IconWrapper className="second-icon">
                            <img src={Lock} alt="Lock Icon" />
                        </IconWrapper>
                        <FormField
                            type={showPassword ? "text" : "password"}
                            className="form__field"
                            placeholder="Enter your password"
                            name="password"
                            id="Login-password"
                            onChange={handleInputChangeIn}
                            required
                        />
                        <IconWrapper onClick={toggleShowPassword}>
                            <img src={showPassword ? EyeClose : EyeIcon} alt="Eye Icon" />
                        </IconWrapper>
                    </PasswordInputWrapper>
                    <FormLabel htmlFor="Login-password" className="form__label">Password</FormLabel>
                </FormGroup>
            </LoginArea>
            <Button type="submit" onClick={handleSignInFormSubmit}>
                <ButtonText>Login</ButtonText>
            </Button>
            <RecoverPasswordContainer onClick={openModal}>
                <>Forgot Password</>
            </RecoverPasswordContainer>
            <ButtonsLogin superiorText={buttonText} />
            <InferiorText>
                Don't have an account?
                <SignUp onClick={handleClick}>
                    Create Now
                </SignUp>
            </InferiorText>

            {showModal && (
                <ModalBackground onClick={closeModal}>

                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <h2>Enter your email address:</h2>
                        <FormField
                            type="email"
                            className="formEmailRecover"
                            placeholder="Your email address"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        <ModalButtonsContainer>
                            <ModalButton onClick={handleSendPasswordReset}>Send</ModalButton>
                            <ModalButton onClick={closeModal}>Cancel</ModalButton>
                        </ModalButtonsContainer>
                    </ModalContent>
                </ModalBackground>
            )}

        </Front>
    );
};

export default FrontCard;
