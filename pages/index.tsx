import React from 'react';
import Image from 'next/image';
import { BriefcaseIcon } from '@heroicons/react/24/outline';
import { FaLinkedin } from 'react-icons/fa'; // Importez l'icône LinkedIn
import TimelineDark from '~~/components/TimelineDark';
import experiences from "~~/public/assets/data/experiences.json";
import { NextPage } from 'next/types';

const Home: NextPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gray-50 py-20 md:py-32" id="aboutMe">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col lg:flex-row items-center justify-between">
                            <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                                    Laurent Balayre
                                </h1>
                                <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">Entrepreneur Investisseur</h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                    Homme de terrain et d&apos;action, Laurent est entrepreneur dans l&apos;industrie de la Tech et du Digital. Depuis 2008, Laurent a cofondé, accompagné et financé de nombreuses startups dans différents secteurs d&apos;activités : cosmétique, mode, hôtellerie, logistique,… et même des cookies !
                                    Mais il est surtout reconnu pour son expertise dans la Retail Tech. Laurent est le premier investisseur de Content Square qu&apos;il a coaché depuis l&apos;origine. Il a également financé et accompagné SquareClock cédée à Dassault System, ainsi que SaasValue cédée à Forwork.
                                </p>
                                <a 
                                    href="https://www.linkedin.com/in/laurentbalayre/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-[#0077B5] hover:bg-[#006699] text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md"
                                >
                                    <FaLinkedin className="mr-2" />
                                    Suivre sur LinkedIn
                                </a>
                            </div>
                            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                <Image
                                    src="/assets/images/profile_picture.jpeg"
                                    alt="Photo de Laurent Balayre"
                                    width={400}
                                    height={400}
                                    className="rounded-full shadow-xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Experience Timeline */}
                <section className="bg-gray-100 py-20" id="experiences">
                    <div className="container mx-auto px-4">
                        <div className="flex items-center justify-center mb-12">
                            <BriefcaseIcon className="h-10 w-10 mr-4 text-gray-900" />
                            <h2 className="text-4xl font-bold text-gray-900">Parcours</h2>
                        </div>
                        <TimelineDark items={experiences} />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;