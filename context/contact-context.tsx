"use client"

import React, { createContext, useContext, useState } from "react"
import { ContactPopup } from "@/components/contact-popup"

interface ContactContextType {
    openContactPopup: () => void
    closeContactPopup: () => void
}

const ContactContext = createContext<ContactContextType | undefined>(undefined)

export function ContactProvider({ children }: { children: React.ReactNode }) {
    const [isOpen, setIsOpen] = useState(false)

    const openContactPopup = () => setIsOpen(true)
    const closeContactPopup = () => setIsOpen(false)

    return (
        <ContactContext.Provider value={{ openContactPopup, closeContactPopup }}>
            {children}
            <ContactPopup isOpen={isOpen} onClose={closeContactPopup} />
        </ContactContext.Provider>
    )
}

export function useContact() {
    const context = useContext(ContactContext)
    if (context === undefined) {
        throw new Error("useContact must be used within a ContactProvider")
    }
    return context
}
