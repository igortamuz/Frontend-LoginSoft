import styled from 'styled-components';

export const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    margin-top: 66px;
    margin-left: 66px;

    @media only screen and (max-width: 670px) {
     margin-top: 20px;
    }

`;

export const HeaderContent = styled.div`
    flex-grow: 1;
    margin-top: 29px;

    @media only screen and (max-width: 670px) {
      margin-top: 40px;
    }

`;

export const Title = styled.h1`
    font-size: 24px;
    margin: 0;
    color: #20130B;
    font-weight: 600px;
    ;
`;

export const Subtitle = styled.p`
    font-size: 16px;
    color: #8B8B8B;
    margin-top: 23px;
    line-height: 1.5;
    font-weight: 400px;
    width: 350px;
`;

export const ButtonContainer = styled.div`
  margin-left: -5px;
  transition: transform 0.1s ease-in-out;
  cursor: pointer;

  &:active {
    transform: scale(0.78);
  }
`;

export const ButtonImg = styled.img`
    filter: brightness(90%);
`
export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`;

export const LeafImage = styled.img`
  position: absolute;
  top: -280px;
  left: 120px;
  pointer-events: none;
  width: 500px;
  height: auto; 
  transform: rotate(180deg) scaleX(-1);
  filter: opacity(60%) grayscale(100%) brightness(130%);

  @media (max-width: 670px) {
    left: calc(68% - 80px); 
  }

  @media (max-width: 420px) {
    left: calc(48% - 80px); 
  }
`;
