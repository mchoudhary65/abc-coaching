import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const Header = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handle = () => setSticky(window.scrollY > 40);
    window.addEventListener('scroll', handle);
    return () => window.removeEventListener('scroll', handle);
  }, []);
  return (
    <header className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow ${sticky ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">ABC COACHING</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-slate-700 hover:text-indigo-600 duration-300">Home</Link>
            <a href="#features" className="text-slate-700 hover:text-indigo-600 duration-300">Features</a>
            <a href="#pricing" className="text-slate-700 hover:text-indigo-600 duration-300">Pricing</a>
            <a href="#testimonials" className="text-slate-700 hover:text-indigo-600 duration-300">Reviews</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Login</Link>
            <Link to="/upgrade" className="px-5 py-2 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Upgrade</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-white border-t-2 border-slate-900">
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">ABC COACHING</span>
          </div>
          <p className="text-slate-600">Empowering students with interactive learning across MP & CBSE boards.</p>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Courses</h4>
          <ul className="space-y-2 text-slate-600"><li>MP Board</li><li>CBSE</li><li>Demo Access</li></ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Support</h4>
          <ul className="space-y-2 text-slate-600"><li>Help Center</li><li>Contact Us</li><li>Privacy</li></ul>
        </div>
        <div>
          <h4 className="font-semibold text-slate-900 mb-3">Follow Us</h4>
          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white duration-300"><Icon name="Facebook" /></a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white duration-300"><Icon name="Instagram" /></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-slate-500">© 2025 ABC COACHING. All rights reserved.</div>
    </div>
  </footer>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Study Smarter with <span className="text-indigo-500">ABC COACHING</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-700 max-w-prose">
            Interactive books, practice tests, and instant solutions for MP Board & CBSE students. Learn anywhere, excel everywhere.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300 flex items-center gap-2">
              <Icon name="Play" /> Start Demo
            </button>
            <button className="px-6 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
            alt="Students studying together"
            className="rounded-[48px] shadow-2xl w-full h-auto"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x600/FFFDF5/0F172A?text=Students'; }}
          />
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-pink-300 rounded-full shadow-xl" />
          <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-300 rounded-full shadow-xl" />
        </div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const feats = [
    { icon: 'BookOpen', title: 'Interactive Books', desc: 'Engaging digital books with animations & quizzes.' },
    { icon: 'ClipboardCheck', title: 'Practice Tests', desc: 'Board-specific mock tests with instant scoring.' },
    { icon: 'Lightbulb', title: 'Step Solutions', desc: 'Detailed answers to every question.' },
    { icon: 'Trophy', title: 'Progress Tracking', desc: 'Visual dashboards to monitor improvement.' },
  ];
  return (
    <section id="features" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Why ABC COACHING?</h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to ace MP & CBSE exams in one playful platform.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {feats.map((f) => (
            <div key={f.title} className="rounded-[48px] bg-white p-6 shadow-lg border-2 border-slate-900 hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-4 border-2 border-slate-900">
                <Icon name={f.icon} className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BoardSelection = () => {
  const [selected, setSelected] = useState('MP');
  const boards = [
    { key: 'MP', name: 'MP Board', color: 'bg-pink-300', icon: 'MapPin' },
    { key: 'CBSE', name: 'CBSE', color: 'bg-violet-300', icon: 'Book' },
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Choose Your Board</h2>
          <p className="mt-4 text-lg text-slate-600">Tailored content for your curriculum.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {boards.map((b) => (
            <button
              key={b.key}
              onClick={() => setSelected(b.key)}
              className={`rounded-[48px] p-8 shadow-lg border-2 border-slate-900 w-64 text-left transform hover:scale-105 duration-300 ${selected === b.key ? 'ring-4 ring-indigo-400' : ''}`}
            >
              <div className={`w-20 h-20 ${b.color} rounded-full flex items-center justify-center mb-4 border-2 border-slate-900`}>
                <Icon name={b.icon} className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{b.name}</h3>
              <p className="text-slate-600 mt-2">Interactive books & tests aligned to board pattern.</p>
            </button>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full bg-amber-400 text-slate-900 shadow-lg hover:bg-amber-500 active:scale-95 duration-300 flex items-center gap-2 mx-auto">
            <Icon name="MousePointerClick" /> Try Demo Mode
          </button>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [plans] = useState([
    { name: 'Starter', price: '₹299', period: 'mo', benefits: ['MP Board Access', '5 Practice Tests', 'Basic Solutions'] },
    { name: 'Pro', price: '₹499', period: 'mo', benefits: ['MP + CBSE Access', 'Unlimited Tests', 'Detailed Solutions', 'Progress Dashboard'], popular: true },
    { name: 'Ultimate', price: '₹799', period: 'mo', benefits: ['Everything in Pro', 'Live Doubt Sessions', 'Parent Reports', 'Offline PDFs'] },
  ]);
  return (
    <section id="pricing" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Simple Pricing</h2>
          <p className="mt-4 text-lg text-slate-600">Pick a plan that fuels your growth.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-[48px] p-8 shadow-lg border-2 border-slate-900 relative ${p.popular ? 'bg-indigo-50' : 'bg-white'}`}>
              {p.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-indigo-500 text-white text-sm font-semibold">Most Popular</div>}
              <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-900">{p.price}</span>
                <span className="text-slate-600">/{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <Icon name="CheckCircle" className="w-5 h-5 text-indigo-500" />
                    <span className="text-slate-700">{b}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-8 w-full px-5 py-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 active:scale-95 duration-300">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const [testimonials] = useState([
    { name: 'Ananya Sharma', role: 'Class 10 MP Board', text: 'The playful animations made studying fun. My scores jumped 20% in two months!' },
    { name: 'Arjun Patel', role: 'Class 12 CBSE', text: 'Practice tests feel like games. I actually look forward to mock exams now.' },
    { name: 'Priya Singh', parent: true, text: 'As a parent, the progress dashboard is a relief. I can track my child’s growth easily.' },
  ]);
  return (
    <section id="testimonials" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Loved by Students & Parents</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={`https://images.unsplash.com/photo-${t.parent ? '1438761681033-6461ffad8d80' : '1507003211169-0a1dd7228f2d'}?w=100&h=100&fit=crop&auto=format`}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-slate-900"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/FFFDF5/0F172A?text=User'; }}
                />
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-sm text-slate-600">{t.role || 'Parent'}</p>
                </div>
              </div>
              <p className="text-slate-700 italic">“{t.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <Hero />
        <Features />
        <BoardSelection />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}