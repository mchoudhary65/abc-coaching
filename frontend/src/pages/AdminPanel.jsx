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
            <a href="#upload" className="text-slate-700 hover:text-indigo-600 duration-300">Upload</a>
            <a href="#analytics" className="text-slate-700 hover:text-indigo-600 duration-300">Analytics</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Logout</button>
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

const DashboardOverview = ({ stats }) => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Admin Dashboard</h2>
      <div className="grid md:grid-cols-4 gap-6 md:gap-12">
        {stats.map((s) => (
          <div key={s.label} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
            <div className="w-16 h-16 bg-indigo-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
              <Icon name={s.icon} className="w-8 h-8 text-slate-900" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
            <div className="text-slate-600">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BookUpload = () => {
  const [file, setFile] = useState(null);
  const [meta, setMeta] = useState({ title: '', class: '', subject: '', board: '' });
  const handleDrop = (e) => {
    e.preventDefault();
    const f = e.dataTransfer.files[0];
    if (f && f.type === 'application/pdf') setFile(f);
  };
  return (
    <section id="upload" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Upload Book</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
          <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="rounded-2xl border-2 border-dashed border-slate-400 p-8 text-center hover:border-indigo-500 duration-300">
            <Icon name="UploadCloud" className="w-12 h-12 text-slate-400 mx-auto mb-4" />
            <p className="text-slate-700">Drag & drop PDF here or <label className="text-indigo-600 underline cursor-pointer">browse<input type="file" accept="application/pdf" className="hidden" onChange={(e) => setFile(e.target.files[0])} /></label></p>
            {file && <p className="mt-2 text-sm text-slate-600">Selected: {file.name}</p>}
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <input value={meta.title} onChange={(e) => setMeta({ ...meta, title: e.target.value })} placeholder="Book Title" className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" />
            <select value={meta.class} onChange={(e) => setMeta({ ...meta, class: e.target.value })} className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none">
              <option>Select Class</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
            <select value={meta.subject} onChange={(e) => setMeta({ ...meta, subject: e.target.value })} className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none">
              <option>Select Subject</option>
              <option>Mathematics</option>
              <option>Science</option>
              <option>English</option>
            </select>
            <select value={meta.board} onChange={(e) => setMeta({ ...meta, board: e.target.value })} className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none">
              <option>Select Board</option>
              <option>MP Board</option>
              <option>CBSE</option>
            </select>
          </div>
          <button className="mt-6 w-full px-5 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Upload Book</button>
        </div>
      </div>
    </section>
  );
};

const QuestionBankManagement = () => {
  const [csv, setCsv] = useState(null);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Question Bank</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
          <div className="mb-4">
            <label className="block text-slate-700 mb-2">Upload CSV (Q, A, B, C, D, Correct)</label>
            <input type="file" accept=".csv" onChange={(e) => setCsv(e.target.files[0])} className="w-full rounded-2xl border-2 border-slate-300 p-3" />
          </div>
          <button className="px-5 py-3 rounded-full bg-slate-900 text-white shadow hover:bg-slate-800 active:scale-95 duration-300">Import Questions</button>
        </div>
      </div>
    </section>
  );
};

const UserAnalytics = ({ chart }) => (
  <section id="analytics" className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">User Analytics</h2>
      <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
        <img
          src={chart}
          alt="Analytics Chart"
          className="w-full h-auto rounded-2xl border border-slate-200"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x400/FFFDF5/0F172A?text=Analytics'; }}
        />
      </div>
    </div>
  </section>
);

const ContentModeration = () => {
  const [queue] = useState([
    { id: 1, type: 'Question', content: 'What is gravity?', status: 'Pending' },
    { id: 2, type: 'Book', content: 'Class 6 Science PDF', status: 'Approved' },
  ]);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Content Moderation</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white space-y-4">
          {queue.map((q) => (
            <div key={q.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div>
                <div className="font-semibold text-slate-900">{q.type}: {q.content}</div>
                <div className={`text-sm ${q.status === 'Approved' ? 'text-emerald-600' : 'text-amber-600'}`}>{q.status}</div>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-2 rounded-full border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-500 hover:text-white duration-300">Approve</button>
                <button className="px-3 py-2 rounded-full border-2 border-rose-500 text-rose-600 hover:bg-rose-500 hover:text-white duration-300">Reject</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function AdminPanel() {
  const [stats] = useState([
    { icon: 'Users', value: '12,456', label: 'Total Users' },
    { icon: 'BookOpen', value: '234', label: 'Books Uploaded' },
    { icon: 'ClipboardCheck', value: '8,901', label: 'Tests Taken' },
    { icon: 'TrendingUp', value: '+23%', label: 'Growth This Month' },
  ]);
  const chart = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop&auto=format';
  // TODO: connect API endpoints /api/admin/upload and /api/admin/analytics
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <DashboardOverview stats={stats} />
        <BookUpload />
        <QuestionBankManagement />
        <UserAnalytics chart={chart} />
        <ContentModeration />
      </main>
      <Footer />
    </div>
  );
}