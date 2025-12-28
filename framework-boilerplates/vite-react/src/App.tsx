import React from "react";
import "./App.css";

function App() {
  const handleClick = () => {
    alert("🚀 HardX Bot bookings will open very soon!");
  };

  return (
    <div className="app">
      {/* Logo / Brand */}
      <header className="header">
        <h2>
          <span>HardX</span> Bot
        </h2>
      </header>

      {/* Center Content */}
      <main className="content">
        <h1>Coming Soon</h1>
        <p>
          HardX Bot is an intelligent AI assistant built to automate tasks,
          respond instantly, and elevate your business conversations.
        </p>

        <button onClick={handleClick}>
          Book Your AI Bot Now
        </button>
      </main>
    </div>
  );
}

export default App;
