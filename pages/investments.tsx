import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaTrophy, FaChartLine, FaHandshake } from 'react-icons/fa';
import { PerformancesSection } from "~~/components/PerformancesSection";

const InvestmentsPage = () => {
    const investments = [
        { name: "AS INFOR", year: 1994, logo: "/assets/images/asinfor-logo.png", description: "Software editor for retail management." },
        { name: "SQUARE CLOCK", year: 2009, logo: "/assets/images/square-clock.jpg", description: "Time management solution for companies." },
        { name: "Navidis", year: 2009, logo: "/assets/images/navidis.jpeg", description: "Territory management solution." },
        { name: "Carré de boeuf", year: 2009, logo: "/assets/images/carre-de-boeuf.jpeg", description: "Online meat e-commerce." },
        { name: "Idées À Faire", year: 2009, logo: "/assets/images/IAF.jpg", description: "DIY magazine." },
        { name: "SaasValue", year: 2010, logo: "/assets/images/saasvalue.jpg", description: "Performance improvement solution." },
        { name: "Contentsquare", year: 2011, logo: "/assets/images/CS.png", description: "Digital experience analytics platform." },
        { name: "CodinGame", year: 2011, logo: "/assets/images/codingame.png", description: "Platform for coding challenges and tech recruitment." },
        { name: "Cozy.io", year: 2011, logo: "/assets/images/cozy.png", description: "Secure personal cloud storage solution." },
        { name: "Urban-Cab", year: 2012, logo: "/assets/images/urban-cab.jpg", description: "Eco-friendly last-mile delivery solution." },
        { name: "Roofstreet", year: 2012, logo: "/assets/images/roofstreet.png", description: "Urban mobility behavior analysis solution." },
        { name: "Elevo", year: 2012, logo: "/assets/images/elevo.png", description: "Performance and talent management platform." },
        { name: "Qemotion", year: 2013, logo: "/assets/images/qemotion.png", description: "Emotion analysis from customer reviews." },
        { name: "AddWorking", year: 2014, logo: "/assets/images/addworking.png", description: "Subcontractor and freelancer management solution." },
        { name: "Lady Cookie", year: 2014, logo: "/assets/images/ladycookies.jpg", description: "High-end artisanal cookie brand." },
        { name: "Augmented Magic", year: 2014, logo: "/assets/images/augmented-magic.png", description: "Digital Magic Show Experience." },
        { name: "Tigerlily", year: 2014, logo: "/assets/images/tigerlily.png", description: "Social marketing solution for multi-site businesses." },
        { name: "Confiant", year: 2015, logo: "/assets/images/confiant.png", description: "Ad security solution to protect against malvertising." },
        { name: "Wittyfit", year: 2016, logo: "/assets/images/wittyfit.png", description: "Platform to improve employee well-being." },
        { name: "Canobio", year: 2016, logo: "/assets/images/canobio.png", description: "Eco-friendly swimwear brand." },
        { name: "Splio", year: 2016, logo: "/assets/images/splio.png", description: "Customer relationship marketing platform." },
        { name: "Joli'moi", year: 2018, logo: "/assets/images/jolimoi.png", description: "Personalized cosmetics platform." },
        { name: "Bizz4", year: 2019, logo: "/assets/images/b4.png", description: "Startup combining digital and retail expertise to create a retail solution that merges the power of the web and emotional in-store experiences." },
        { name: "ViiBE", year: 2021, logo: "/assets/images/Viibe.png", description: "Video support solution for companies." },
        { name: "Gapiane", year: 2023, logo: "/assets/images/Gapianne.png", description: "Partner for women's intimate well-being." },
    ];

    const successStories = [
        {
            name: "AS INFOR",
            year: 2007,
            logo: "/assets/images/asinfor-logo.png",
            description: "Software editor for retail management, acquired by Cegid.",
            highlight: "Successful exit",
            icon: <FaHandshake className="text-green-500 text-2xl" />,
            acquirer: {
                name: "Cegid",
                logo: "/assets/images/cegid.png"
            }
        },
        {
            name: "SQUARE CLOCK",
            year: 2009,
            logo: "/assets/images/square-clock.jpg",
            description: "Time management solution for companies.",
            highlight: "Successful exit",
            icon: <FaHandshake className="text-green-500 text-2xl" />,
            acquirer: {
                name: "Dassault Systèmes",
                logo: "/assets/images/Dassault-Systeme.png"
            }
        },
        {
            name: "SaasValue",
            year: 2012,
            logo: "/assets/images/saasvalue.jpg",
            description: "SaaS performance analytics.",
            highlight: "Successful exit",
            icon: <FaHandshake className="text-green-500 text-2xl" />,
            acquirer: {
                name: "Forwork",
                logo: "/assets/images/ForWork.png"
            }
        },
        {
            name: "Lady Cookie",
            year: 2014,
            logo: "/assets/images/ladycookies.jpg",
            description: "High-end artisanal cookie brand.",
            highlight: "Successful exit",
            icon: <FaChartLine className="text-blue-500 text-2xl" />,
            acquirer: {
                name: "La Fabrique Cookies",
                logo: "/assets/images/La Fabrique Cookie.png"
            }
        },
        {
            name: "Joli'moi",
            year: 2018,
            logo: "/assets/images/jolimoi.png",
            description: "Personalized cosmetics platform.",
            highlight: "Successful exit",
            icon: <FaHandshake className="text-green-500 text-2xl" />,
            acquirer: {
                name: "Groupe Rocher",
                logo: "/assets/images/Groupe-Rocher.png"
            }
        },
        {
            name: "ContentSquare",
            year: 2023,
            logo: "/assets/images/CS.png",
            description: "Digital experience analytics platform.",
            highlight: "$600M Series F in 2023",
            icon: <FaTrophy className="text-yellow-400 text-2xl" />,
        },
    ];

    return (
        <div className="pt-14 md:pt-20 w-full overflow-y-auto overflow-x-hidden bg-gray-50 text-gray-800">
            <Head>
                <title>Laurent Balayre&apos;s investments</title>
            </Head>
            <div className="container mx-auto px-4 pt-8">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 text-neutral">
                        34 years of innovation and investment
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        From 1990 to the present day, Laurent Balayre has contributed to the evolution of the technological and entrepreneurial landscape through his numerous investments and company creations.
                    </p>
                </div>

                {/* Key Metrics Section */}
                <div className="stats shadow w-full mb-16 bg-white">
                    {[
                        { value: "34", label: "years of experience" },
                        { value: "25+", label: "companies supported" },
                        { value: "5", label: "successful exits" },
                        { value: "1", label: "unicorn (ContentSquare)" }
                    ].map((metric, index) => (
                        <div key={index} className="stat place-items-center">
                            <div className="stat-value text-blue-600">{metric.value}</div>
                            <div className="stat-desc text-gray-600">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Investments Grid */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-8">Investment Portfolio</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {investments.map((investment, index) => (
                            <div
                                key={index}
                                className="relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                            >
                                <Image
                                    src={investment.logo}
                                    alt={`Logo de ${investment.name}`}
                                    width={120}
                                    height={120}
                                    style={{ objectFit: "contain" }}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-800 bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-sm text-center text-white">
                                        <h3 className="font-bold mb-2">{investment.name}</h3>
                                        <p>{investment.year}</p>
                                        <p>{investment.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Success Stories Section */}
                <PerformancesSection successStories={successStories} />

            </div>
        </div>
    );
};

export default InvestmentsPage;