import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { Textarea } from "@/components/ui/textarea";
import axios from "axios";
export default function CardDemo({onSubmit}) {
  const [emailContent, setEmailContent] = React.useState("");
  console.log(emailContent);
  const handleSubmit = async () => {
    onSubmit();
    try {
      axios
        .post("http://127.0.0.1:5000/setContent", { content: emailContent })
        .then((response) => {
          console.log(response.data);
        });
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <Card className="w-full w-mx-xl">
      <CardHeader className="text-left">
        <CardTitle className="font-bold text-l">Is this a Phishing email ?</CardTitle>
        <CardDescription>You are a click away to know</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
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
        <Button variant="outline">Reset</Button>
        <Button onClick={handleSubmit}>Check</Button>
      </CardFooter>
    </Card>
  );
}
