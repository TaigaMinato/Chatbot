type ChatMessageProps = {
    role: "user" | "assistant";
    content: string;
};

export default function ChatMessage({ role, content }: ChatMessageProps) {
    const isUser = role === "user";
    return (
        <div
            className={`flex ${isUser ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm leading-relaxed ${isUser
                        ? "bg-amber-200 text-neutral-900 rounded-br-none"  // ユーザー → ベージュ
                        : "bg-white text-neutral-800 rounded-bl-none"      // アシスタント → 白ベース
                    }`}
            >
                {content}
            </div>
        </div>
    );
}
