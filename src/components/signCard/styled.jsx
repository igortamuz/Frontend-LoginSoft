import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Body = styled.div`
  background-color: white;
  width: 403px;
  height: 870px;
  border-radius: 20px;
  user-select: none;
  overflow: hidden;

  @media only screen and (max-width: 670px) {
    width: 100%;
    border-radius: 0;
    height: 100vh;
  }
`;

export const Img = styled.img`
  width: 150px;
  height: 120px;
  margin-top: 20px;
`;

export const SignupArea = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0 0;
  width: 100%;
  margin-bottom: 15px;
  height: 280px;

  @media only screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const LoginArea = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px 0 0;
  width: 100%;
  margin-bottom: 15px;

  @media only screen and (max-width: 670px) {
    width: 100%;
  }
`;

export const Back = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Front = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  width: 100%;
  padding-left: 32px;

  @media only screen and (max-width: 670px) {
    width: 100%;
    padding-left: 0px;
    display: grid;
  }
`;

export const FormField = styled.input`
  padding-top: 20px;
  padding-left: 45px;
  box-sizing: border-box;
  height: 68px;
  border-radius: 10px;
  border: solid 1px #e9ecef;
  font-size: 13px;
  width: 90%;

  @media only screen and (max-width: 670px) {
    padding-left: 65px;
    justify-self: center;
    width: 85%;
  }

  @media only screen and (max-width: 420px) {
    padding-left: 70px;
    justify-self: center;
    width: 85%;
  }

  &::placeholder {
    
  }

  &.formEmailRecover{
    height: 45px;
    padding-left: 20px;
    padding-top: 0px;
    margin-bottom: 15px;
    margin-top: 15px;
  }

  //Animação de subida de input
  /* &:focus + .form__label,
  &:not(:placeholder-shown) + .form__label {
    top: 0px;
    left: 40px;
    font-size: 12px;
    opacity: 1;
  } */
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 10px;
  cursor: pointer;
  padding-left: 32px;

  &.first-icon {
    top: 55%;
  }

  &.second-icon {
    top: 50%;
    left: -20px;
  }

  &:last-child {
    right: 60px;
    left: auto;
  }

  @media only screen and (max-width: 670px) {
    left: 0px;
    padding-left: 32px;

    &.first-icon {
    top: 55%;
    left: 30px;
  }

  &.second-icon {
    top: 50%;
    left: 0px;
  }

  &:last-child {
    right: 90px;
    left: auto;
  }
  }
`;

export const PasswordInputWrapper = styled.div`
  position: relative;
  justify-self: center;
  width: 100%;
  align-self: center;

  @media only screen and (max-width: 670px) {
    margin-left: 60px;
    padding-left: 5px;
  }

  @media only screen and (max-width: 420px) {
    padding-left: 0px;
  }
`;

export const FormLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 77px;
  transform: translateY(-80%);
  transition: 0.2s ease all;
  font-size: 13px;
  opacity: 0.5;
  pointer-events: none;
  color: black;
  user-select: none;
  font-weight: 400;

  @media only screen and (max-width: 670px) {
    left: 100px;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #bc8363;
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  height: 55px;
  width: 83%;
  transition: transform 0.1s ease-in-out;

  &:active {
    transform: scale(0.98);
  }
`;

export const ButtonText = styled.div`
  font-size: 13px;
`;

export const RecoverPasswordContainer = styled.div`
  color: #bc8363;
  margin-top: 10px;
  cursor: pointer;
  font-size: 13px;
  margin-bottom: 75px;
  transition: 1s;
  margin-left: 5px;

  &:hover {
    color: #6f04ad;
  }

  @media only screen and (max-width: 670px) {
    margin-bottom: 75px;
  }
`;

export const InferiorText = styled.div`
  display: flex;
  font-size: 13px;
  color: #8B8B8B;
`

export const SignUp = styled.div`
  color: #BC8363;
  font-size: 13px;
  cursor: pointer;
  transition: 1s;
  margin-left: 5px;

  &:hover {
    color: #6f04ad;
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease forwards; 
`;

export const ModalButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;

  &:first-child {
    background-color: #bc8363;
    color: white;
  }

  &:last-child {
    background-color: #e0e0e0;
    color: #333;
  }

  &:active {
    transform: scale(0.88);
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
`;