import styled from 'styled-components';

export const ButtonLoginContainer = styled.div`
    margin-top: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    color: #8B8B8B;

    @media only screen and (max-width: 670px) {
     margin-top: 25px;
    }

`;

export const ContainerText = styled.div`
    margin-bottom: 21px;
    font-size: 13px;

    @media only screen and (max-width: 670px) {
     margin-bottom: 5px;
    }
`

export const QuadraButtonsContainer = styled.div`
`;

export const QuadraButtons = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonLogin = styled.div`
   width: 22%;
   transition: transform 0.1s ease-in-out;

&:active {
  transform: scale(0.78);
}
`;

export const Img = styled.img`
    cursor: pointer;
`;
