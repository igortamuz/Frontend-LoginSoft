import React, { useState } from 'react';
import {
  Back,
  SignupArea,
  FormGroup,
  FormField,
  FormLabel,
  Button,
  ButtonText,
  SignUp,
  IconWrapper,
  PasswordInputWrapper,
  InferiorText
} from '../styled';
import Header from '../../header';
import Lock from '../../../assents/images/Lock.svg';
import EyeIcon from '../../../assents/images/Eye.svg';
import Mail from '../../../assents/images/Mail.svg';
import Phone from '../../../assents/images/Phone.svg';
import EyeClose from '../../../assents/images/Eyeclose.svg';
import ButtonsLogin from '../../buttonsLogin';

const BackCard = ({ handleInputChangeUp, signUpSendForm, handleClick }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const validatePhoneNumber = (phoneNumber) => {
    const digitsOnly = phoneNumber.replace(/\D/g, '');
    return digitsOnly.length >= 8;
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) {
      value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
    } else {
      value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    }
    setPhone(value);
    handleInputChangeUp({ target: { name: 'phone', value: value } });
  };

  const signUpSendFormWithValidation = () => {
    if (!validatePhoneNumber(phone)) {
      alert('Please enter a valid phone number with at least 8 digits.');
      return;
    }
    signUpSendForm();
  };

  const title = 'Create Account';
  const subtitle = 'Enter your information below or continue with social media account';
  const buttonText = 'Or Register with Social Accounts';

  return (
    <Back>
      <Header title={title} subtitle={subtitle} flipback={handleClick} />
      <SignupArea>
        <FormGroup className="form__group field">
          <IconWrapper className="first-icon">
            <img src={Mail} alt="Email Icon" />
          </IconWrapper>
          <FormField
            type="email"
            className="form__field"
            placeholder="Your email address"
            name="email"
            id="Create-email"
            onChange={handleInputChangeUp}
            required
          />
          <FormLabel htmlFor="Create-email" className="form__label">
            Email Address
          </FormLabel>
        </FormGroup>
        <FormGroup className="form__group field">
          <IconWrapper className="first-icon">
            <img src={Phone} alt="Phone Icon" />
          </IconWrapper>
          <FormField
            type="text"
            className="form__field"
            placeholder="Your mobile number"
            name="phone"
            id="Create-phone"
            value={phone}
            onChange={handlePhoneChange}
            required
          />
          <FormLabel htmlFor="Create-phone" className="form__label">
            Mobile Number
          </FormLabel>
        </FormGroup>
        <FormGroup className="form__group field">
          <PasswordInputWrapper>
            <IconWrapper className="second-icon">
              <img src={Lock} alt="Lock Icon" />
            </IconWrapper>
            <FormField
              type={showPassword ? 'text' : 'password'}
              className="form__field"
              placeholder="Create password"
              name="password"
              id="Create-password"
              onChange={handleInputChangeUp}
              required
            />
            <IconWrapper onClick={toggleShowPassword}>
              <img src={showPassword ? EyeClose : EyeIcon} alt="Eye Icon" />
            </IconWrapper>
          </PasswordInputWrapper>
          <FormLabel htmlFor="Create-password" className="form__label">
            Password
          </FormLabel>
        </FormGroup>
      </SignupArea>
      <Button type="submit" onClick={signUpSendFormWithValidation}>
        <ButtonText>Create Account</ButtonText>
      </Button>
      <ButtonsLogin superiorText={buttonText} />
      <InferiorText>
        Already have an account?
        <SignUp onClick={handleClick}>Login Now</SignUp>
      </InferiorText>
    </Back>
  );
};

export default BackCard;
