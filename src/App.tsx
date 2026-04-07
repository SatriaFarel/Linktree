import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Instagram, 
  MessageCircle, 
  Globe, 
  ExternalLink,
  Code2,
  Mail,
  CheckCircle2,
  Server,
  Code,
  Paintbrush,
  Database

} from "lucide-react";
import { useState } from "react";

const links = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/satria-farel-cipta-permata",
    icon: <Linkedin className="w-5 h-5" />,
    color: "hover:text-blue-400",
    description: "Professional network & experience"
  },
  {
    name: "GitHub",
    url: "https://github.com/Satriafarel",
    icon: <Github className="w-5 h-5" />,
    color: "hover:text-gray-300",
    description: "Open source projects & code"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/satriafarel30",
    icon: <Instagram className="w-5 h-5" />,
    color: "hover:text-pink-400",
    description: "Personal updates & photography"
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/+6288299309375",
    icon: <MessageCircle className="w-5 h-5" />,
    color: "hover:text-green-400",
    description: "Quick chat & collaboration"
  },
  {
    name: "Website Portofolio",
    url: "https://portofolio-sf.vercel.app/",
    icon: <Globe className="w-5 h-5" />,
    color: "hover:text-sky-400",
    description: "Showcase of my best work"
  }
];


const techStack = [
  { name: "Laravel", icon: <Server className="w-3 h-3" /> },     // backend
  { name: "React", icon: <Code className="w-3 h-3" /> },         // frontend
  { name: "Tailwind", icon: <Paintbrush className="w-3 h-3" /> },// styling
  { name: "SQL", icon: <Database className="w-3 h-3" /> },       // database
];

export default function App() {
  const [copied, setCopied] = useState(false);
  const email = "satriafarel40@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center py-12 px-6 overflow-x-hidden">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-[40%] left-[20%] w-[30%] h-[30%] bg-blue-600/5 rounded-full blur-[100px]" />
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md flex flex-col items-center"
      >
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="mb-6 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-bold text-emerald-400 uppercase tracking-widest"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for projects
        </motion.div>

        {/* Profile Section */}
        <div className="mb-10 text-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative mb-6 inline-block"
          >
            <div className="absolute inset-0 bg-sky-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />
            <div className="relative w-28 h-28 rounded-3xl overflow-hidden border border-white/10 glass p-1.5 shadow-2xl">
              <img 
                src="assets/kimizuka.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl font-serif font-medium tracking-tight mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Satria Farel <span className="text-sky-400">Cipta Permata</span>
          </motion.h1>
          
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl glass border-white/5 text-sm font-medium text-sky-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Code2 className="w-4 h-4" />
            Junior Web Developer
          </motion.div>
        </div>

        {/* Tech Stack Section */}
        <div className="w-full mb-10">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 text-center">Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-2">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-[11px] font-medium text-white/60"
              >
                {tech.icon}
                {tech.name}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Links Section */}
        <div className="w-full space-y-3 mb-10">
          <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-4 text-center">Connect</p>
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ x: 6, backgroundColor: "rgba(255, 255, 255, 0.06)" }}
              className={`group flex items-center justify-between w-full p-4 glass border-white/5 rounded-2xl transition-all duration-300 ${link.color}`}
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                  {link.icon}
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-sm tracking-wide">{link.name}</span>
                  <span className="text-[10px] text-white/40 group-hover:text-white/60 transition-colors">{link.description}</span>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 opacity-20 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </motion.a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="w-full mb-12">
          <button 
            onClick={copyEmail}
            className="group relative w-full p-4 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-between overflow-hidden transition-all hover:bg-sky-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-sky-500/20">
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">Get in touch</span>
                <span className="text-sm font-medium text-white/70">{email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {copied ? (
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className="flex items-center gap-1 text-emerald-400 text-[10px] font-bold uppercase"
                >
                  <CheckCircle2 className="w-3 h-3" />
                  Copied
                </motion.div>
              ) : (
                <span className="text-[10px] font-bold text-white/20 uppercase group-hover:text-white/40 transition-colors">Click to copy</span>
              )}
            </div>
          </button>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="text-center pb-8"
        >
          <p className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">
            © 2026 <span className="text-white/40">Satria Farel</span> • Digital Presence
          </p>
        </motion.footer>
      </motion.div>

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-[15%] w-2 h-2 bg-sky-400/20 rounded-full animate-float" />
        <div className="absolute bottom-40 right-[20%] w-3 h-3 bg-purple-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-[60%] left-[10%] w-1.5 h-1.5 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
}
