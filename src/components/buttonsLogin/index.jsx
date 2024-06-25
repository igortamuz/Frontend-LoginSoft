import React from 'react';
import Google from '../../assents/images/google.svg';
import Facebook from '../../assents/images/facebook.svg';
import Apple from '../../assents/images/apple.svg';
import Twitter from '../../assents/images/twitter.svg';
import { ButtonLoginContainer, QuadraButtons, QuadraButtonsContainer, Img, ButtonLogin, ContainerText } from './styled';

const ButtonsLogin = ({ superiorText }) => {
    const handleLoginClick = (url) => {
        setTimeout(() => {
            window.open(url, '_blank');
        }, 1200);
    };

    return (
        <ButtonLoginContainer>
            <ContainerText>
                {superiorText}
            </ContainerText>

            <QuadraButtonsContainer>
                <QuadraButtons>
                    <ButtonLogin onClick={() => handleLoginClick('https://accounts.google.com/signin')}>
                        <Img src={Google} alt="Google" />
                    </ButtonLogin>
                    <ButtonLogin onClick={() => handleLoginClick('https://www.facebook.com/login')}>
                        <Img src={Facebook} alt="Facebook" />
                    </ButtonLogin>
                    <ButtonLogin onClick={() => handleLoginClick('https://appleid.apple.com')}>
                        <Img src={Apple} alt="Apple" />
                    </ButtonLogin>
                    <ButtonLogin onClick={() => handleLoginClick('https://twitter.com/login')}>
                        <Img src={Twitter} alt="Twitter" />
                    </ButtonLogin>
                </QuadraButtons>
            </QuadraButtonsContainer>
        </ButtonLoginContainer>
    );
};

export default ButtonsLogin;
