export default function TypingIndicator() {
    return (
        <div className="flex items-center space-x-1 text-gray-400 text-sm px-2">
            <span className="sr-only">考え中...</span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
            <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
        </div>
    );
}
