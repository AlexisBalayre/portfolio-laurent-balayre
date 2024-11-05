import React from "react";
import Image from "next/image";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { FaLinkedin } from "react-icons/fa"; // Importez l'icône LinkedIn
import TimelineDark from "~~/components/TimelineDark";
import experiences from "~~/public/assets/data/experiences.json";
import { NextPage } from "next/types";

const Home: NextPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="bg-gray-50 py-20 md:py-32" id="aboutMe">
                    <div className="container mx-auto px-4">
                        <div className="grid md:flex md:flex-col lg:flex-row items-center justify-between">
                            <div className="lg:w-8/12 mb-10 lg:mb-0">
                                <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
                                    Laurent Balayre
                                </h1>
                                <h2 className="text-2xl md:text-3xl text-gray-600 mb-6">
                                    Entrepreneur & Investor
                                </h2>
                                <p className="text-lg text-gray-700 leading-relaxed mb-8 text-justify">
                                    Laurent Balayre is a man of action, recognized for his
                                    expertise in the Tech and Digital industries. A graduate of
                                    ESME Sudria, he launched his career in 1990 by founding his
                                    first start-up, Prest Infor, and developing WinMag, the first
                                    client-server store management software on Microsoft Windows
                                    3.0. In 1994, he founded AS INFOR, publisher of WinShop, an
                                    innovative software suite for the specialized retail sector.
                                    The solution is installed in over 6,000 stores in 30 countries
                                    and translated into 12 languages. For 13 years, he presided
                                    over the company, recording annual growth of 25%, until its
                                    sale to Cegid in 2007, where he went on to manage the Retail
                                    market. Laurent continued his entrepreneurial journey in 2008
                                    with the creation of Hightee, before becoming a key investor
                                    in the startup ecosystem. Having met Jonathan Cherki at the
                                    ESSEC incubator, he supported him from the outset and became
                                    Content Square&apos;s first investor. Laurent has also
                                    financed companies such as SquareClock (sold to Dassault
                                    Systèmes) and SaasValue (sold to Forwork). In 2018, he
                                    launched Bizz4, creator of Bizz4Retail, a revolutionary SaaS
                                    solution for the retail sector.
                                </p>
                                <a
                                    href="https://www.linkedin.com/in/laurentbalayre/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center bg-[#0077B5] hover:bg-[#006699] text-white font-bold py-3 px-6 rounded-full transition duration-300 shadow-md "
                                >
                                    <FaLinkedin className="mr-2 " />
                                    Follow on LinkedIn
                                </a>
                            </div>
                            <div className="lg:w-1/2 flex justify-center lg:justify-end">
                                <Image
                                    src="/assets/images/profile_picture_bis.jpeg"
                                    alt="Photo de Laurent Balayre"
                                    width={300}
                                    height={300}
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
                            <h2 className="text-4xl font-bold text-gray-900">Career Path</h2>
                        </div>
                        <TimelineDark items={experiences} />
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
