"use client";
import { useState } from "react";
import ChatMessage from "../components/ChatMessage";
import ChatInput from "../components/ChatInput";
import TypingIndicator from "../components/TypingIndicator"; // ← 追加

export default function Home() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [isTyping, setIsTyping] = useState(false); // ← 追加

  const handleSend = async (message: string) => {
    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setIsTyping(true); // ← 応答待ちフラグON

    try {
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: could not get response." },
      ]);
    } finally {
      setIsTyping(false); // ← 応答完了でフラグOFF
    }
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gradient-to-b from-neutral-100 to-amber-100 text-neutral-900">
      <div className="w-full max-w-md flex flex-col gap-4 flex-1 overflow-y-auto p-4">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} role={msg.role} content={msg.content} />
        ))}

        {/* 応答中にアニメーション表示 */}
        {isTyping && <TypingIndicator />}
      </div>
      <div className="w-full max-w-md p-4 border-t border-amber-200 bg-amber-50">
        <ChatInput onSend={handleSend} />
      </div>
    </div>
  );
}
