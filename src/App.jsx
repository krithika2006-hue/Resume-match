import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/dashboard/DashboardLayout';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    try {
      let savedUser = localStorage.getItem('verimatch_user');
      // If navigating directly to /dashboard without session, initialize sample session
      if (!savedUser && window.location.pathname === '/dashboard') {
        const demoUser = {
          name: 'Sarah Chen',
          email: 'sarah.chen@example.com',
          role: 'Senior Full-Stack & AI Systems Engineer',
          signedInAt: new Date().toISOString()
        };
        localStorage.setItem('verimatch_user', JSON.stringify(demoUser));
        savedUser = JSON.stringify(demoUser);
      }
      if (savedUser) {
        setCurrentUser(JSON.parse(savedUser));
      }
    } catch (err) {
      console.error('Error reading stored user session:', err);
    }

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    window.history.pushState({}, '', '/dashboard');
    setCurrentPath('/dashboard');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = () => {
    localStorage.removeItem('verimatch_user');
    setCurrentUser(null);
    window.history.pushState({}, '', '/');
    setCurrentPath('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // If user is logged in and route is /dashboard, render DashboardLayout
  if (currentPath === '/dashboard' && currentUser) {
    return (
      <DashboardLayout 
        currentUser={currentUser} 
        onSignOut={handleSignOut} 
      />
    );
  }

  // Otherwise, render full Landing Page
  return <LandingPage onLoginSuccess={handleLoginSuccess} />;
}
