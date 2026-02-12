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
            <Link to="/dashboard" className="text-slate-700 hover:text-indigo-600 duration-300">Dashboard</Link>
            <a href="#categories" className="text-slate-700 hover:text-indigo-600 duration-300">Categories</a>
            <a href="#scores" className="text-slate-700 hover:text-indigo-600 duration-300">Scores</a>
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/login" className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Logout</Link>
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

const ExamSelection = ({ selectedClass, setSelectedClass }) => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Navodaya Vidyalaya Prep</h2>
        <p className="mt-4 text-lg text-slate-600">Crack the entrance with playful practice tests.</p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {[5, 8].map((cls) => (
          <button key={cls} onClick={() => setSelectedClass(cls)} className={`rounded-[48px] p-8 shadow-lg border-2 ${selectedClass === cls ? 'ring-4 ring-indigo-400' : ''} w-64 text-left transform hover:scale-105 duration-300 ${selectedClass === cls ? 'bg-indigo-50' : 'bg-white'}`}>
            <div className={`w-20 h-20 ${selectedClass === cls ? 'bg-indigo-300' : 'bg-pink-300'} rounded-full flex items-center justify-center mb-4 border-2 border-slate-900`}>
              <Icon name="BookOpen" className="w-10 h-10 text-slate-900" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Class {cls}</h3>
            <p className="text-slate-600 mt-2">Entrance Exam Practice</p>
          </button>
        ))}
      </div>
    </div>
  </section>
);

const PracticeTestCategories = ({ selectedClass }) => {
  const categories = [
    { name: 'Mathematics', icon: 'Calculator', color: 'bg-pink-300' },
    { name: 'Mental Ability', icon: 'Brain', color: 'bg-violet-300' },
    { name: 'Language', icon: 'BookOpen', color: 'bg-amber-300' },
  ];
  return (
    <section id="categories" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Practice Categories</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {categories.map((c) => (
            <div key={c.name} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className={`w-16 h-16 ${c.color} rounded-full flex items-center justify-center mb-4 border-2 border-slate-900`}>
                <Icon name={c.icon} className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
              <p className="text-slate-600 mt-2">Targeted practice for Class {selectedClass}.</p>
              <button className="mt-4 w-full px-4 py-2 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-600 active:scale-95 duration-300">Start Practice</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const YearWiseQuestionSets = ({ selectedClass }) => {
  const years = [2024, 2023, 2022, 2021, 2020];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Previous Year Papers</h2>
        <div className="grid md:grid-cols-5 gap-6 md:gap-12">
          {years.map((y) => (
            <div key={y} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
                <Icon name="FileText" className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{y}</h3>
              <p className="text-slate-600 mt-2">Full Paper • Class {selectedClass}</p>
              <button className="mt-4 w-full px-4 py-2 rounded-full bg-slate-900 text-white shadow hover:bg-slate-800 active:scale-95 duration-300">Take Test</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScoreHistory = () => {
  const [scores] = useState([
    { date: '2 days ago', category: 'Mathematics', score: 78, total: 100 },
    { date: '1 week ago', category: 'Mental Ability', score: 85, total: 100 },
    { date: '2 weeks ago', category: 'Language', score: 92, total: 100 },
  ]);
  return (
    <section id="scores" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Your Score History</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white space-y-4">
          {scores.map((s, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">{s.category}</div>
                <div className="text-sm text-slate-500">{s.date}</div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-extrabold text-slate-900">{s.score}/{s.total}</div>
                <div className="text-sm text-slate-600">{Math.round((s.score / s.total) * 100)}%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TipsAndTricks = () => {
  const tips = [
    { icon: 'Clock', title: 'Time Management', desc: 'Allocate 1 min per question in MAT section.' },
    { icon: 'Target', title: 'Accuracy First', desc: 'Focus on accuracy; negative marking applies.' },
    { icon: 'Repeat', title: 'Revise Regularly', desc: 'Practice previous papers twice a week.' },
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Tips & Tricks</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {tips.map((t) => (
            <div key={t.title} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
              <div className="w-16 h-16 bg-rose-300 rounded-full flex items-center justify-center mb-4 border-2 border-slate-900">
                <Icon name={t.icon} className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t.title}</h3>
              <p className="text-slate-600 mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function NavodayaPreparation() {
  const [selectedClass, setSelectedClass] = useState(5);
  // TODO: connect API endpoints /api/navodaya/categories, /api/navodaya/tests, /api/user/test-scores
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <ExamSelection selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
        <PracticeTestCategories selectedClass={selectedClass} />
        <YearWiseQuestionSets selectedClass={selectedClass} />
        <ScoreHistory />
        <TipsAndTricks />
      </main>
      <Footer />
    </div>
  );
}