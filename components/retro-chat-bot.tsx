"use client"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send, User, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { packageDetails, supportPlanDetails } from "@/lib/data"
import { AnimatePresence, motion } from "framer-motion"

type Message = {
    id: string
    text: string
    sender: "user" | "bot"
    timestamp: Date
}

export function RetroChatBot() {
    const [isOpen, setIsOpen] = useState(false)
    const [messages, setMessages] = useState<Message[]>([
        {
            id: "welcome",
            text: "HELLO HUMAN. I AM DIGITAL MITRA BOT v1.0. ASK ME ABOUT 'PRICING', 'STARTER KIT', OR 'SUPPORT'.",
            sender: "bot",
            timestamp: new Date(),
        },
    ])
    const [input, setInput] = useState("")
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages])

    const generateResponse = (query: string): string => {
        const q = query.toLowerCase()

        // Pricing Match
        if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
            const prices = packageDetails.map((p) => `- ${p.title}: ${p.price}`).join("\n")
            return `HERE IS OUR PRICING SHEET:\n${prices}\n\nASK ABOUT A SPECIFIC PLAN FOR MORE INFO.`
        }

        // Specific Package Matching
        const foundPackage = packageDetails.find(
            (p) => q.includes(p.slug) || q.includes(p.title.toLowerCase()) || (q.includes("starter") && p.slug.includes("starter")) || (q.includes("booster") && p.slug.includes("booster")) || (q.includes("max") && p.slug.includes("max"))
        )

        if (foundPackage) {
            return `FOUND: ${foundPackage.title.toUpperCase()}\nCOST: ${foundPackage.price}\n\n${foundPackage.shortDescription.toUpperCase()}\n\nTYPE 'BUY ${foundPackage.title.split(' ')[0].toUpperCase()}' TO PROCEED.`
        }

        // Support Matching
        if (q.includes("support") || q.includes("care") || q.includes("help")) {
            const plans = supportPlanDetails.map(p => `- ${p.title}: ${p.price}/${p.period}`).join("\n")
            return `WE OFFER SUPPORT PLANS:\n${plans}\n\nWHICH ONE DO YOU NEED?`
        }

        // Fun/General
        if (q.includes("hello") || q.includes("hi")) {
            return "GREETINGS. STATE YOUR INQUIRY."
        }

        return "ERROR: QUERY NOT RECOGNIZED. TRY 'PRICING', 'STARTER', 'BOOSTER', OR 'SUPPORT'."
    }

    const handleSend = () => {
        if (!input.trim()) return

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: "user",
            timestamp: new Date(),
        }

        setMessages((prev) => [...prev, userMsg])
        setInput("")

        // Simulate think time
        setTimeout(() => {
            const responseText = generateResponse(userMsg.text)
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: responseText,
                sender: "bot",
                timestamp: new Date(),
            }
            setMessages((prev) => [...prev, botMsg])
        }, 600)
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSend()
        }
    }

    return (
        <div className="fixed bottom-6 right-6 z-50 font-mono">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-white border-[3px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-black text-white p-3 flex justify-between items-center border-b-[3px] border-black">
                            <div className="flex items-center gap-2">
                                <Bot className="w-5 h-5" />
                                <span className="font-bold tracking-widest text-sm">DM-BOT v1.0</span>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#F5F5F5]">
                            {messages.map((msg) => (
                                <div
                                    key={msg.id}
                                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[85%] p-3 text-sm font-bold border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] ${msg.sender === "user"
                                                ? "bg-black text-white rounded-l-xl rounded-tr-xl"
                                                : "bg-white text-black rounded-r-xl rounded-tl-xl"
                                            }`}
                                    >
                                        <div className="whitespace-pre-wrap leading-tight">{msg.text}</div>
                                        <div className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-gray-400' : 'text-gray-500'}`}>
                                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 bg-white border-t-[3px] border-black flex gap-2">
                            <Input
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="TYPE COMMAND..."
                                className="font-bold border-2 border-black focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none bg-[#F5F5F5] placeholder:text-gray-400"
                            />
                            <Button
                                onClick={handleSend}
                                className="bg-black text-white border-2 border-black hover:bg-gray-800 rounded-none w-12 px-0"
                            >
                                <Send className="w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Launcher */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="ml-auto w-14 h-14 bg-[#5C82A3] text-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center rounded-full hover:bg-[#4a6b8a] transition-colors"
            >
                {isOpen ? <X className="w-6 h-6 stroke-[3px]" /> : <MessageSquare className="w-6 h-6 stroke-[3px]" />}
            </motion.button>
        </div>
    )
}
