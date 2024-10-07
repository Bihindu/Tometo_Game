import React from 'react';
import { Link } from 'react-router-dom'
const TermsAndConditionsPage = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Terms and Conditions</h1>
      <p style={{ color: 'white' }}>Welcome to our game! Before you start playing, please read these terms and conditions carefully.</p>

      <h2>1. Introduction</h2>
      <p style={{ color: 'white' }}>These terms and conditions govern your use of our game. By accessing or using the game, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms and conditions, you may not access the game.</p>

      <h2>2. Gameplay</h2>
      <p style={{ color: 'white' }}>Our game is a fun and interactive quiz game where players answer questions to earn points. The objective of the game is to answer as many questions correctly as possible within the given time limit.and it is 120 seconds</p>

      <h2>3. User Accounts</h2>
      <p style={{ color: 'white' }}>In order to play the game, you may be required to create a user account. which is needed to create a virtual identity.</p>

      <h2>4. Privacy</h2>
      <p style={{ color: 'white' }}>We are committed to protecting your privacy. Please review our Privacy Policy to understand how we collect, use, and disclose your information.</p>

      <h2>5. Limitation of Liability</h2>
      <p style={{ color: 'white' }}>Our game is provided "as is" and "as available" without warranties of any kind, either express or implied. We shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the game.</p>

      <h2>6. Changes to Terms and Conditions</h2>
      <p style={{ color: 'white' }}>We reserve the right to modify or replace these terms and conditions at any time. Your continued use of the game after any such changes constitutes your acceptance of the new terms and conditions.</p>

      <h2>7. Contact Us</h2>
      <p style={{ color: 'white' }}>If you have any questions about these terms and conditions, please contact us at support@example.com.</p>

      <Link to="/game">
        <button>Start Game</button>
      </Link>
    </div>
  );
};

export default TermsAndConditionsPage;
