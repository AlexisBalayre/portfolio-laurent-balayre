import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { LinkedinLogo } from '~~/public/assets/svg/LinkedinLogo';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-white py-10" id="contact">
      <div className="container mx-auto md:px-4 px-6">
        <div className="flex flex-row justify-between items-center mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0 hidden md:block">Laurent Balayre</div>
          <nav className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            {[
              { href: "mailto:laurent@balayre.com", icon: EnvelopeIcon, text: "laurent@balayre.com" },
              { href: "https://www.linkedin.com/in/laurentbalayre/", icon: LinkedinLogo, text: "LinkedIn" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center transition duration-300 hover:text-blue-200 group"
                aria-label={`${item.text} de Laurent Balayre`}
              >
                <item.icon className="w-5 h-5 mr-2 transition duration-300 group-hover:scale-110" />
                <span className="border-b border-transparent group-hover:border-blue-200">{item.text}</span>
              </a>
            ))}
          </nav>
        </div>
        <div className="border-t border-blue-400 pt-4 flex flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0">
            Copyright © {currentYear} Laurent Balayre. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};