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
    <header className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow ${sticky ? 'shadow-md' : ''}`}>
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

const ScoreSummary = ({ score, total, time }) => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">Test Results</h1>
        <div className="mt-6 inline-flex items-center justify-center w-40 h-40 rounded-full bg-indigo-100 border-4 border-slate-900">
          <div className="text-5xl font-extrabold text-slate-900">{score}<span className="text-3xl">/{total}</span></div>
        </div>
        <div className="mt-4 text-lg text-slate-700">Accuracy: <span className="font-bold">{Math.round((score / total) * 100)}%</span></div>
        <div className="mt-2 text-slate-600">Time Spent: {Math.floor(time / 60)}:{(time % 60).toString().padStart(2, '0')}</div>
      </div>
    </div>
  </section>
);

const QuestionWiseReview = ({ responses }) => {
  const [selected, setSelected] = useState(1);
  const q = responses.find((r) => r.q === selected);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Question-wise Review</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
          <div className="grid grid-cols-6 md:grid-cols-10 gap-3 mb-6">
            {responses.map((r) => (
              <button key={r.q} onClick={() => setSelected(r.q)} className={`w-12 h-12 rounded-full border-2 ${r.correct ? 'bg-emerald-300 border-emerald-500' : 'bg-rose-300 border-rose-500'} ${selected === r.q ? 'ring-4 ring-indigo-400' : ''}`}>
                {r.q}
              </button>
            ))}
          </div>
          {q && (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${q.correct ? 'bg-emerald-100' : 'bg-rose-100'} border-2 ${q.correct ? 'border-emerald-500' : 'border-rose-500'}`}>
                  <Icon name={q.correct ? 'Check' : 'X'} className={`w-5 h-5 ${q.correct ? 'text-emerald-600' : 'text-rose-600'}`} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Question {q.q}</h3>
              </div>
              <p className="text-slate-800 mb-4">{q.question}</p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className={`rounded-2xl p-4 border-2 ${q.correct ? 'bg-emerald-50 border-emerald-300' : 'bg-rose-50 border-rose-300'}`}>
                  <div className="text-sm text-slate-600 mb-1">Your Answer</div>
                  <div className="font-semibold text-slate-900">{q.userAnswer}</div>
                </div>
                <div className="rounded-2xl p-4 bg-emerald-50 border-2 border-emerald-300">
                  <div className="text-sm text-slate-600 mb-1">Correct Answer</div>
                  <div className="font-semibold text-slate-900">{q.correctAnswer}</div>
                </div>
              </div>
              <div className="mt-4 text-sm text-slate-600">Time spent: {q.time}s</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const PerformanceAnalytics = ({ responses }) => {
  const correct = responses.filter((r) => r.correct).length;
  const incorrect = responses.length - correct;
  const timeData = responses.map((r) => r.time);
  const avgTime = Math.round(timeData.reduce((a, b) => a + b, 0) / timeData.length);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Performance Analytics</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
            <div className="w-16 h-16 bg-emerald-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
              <Icon name="CheckCircle" className="w-8 h-8 text-slate-900" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">{correct}</div>
            <div className="text-slate-600">Correct</div>
          </div>
          <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
            <div className="w-16 h-16 bg-rose-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
              <Icon name="XCircle" className="w-8 h-8 text-slate-900" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">{incorrect}</div>
            <div className="text-slate-600">Incorrect</div>
          </div>
          <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
            <div className="w-16 h-16 bg-amber-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
              <Icon name="Clock" className="w-8 h-8 text-slate-900" />
            </div>
            <div className="text-3xl font-extrabold text-slate-900">{avgTime}s</div>
            <div className="text-slate-600">Avg Time</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Recommendations = () => {
  const tips = [
    { icon: 'Target', title: 'Focus on Weak Areas', desc: 'Revise chapters with incorrect answers.' },
    { icon: 'Clock', title: 'Improve Speed', desc: 'Practice timed quizzes daily.' },
    { icon: 'BookOpen', title: 'Read Solutions', desc: 'Understand logic behind each answer.' },
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Recommendations</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {tips.map((t) => (
            <div key={t.title} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
              <div className="w-16 h-16 bg-sky-300 rounded-full flex items-center justify-center mb-4 border-2 border-slate-900">
                <Icon name={t.icon} className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{t.title}</h3>
              <p className="text-slate-600 mt-2">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Back to Dashboard</button>
        </div>
      </div>
    </section>
  );
};

export default function TestResults() {
  const { testId } = useParams();
  const [score] = useState(42);
  const [total] = useState(50);
  const [time] = useState(2100);
  const [responses] = useState([
    { q: 1, question: 'What is 15% of 240?', userAnswer: '36', correctAnswer: '36', correct: true, time: 45 },
    { q: 2, question: 'Solve: 3x + 5 = 20', userAnswer: '5', correctAnswer: '5', correct: true, time: 38 },
    { q: 3, question: 'Find the area of a circle with radius 7 cm.', userAnswer: '154 cm²', correctAnswer: '154 cm²', correct: true, time: 52 },
    { q: 4, question: 'What is the value of π/2?', userAnswer: '90°', correctAnswer: '90°', correct: true, time: 30 },
    { q: 5, question: 'Convert 0.75 to fraction.', userAnswer: '3/5', correctAnswer: '3/4', correct: false, time: 60 },
  ]);
  // TODO: connect API endpoint /api/tests/:id/results
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <ScoreSummary score={score} total={total} time={time} />
        <QuestionWiseReview responses={responses} />
        <PerformanceAnalytics responses={responses} />
        <Recommendations />
      </main>
      <Footer />
    </div>
  );
}