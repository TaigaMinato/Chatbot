"use client";
import { useState } from "react";

type Props = {
    onSend: (message: string) => void;
};

export default function ChatInput({ onSend }: Props) {
    const [input, setInput] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;
        onSend(input);
        setInput("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mt-4 w-full">
            <input
                type="text"
                className="flex-1 border rounded px-3 py-2"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Send
            </button>
        </form>
    );
}
