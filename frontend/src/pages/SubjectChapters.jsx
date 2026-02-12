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
            <a href="#chapters" className="text-slate-700 hover:text-indigo-600 duration-300">Chapters</a>
            <a href="#download" className="text-slate-700 hover:text-indigo-600 duration-300">Download</a>
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

const SubjectHeader = ({ subjectId }) => {
  const subjectName = subjectId === 'math' ? 'Mathematics' : 'Science';
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center border-2 border-slate-900">
              <Icon name="Calculator" className="w-8 h-8 text-slate-900" />
            </div>
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900">{subjectName}</h1>
              <p className="mt-2 text-lg text-slate-600">Class 5 • MP Board • English Medium</p>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop&auto=format"
            alt="Subject Art"
            className="hidden md:block rounded-[48px] shadow-lg w-64 h-48 object-cover border-2 border-slate-900"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x300/FFFDF5/0F172A?text=Subject'; }}
          />
        </div>
      </div>
    </section>
  );
};

const ChapterList = () => {
  const [chapters] = useState([
    { id: 1, title: 'Knowing Our Numbers', locked: false },
    { id: 2, title: 'Whole Numbers', locked: false },
    { id: 3, title: 'Playing with Numbers', locked: false },
    { id: 4, title: 'Basic Geometrical Ideas', locked: true },
    { id: 5, title: 'Understanding Elementary Shapes', locked: true },
    { id: 6, title: 'Integers', locked: true },
    { id: 7, title: 'Fractions', locked: true },
    { id: 8, title: 'Decimals', locked: true },
  ]);
  return (
    <section id="chapters" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Chapters</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white space-y-4">
          {chapters.map((c, idx) => (
            <div key={c.id} className={`flex items-center justify-between p-4 rounded-2xl border-2 ${c.locked ? 'bg-slate-100 border-slate-300' : 'bg-white border-slate-900'}`}>
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${c.locked ? 'bg-slate-200 border-slate-300 text-slate-500' : 'bg-indigo-100 border-slate-900 text-indigo-600'}`}>
                  {c.locked ? <Icon name="Lock" /> : <span className="font-bold">{idx + 1}</span>}
                </div>
                <div>
                  <h3 className={`font-semibold ${c.locked ? 'text-slate-500' : 'text-slate-900'}`}>{c.title}</h3>
                  {c.locked && <p className="text-xs text-slate-400">Upgrade to unlock</p>}
                </div>
              </div>
              <div className="flex gap-2">
                <button disabled={c.locked} className={`px-3 py-2 rounded-full border-2 ${c.locked ? 'border-slate-300 text-slate-400' : 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'} duration-300`}>
                  View Book
                </button>
                <button disabled={c.locked} className={`px-3 py-2 rounded-full ${c.locked ? 'bg-slate-300 text-slate-500' : 'bg-indigo-500 text-white shadow hover:bg-indigo-600'} active:scale-95 duration-300`}>
                  Solution
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SolutionToggle = () => {
  const [showSolutions, setShowSolutions] = useState(true);
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-6">
        <div className="flex items-center justify-between rounded-[48px] p-4 shadow-lg border-2 border-slate-900 bg-white">
          <div className="flex items-center gap-3">
            <Icon name="Eye" className="w-6 h-6 text-slate-700" />
            <span className="font-semibold text-slate-900">Show Solutions</span>
          </div>
          <button onClick={() => setShowSolutions(!showSolutions)} className={`relative w-14 h-8 rounded-full border-2 border-slate-900 ${showSolutions ? 'bg-indigo-500' : 'bg-slate-200'} duration-300`}>
            <span className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white shadow transform ${showSolutions ? 'translate-x-6' : 'translate-x-0'} duration-300`} />
          </button>
        </div>
      </div>
    </section>
  );
};

const DownloadOptions = () => {
  const [isPremium] = useState(false);
  return (
    <section id="download" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8">Download Options</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
          {isPremium ? (
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900">PDF Downloads</h3>
                <p className="text-slate-600">Get offline access to all chapters and solutions.</p>
              </div>
              <button className="px-5 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300 flex items-center gap-2">
                <Icon name="Download" /> Download All
              </button>
            </div>
          ) : (
            <div className="text-center">
              <Icon name="Lock" className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-slate-900">Upgrade to Premium</h3>
              <p className="text-slate-600 mt-2">Unlock PDF downloads and offline access.</p>
              <Link to="/upgrade" className="mt-4 inline-block px-5 py-3 rounded-full bg-amber-400 text-slate-900 shadow-lg hover:bg-amber-500 active:scale-95 duration-300">Upgrade Now</Link>
            </div>
          )}
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

export default function SubjectChapters() {
  const { subjectId } = useParams();
  // TODO: connect API endpoints /api/subjects/:id/chapters and /api/chapters/:id/solution-pages
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <BackNavigation />
        <SubjectHeader subjectId={subjectId} />
        <SolutionToggle />
        <ChapterList />
        <DownloadOptions />
      </main>
      <Footer />
    </div>
  );
}