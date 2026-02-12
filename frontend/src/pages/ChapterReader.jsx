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

const ReaderControls = ({ zoom, setZoom, showSolutions, setShowSolutions, bookmarked, setBookmarked }) => (
  <div className="fixed top-24 left-4 z-30 flex flex-col gap-3">
    <button onClick={() => setZoom((z) => Math.min(z + 0.2, 3))} className="w-12 h-12 rounded-full bg-white border-2 border-slate-900 shadow-lg flex items-center justify-center hover:bg-slate-100 active:scale-95 duration-300">
      <Icon name="ZoomIn" />
    </button>
    <button onClick={() => setZoom((z) => Math.max(z - 0.2, 0.6))} className="w-12 h-12 rounded-full bg-white border-2 border-slate-900 shadow-lg flex items-center justify-center hover:bg-slate-100 active:scale-95 duration-300">
      <Icon name="ZoomOut" />
    </button>
    <button onClick={() => setShowSolutions(!showSolutions)} className={`w-12 h-12 rounded-full border-2 border-slate-900 shadow-lg flex items-center justify-center ${showSolutions ? 'bg-indigo-500 text-white' : 'bg-white'} hover:scale-105 duration-300`}>
      <Icon name="Lightbulb" />
    </button>
    <button onClick={() => setBookmarked(!bookmarked)} className={`w-12 h-12 rounded-full border-2 border-slate-900 shadow-lg flex items-center justify-center ${bookmarked ? 'bg-amber-400' : 'bg-white'} hover:scale-105 duration-300`}>
      <Icon name={bookmarked ? 'Bookmark' : 'BookmarkPlus'} />
    </button>
  </div>
);

const BookContent = ({ zoom, currentPage, setCurrentPage, totalPages }) => {
  const pageSrc = `https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&h=1000&fit=crop&auto=format&page=${currentPage}`;
  return (
    <div className="flex flex-col items-center py-12 px-4">
      <div className="mb-6" style={{ transform: `scale(${zoom})`, transformOrigin: 'top' }}>
        <img
          src={pageSrc}
          alt={`Page ${currentPage}`}
          className="rounded-[48px] shadow-2xl border-2 border-slate-900 max-w-3xl w-full"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/800x1000/FFFDF5/0F172A?text=Page'; }}
        />
      </div>
      <div className="flex items-center gap-4">
        <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Prev</button>
        <span className="font-semibold text-slate-900">{currentPage} / {totalPages}</span>
        <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="px-4 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Next</button>
      </div>
    </div>
  );
};

const SolutionPanel = ({ show, setShow, currentPage }) => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, { text: note, page: currentPage }]);
      setNote('');
    }
  };
  return (
    <div className={`fixed top-0 right-0 h-full w-80 bg-white border-l-2 border-slate-900 shadow-2xl transform ${show ? 'translate-x-0' : 'translate-x-full'} duration-300 z-50`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-slate-900">Solutions & Notes</h3>
          <button onClick={() => setShow(false)} className="w-8 h-8 rounded-full border-2 border-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white duration-300">
            <Icon name="X" />
          </button>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl p-4 bg-indigo-50 border border-indigo-200">
            <h4 className="font-semibold text-slate-900">Page {currentPage} Solution</h4>
            <p className="text-sm text-slate-700 mt-2">Step-by-step solution appears here.</p>
          </div>
          <div>
            <label className="font-semibold text-slate-900">Add Note</label>
            <textarea value={note} onChange={(e) => setNote(e.target.value)} className="mt-2 w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" rows="3" placeholder="Write your note..." />
            <button onClick={addNote} className="mt-2 px-4 py-2 rounded-full bg-indigo-500 text-white shadow hover:bg-indigo-600 active:scale-95 duration-300">Save Note</button>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-2">Your Notes</h4>
            {notes.length === 0 && <p className="text-sm text-slate-500">No notes yet.</p>}
            <ul className="space-y-2">
              {notes.map((n, idx) => (
                <li key={idx} className="rounded-2xl p-3 bg-slate-50 border border-slate-200">
                  <div className="text-sm text-slate-500 mb-1">Page {n.page}</div>
                  <div className="text-slate-900">{n.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const NavigationBar = ({ currentPage, totalPages, setCurrentPage }) => {
  const thumbs = Array.from({ length: totalPages }, (_, i) => i + 1);
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-slate-900 shadow-lg z-30">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between mb-2">
          <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} className="px-3 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">← Prev</button>
          <span className="font-semibold text-slate-900">{currentPage} / {totalPages}</span>
          <button onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))} className="px-3 py-2 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white duration-300">Next →</button>
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {thumbs.map((p) => (
            <button key={p} onClick={() => setCurrentPage(p)} className={`shrink-0 w-16 h-20 rounded-2xl border-2 ${p === currentPage ? 'border-indigo-500' : 'border-slate-300'} overflow-hidden hover:scale-105 duration-300`}>
              <img
                src={`https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=100&h=120&fit=crop&auto=format&page=${p}`}
                alt={`Thumb ${p}`}
                className="w-full h-full object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x120/FFFDF5/0F172A?text=P'; }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function ChapterReader() {
  const { chapterId } = useParams();
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages] = useState(12);
  const [showSolutions, setShowSolutions] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  // TODO: connect API endpoints /api/chapters/:id/content and /api/chapters/:id/solution-pages
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <ReaderControls zoom={zoom} setZoom={setZoom} showSolutions={showSolutions} setShowSolutions={setShowSolutions} bookmarked={bookmarked} setBookmarked={setBookmarked} />
      <BookContent zoom={zoom} currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
      <SolutionPanel show={showSolutions} setShow={setShowSolutions} currentPage={currentPage} />
      <NavigationBar currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}