export function sendSignInForm(signInForm, setIsFlipped) {
  const { email, password } = signInForm;

  setTimeout(() => {
    console.log('Simulating sign-in form submission...');
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData) {
      const { email: storedEmail, password: storedPassword } = JSON.parse(storedUserData);

      if (email === storedEmail && password === storedPassword) {
        console.log('Login successful');
        const token = 'simulated_token';
        localStorage.setItem('token', token);
        alert('Login successful!');
        window.open("https://portifolio-main-ts.vercel.app", '_self');
      } else {
        console.error('Login error: Invalid credentials');
        alert('Invalid credentials!');
      }
    } else {
      console.error('Login error: No user data found');
      alert('No user data found. Please sign up first.');
    }
  }, 1000);
}
