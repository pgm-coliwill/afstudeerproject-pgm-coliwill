"use client";

import { useEffect, useState, useRef } from "react";
import { io, Socket } from "socket.io-client";
import styles from "@/styles/chat/ChatBox.module.css";

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

  useEffect(() => {
    const socket = io(base_url!);
    socketRef.current = socket;

    socket.emit("join", currentUserId);

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
    <div className={styles.container}>
      <div className={styles.messageContainer}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`${styles.messageBlock} ${
              msg.senderId === currentUserId
                ? styles.messageRight
                : styles.messageLeft
            }`}
          >
            <span className={styles.senderName}>
              {msg.sender?.firstName} {msg.sender?.lastName}
            </span>
            <div
              className={`${styles.messageBubble} ${
                msg.senderId === currentUserId
                  ? styles.sentByMe
                  : styles.received
              }`}
            >
              {msg.message}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Typ een bericht..."
          className={styles.input}
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          Verstuur
        </button>
      </div>
    </div>
  );
}
