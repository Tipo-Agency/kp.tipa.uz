
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = "", id }) => (
  <div id={id} className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 w-full ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<ContainerProps> = ({ children, className = "", id }) => (
  <section id={id} className={`py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden w-full ${className}`}>
    {children}
  </section>
);
