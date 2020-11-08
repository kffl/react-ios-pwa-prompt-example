import React from 'react';
import './App.css';
import PWAPrompt from 'react-ios-pwa-prompt';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <strong>User Agent:</strong> {window.navigator.userAgent}
        </p>
        <a
          className="App-link"
          href="https://github.com/chrisdancee/react-ios-pwa-prompt"
          target="_blank"
          rel="noopener noreferrer"
        >
          react-ios-pwa-prompt
        </a>
      </header>
      <PWAPrompt
        timesToShow={100000}
        permanentlyHideOnDismiss={false}
      />
    </div>
  );
}

export default App;
