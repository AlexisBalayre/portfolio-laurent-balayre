import React from "react";
import Image from "next/image";
import { FaHandshake, FaRegCalendarAlt } from 'react-icons/fa';

interface Success {
  name: string;
  year: number;
  logo: string;
  description: string;
  highlight: string;
  icon: React.ReactNode;
  acquirer?: {
    name: string;
    logo: string;
  };
}

const PerformanceCard = ({ success }: { success: Success }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-bold">{success.name}</h3>
        <div className="flex items-center text-gray-600">
          <FaRegCalendarAlt className="mr-1" />
          <span>{success.year}</span>
        </div>
      </div>
      <div className="mb-3">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {success.highlight}
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-4">{success.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Image src={success.logo} alt={success.name} width={80} height={80}/>
          {success.acquirer && (
            <>
              <FaHandshake className="text-green-500 text-3xl mx-2" />
              <Image src={success.acquirer.logo} alt={success.acquirer.name} width={80} height={80} />
            </>
          )}
        </div>
        {success.acquirer && (
          <span className="text-xs text-gray-500">Acquis par {success.acquirer.name}</span>
        )}
      </div>
    </div>
  );
};

interface PerformancesSectionProps {
  successStories: Success[];
}

export const PerformancesSection: React.FC<PerformancesSectionProps> = ({ successStories }) => (
  <section className="mb-20">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Performances</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {successStories.map((success, index) => (
          <PerformanceCard key={index} success={success} />
        ))}
      </div>
    </div>
  </section>
);