import React from "react";
import Head from "next/head";
import Image from "next/image";
import { FaTrophy, FaChartLine, FaHandshake } from 'react-icons/fa';
import { PerformancesSection } from "~~/components/PerformancesSection";

const InvestmentsPage = () => {
    const investments = [
        { name: "AS INFOR", year: 1994, logo: "/assets/images/asinfor-logo.png", description: "Éditeur de logiciels de gestion pour le retail." },
        { name: "SQUARE CLOCK", year: 2009, logo: "/assets/images/square-clock.jpg", description: "Solution de gestion du temps pour les entreprises." },
        { name: "Navidis", year: 2009, logo: "/assets/images/navidis.jpeg", description: "Gestion de votre territoire." },
        { name: "Carré de boeuf", year: 2009, logo: "/assets/images/carre-de-boeuf.jpeg", description: "E-commerce de viande." },
        { name: "Idées À Faire", year: 2009, logo: "/assets/images/IAF.jpg", description: "Magazine de DIY." },
        { name: "SaasValue", year: 2010, logo: "/assets/images/saasvalue.jpg", description: "Performance Improvement." },
        { name: "ContentSquare", year: 2011, logo: "/assets/images/CS.png", description: "Plateforme d'analyse de l'expérience digitale." },
        { name: "CodinGame", year: 2011, logo: "/assets/images/codingame.png", description: "Plateforme de coding challenges et recrutement tech." },
        { name: "Cozy.io", year: 2011, logo: "/assets/images/cozy.png", description: "Solution de stockage cloud personnel sécurisé." },
        { name: "Urban-Cab", year: 2012, logo: "/assets/images/urban-cab.jpg", description: "Éco-Solution du Dernier Kilomètre." },
        { name: "Roofstreet", year: 2012, logo: "/assets/images/roofstreet.png", description: "Analyse des comportements de déplacement urbain." },
        { name: "Elevo", year: 2012, logo: "/assets/images/elevo.png", description: "Plateforme de gestion de la performance et des talents." },
        { name: "Qemotion", year: 2013, logo: "/assets/images/qemotion.png", description: "Analyse des émotions à partir des commentaires clients." },
        { name: "AddWorking", year: 2014, logo: "/assets/images/addworking.png", description: "Solution de gestion des sous-traitants et travailleurs indépendants." },
        { name: "Lady Cookie", year: 2014, logo: "/assets/images/ladycookies.jpg", description: "Marque de cookies artisanaux haut de gamme." },
        { name: "Augmented Magic", year: 2014, logo: "/assets/images/augmented-magic.png", description: "Digital Magic Show Experience" },
        { name: "Tigerlily", year: 2014, logo: "/assets/images/tigerlily.png", description: "Solution de marketing social pour les entreprises multi-sites." },
        { name: "Confiant", year: 2015, logo: "/assets/images/confiant.png", description: "Sécurité publicitaire pour protéger contre les malvertisements." },
        { name: "Wittyfit", year: 2016, logo: "/assets/images/wittyfit.png", description: "Plateforme pour améliorer le bien-être des collaborateurs en entreprise." },
        { name: "Canobio", year: 2016, logo: "/assets/images/canobio.png", description: "Marque de maillots de bain éco-responsables." },
        { name: "Splio", year: 2016, logo: "/assets/images/splio.png", description: "Plateforme de marketing relationnel." },
        { name: "Joli'moi", year: 2018, logo: "/assets/images/jolimoi.png", description: "Plateforme de personnalisation de cosmétiques." },
        { name: "Bizz4", year: 2019, logo: "/assets/images/b4.png", description: "bizz4, startup composée d’experts venant à la fois du monde du digital et du retail, a conçu la solution bizz4retail alliant la puissance du web et les forces émotionnelles du point de vente." },
        { name: "ViiBE", year: 2021, logo: "/assets/images/Viibe.png", description: "Solution de support vidéo pour les entreprises." },
        { name: "Gapiane", year: 2023, logo: "/assets/images/Gapianne.png", description: "Partenaire du bien-être intime des femmes." },
    ];

    const successStories = [
        {
            name: "AS INFOR",
            year: 2007,
            logo: "/assets/images/asinfor-logo.png",
            description: "Éditeur de logiciels de gestion pour le retail, acquis par Cegid.",
            highlight: "Exit réussi",
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
            description: "Solution de gestion du temps pour les entreprises.",
            highlight: "Exit réussi",
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
            description: "Analyse de performance SaaS.",
            highlight: "Exit réussi",
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
            description: "Marque de cookies artisanaux haut de gamme.",
            highlight: "Exit réussi",
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
            description: "Plateforme de personnalisation de cosmétiques.",
            highlight: "Exit réussi",
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
            description: "Plateforme d'analyse de l'expérience digitale.",
            highlight: "Série F de 600M$ en 2023",
            icon: <FaTrophy className="text-yellow-400 text-2xl" />,
        },
    ];

    return (
        <div className="pt-14 md:pt-20 w-full overflow-y-auto overflow-x-hidden bg-gray-50 text-gray-800">
            <Head>
                <title>Investissements de Laurent Balayre</title>
            </Head>
            <div className="container mx-auto px-4 pt-8">
                {/* Title Section */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-extrabold mb-4 text-neutral">
                        Laurent Balayre : 34 ans d&apos;innovation et d&apos;investissement
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        De 1990 à aujourd&apos;hui, Laurent Balayre a contribué à l&apos;évolution du paysage technologique et entrepreneurial à travers ses nombreux investissements et créations d&apos;entreprises.
                    </p>
                </div>

                {/* Key Metrics Section */}
                <div className="stats shadow w-full mb-16 bg-white">
                    {[
                        { value: "34", label: "années d'expérience" },
                        { value: "25+", label: "entreprises soutenues" },
                        { value: "5", label: "exits réussis" },
                        { value: "1", label: "licorne (ContentSquare)" }
                    ].map((metric, index) => (
                        <div key={index} className="stat place-items-center">
                            <div className="stat-value text-blue-600">{metric.value}</div>
                            <div className="stat-desc text-gray-600">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Investments Grid */}
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-center mb-8">Portefeuille d&apos;Investissements</h2>
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