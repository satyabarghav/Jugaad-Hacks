import React, { useEffect, useState } from "react";
import CardDemo from "./CardDemo.jsx";
import Markdown from "react-markdown";
import axios from "axios";
export default function HeroSec() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    setSubmitted(true); // Update the 'submitted' state to true
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/generate");
      console.log(data.message);
      setMessage(data.message.message);
    } catch (error) {
      console.error("Error fetching message:", error);
    }
  };
  // useEffect(() => {
  //   handleSubmit();
  // }
  // , []);

  return (
    <>
      {submitted ? (
        <After message={message} />
      ) : (
        <Hero onSubmit={handleSubmit} />
      )}
    </>
  );
}

const After = ({ message }) => {
  const components = {
    h1: (props) => <h1 className="text-4xl font-bold mb-2" {...props} />,
    p: (props) => <p className="text-base my-4" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
    li: (props) => <li className="text-base" {...props} />,
    // Add more components for other Markdown elements as needed
  };

  return (
    <div className="p-4">
    <Markdown
      components={components}
    >
      {message}
    </Markdown>
    </div>
  );
};

const Hero = ({ onSubmit }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center h-screen bg-custom-gradient">
      <div className="lg:w-1/2 p-8 text-center lg:text-left">
        <div className="max-w-md mx-auto">
          <h1 className="text-4xl font-bold mb-2">
            Empowering Safe Connections Online
          </h1>
          <p className="text-lg mb-2">
            Empowering Safe Connections Online: Harnessing the Power of Machine
            Learning for Advanced Phishing Detection and Response
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 p-8 text-center">
        {/* Pass the handleSubmit function as a prop to the CardDemo component */}
        <CardDemo onSubmit={onSubmit} />
      </div>
    </div>
  );
};
