
"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "./ui/icon-menu"

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "packages", label: "Packages", href: "/packages" },
  { id: "support", label: "Support", href: "/support" },
  { id: "about", label: "About", href: "/#about" },
  { id: "faq", label: "FAQ", href: "/#faq" },
]

const menuVariants = {
  hidden: {
    height: "3.5rem",
    borderRadius: "19px",
  },
  visible: {
    height: "18rem",
    borderRadius: "19px",
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
  const pathname = usePathname()

  // Update active item based on pathname path
  useEffect(() => {
    if (pathname === "/packages") setActiveItem("packages")
    else if (pathname === "/support") setActiveItem("support")
    else if (pathname === "/") setActiveItem("home")
    // Hash handling is trickier in SSR, usually effectively 'home' or specific section
  }, [pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="fixed top-0 left-0 right-0 z-50 p-4" >
      <div className="flex  items-center justify-center md:max-w-7xl mx-auto">
        <motion.nav
          variants={menuVariants}
          animate={menuOpen ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-[3.5rem] md:w-auto bg-[#D0D0D0]/50 backdrop-blur-3xl border-2 border-black rounded-xl px-1.5 py-1 shadow-[0px_0px_30px_rgba(0,0,0,0.1)]  inset-shadow-[0_0_20px] inset-shadow-[#fff]">


          <div className="flex justify-between  items-center gap-1 relative ">
            <Link href="/" className="flex items-center gap-2 px-5 cursor-pointer">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src="/logos/logo.svg" alt="logo" width={32} height={32} />
              </div>
              <span className="font-bold text-lg">Digital Mitra</span>
            </Link>


            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveItem(item.id)}
                className={`hidden md:block  relative px-6 py-3 text-sm font-medium transition-colors duration-200 z-10 ${activeItem === item.id
                  ? "text-gray-100"
                  : "text-gray-500 hover:text-[#5C82A3] "
                  }`}
              >
                {activeItem === item.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute border-2 border-gray-800 shadow-[0px_0px_10px_rgba(0,0,0,0.1)]  inset-shadow-[0_0_20px] inset-shadow-black inset-0 bg-black/80 rounded-lg"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {item.label}
              </Link>
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
                      <Link href={item.href} onClick={() => setMenuOpen(false)}>
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
            <MenuIcon toggle={toggleMenu} open={menuOpen} />
          </div>
        </motion.nav>
      </div>
    </motion.div>
  )
}

