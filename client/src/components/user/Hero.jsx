import React, { useState } from "react";
import CardDemo from "./CardDemo.jsx";
import Markdown from "react-markdown";
import { Progress } from "../ui/progress.jsx";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card.jsx";
import NavbarDemo from "./NavbarDemo.jsx";
import Loader from "./Loader.jsx";
export default function HeroSec() {
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);

  // Function to handle form submission and set the state
  const handleSubmit = (data) => {
    setSubmitted(true); // Update the 'submitted' state to true
    setMessage(data.message.message); // Set the message state with the response message
    setScore(data.message.confidence_score); // Set the score state with the confidence score
  };

  return (
    <>
      <div>
        {submitted ? (
          <After message={message} score={score} />
        ) : (
          <Hero onSubmit={handleSubmit} />
        )}
      </div>
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
  };

  const cardColor = message.includes("benign") ? "bg-notphish" : "bg-phish";

  if (score === 0) {
    return <Loader />;  // Render the loader if score is 0
  }

  return (
    <>
      <NavbarDemo />
      <div className="flex justify-center items-center">
        <div className="p-4">
          <Card className={`w-full w-max-md flex flex-col items-center justify-center ${cardColor}`}>
            <CardHeader>
              <CardTitle>Phishing Detection Results</CardTitle> {score * 100}
            </CardHeader>
            <CardContent className="grid">
              <Progress value={score * 100} size="md" />
              <Markdown components={components}>{message}</Markdown>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

const Hero = ({ onSubmit }) => {
  return (
    <>
      <NavbarDemo />
      <div className="h-screen bg-custom-gradient">
        <div className="flex flex-col lg:flex-row items-center justify-center pt-8">
          <div className="lg:w-1/2 p-8 text-center lg:text-left">
            <div className="max-w-md mx-auto">
              <h1 className="text-5xl font-bold mb-2">
                Empowering Safe Connections Online
              </h1>
              <p className="text-lg mb-2">
                Empowering Safe Connections Online: Harnessing the Power of
                Machine Learning for Advanced Phishing Detection and Response
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 p-8 text-center">
            <CardDemo onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};
