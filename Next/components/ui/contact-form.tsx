"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setIsLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Your Name"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Input
          type="email"
          placeholder="Your Email"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Input
          type="text"
          placeholder="Subject"
          required
          disabled={isLoading}
        />
      </div>
      <div className="space-y-2">
        <Textarea
          placeholder="Your Message"
          required
          disabled={isLoading}
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}