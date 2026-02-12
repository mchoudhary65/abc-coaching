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
            <a href="#comparison" className="text-slate-700 hover:text-indigo-600 duration-300">Compare</a>
            <a href="#faq" className="text-slate-700 hover:text-indigo-600 duration-300">FAQ</a>
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

const PlanComparison = ({ plans }) => (
  <section id="comparison" className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">Choose Your Plan</h2>
        <p className="mt-4 text-lg text-slate-600">Unlock interactive learning tailored to your board.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 md:gap-12">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-[48px] p-8 shadow-lg border-2 border-slate-900 ${p.popular ? 'bg-indigo-50' : 'bg-white'}`}>
            {p.popular && <div className="inline-block px-3 py-1 rounded-full bg-indigo-500 text-white text-sm font-semibold mb-4">Most Popular</div>}
            <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold text-slate-900">{p.price}</span>
              <span className="text-slate-600">/{p.period}</span>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <Icon name="CheckCircle" className="w-5 h-5 text-indigo-500" />
                  <span className="text-slate-700">{f}</span>
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

const FeatureList = () => {
  const features = [
    { icon: 'BookOpen', title: 'Interactive Books', desc: 'Animated digital books with quizzes.' },
    { icon: 'ClipboardCheck', title: 'Practice Tests', desc: 'Unlimited board-specific mock tests.' },
    { icon: 'Lightbulb', title: 'Step Solutions', desc: 'Detailed answers to every question.' },
    { icon: 'Download', title: 'Offline PDFs', desc: 'Download chapters for offline study.' },
    { icon: 'BarChart3', title: 'Progress Tracking', desc: 'Visual dashboards to monitor growth.' },
    { icon: 'Award', title: 'Certificates', desc: 'Earn certificates on course completion.' },
  ];
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Everything You Get</h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-12">
          {features.map((f) => (
            <div key={f.title} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white text-center">
              <div className="w-16 h-16 bg-pink-300 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-slate-900">
                <Icon name={f.icon} className="w-8 h-8 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">{f.title}</h3>
              <p className="text-slate-600 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PaymentOptions = () => {
  const [method, setMethod] = useState('card');
  return (
    <section className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Payment Options</h2>
        <div className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white max-w-2xl mx-auto">
          <div className="flex gap-3 mb-6">
            {['card', 'upi', 'netbanking'].map((m) => (
              <button key={m} onClick={() => setMethod(m)} className={`flex-1 px-4 py-3 rounded-full border-2 ${method === m ? 'bg-indigo-500 text-white border-indigo-600' : 'bg-white border-slate-900'} hover:scale-105 duration-300`}>
                {m === 'card' ? 'Debit/Credit Card' : m === 'upi' ? 'UPI' : 'Net Banking'}
              </button>
            ))}
          </div>
          {method === 'card' && (
            <div className="space-y-4">
              <input type="text" placeholder="Card Number" className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" />
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="MM/YY" className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" />
                <input type="text" placeholder="CVV" className="rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" />
              </div>
            </div>
          )}
          {method === 'upi' && (
            <input type="text" placeholder="UPI ID (e.g., user@paytm)" className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none" />
          )}
          {method === 'netbanking' && (
            <select className="w-full rounded-2xl border-2 border-slate-300 p-3 focus:border-indigo-500 outline-none">
              <option>Select Bank</option>
              <option>SBI</option>
              <option>HDFC</option>
              <option>ICICI</option>
            </select>
          )}
          <button className="mt-6 w-full px-5 py-3 rounded-full bg-indigo-500 text-white shadow-lg hover:bg-indigo-600 active:scale-95 duration-300">Proceed to Pay</button>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [open, setOpen] = useState(null);
  const faqs = [
    { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription anytime from your dashboard.' },
    { q: 'Is there a refund policy?', a: 'We offer a 7-day money-back guarantee for new users.' },
    { q: 'Do prices include taxes?', a: 'All prices are inclusive of GST.' },
    { q: 'Can I switch plans later?', a: 'Yes, upgrade or downgrade anytime with prorated billing.' },
  ];
  return (
    <section id="faq" className="bg-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((f, idx) => (
            <div key={idx} className="rounded-[48px] p-6 shadow-lg border-2 border-slate-900 bg-white">
              <button onClick={() => setOpen(open === idx ? null : idx)} className="w-full flex items-center justify-between">
                <span className="font-semibold text-slate-900">{f.q}</span>
                <Icon name={open === idx ? 'ChevronUp' : 'ChevronDown'} className="w-5 h-5 text-slate-700" />
              </button>
              {open === idx && <p className="mt-4 text-slate-600">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const UpgradeButton = () => (
  <section className="bg-white">
    <div className="container mx-auto px-4 md:px-6 py-12 md:py-24 text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">Ready to Excel?</h2>
      <p className="text-lg text-slate-600 mb-8">Join thousands of students acing their boards with ABC COACHING.</p>
      <Link to="/upgrade" className="px-8 py-4 rounded-full bg-amber-400 text-slate-900 shadow-xl hover:bg-amber-500 active:scale-95 duration-300 text-xl font-semibold">Upgrade Now</Link>
    </div>
  </section>
);

export default function Pricing() {
  const [plans] = useState([
    { name: 'Demo', price: '₹0', period: 'mo', features: ['3 Chapter Access', '5 Practice Questions', 'Basic Solutions'], popular: false },
    { name: 'Monthly', price: '₹499', period: 'mo', features: ['Full Book Access', 'Unlimited Tests', 'Detailed Solutions', 'Progress Dashboard'], popular: true },
    { name: 'Yearly', price: '₹4,990', period: 'yr', features: ['Everything in Monthly', 'Offline PDFs', 'Parent Reports', 'Priority Support'], popular: false },
  ]);
  // TODO: connect API endpoints /api/pricing and /api/subscription/status
  return (
    <div className="min-h-screen bg-white font-['Outfit']">
      <Header />
      <main>
        <PlanComparison plans={plans} />
        <FeatureList />
        <PaymentOptions />
        <FAQ />
        <UpgradeButton />
      </main>
      <Footer />
    </div>
  );
}