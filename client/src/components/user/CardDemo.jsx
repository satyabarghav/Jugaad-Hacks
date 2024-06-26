import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
import config from "@/config.js";

export default function CardDemo({ onSubmit }) {
  const [emailContent, setEmailContent] = useState("");
  const formRef = useRef();

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${config.url}/generate`, { content: emailContent });
      onSubmit(response.data);  // Pass the response data to the parent component
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <Card className="w-full w-mx-xl pb-5">
      <CardHeader className="text-left">
        <CardTitle className="font-bold text-l">Is this a Phishing email?</CardTitle>
        <CardDescription>You are a click away to know</CardDescription>
      </CardHeader>
      <CardContent>
        <form ref={formRef}>
          <div className="grid w-full gap-1.5 text-left">
            <Label htmlFor="message-2">Email Content</Label>
            <Textarea
              onChange={(e) => setEmailContent(e.target.value)}
              placeholder="Type your message here."
              id="message-2"
            />
            <p className="text-sm text-muted-foreground">
              Your email content will be analyzed for phishing content.
            </p>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => formRef.current.reset()}>Reset</Button>
        <Button onClick={handleSubmit}>Check</Button>
      </CardFooter>
    </Card>
  );
}
