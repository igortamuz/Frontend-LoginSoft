import React, { useState } from 'react';
import FlipCard from 'react-card-flip';
import { Body } from './styled';
import FrontCard from './frontCard';
import BackCard from './backCard';
import { sendSignUpForm } from '../../hooks/signUp';
import { sendSignInForm } from '../../hooks/signIn';

const Sign = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [signUpForm, setSignUpForm] = useState({ email: '', password: '', phone: '' });
  const [signInForm, setSignInForm] = useState({ email: '', password: '' });

  const handleSignUpFormSubmit = () => {
    sendSignUpForm(signUpForm.email, signUpForm.password, signUpForm.phone, setIsFlipped);
  };

  const handleSignInFormSubmit = () => {
    sendSignInForm(signInForm, setIsFlipped);
  };

  const handleInputChangeUp = (event) => {
    const { name, value } = event.target;
    setSignUpForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleInputChangeIn = (event) => {
    const { name, value } = event.target;
    setSignInForm(prevState => ({ ...prevState, [name]: value }));
  };

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Body>
      <FlipCard isFlipped={isFlipped}>
        <FrontCard
          handleInputChangeIn={handleInputChangeIn}
          handleSignInFormSubmit={handleSignInFormSubmit}
          handleClick={handleClick}
        />
        <BackCard
          handleInputChangeUp={handleInputChangeUp}
          signUpSendForm={handleSignUpFormSubmit}
          handleClick={handleClick}
        />
      </FlipCard>
    </Body>
  );
}

export default Sign;
