// src/components/shared/Section.js
/**
 * Reusable Section Component
 * Provides consistent section styling and structure
 */

import React from 'react';
import Title from '../layouts/Title';

const Section = ({
  id,
  title,
  subtitle,
  children,
  className = '',
  noBorder = false,
}) => {
  return (
    <section
      id={id}
      className={`
        w-full py-20 flex flex-col
        ${!noBorder && 'border-b-[1px] border-b-black'}
        ${className}
      `}
    >
      {title && (
        <div className="w-full flex justify-center items-center text-center mb-10">
          <Title title={title} des={subtitle} />
        </div>
      )}
      <div className="w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
