"use client"
import React, { useState, useEffect, useRef } from "react";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  Palette,
  Smartphone,
  ArrowRight,
  Star,
  Zap,
  Award,
  Play,
  Quote,
  Calendar,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Briefcase,
  GraduationCap,
  Coffee,
  Heart,
  Send,
  Database,
  Server,
  Globe,
  Layers,
  Target,
  Rocket,
  CheckCircle,
  XCircle,
  Sun,
  Moon,
  Download,
  Eye,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bell,
  FileText,
  Book,
  Video,
  Twitter,
  Instagram,
  Menu,
  X,
  ArrowUp,
  Shield,
  Cpu,
  Activity,
  Package,
  GitBranch,
  Terminal,
  Figma,
  Chrome,
} from "lucide-react";

const PortfolioLanding2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [visibleItems, setVisibleItems] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState("all");
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeSkillCategory, setActiveSkillCategory] = useState("frontend");

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      clearInterval(testimonialInterval);
    };
  }, []);

  
  const Trophy = Award;
  const Medal = Award;

  const skills = {
    frontend: [
      {
        icon: Code,
        name: "React/Next.js",
        level: 95,
        color: "from-blue-500 to-cyan-400",
      },
      {
        icon: Code,
        name: "Vue.js",
        level: 90,
        color: "from-green-500 to-emerald-400",
      },
      {
        icon: Code,
        name: "TypeScript",
        level: 92,
        color: "from-blue-600 to-indigo-500",
      },
      {
        icon: Palette,
        name: "Tailwind CSS",
        level: 95,
        color: "from-cyan-500 to-blue-500",
      },
      {
        icon: Code,
        name: "Three.js",
        level: 85,
        color: "from-purple-500 to-pink-500",
      },
      {
        icon: Code,
        name: "Angular",
        level: 80,
        color: "from-red-500 to-red-600",
      },
    ],
    backend: [
      {
        icon: Server,
        name: "Node.js",
        level: 90,
        color: "from-green-600 to-green-500",
      },
      {
        icon: Database,
        name: "MongoDB",
        level: 88,
        color: "from-green-500 to-emerald-600",
      },
      {
        icon: Database,
        name: "PostgreSQL",
        level: 85,
        color: "from-blue-600 to-indigo-600",
      },
      {
        icon: Server,
        name: "Python/Django",
        level: 82,
        color: "from-yellow-500 to-green-500",
      },
      {
        icon: Globe,
        name: "GraphQL",
        level: 87,
        color: "from-pink-500 to-purple-500",
      },
      {
        icon: Server,
        name: "Redis",
        level: 80,
        color: "from-red-600 to-orange-500",
      },
    ],
    tools: [
      {
        icon: GitBranch,
        name: "Git/GitHub",
        level: 95,
        color: "from-gray-700 to-gray-600",
      },
      {
        icon: Package,
        name: "Docker",
        level: 88,
        color: "from-blue-500 to-blue-600",
      },
      {
        icon: Activity,
        name: "AWS",
        level: 85,
        color: "from-orange-500 to-yellow-500",
      },
      {
        icon: Shield,
        name: "CI/CD",
        level: 90,
        color: "from-green-500 to-blue-500",
      },
      {
        icon: Figma,
        name: "Figma",
        level: 92,
        color: "from-purple-500 to-red-500",
      },
      {
        icon: Terminal,
        name: "Linux",
        level: 85,
        color: "from-gray-600 to-gray-700",
      },
    ],
  };

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      period: "2022 - Present",
      location: "San Francisco, CA",
      description:
        "Led development of enterprise-level applications serving 100K+ users. Architected scalable microservices and mentored junior developers.",
      achievements: [
        "Increased system performance by 40%",
        "Led team of 8 developers",
        "Implemented CI/CD pipelines",
      ],
      gradient: "from-blue-500 to-purple-600",
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "2020 - 2022",
      location: "Remote",
      description:
        "Developed responsive web applications using modern frameworks. Collaborated with design teams to create exceptional user experiences.",
      achievements: [
        "Built 15+ production applications",
        "Improved user engagement by 60%",
        "Optimized load times by 50%",
      ],
      gradient: "from-emerald-500 to-teal-600",
    },
    {
      title: "Junior Developer",
      company: "StartupHub",
      period: "2019 - 2020",
      location: "New York, NY",
      description:
        "Contributed to various projects while learning industry best practices. Focused on frontend development and API integration.",
      achievements: [
        "Completed 25+ projects",
        "Learned 5+ technologies",
        "Received mentorship award",
      ],
      gradient: "from-pink-500 to-rose-600",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "AI SaaS Platform",
      description:
        "Revolutionary AI-powered business automation platform with real-time analytics and machine learning capabilities",
      longDescription:
        "A comprehensive SaaS solution that leverages artificial intelligence to automate business processes, analyze data patterns, and provide actionable insights for enterprise clients.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      tech: ["Next.js", "OpenAI", "Prisma", "Stripe", "AWS"],
      gradient: "from-violet-600 to-purple-600",
      category: "web",
      featured: true,
      stats: { views: "12.5K", likes: "890", comments: "124" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Crypto Trading Dashboard",
      description:
        "Advanced cryptocurrency trading interface with live market data and portfolio tracking",
      longDescription:
        "Real-time cryptocurrency trading platform with advanced charting, portfolio management, and automated trading strategies.",
      image:
        "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop",
      tech: ["React", "Web3.js", "Chart.js", "Socket.io"],
      gradient: "from-amber-500 to-orange-600",
      category: "web",
      featured: true,
      stats: { views: "8.3K", likes: "654", comments: "89" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Smart Home IoT App",
      description:
        "Intelligent home automation system with voice control and energy optimization",
      longDescription:
        "Complete IoT ecosystem for smart home management with AI-driven energy optimization and voice-controlled automation.",
      image:
        "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop",
      tech: ["Flutter", "Firebase", "Arduino", "ML Kit"],
      gradient: "from-emerald-500 to-teal-600",
      category: "mobile",
      featured: false,
      stats: { views: "5.7K", likes: "423", comments: "67" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "NFT Marketplace",
      description:
        "Decentralized marketplace for digital art with minting and auction capabilities",
      longDescription:
        "Full-featured NFT marketplace built on Ethereum with gas-optimized smart contracts and seamless user experience.",
      image:
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=400&fit=crop",
      tech: ["Solidity", "React", "IPFS", "Metamask"],
      gradient: "from-pink-500 to-rose-600",
      category: "blockchain",
      featured: true,
      stats: { views: "15.2K", likes: "1.2K", comments: "203" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Healthcare Management System",
      description:
        "Comprehensive healthcare platform with patient records and telemedicine",
      longDescription:
        "HIPAA-compliant healthcare management system with electronic health records, appointment scheduling, and telehealth integration.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      tech: ["Vue.js", "Django", "PostgreSQL", "WebRTC"],
      gradient: "from-blue-500 to-indigo-600",
      category: "web",
      featured: false,
      stats: { views: "6.8K", likes: "512", comments: "78" },
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "AR Shopping Experience",
      description:
        "Augmented reality mobile app for virtual product try-ons and shopping",
      longDescription:
        "Revolutionary AR shopping app that allows customers to visualize products in their space before purchasing.",
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      tech: ["Unity", "ARKit", "React Native", "TensorFlow"],
      gradient: "from-cyan-500 to-blue-600",
      category: "mobile",
      featured: false,
      stats: { views: "9.1K", likes: "743", comments: "156" },
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO at TechFlow",
      company: "TechFlow Inc.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
      quote:
        "Alex delivered an exceptional product that exceeded our expectations. The attention to detail and innovative approach transformed our business processes completely.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "StartupXYZ",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      quote:
        "Working with Alex was a game-changer. The technical expertise and creative vision brought our ideas to life in ways we never imagined possible.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "CTO",
      company: "InnovateLab",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote:
        "The level of professionalism and technical skill is outstanding. Alex not only met our deadlines but delivered a solution that scaled beautifully.",
      rating: 5,
    },
  ];



  const stats = [
    {
      icon: Star,
      value: "150+",
      label: "Projects Completed",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      value: "50+",
      label: "Happy Clients",
      gradient: "from-blue-400 to-purple-500",
    },
    {
      icon: Zap,
      value: "5+",
      label: "Years Experience",
      gradient: "from-green-400 to-blue-500",
    },
    {
      icon: Award,
      value: "25+",
      label: "Awards Won",
      gradient: "from-pink-400 to-red-500",
    },
  ];

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Modern, responsive websites built with cutting-edge technologies",
      features: [
        "React/Next.js",
        "Performance Optimization",
        "SEO Ready",
        "Mobile First",
      ],
      gradient: "from-blue-500 to-cyan-400",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications for iOS and Android",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "App Store Deployment",
      ],
      gradient: "from-purple-500 to-pink-400",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      gradient: "from-green-500 to-emerald-400",
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Scalable server-side solutions and API development",
      features: [
        "Node.js/Python",
        "Database Design",
        "API Development",
        "Cloud Integration",
      ],
      gradient: "from-red-500 to-orange-400",
    },
    {
      icon: Layers,
      title: "Full-Stack Solutions",
      description:
        "End-to-end application development from concept to deployment",
      features: [
        "Architecture Design",
        "Database Management",
        "DevOps",
        "Maintenance",
      ],
      gradient: "from-indigo-500 to-blue-400",
    },
    {
      icon: Rocket,
      title: "Consulting & Strategy",
      description: "Technical consultation and digital transformation guidance",
      features: [
        "Technology Strategy",
        "Code Review",
        "Team Mentoring",
        "Best Practices",
      ],
      gradient: "from-yellow-500 to-orange-400",
    },
  ];

  const blogPosts = [
    {
      title: "The Future of Web Development with AI",
      excerpt:
        "Exploring how artificial intelligence is revolutionizing the way we build web applications...",
      date: "March 15, 2024",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop",
      category: "AI & Tech",
    },
    {
      title: "Building Scalable React Applications",
      excerpt:
        "Best practices and patterns for creating maintainable and performant React apps...",
      date: "March 10, 2024",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop",
      category: "React",
    },
    {
      title: "Mastering TypeScript in 2024",
      excerpt:
        "Advanced TypeScript techniques that will make your code more robust and maintainable...",
      date: "March 5, 2024",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=400&h=250&fit=crop",
      category: "TypeScript",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Best Developer Award",
      year: "2023",
      org: "TechCorp Solutions",
    },
    {
      icon: Trophy,
      title: "Hackathon Winner",
      year: "2022",
      org: "DevFest Global",
    },
    {
      icon: Star,
      title: "Open Source Contributor",
      year: "2021",
      org: "GitHub Stars",
    },
    {
      icon: Medal,
      title: "Innovation Excellence",
      year: "2020",
      org: "StartupHub",
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems({ skills: true, experience: true });
    }, 100);
    return () => clearTimeout(timer);
  }, []);


  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      } overflow-x-hidden`}
    >
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 opacity-20 transition-opacity duration-1000"
          style={{
            background: `radial-gradient(800px circle at ${mousePosition.x}px ${
              mousePosition.y
            }px, ${
              darkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.1)"
            }, transparent 50%)`,
          }}
        />
        <div
          className={`absolute inset-0 ${
            darkMode
              ? "bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20"
              : "bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20"
          }`}
        />

        {/* Enhanced floating shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full opacity-10 animate-pulse`}
            style={{
              width: `${20 + (i % 4) * 10}px`,
              height: `${20 + (i % 4) * 10}px`,
              top: `${10 + i * 12}%`,
              left: `${5 + (i % 2) * 80}%`,
              background: `linear-gradient(45deg, hsl(${
                i * 45
              }, 70%, 60%), hsl(${(i + 1) * 45}, 70%, 70%))`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Enhanced Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
          darkMode
            ? "bg-gray-900/70 border-gray-700"
            : "bg-white/70 border-white/20"
        } border-b shadow-lg transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex.dev
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex space-x-8">
              {[
                "Home",
                "About",
                "Services",
                "Experience",
                "Projects",
                "Blog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`relative px-4 py-2 ${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-700 hover:text-gray-900"
                  } transition-all duration-300 group`}
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full ${
                  darkMode
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-600"
                } hover:scale-110 transition-all duration-300`}
              >
                {darkMode ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
                Hire Me
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden absolute top-20 left-0 right-0 ${
              darkMode ? "bg-gray-900" : "bg-white"
            } border-b ${
              darkMode ? "border-gray-700" : "border-gray-200"
            } shadow-xl`}
          >
            <div className="px-4 py-6 space-y-4">
              {[
                "Home",
                "About",
                "Services",
                "Experience",
                "Projects",
                "Blog",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg ${
                    darkMode
                      ? "text-gray-300 hover:bg-gray-800"
                      : "text-gray-700 hover:bg-gray-100"
                  } transition-all duration-200`}
                >
                  {item}
                </a>
              ))}
              <div className="flex items-center justify-between pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-3 rounded-full ${
                    darkMode
                      ? "bg-gray-800 text-yellow-400"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {darkMode ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </button>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20 relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-20 opacity-0"
            }`}
          >
            {/* Enhanced animated badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm animate-pulse">
              <Bell className="w-5 h-5 mr-2 text-blue-600 animate-bounce" />
              <span
                className={`text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                🚀 Available for new projects - Let's build something amazing!
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span
                className={`block bg-gradient-to-r ${
                  darkMode
                    ? "from-gray-100 via-blue-200 to-purple-200"
                    : "from-gray-900 via-blue-900 to-purple-900"
                } bg-clip-text text-transparent`}
              >
                Creative
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
              <span
                className={`block text-3xl md:text-4xl lg:text-5xl font-light mt-4 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                & Digital Innovator
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl lg:text-3xl ${
                darkMode ? "text-gray-300" : "text-gray-600"
              } mb-12 max-w-4xl mx-auto leading-relaxed font-light`}
            >
              Transforming ideas into exceptional digital experiences with
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">
                {" "}
                cutting-edge technology
              </span>{" "}
              and innovative design solutions
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative px-12 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  <Play className="w-6 h-6 mr-3" />
                  Watch My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <button
                className={`group px-12 py-6 border-2 ${
                  darkMode
                    ? "border-gray-700 text-gray-300 hover:bg-gray-800"
                    : "border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
                } rounded-full font-semibold text-lg transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 relative overflow-hidden`}
              >
                <span className="relative z-10 flex items-center">
                  <Download className="w-5 h-5 mr-3" />
                  Download Resume
                </span>
              </button>
            </div>

            {/* Enhanced Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`group p-6 ${
                    darkMode ? "bg-gray-800/60" : "bg-white/60"
                  } backdrop-blur-sm rounded-2xl border ${
                    darkMode ? "border-gray-700" : "border-white/40"
                  } shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 transform`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4 group-hover:scale-110 transition-transform`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div
                    className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}
                  >
                    {stat.value}
                  </div>
                  <div
                    className={`text-sm font-medium ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

            {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${visibleItems.skills ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2 text-blue-600" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Technical Expertise
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Skills &
              </span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}> Technologies</span>
            </h2>
            
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Mastering modern technologies to build exceptional digital solutions
            </p>
          </div>

          {/* Skill Categories */}
          <div className="flex justify-center mb-12">
            <div className={`inline-flex p-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full`}>
              {Object.keys(skills).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveSkillCategory(category)}
                  className={`px-8 py-4 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
                    activeSkillCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                      : `${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills[activeSkillCategory].map((skill, index) => (
              <div
                key={skill.name}
                className={`group p-8 ${darkMode ? 'bg-gray-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-2xl border ${
                  darkMode ? 'border-gray-700' : 'border-white/40'
                } shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${skill.color} group-hover:scale-110 transition-transform`}>
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`text-2xl font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}>
                    {skill.level}%
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </h3>
                
                <div className={`w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-3 mb-4 overflow-hidden`}>
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                
                <div className="flex justify-between items-center">
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    Proficiency
                  </span>
                  <span className={`text-sm font-bold ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : 'Intermediate'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-20 transform transition-all duration-1000 ${visibleItems.experience ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="inline-flex items-center px-6 py-3 mb-6 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full border border-green-500/20 backdrop-blur-sm">
              <Users className="w-5 h-5 mr-2 text-green-600" />
              <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Professional Journey
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Work
              </span>
              <span className={`${darkMode ? 'text-white' : 'text-gray-900'}`}> Experience</span>
            </h2>
            
            <p className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-600'} max-w-3xl mx-auto`}>
              Building innovative solutions across diverse industries and technologies
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} transform md:-translate-x-0.5`}></div>

            <div className="space-y-12">
              {experiences.map((experience, index) => (
                <div
                  key={experience.title}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-4 md:left-1/2 w-4 h-4 ${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border-4 rounded-full transform md:-translate-x-2 z-10`}>
                    <div className={`w-full h-full bg-gradient-to-r ${experience.gradient} rounded-full animate-pulse`}></div>
                  </div>

                  {/* Experience Card */}
                  <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                    <div className={`group p-8 ${darkMode ? 'bg-gray-800/60' : 'bg-white/60'} backdrop-blur-sm rounded-2xl border ${
                      darkMode ? 'border-gray-700' : 'border-white/40'
                    } shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform`}>
                      
                      {/* Header */}
                      <div className="mb-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                              {experience.title}
                            </h3>
                            <div className={`text-lg font-semibold bg-gradient-to-r ${experience.gradient} bg-clip-text text-transparent mb-2`}>
                              {experience.company}
                            </div>
                          </div>
                          <div className={`p-3 rounded-xl bg-gradient-to-r ${experience.gradient} group-hover:scale-110 transition-transform`}>
                            <TrendingUp className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="flex items-center">
                            <Calendar className={`w-4 h-4 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {experience.period}
                            </span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className={`w-4 h-4 mr-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`} />
                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                              {experience.location}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div>
                        <h4 className={`text-lg font-semibold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4 flex items-center`}>
                          <Award className={`w-5 h-5 mr-2 bg-gradient-to-r ${experience.gradient} text-transparent`} />
                          Key Achievements
                        </h4>
                        <div className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start">
                              <CheckCircle className={`w-5 h-5 mr-3 mt-0.5 text-green-500 flex-shrink-0`} />
                              <span className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioLanding2
