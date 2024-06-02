import React, { useEffect, useState } from "react";
import CardDemo from "./CardDemo.jsx";
import Markdown from "react-markdown";
import axios from "axios";
import { Progress } from "../ui/progress.jsx";
import { Card, CardContent, CardHeader,CardTitle } from "../ui/card.jsx";
export default function HeroSec() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  // Function to handle form submission
  const handleSubmit = async () => {
    setSubmitted(true); // Update the 'submitted' state to true
    try {
      const { data } = await axios.get("http://127.0.0.1:5000/generate");
      console.log(data.message);
      setMessage(data.message.message);
      setScore(data.message.confidence_score);
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
        <After message={message} score={score} />
      ) : (
        <Hero onSubmit={handleSubmit} />
      )}
    </>
  );
}

const After = ({ message, score }) => {
  const components = {
    h1: (props) => <h1 className="text-4xl font-bold mb-2" {...props} />,
    p: (props) => <p className="text-base my-4" {...props} />,
    ul: (props) => <ul className="list-disc list-inside my-4" {...props} />,
    ol: (props) => <ol className="list-decimal list-inside my-4" {...props} />,
    li: (props) => <li className="text-base" {...props} />,
    // Add more components for other Markdown elements as needed
  };
  console.log(score * 100);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4">
        <Card className="w-auto flex items-center justify-center h-screen">
          <CardHeader>
            <CardTitle>Phishing Detection Results</CardTitle> {score*100}</CardHeader>
          <CardContent>
          <Progress value={score * 100} />
            <Markdown components={components}>{message}</Markdown>
          </CardContent>
        </Card>
      </div>
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
