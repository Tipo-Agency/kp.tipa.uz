
import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export const Heading1: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-slate-900 font-['Unbounded'] ${className}`}>
    {children}
  </h1>
);

export const Heading2: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-5xl font-bold tracking-tight text-slate-900 font-['Unbounded'] ${className}`}>
    {children}
  </h2>
);

export const Subheading: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <p className={`text-xl md:text-2xl font-light text-slate-500 leading-relaxed font-['Unbounded'] ${className}`}>
    {children}
  </p>
);

export const BodyText: React.FC<TypographyProps> = ({ children, className = "" }) => (
  <p className={`text-lg md:text-xl text-slate-600 leading-relaxed ${className}`}>
    {children}
  </p>
);
