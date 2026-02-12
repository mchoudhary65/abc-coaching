import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
    <header className={`sticky top-0 z-40 bg-white/80 backdrop-blur-md transition-shadow ${sticky ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="GraduationCap" className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-slate-900">ABC COACHING</span>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Logout</button>
            <button className="px-5 py-2 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Upgrade</button>
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

const TestHeader = ({ title, timeLeft }) => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-6 md:py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900">{title}</h1>
          <p className="mt-2 text-slate-600">Read each question carefully and choose the best answer.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className={`px-4 py-2 rounded-full border-2 border-slate-900 ${timeLeft < 60 ? 'bg-rose-100' : 'bg-white'}`}>
            <Icon name="Clock" className={`inline w-5 h-5 mr-2 ${timeLeft < 60 ? 'text-rose-500' : 'text-slate-700'}`} />
            <span className="font-semibold text-slate-900">{Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const QuestionCounter = ({ current, total }) => (
  <div className="container mx-auto px-4 md:px-6 py-4">
    <div className="flex items-center justify-between mb-2">
      <span className="text-sm text-slate-600">Question {current} of {total}</span>
      <span className="text-sm text-slate-600">{Math.round((current / total) * 100)}% Complete</span>
    </div>
    <div className="w-full h-3 rounded-full bg-slate-200 border border-slate-300 overflow-hidden">
      <div className="h-full bg-indigo-500 rounded-full" style={{ width: `${(current / total) * 100}%` }} />
    </div>
  </div>
);

const MCQOptions = ({ options, selected, setSelected }) => (
  <div className="container mx-auto px-4 md:px-6 py-6">
    <div className="grid gap-4 md:grid-cols-2">
      {options.map((opt, idx) => (
        <button key={idx} onClick={() => setSelected(idx)} className={`rounded-[48px] p-4 shadow-lg border-2 text-left transform hover:scale-105 duration-300 ${selected === idx ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'}`}>
          <span className="font-semibold">{String.fromCharCode(65 + idx)}.</span> {opt}
        </button>
      ))}
    </div>
  </div>
);

const NavigationControls = ({ current, total, setCurrent, onSubmit }) => (
  <div className="container mx-auto px-4 md:px-6 py-6">
    <div className="flex flex-wrap items-center justify-between gap-4">
      <button onClick={() => setCurrent((c) => Math.max(c - 1, 1))} disabled={current === 1} className={`px-5 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300 ${current === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>← Previous</button>
      <div className="flex gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button key={i} onClick={() => setCurrent(i + 1)} className={`w-10 h-10 rounded-full border-2 ${current === i + 1 ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'} hover:scale-105 duration-300`}>
            {i + 1}
          </button>
        ))}
      </div>
      <button onClick={() => setCurrent((c) => Math.min(c + 1, total))} disabled={current === total} className={`px-5 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300 ${current === total ? 'opacity-50 cursor-not-allowed' : ''}`}>Next →</button>
    </div>
    <div className="mt-6 text-center">
      <button onClick={onSubmit} className="px-6 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Submit Test</button>
    </div>
  </div>
);

const SubmitConfirmation = ({ show, onConfirm, onCancel }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="rounded-[48px] p-8 shadow-2xl border-2 border-slate-900 bg-white max-w-md w-full mx-4">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Submit Test?</h3>
        <p className="text-slate-600 mb-6">Once submitted, you cannot change your answers.</p>
        <div className="flex gap-4">
          <button onClick={onCancel} className="flex-1 px-4 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Cancel</button>
          <button onClick={onConfirm} className="flex-1 px-4 py-3 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-600 active:scale-95 duration-300">Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default function PracticeTest() {
  const { testId } = useParams();
  const navigate = useNavigate();
  const [title] = useState('Mathematics Practice Test');
  const [timeLeft, setTimeLeft] = useState(1800);
  const [current, setCurrent] = useState(1);
  const [total] = useState(50);
  const [selected, setSelected] = useState(null);
  const [showConfirm, setShowConfirm] = useState(false);
  const [questions] = useState([
    { q: 'What is 15% of 240?', options: ['24', '36', '48', '60'] },
    { q: 'Solve: 3x + 5 = 20', options: ['5', '6', '7', '8'] },
    { q: 'Find the area of a circle with radius 7 cm.', options: ['154 cm²', '144 cm²', '164 cm²', '174 cm²'] },
  ]);
  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setInterval(() => setTimeLeft((v) => v - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft]);
  const handleSubmit = () => {
    // TODO: connect API endpoint /api/tests/:id/submit
    navigate('/dashboard');
  };
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <TestHeader title={title} timeLeft={timeLeft} />
        <QuestionCounter current={current} total={total} />
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">{questions[current - 1]?.q}</h2>
            <MCQOptions options={questions[current - 1]?.options || []} selected={selected} setSelected={setSelected} />
          </div>
        </div>
        <NavigationControls current={current} total={total} setCurrent={setCurrent} onSubmit={() => setShowConfirm(true)} />
      </main>
      <SubmitConfirmation show={showConfirm} onConfirm={handleSubmit} onCancel={() => setShowConfirm(false)} />
      <Footer />
    </div>
  );
}