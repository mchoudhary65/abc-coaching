import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '@pages/Home';
import Pricing from '@pages/Pricing';
import SignUp from '@pages/SignUp';
import Login from '@pages/Login';
import Dashboard from '@pages/Dashboard';
import PracticeTest from '@pages/PracticeTest';
import TestResults from '@pages/TestResults';
import AdminPanel from '@pages/AdminPanel';
import ClassSubjects from '@pages/ClassSubjects';
import NavodayaPreparation from '@pages/NavodayaPreparation';
import SubjectChapters from '@pages/SubjectChapters';
import ChapterReader from '@pages/ChapterReader';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/practicetest" element={<PracticeTest />} />
      <Route path="/testresults" element={<TestResults />} />
      <Route path="/adminpanel" element={<AdminPanel />} />
      <Route path="/classsubjects" element={<ClassSubjects />} />
      <Route path="/navodayapreparation" element={<NavodayaPreparation />} />
      <Route path="/subjectchapters" element={<SubjectChapters />} />
      <Route path="/chapterreader" element={<ChapterReader />} />
    </Routes>
  );
}

export default App;