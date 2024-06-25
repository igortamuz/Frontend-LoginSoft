import React from 'react';
import { HeaderContainer, HeaderContent, LeafImage, Title, Subtitle, ButtonContainer, ButtonImg, ImgContainer } from './styled';
import Leaf from '../../assents/images/Leafer.png';
import Arrow from '../../assents/images/Arrow Circle.svg';

const Header = ({ title, subtitle, flipback }) => {

    return (
        <>
            <ImgContainer>
                <LeafImage src={Leaf} alt="Leaves" />
            </ImgContainer>

            <HeaderContainer>
                <ButtonContainer>
                    <ButtonImg src={Arrow} alt="buttonBack" onClick={flipback} />
                </ButtonContainer>
                <HeaderContent>
                    <Title>{title}</Title>
                    <Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
                </HeaderContent>
            </HeaderContainer>
        </>
    );
};

export default Header;
