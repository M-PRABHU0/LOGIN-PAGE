
const container = document.getElementById('login-container');

const generateOTP = () => {
  // Generate a 6-digit random OTP for simplicity.
  return Math.floor(100000 + Math.random() * 900000).toString();
};

const renderLogin = () => {
  container.innerHTML = '';

  const phoneNumberInput = document.createElement('input');
  phoneNumberInput.className = 'input';
  phoneNumberInput.type = 'tel';
  phoneNumberInput.placeholder = 'Enter your phone number';

  const sendOTPButton = document.createElement('button');
  sendOTPButton.className = 'button';
  sendOTPButton.textContent = 'Send OTP';

  sendOTPButton.addEventListener('click', () => {
    // Simulate sending OTP to the server (you should implement this in your backend).
    const phoneNumber = phoneNumberInput.value;
    const otp = generateOTP();

    // Log OTP to the console (you would send it to the server in a real scenario).
    console.log('OTP for ${phoneNumber}: ${otp}');

    // Render OTP verification UI.
    renderOtpVerification(phoneNumber, otp);
  });
  container.appendChild(phoneNumberInput);
  container.appendChild(document.createElement('br'));
  container.appendChild(sendOTPButton);
};

const renderOtpVerification = (phoneNumber, expectedOtp) => {
  container.innerHTML = '';

  const otpInput = document.createElement('input');
  otpInput.className = 'input';
  otpInput.type = 'text';
  otpInput.placeholder = 'Enter OTP';

  const verifyOTPButton = document.createElement('button');
  verifyOTPButton.className = 'button';
  verifyOTPButton.textContent = 'Verify OTP';

  verifyOTPButton.addEventListener('click', () => {
    const enteredOtp = otpInput.value;

    // Simulate OTP verification (you should implement this in your backend).
    if (enteredOtp === expectedOtp) {
      alert('OTP verified. Login successful for ${phoneNumber}');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  });
  // Initial rendering of login UI.
renderLogin();



