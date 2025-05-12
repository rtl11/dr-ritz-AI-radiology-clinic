import React, { useState } from "react";

const DrRitzChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello, I'm Dr. Ritz! How can I help you with radiology?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");

  const handleSendMessage = async () => {
    if (userInput.trim() === "") return;

    const userMessage = { text: userInput, sender: "user" };
    setMessages([...messages, userMessage]);
    setUserInput("");

    // Here you can connect to an AI API for response (e.g., OpenAI)
    const botResponse = { text: "I'm processing your query...", sender: "bot" };
    setMessages((prevMessages) => [...prevMessages, botResponse]);

    // Simulate a delay for the bot response
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages.slice(0, -1),
        { text: "AI response here!", sender: "bot" },
      ]);
    }, 1500);
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold text-blue-700 mb-4">💬 Chat with Dr. Ritz AI</h2>
      <div className="space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={msg.sender === "bot" ? "text-left" : "text-right"}>
            <p className={`p-2 rounded ${msg.sender === "bot" ? "bg-gray-200" : "bg-blue-500 text-white"}`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex">
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-l-md w-full"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          placeholder="Ask a question..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default DrRitzChatBot;
