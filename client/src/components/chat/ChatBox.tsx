// src/components/chat/ChatBox.tsx
"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  id: number;
  senderId: number;
  receiverId: number;
  message: string;
  sentAt: string;
  sender?: {
    firstName: string;
    lastName: string;
  };
};

type Props = {
  currentUserId: number;
  otherUserId: number;
};

const base_url = process.env.NEXT_PUBLIC_API_BASE_URL;

export default function ChatBox({ currentUserId, otherUserId }: Props) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<Socket | null>(null);

  // change this to your actual backend

  useEffect(() => {
    // Connect to socket server
    const socket = io(base_url);
    socketRef.current = socket;

    socket.emit("join", currentUserId);

    // Listen for messages
    socket.on("receive_message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("message_sent", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => {
      socket.disconnect();
    };
  }, [currentUserId]);

  useEffect(() => {
    // Load past messages from DB
    const fetchMessages = async () => {
      const res = await fetch(
        `${base_url}/api/messages/${currentUserId}/${otherUserId}`
      );
      const data = await res.json();
      setMessages(data);
    };

    fetchMessages();
  }, [currentUserId, otherUserId]);

  const sendMessage = () => {
    if (!input.trim() || !socketRef.current) return;

    socketRef.current.emit("send_message", {
      senderId: currentUserId,
      receiverId: otherUserId,
      message: input,
    });

    setInput("");
  };

  return (
    <div className="w-full max-w-md border p-4 rounded shadow space-y-4">
      <div className="h-64 overflow-y-auto space-y-2 bg-gray-50 p-2 rounded">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col max-w-xs ${
              msg.senderId === currentUserId
                ? "ml-auto items-end"
                : "items-start"
            }`}
          >
            {/* Display sender name */}
            <span className="text-xs text-gray-500 mb-1">
              {msg.sender?.firstName} {msg.sender?.lastName}
            </span>

            {/* Message bubble */}
            <div
              className={`p-2 rounded ${
                msg.senderId === currentUserId
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Typ een bericht..."
          className="flex-1 border rounded px-3 py-2"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Verstuur
        </button>
      </div>
    </div>
  );
}
