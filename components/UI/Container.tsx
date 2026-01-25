
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "", id }) => (
  <div id={id} className={`max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<ContainerProps> = ({ children, className = "", id }) => (
  <section id={id} className={`py-24 md:py-32 overflow-hidden ${className}`}>
    {children}
  </section>
);
