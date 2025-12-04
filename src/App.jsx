import React, { useState } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowRight,
  X,
  Box,
  Layout,
  Layers,
  Cpu,
  Globe,
  Users,
} from 'lucide-react';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'TaskSnacks',
      category: 'development',
      role: 'Product Owner & Builder',
      description: 'A calm, AI-powered productivity tool designed for busy and ADHD-friendly workflows.',
      longDescription:
        'Most to-do apps are cluttered with boards and tags. They expect you to be organized before you can get organized. TaskSnacks is a simple, focused tool for busy minds. You brain-dump your day in natural language, and the built-in AI turns that messy text into clear, ordered tasks. Each completed task unlocks a small fun fact as a reward – a light, dopamine-friendly nudge to keep going.',
      roadmap: [
        'Phase 1: MVP with stable core loop and user feedback collection',
        'Phase 2: Automated routines and standalone desktop/mobile wrapper',
        'Phase 3: Calendar sync, reminders, and paid productivity packs',
      ],
      tech: ['Vanilla JS', 'DeepSeek API', 'Product Strategy'],
      link: 'https://www.tasksnacks.com/',
      image: './tasksnacks.jpg',
    },
    {
      id: 2,
      title: 'RuralKavala.gr',
      category: 'management',
      role: 'Product & Project Manager',
      description: 'A regional cultural portal connecting associations, events, and visitors in Kavala.',
      longDescription:
        'RuralKavala.gr is a cultural hub designed to map and promote the cultural life of Kavala’s rural areas. I helped shape the concept, gather requirements from local cultural associations, and work with developers to turn those needs into a real product. The platform allows associations to publish events, avoid overlapping dates, and reach residents and visitors through a structured, GPS-enabled experience.',
      roadmap: [
        'Discovery: Stakeholder interviews with cultural associations and municipalities',
        'MVP: Content structure, event categories, and association profiles',
        'Rollout: Training sessions, onboarding support, and feedback loops for improvements',
        'Next: Better analytics for event visibility and engagement',
      ],
      tech: ['Portal Management', 'Stakeholder Engagement', 'Public Funding'],
      link: 'https://ruralkavala.gr/',
      image: './rural.jpg',
    },
    {
      id: 3,
      title: 'Boolean Builder',
      category: 'development',
      role: 'Developer',
      description: 'A free Boolean search helper for small teams and solo recruiters.',
      longDescription:
        'Boolean Builder was created for small businesses and solo recruiters who don’t have access to expensive HR tools. It helps them build robust AND / OR / NOT search strings for LinkedIn and Google without needing any technical knowledge. The interface is intentionally simple: you enter keywords, synonyms, must-have and exclude terms, and the tool builds the full query for you.',
      roadmap: [
        'v1.0: Core Boolean generation logic and clean UI',
        'v1.5: Preset templates for common roles and industries',
        'v2.0: Save & load searches and shareable links',
      ],
      tech: ['Vanilla JS', 'HR Tech', 'Open Source'],
      link: 'https://tasksnacks.github.io/boolean-builder/',
      image: './boolean.jpg',
    },
    {
      id: 4,
      title: 'Safe-In for Hotels',
      category: 'management',
      role: 'Project Manager',
      description: 'A guest safety and communication app deployed in 20+ hotels.',
      longDescription:
        'Safe-In is a hospitality app focused on guest safety and direct communication. It lets guests quickly reach hotel staff in emergencies, receive local recommendations, and stay informed about activities and offers. I worked on coordinating hotel needs with the product and technical teams, aligning features around safety, guest experience, and direct marketing for hotel partners.',
      roadmap: [
        'Rollout: Onboarding 20+ hotels and aligning use cases with operations',
        'Feature set: Emergency contact, location-based support, and guest messaging',
        'Next: Deeper analytics for hotels and improved guest engagement flows',
      ],
      tech: ['B2B SaaS', 'Hospitality', 'Mobile App'],
      link: '#',
      image: './safein.jpg',
    },
    {
      id: 5,
      title: 'ToolMe',
      category: 'development',
      role: 'Developer',
      description: 'A growing suite of free micro-tools for small businesses.',
      longDescription:
        'ToolMe is a side project focused on giving small business owners simple tools they can use every day: calculators, estimators, and small helpers that save time. The idea is to keep each tool focused, fast, and accessible, without login or friction. It is still in early development, with a modular structure that makes it easy to add new utilities.',
      roadmap: [
        'Phase 1: Core layout and basic calculators',
        'Phase 2: VAT, pricing, and simple financial helpers',
        'Phase 3: Templates and simple exports for day-to-day operations',
      ],
      tech: ['Vanilla JS', 'Utility Tools', 'SME Support'],
      link: 'https://tasksnacks.github.io/toolme/',
      image: './toolme.jpg',
    },
  ];

  const filteredProjects =
    activeTab === 'all' ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-bold text-xl tracking-tight text-white">
            Stefanos Papadopoulos
          </span>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/in/stefanos-papadopoulos-greece"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:mrstefanospapadopoulos@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
            Project Management & <br />
            <span className="text-blue-500">Digital Product Work.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl leading-relaxed mb-6">
            I work at the intersection of funded programmes, operations, and digital products.
            Over the last seven years, I&apos;ve helped SMEs, public bodies, and hospitality
            businesses move from vague ideas to structured projects and working tools.
          </p>
          <p className="text-sm text-slate-500 max-w-2xl mb-8">
            This page is a focused snapshot of the digital products and tools I have managed or
            built. It is meant to complement my CV and give more context around how I think and
            work.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() =>
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-200 transition-colors flex items-center gap-2"
            >
              About me <ArrowRight size={18} />
            </button>
            <button
              onClick={() =>
                document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="px-6 py-3 border border-slate-600 text-slate-100 font-semibold rounded-lg hover:border-slate-400 transition-colors flex items-center gap-2"
            >
              View products <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* About Me */}
        <section id="about" className="mb-20">
          <div className="grid md:grid-cols-[2fr,1.3fr] gap-10 items-start">
            <div>
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-wider mb-3">
                About me
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Consultant turned product-focused operator.
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3">
                My background is in project and business consulting, mainly around EU and national
                funding programmes for SMEs. I am used to
                working with complex projects with mixed teams like founders, engineers, architects, accountants, public
                institutions, and aligning everyone around clear steps, budgets, and deadlines.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-3">
                Over time, I moved closer to digital products. I helped design, test, and launch
                platforms like RuralKavala.gr and Safe-In, while also building small tools like
                TaskSnacks, ToolMe, and Boolean Builder to solve day-to-day problems for myself and
                other people. Most of these projects started from real needs I saw in my consulting
                work.
              </p>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                I like clear structure, honest communication, and products that actually get used.
                This portfolio is a practical overview of a few products i managed and created.
              </p>
            </div>

            {/* Core Competencies */}
            <div className="border border-slate-800 rounded-xl p-5 bg-slate-900/50">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider mb-4">
                Core competencies
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-300 text-sm">
                <div className="flex items-center gap-2">
                  <Box size={16} className="text-blue-400" />
                  Product & Project management
                </div>
                <div className="flex items-center gap-2">
                  <Layout size={16} className="text-blue-400" />
                  Project & programme delivery
                </div>
                <div className="flex items-center gap-2">
                  <Users size={16} className="text-blue-400" />
                  Stakeholder & client management
                </div>
                <div className="flex items-center gap-2">
                  <Layers size={16} className="text-blue-400" />
                  Process & workflow design
                </div>
                <div className="flex items-center gap-2">
                  <Cpu size={16} className="text-blue-400" />
                  Scrum/Agile
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={16} className="text-blue-400" />
                  Cross-border funded projects
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Catalog */}
        <section id="work" className="mb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Product catalog</h2>
              <p className="text-slate-500 text-sm max-w-xl">
                A mix of products I have managed inside organisations and tools I built myself as
                side projects.
              </p>
            </div>
            <div className="flex gap-2 text-sm">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === 'all'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('management')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === 'management'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                Managed
              </button>
              <button
                onClick={() => setActiveTab('development')}
                className={`px-3 py-1 rounded-full transition-colors ${
                  activeTab === 'development'
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-500 hover:text-white'
                }`}
              >
                Built
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group overflow-hidden bg-slate-900/50 border border-slate-800 rounded-xl hover:border-slate-600 transition-all hover:shadow-xl hover:shadow-blue-900/10 flex flex-col h-full"
              >
                {/* Image Area */}
                <div
                  onClick={() => setSelectedProject(project)}
                  className="h-56 overflow-hidden relative border-b border-slate-800 bg-slate-800 cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `https://placehold.co/600x400/1e293b/475569?text=${encodeURIComponent(
                        project.title
                      )}`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div
                    className={`absolute top-4 right-4 px-2 py-1 backdrop-blur-md text-white text-xs font-bold rounded border border-white/10 uppercase tracking-wider ${
                      project.category === 'management'
                        ? 'bg-blue-600/80'
                        : 'bg-purple-600/80'
                    }`}
                  >
                    {project.role}
                  </div>
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-md text-white text-xs rounded-full border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                    Click for details <ExternalLink size={10} />
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-400 mb-6 leading-relaxed text-sm flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-slate-800/50">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex-1 py-2 text-sm font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      View details
                    </button>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors text-center"
                    >
                      Visit site
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-12 border-t border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Looking for someone to own the operational side of your product work?
          </h2>
          <a
            href="mailto:mrstefanospapadopoulos@gmail.com"
            className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all mb-12"
          >
            Get in touch
          </a>
          <p className="text-slate-600 text-sm">© 2025 Stefanos Papadopoulos.</p>
        </footer>
      </main>

      {/* MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-slate-900 border border-slate-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 bg-slate-800 text-slate-400 hover:text-white rounded-full transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="h-64 w-full relative">
              <img
                src={selectedProject.image}
                className="w-full h-full object-cover"
                alt={selectedProject.title}
                onError={(e) => {
                  e.target.src =
                    'https://placehold.co/600x400/1e293b/white?text=No+Image';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-8 right-8">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <span
                  className={`px-3 py-1 text-xs font-bold rounded-full ${
                    selectedProject.category === 'management'
                      ? 'bg-blue-600 text-white'
                      : 'bg-purple-600 text-white'
                  }`}
                >
                  {selectedProject.role}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Box size={18} className="text-blue-500" /> About the product
                </h3>
                <p className="text-slate-300 leading-relaxed text-sm md:text-base">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {selectedProject.roadmap && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Layout size={18} className="text-blue-500" /> Roadmap & key points
                  </h3>
                  <ul className="space-y-3">
                    {selectedProject.roadmap.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-slate-400 text-sm"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-4 pt-4 border-t border-slate-800">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg text-center transition-colors"
                >
                  Visit live site
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;