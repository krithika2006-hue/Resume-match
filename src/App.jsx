import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import DashboardLayout from './components/dashboard/DashboardLayout';

export default function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('verimatch_user');
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

  // If user is logged in and route is /dashboard (or user is active), render Dashboard
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
