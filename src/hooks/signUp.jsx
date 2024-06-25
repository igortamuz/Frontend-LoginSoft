export function sendSignUpForm(email, password, phone, setIsFlipped) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email! Make sure you didn't fill it in incorrectly!");
    return;
  }

  if (password.length < 6) {
    alert('Invalid password! Password must be at least 6 characters long.');
    return;
  }

  const digitsOnly = phone.replace(/\D/g, '');
  if (digitsOnly.length < 8) {
    alert('Please enter a valid phone number with at least 8 digits.');
    return;
  }

  const storedUserData = localStorage.getItem('userData');
  if (storedUserData) {
    const { email: storedEmail } = JSON.parse(storedUserData);
    if (storedEmail === email) {
      alert('This email is already in use!');
      return;
    }
  }

  setTimeout(() => {
    console.log('Simulating sign-up form submission...');
    const userData = { email, password, phone };
    localStorage.setItem('userData', JSON.stringify(userData));
    alert('Account registered!');
    setIsFlipped(prevState => !prevState);
  }, 1000);
}
