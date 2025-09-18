type ChatMessageProps = {
    role: "user" | "assistant";
    content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
    const isUser = role === "user";

    return (
        <div
            className={`p-3 my-2 rounded-lg max-w-[80%] ${isUser
                    ? "bg-blue-500 text-white self-end"
                    : "bg-gray-200 text-black self-start"
                }`}
        >
            {content}
        </div>
    );
}
