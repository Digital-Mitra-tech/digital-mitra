
"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import MenuIcon from "./ui/icon-menu"

const navItems = [
  { id: "home", label: "Home" },
  { id: "packages", label: "Packages" },
  { id: "support", label: "Support" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
]

const menuVariants = {
  hidden: {
    height: "3.5rem",
    borderRadius: "19px",
    x: 0,
    y: 0,

  },
  visible: {
    height: "18rem",
    borderRadius: "19px",
    x: "0rem", // expands left
    y: "0rem", // expands downward

  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(10px)", scale: 0.5 },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,

    transition: { delay: 0.2 + i * 0.1, duration: 0.3 },
  }),
};


export function Navigation() {
  const [activeItem, setActiveItem] = useState("home")
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const scrollToSection = (id: string) => {
    setActiveItem(id)
    setMenuOpen(false) // Close menu on mobile after selecting
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="flex items-center justify-center    md:max-w-7xl mx-auto">
        {/* Logo */}


        {/* Navigation Pills */}
        <motion.nav
          variants={menuVariants}
          animate={menuOpen ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full md:w-auto bg-[#D0D0D0]/30 backdrop-blur-3xl border-2 border-white rounded-full px-1.5 py-1 shadow-[0px_0px_30px_rgba(0,0,0,0.1)]  inset-shadow-[0_0_20px] inset-shadow-[#fff]">
          <div className="flex justify-between  items-center gap-1 relative ">

            <div className="flex items-center gap-2 px-5 cursor-pointer" onClick={() => scrollToSection("home")}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src="logos/logo.svg" alt="logo" width={32} height={32} />
              </div>
              <span className="font-bold text-lg">Digital Mitra</span>
            </div>

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hidden md:block  relative px-6 py-3 text-sm font-medium transition-colors duration-200 z-10 ${activeItem === item.id
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
                  }`}
              >
                {activeItem === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute border-2 border-gray-100 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]  inset-shadow-[0_0_20px] inset-shadow-gray-100 inset-0 bg-[#D0D0D0]/50 rounded-lg"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.label}
              </button>
            ))}
            <AnimatePresence>
              {menuOpen && (
                <motion.ul className="md:hidden mt-4 flex items-center flex-col  gap-5 w-full px-6 absolute top-10">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.id}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      custom={index}
                      exit="hidden"
                      className="cursor-pointer hover:text-blue-600 font-medium"
                    >
                      <a href={`#${item.id}`}>{item.label}</a>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <MenuIcon toggle={toggleMenu} open={menuOpen} />
          </div>
        </motion.nav>
      </div>
    </div>
  )
}

