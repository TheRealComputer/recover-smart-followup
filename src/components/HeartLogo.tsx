import React from 'react';

export const HeartLogo = () => {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
    >
      {/* Heart outline with gradient */}
      <path 
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="url(#heartGradient)"
        strokeWidth="2"
        fill="none"
      />
      
      {/* Checkmark */}
      <path 
        d="M9 12l2 2 4-4"
        stroke="url(#checkGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Three dots */}
      <circle cx="16" cy="8" r="1" fill="#8B5CF6" />
      <circle cx="16" cy="10" r="1" fill="#8B5CF6" />
      <circle cx="16" cy="12" r="1" fill="#8B5CF6" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#0D9488" />
          <stop offset="100%" stopColor="#10B981" />
        </linearGradient>
        <linearGradient id="checkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7C3AED" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}; 