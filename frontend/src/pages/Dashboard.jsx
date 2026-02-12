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
            <a href="#classes" className="text-slate-700 hover:text-indigo-600 duration-300">Classes</a>
            <a href="#progress" className="text-slate-700 hover:text-indigo-600 duration-300">Progress</a>
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

const WelcomeHeader = ({ name }) => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">Welcome back, {name}!</h1>
          <p className="mt-2 text-lg text-slate-600">Ready to conquer your next chapter?</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300 flex items-center gap-2">
            <Icon name="Zap" /> Quick Test
          </button>
          <button className="px-5 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
            View Reports
          </button>
        </div>
      </div>
    </div>
  </section>
);

const MyClasses = () => {
  const [classes] = useState([
    { name: 'Mathematics', icon: 'Calculator', color: 'bg-pink-300', progress: 78 },
    { name: 'Science', icon: 'FlaskConical', color: 'bg-violet-300', progress: 65 },
    { name: 'English', icon: 'BookOpen', color: 'bg-amber-300', progress: 82 },
    { name: 'Social Studies', icon: 'Globe', color: 'bg-emerald-300', progress: 70 },
  ]);
  return (
    <section id="classes" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">My Classes</h2>
          <button className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">+ Add Subject</button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          {classes.map((c) => (
            <div key={c.name} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300">
              <div className={`w-16 h-16 ${c.color} rounded-full flex items-center justify-center mb-4 border-2 border-slate-900`}>
                <Icon name={c.icon} className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{c.name}</h3>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>Progress</span>
                  <span>{c.progress}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${c.progress}%` }} />
                </div>
              </div>
              <button className="mt-4 w-full px-4 py-2 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-600 active:scale-95 duration-300">Continue</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RecentActivity = () => {
  const [activities] = useState([
    { type: 'chapter', title: 'Quadratic Equations', subject: 'Mathematics', time: '2 hours ago' },
    { type: 'test', title: 'Chemical Reactions Quiz', subject: 'Science', score: 18, total: 20, time: 'Yesterday' },
    { type: 'chapter', title: 'The Last Lesson', subject: 'English', time: '3 days ago' },
  ]);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Recent Activity</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white space-y-4">
          {activities.map((a, idx) => (
            <div key={idx} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${a.type === 'test' ? 'bg-amber-200' : 'bg-indigo-200'} border-2 border-slate-900`}>
                  <Icon name={a.type === 'test' ? 'ClipboardCheck' : 'BookOpen'} className="w-6 h-6 text-slate-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{a.title}</h4>
                  <p className="text-sm text-slate-600">{a.subject} • {a.time}</p>
                </div>
              </div>
              {a.score !== undefined && (
                <div className="text-right">
                  <div className="text-2xl font-bold text-slate-900">{a.score}/{a.total}</div>
                  <div className="text-sm text-slate-600">Score</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgressStats = () => {
  const [stats] = useState([
    { label: 'Study Streak', value: '7 days', icon: 'Flame', color: 'text-amber-500' },
    { label: 'Tests Taken', value: '42', icon: 'ClipboardCheck', color: 'text-indigo-500' },
    { label: 'Avg Score', value: '84%', icon: 'TrendingUp', color: 'text-emerald-500' },
    { label: 'Hours Studied', value: '24h', icon: 'Clock', color: 'text-slate-700' },
  ]);
  return (
    <section id="progress" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Your Progress</h2>
        <div className="grid md:grid-cols-4 gap-6 md:gap-12">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 bg-slate-100 border-2 border-slate-900`}>
                <Icon name={s.icon} className={`w-8 h-8 ${s.color}`} />
              </div>
              <div className="text-3xl font-extrabold text-slate-900">{s.value}</div>
              <div className="mt-1 text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickActions = () => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Quick Actions</h2>
      <div className="grid md:grid-cols-3 gap-6 md:gap-12">
        <button className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-left hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center mb-4 border-2 border-slate-900">
            <Icon name="Zap" className="w-8 h-8 text-slate-900" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Start a Practice Test</h3>
          <p className="text-slate-600 mt-2">Randomized questions to sharpen your skills.</p>
        </button>
        <button className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-left hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 bg-violet-300 rounded-full flex items-center justify-center mb-4 border-2 border-slate-900">
            <Icon name="HelpCircle" className="w-8 h-8 text-slate-900" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">View Solutions</h3>
          <p className="text-slate-600 mt-2">Step-by-step answers to every question.</p>
        </button>
        <button className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-left hover:shadow-2xl hover:-translate-y-2 duration-300">
          <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mb-4 border-2 border-slate-900">
            <Icon name="Download" className="w-8 h-8 text-slate-900" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Download PDFs</h3>
          <p className="text-slate-600 mt-2">Offline access to chapters and notes.</p>
        </button>
      </div>
    </div>
  </section>
);

export default function Dashboard() {
  const [profile, setProfile] = useState({ name: 'Aarav' });
  // TODO: connect API endpoint /api/user/profile
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <WelcomeHeader name={profile.name} />
        <MyClasses />
        <RecentActivity />
        <ProgressStats />
        <QuickActions />
      </main>
      <Footer />
    </div>
  );
}