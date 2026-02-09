
"use client"
import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import MenuIcon from "./ui/icon-menu"
import { ContactPopup } from "@/components/contact-popup"
import { Mail } from "lucide-react"

const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "packages", label: "Packages", href: "/packages" },
  { id: "support", label: "Support", href: "/support" },
  { id: "about", label: "About", href: "/about" },
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
  const [contactPopupOpen, setContactPopupOpen] = useState(false)
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0, opacity: 0 })
  const itemRefs = useRef<{ [key: string]: HTMLAnchorElement | null }>({})
  const pathname = usePathname()

  // Update active item based on pathname path
  useEffect(() => {
    if (pathname === "/packages") setActiveItem("packages")
    else if (pathname === "/support") setActiveItem("support")
    else if (pathname === "/about") setActiveItem("about")

    else if (pathname === "/") {
      setActiveItem("home")
    }
  }, [pathname])

  // Update indicator position when activeItem changes
  useEffect(() => {
    const activeElement = itemRefs.current[activeItem]
    if (activeElement) {
      setIndicatorStyle({
        left: activeElement.offsetLeft,
        width: activeElement.offsetWidth,
        opacity: 1
      })
    }
  }, [activeItem])

  // Intersection Observer for scroll detection on home page
  useEffect(() => {
    // Only run on home page
    if (pathname !== "/") return

    const sections = document.querySelectorAll("section[id]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            const sectionId = entry.target.getAttribute("id")
            if (sectionId && navItems.some(item => item.id === sectionId)) {
              setActiveItem(sectionId)
            }
          }
        })
      },
      {
        threshold: [0.5], // Trigger when 50% of section is visible
        rootMargin: "-100px 0px -100px 0px", // Account for navbar height
      }
    )

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Handle smooth scroll for anchor links
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    // Only handle hash links on the home page
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault()
      const sectionId = href.replace("/#", "")
      const section = document.getElementById(sectionId)

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" })
        setActiveItem(id)
        // Update URL hash without jumping
        window.history.pushState(null, "", href)
      }
    } else if (href === "/" && pathname === "/") {
      // Scroll to top on home page
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
      setActiveItem("home")
    } else {
      // Let Next.js handle normal navigation
      setActiveItem(id)
    }
  }

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="flex  items-center justify-center md:max-w-7xl mx-auto">
        <motion.nav
          variants={menuVariants}
          animate={menuOpen ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-[3.5rem] md:w-auto bg-[#D0D0D0]/50 backdrop-blur-3xl border-2 border-black rounded-xl px-1.5 py-1 shadow-[0px_0px_30px_rgba(0,0,0,0.1)]  inset-shadow-[0_0_20px] inset-shadow-[#fff]">


          <div className="flex justify-between  items-center gap-1 relative ">
            <Link href="/" className="flex items-center gap-2 px-5 cursor-pointer z-20">
              <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <Image src="/logos/logo.svg" alt="logo" width={32} height={32} />
              </div>
              <span className="font-bold text-lg">Digital Mitra</span>
            </Link>

            {/* Sliding Indicator */}
            <div
              className="absolute hidden md:block h-[calc(100%-4px)] -top-0.8 bg-black/80 rounded-lg transition-all duration-300 ease-in-out border-2 border-gray-800 shadow-[0px_0px_10px_rgba(0,0,0,0.1)] inset-shadow-[0_0_20px] inset-shadow-black z-0"
              style={{
                left: indicatorStyle.left,
                width: indicatorStyle.width,
                opacity: indicatorStyle.opacity,
              }}
            />

            {navItems.map((item) => (
              <Link
                key={item.id}
                ref={(el) => {
                  itemRefs.current[item.id] = el
                }}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href, item.id)}
                className={`hidden md:block relative px-6 py-3 text-sm font-medium transition-colors duration-200 z-10 ${activeItem === item.id
                  ? "text-gray-100" // active text color
                  : "text-gray-500 hover:text-[#5C82A3]"
                  }`}
              >
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
                      <Link
                        href={item.href}
                        onClick={(e) => {
                          handleNavClick(e, item.href, item.id)
                          setMenuOpen(false)
                        }}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>

            {/* Contact Button */}
            <button
              onClick={() => setContactPopupOpen(true)}
              className="hidden md:flex items-center gap-2 mr-0.5 px-5 py-2 bg-[#5C82A3] text-white rounded-lg font-bold text-sm hover:bg-gray-800 transition-colors border-2 border-black  hover:translate-y-0.5 z-20"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </button>

            <MenuIcon toggle={toggleMenu} open={menuOpen} />
          </div>
        </motion.nav>
      </div>

      {/* Contact Popup */}
      <ContactPopup isOpen={contactPopupOpen} onClose={() => setContactPopupOpen(false)} />
    </motion.div>
  )
}

