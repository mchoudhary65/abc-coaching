import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Icons from 'lucide-react';

const Icon = ({ name, ...props }) => {
  const LucideIcon = Icons?.[name] || Icons.HelpCircle;
  return <LucideIcon {...props} />;
};

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
            <Icon name="GraduationCap" className="w-6 h-6 text-white" />
          </div>
          <span className="text-2xl font-bold text-slate-900">ABC COACHING</span>
        </Link>
        <div className="flex items-center gap-3">
          <Link to="/pricing" className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Pricing</Link>
        </div>
      </div>
    </div>
  </header>
);

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

const RegistrationForm = ({ name, setName, email, setEmail, password, setPassword, handleSignUp }) => (
  <div className="rounded-[48px] p-8 shadow-2xl border-2 border-slate-900 bg-white w-full max-w-md">
    <h2 className="text-3xl font-bold text-slate-900 mb-2">Create Account</h2>
    <p className="text-slate-600 mb-6">Join thousands of students excelling with ABC COACHING.</p>
    <form onSubmit={handleSignUp} className="space-y-4">
      <div>
        <label className="block text-slate-700 mb-1">Full Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Aarav Sharma" className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" required />
      </div>
      <div>
        <label className="block text-slate-700 mb-1">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="student@example.com" className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" required />
      </div>
      <div>
        <label className="block text-slate-700 mb-1">Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" required />
      </div>
      <button type="submit" className="w-full px-5 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Create Account</button>
    </form>
  </div>
);

const ClassSelection = ({ selectedClass, setSelectedClass }) => (
  <div className="w-full max-w-md mx-auto">
    <label className="block text-slate-700 mb-2">Select Class</label>
    <div className="grid grid-cols-3 gap-3">
      {['Nursery', 'LKG', 'UKG', ...Array.from({ length: 11 }, (_, i) => (i + 1).toString())].map((cls) => (
        <button key={cls} onClick={() => setSelectedClass(cls)} className={`rounded-2xl p-3 border-2 ${selectedClass === cls ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'} hover:scale-105 duration-300`}>
          {cls}
        </button>
      ))}
    </div>
  </div>
);

const BoardSelection = ({ board, setBoard }) => (
  <div className="w-full max-w-md mx-auto">
    <label className="block text-slate-700 mb-2">Select Board</label>
    <div className="flex gap-4">
      <button onClick={() => setBoard('MP Board')} className={`flex-1 rounded-2xl p-4 border-2 ${board === 'MP Board' ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'} hover:scale-105 duration-300`}>
        MP Board
      </button>
      <button onClick={() => setBoard('CBSE')} className={`flex-1 rounded-2xl p-4 border-2 ${board === 'CBSE' ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'} hover:scale-105 duration-300`}>
        CBSE
      </button>
    </div>
  </div>
);

const TermsAcceptance = ({ accepted, setAccepted }) => (
  <div className="flex items-center gap-3">
    <input type="checkbox" checked={accepted} onChange={(e) => setAccepted(e.target.checked)} className="w-5 h-5 rounded border-2 border-slate-300" />
    <span className="text-slate-700">I accept the <Link to="/terms" className="text-indigo-600 underline">Terms & Conditions</Link></span>
  </div>
);

export default function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedClass, setSelectedClass] = useState('5');
  const [board, setBoard] = useState('MP Board');
  const [accepted, setAccepted] = useState(false);
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!accepted) return alert('Please accept terms');
    // TODO: connect API endpoint /api/auth/register
    navigate('/dashboard');
  };
  return (
    <div className="min-h-screen bg-white font-['Outfit'] flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight">Start Learning with <span className="text-indigo-500">ABC COACHING</span></h1>
            <p className="mt-6 text-lg text-slate-600 max-w-prose">Interactive books, practice tests, and instant solutions for MP Board & CBSE students.</p>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop&auto=format"
              alt="Students studying"
              className="mt-8 rounded-[48px] shadow-2xl w-full h-auto border-2 border-slate-900"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/FFFDF5/0F172A?text=Students'; }}
            />
          </div>
          <div className="flex flex-col items-center space-y-6">
            <RegistrationForm name={name} setName={setName} email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleSignUp={handleSignUp} />
            <ClassSelection selectedClass={selectedClass} setSelectedClass={setSelectedClass} />
            <BoardSelection board={board} setBoard={setBoard} />
            <TermsAcceptance accepted={accepted} setAccepted={setAccepted} />
            <button onClick={handleSignUp} disabled={!accepted} className={`w-full max-w-md px-5 py-3 rounded-full ${accepted ? 'bg-indigo-500 text-white shadow-lg hover:bg-indigo-600' : 'bg-slate-300 text-slate-500'} active:scale-95 duration-300`}>Complete Sign Up</button>
            <div className="text-center">
              <p className="text-slate-700">Already have an account?</p>
              <Link to="/login" className="mt-2 inline-block px-6 py-3 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 active:scale-95 duration-300">Login</Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}