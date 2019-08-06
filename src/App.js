import React from 'react';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserConsumer } from './UserContext';
import './index.css';

function App() {
  return (
      <UserConsumer>
        {({ user }) => 
          user ? (
            <MainPage />
          ) : (
            <LoginPage onLogin={this.handleLogin} />
          )
        }
      </UserConsumer>
  );
}

export default App;