import sys

# Using utf-8 encoding to avoid UnicodeDecodeError
with open('src/components/FAQ.tsx', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_content = [
    "const SubtleBackground = () => (\n",
    "  <div className=\"absolute inset-0 pointer-events-none\">\n",
    "    <div\n",
    "      className=\"absolute inset-0 opacity-[0.05]\"\n",
    "      style={{\n",
    "        backgroundImage: `\n",
    "          linear-gradient(to right, #C30505 1px, transparent 1px),\n",
    "          linear-gradient(to bottom, #C30505 1px, transparent 1px)\n",
    "        `,\n",
    "        backgroundSize: '80px 80px',\n",
    "      }}\n",
    "    />\n",
    "    <div className=\"absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-primary/5 to-transparent\" />\n",
    "    <div className=\"absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-primary/5 to-transparent\" />\n",
    "    <motion.div\n",
    "      animate={{\n",
    "        x: [0, 20, 0, -20, 0],\n",
    "        y: [0, -15, 25, 15, 0],\n",
    "      }}\n",
    "      transition={{ duration: 40, repeat: Infinity, ease: \"linear\" }}\n",
    "      className=\"absolute top-40 -right-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl\"\n",
    "    />\n",
    "  </div>\n",
    ");\n",
    "\n",
    "const FloatingParticles = () => {\n",
    "  const [isClient, setIsClient] = useState(false);\n",
    "  useEffect(() => setIsClient(true), []);\n",
    "\n",
    "  if (!isClient) return null;\n",
    "\n",
    "  return (\n",
    "    <div className=\"absolute inset-0 pointer-events-none overflow-hidden\">\n",
    "      {[...Array(8)].map((_, i) => (\n",
    "        <motion.div\n",
    "          key={i}\n",
    "          className=\"absolute w-0.5 h-0.5 bg-primary/20 rounded-full\"\n",
    "          style={{\n",
    "            left: `${Math.random() * 100}%`,\n",
    "            top: `${Math.random() * 100}%`,\n",
    "          }}\n",
    "          animate={{\n",
    "            y: [0, -30, 0],\n",
    "            opacity: [0, 0.2, 0],\n",
    "          }}\n",
    "          transition={{\n",
    "            duration: 6 + Math.random() * 4,\n",
    "            repeat: Infinity,\n",
    "            delay: Math.random() * 3,\n",
    "            ease: \"easeInOut\"\n",
    "          }}\n",
    "        />\n",
    "      ))}\n",
    "    </div>\n",
    "  );\n",
    "};\n"
]

lines[114:149] = new_content

with open('src/components/FAQ.tsx', 'w', encoding='utf-8') as f:
    f.writelines(lines)
print("FAQ.tsx repaired successfully with UTF-8.")
