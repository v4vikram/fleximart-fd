"use client"
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Palette, Smartphone, ArrowRight, Star, Zap, Award } from 'lucide-react';

const PortfolioLanding = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const skills = [
    { icon: Code, name: 'Frontend Development', desc: 'React, Next.js, Vue', gradient: 'from-blue-500 to-cyan-400' },
    { icon: Palette, name: 'UI/UX Design', desc: 'Figma, Adobe XD', gradient: 'from-purple-500 to-pink-400' },
    { icon: Smartphone, name: 'Mobile Development', desc: 'React Native, Flutter', gradient: 'from-green-500 to-emerald-400' }
  ];

  const projects = [
    {
      title: 'AI SaaS Platform',
      description: 'Revolutionary AI-powered business automation platform with real-time analytics',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
      tech: ['Next.js', 'OpenAI', 'Prisma', 'Stripe'],
      gradient: 'from-violet-600 to-purple-600'
    },
    {
      title: 'Crypto Trading Dashboard',
      description: 'Advanced cryptocurrency trading interface with live market data and portfolio tracking',
      image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=400&fit=crop',
      tech: ['React', 'Web3.js', 'Chart.js', 'Socket.io'],
      gradient: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Smart Home IoT App',
      description: 'Intelligent home automation system with voice control and energy optimization',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      tech: ['Flutter', 'Firebase', 'Arduino', 'ML Kit'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      title: 'NFT Marketplace',
      description: 'Decentralized marketplace for digital art with minting and auction capabilities',
      image: 'https://images.unsplash.com/photo-1635322966219-b75ed372eb01?w=600&h=400&fit=crop',
      tech: ['Solidity', 'React', 'IPFS', 'Metamask'],
      gradient: 'from-pink-500 to-rose-600'
    }
  ];

  const stats = [
    { icon: Star, value: '50+', label: 'Projects Completed' },
    { icon: Zap, value: '3+', label: 'Years Experience' },
    { icon: Award, value: '15+', label: 'Happy Clients' }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.1), transparent 40%)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-white to-purple-50/20" />
        
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-20 animate-pulse" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-600 rounded-full opacity-20 animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full opacity-20 animate-ping" style={{ animationDelay: '2s' }} />
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/70 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Alex.dev
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-all duration-300 group"
                >
                  <span className="relative z-10">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10" ref={heroRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            {/* Animated Badge */}
            <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm">
              <Zap className="w-5 h-5 mr-2 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Available for freelance work</span>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-none">
              <span className="block bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Creative
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                Developer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Building tomorrow's digital experiences with 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold"> cutting-edge technology</span> 
              and innovative design
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
                <span className="relative z-10 flex items-center">
                  View My Work
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              
              <button className="group px-10 py-5 border-2 border-gray-900 text-gray-900 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 relative overflow-hidden">
                <span className="relative z-10">Let's Connect</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="group p-6 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/40 shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <p className="text-xl text-gray-700 leading-relaxed">
                  I'm a passionate <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">full-stack developer</span> and designer who transforms ideas into exceptional digital experiences. With expertise in modern frameworks and a keen eye for aesthetics, I create solutions that are both functional and beautiful.
                </p>
                <p className="text-xl text-gray-700 leading-relaxed">
                  When I'm not crafting code, you'll find me exploring emerging technologies, contributing to open-source projects, or mentoring the next generation of developers.
                </p>
              </div>
              
              <div className="flex space-x-6">
                {[
                  { Icon: Github, href: '#', color: 'hover:text-gray-900' },
                  { Icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
                  { Icon: Mail, href: '#', color: 'hover:text-red-500' }
                ].map(({ Icon, href, color }) => (
                  <a
                    key={Icon.name}
                    href={href}
                    className={`p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-gray-600 ${color} group`}
                  >
                    <Icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className="relative z-10">
                    <div className="flex items-center space-x-6 mb-4">
                      <div className={`p-4 rounded-2xl bg-gradient-to-r ${skill.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <skill.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{skill.name}</h3>
                        <p className="text-gray-600 font-medium">{skill.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 border border-gray-100"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />
                  <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 text-gray-700 text-sm rounded-full font-medium hover:from-blue-50 hover:to-purple-50 hover:text-blue-600 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center text-blue-600 font-semibold hover:text-purple-600 transition-colors group-hover:translate-x-2 transform duration-300">
                    View Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Let's Create Magic
          </h2>
          <div className="w-32 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-8" />
          
          <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your vision to life? Let's collaborate and build something extraordinary together.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { Icon: Mail, title: 'Email', value: 'hello@alexdev.com', gradient: 'from-red-500 to-pink-500' },
              { Icon: Github, title: 'GitHub', value: '@alexdev', gradient: 'from-gray-700 to-gray-900' },
              { Icon: Linkedin, title: 'LinkedIn', value: 'in/alexdev', gradient: 'from-blue-600 to-blue-800' }
            ].map(({ Icon, title, value, gradient }) => (
              <div
                key={title}
                className="group p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 font-medium">{value}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="group relative px-16 py-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden">
            <span className="relative z-10 flex items-center">
              Start Your Project
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Alex.dev
            </div>
          </div>
          <p className="text-gray-300 text-lg">
            © 2025 Alex Developer. Crafted with ❤️ and lots of ☕
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioLanding;