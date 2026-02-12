import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
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
            <a href="#subjects" className="text-slate-700 hover:text-indigo-600 duration-300">Subjects</a>
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

const ClassHeader = ({ classId }) => {
  const className = `Class ${classId} - MP Board English Medium`;
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">{className}</h1>
            <p className="mt-2 text-lg text-slate-600">Pick a subject to start learning</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop&auto=format"
            alt="Classroom"
            className="hidden md:block rounded-[48px] shadow-lg w-64 h-48 object-cover border-2 border-slate-900"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/FFFDF5/0F172A?text=Class'; }}
          />
        </div>
      </div>
    </section>
  );
};

const SubjectCards = () => {
  const [subjects] = useState([
    { name: 'Mathematics', icon: 'Calculator', color: 'bg-pink-300', progress: 78, lastAccessed: '2 hours ago' },
    { name: 'Science', icon: 'FlaskConical', color: 'bg-violet-300', progress: 65, lastAccessed: 'Yesterday' },
    { name: 'English', icon: 'BookOpen', color: 'bg-amber-300', progress: 82, lastAccessed: '3 hours ago' },
    { name: 'Hindi', icon: 'PenTool', color: 'bg-emerald-300', progress: 70, lastAccessed: '1 day ago' },
    { name: 'Social Studies', icon: 'Globe', color: 'bg-sky-300', progress: 60, lastAccessed: '2 days ago' },
    { name: 'Computer', icon: 'Monitor', color: 'bg-rose-300', progress: 90, lastAccessed: '5 hours ago' },
  ]);
  return (
    <section id="subjects" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Subjects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
          {subjects.map((s) => (
            <div key={s.name} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white hover:shadow-2xl hover:-translate-y-2 duration-300 cursor-pointer">
              <div className={`w-20 h-20 ${s.color} rounded-full flex items-center justify-center mb-4 border-2 border-slate-900`}>
                <Icon name={s.icon} className="w-10 h-10 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">{s.name}</h3>
              <div className="mt-4">
                <div className="flex justify-between text-sm text-slate-600 mb-1">
                  <span>Completion</span>
                  <span>{s.progress}%</span>
                </div>
                <div className="w-full h-3 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
                  <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${s.progress}%` }} />
                </div>
              </div>
              <div className="mt-3 text-sm text-slate-500">Last accessed: {s.lastAccessed}</div>
              <button className="mt-4 w-full px-4 py-2 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-600 active:scale-95 duration-300">Continue</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProgressOverview = () => {
  const overall = 72;
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Overall Progress</h2>
        <div className="rounded-[48px] p-8 shadow-lg border-2 border-slate-900 bg-white">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-5xl font-extrabold text-slate-900">{overall}%</div>
              <div className="mt-1 text-slate-600">Course Completion</div>
            </div>
            <div className="relative w-32 h-32">
              <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="54" stroke="#e5e7eb" strokeWidth="12" fill="none" />
                <circle cx="60" cy="60" r="54" stroke="#6366f1" strokeWidth="12" fill="none" strokeDasharray={2 * Math.PI * 54} strokeDashoffset={(2 * Math.PI * 54) * (1 - overall / 100)} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Icon name="Trophy" className="w-10 h-10 text-indigo-500" />
              </div>
            </div>
          </div>
          <div className="text-sm text-slate-600">Keep going! You're doing great.</div>
        </div>
      </div>
    </section>
  );
};

const BackNavigation = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">
          <Icon name="ArrowLeft" /> Back
        </button>
      </div>
    </section>
  );
};

export default function ClassSubjects() {
  const { classId } = useParams();
  // TODO: connect API endpoint /api/classes/:id/subjects
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <BackNavigation />
        <ClassHeader classId={classId} />
        <SubjectCards />
        <ProgressOverview />
      </main>
      <Footer />
    </div>
  );
}