import React from 'react';
import Image from 'next/image';
import { MarketEvolutionChart, TeamEvolutionChart, RevenueEvolutionChart, SolutionSection, InternationalPresenceSection } from '~~/components/AsinforComponents';
import { NextPage } from 'next';

// Clients data
const clients = [
    { name: "Swatch Group", logo: "/assets/images/Swatch.png", description: "Leader mondial de l'horlogerie, partenaire clé depuis les débuts internationaux." },
    { name: "Estée Lauder", logo: "/assets/images/Estee-Lauder.png", description: "Géant des cosmétiques premium, symbole de l'expansion au Royaume-Uni." },
    { name: "Yves Rocher", logo: "/assets/images/Logo-Yves-Rocher.jpg", description: "Pionnier de la beauté naturelle, catalyseur de la croissance internationale." },
    { name: "Sephora", logo: "/assets/images/Sephora-Logo.png", description: "Référence mondiale de la beauté, marquant la percée dans le secteur en 2000." },
    { name: "Norauto", logo: "/assets/images/norauto.png", description: "Leader de l'entretien automobile, diversifiant le portefeuille en 2003." },
    { name: "L'Oréal", logo: "/assets/images/LOreal-Logo.png", description: "Numéro un mondial des cosmétiques, renforçant la position en 2005." },
    { name: "Sia Home", logo: "/assets/images/Sia.png", description: "Marque emblématique de la décoration, élargissant l'expertise retail." },
    { name: "Photoservice", logo: "/assets/images/photoservice.jpg", description: "Innovateur dans l'impression photo, illustrant l'adaptabilité technologique." },
    { name: "Cultura", logo: "/assets/images/logo-cultura.jpeg", description: "Acteur majeur de la culture, enrichissant l'offre pour le retail spécialisé." },
    { name: "Lenôtre", logo: "/assets/images/logo-lenotre.jpeg", description: "Icône de la gastronomie française, preuve de la polyvalence sectorielle." },
];

// Milestones data
const milestones = [
    { year: "1990-1993", title: "Premiers Pas", event: "Création de PREST INFOR et développement de WinMag, premier logiciel de gestion pour magasins de sport. Période d'apprentissage intense, marquée par l'autofinancement et la découverte des défis du monde startup." },
    { year: "1994-1996", title: "Naissance d'ASINFOR", event: "Fondation d'AS INFOR et lancement de winShop, la solution phare. Transition du rôle technique à celui de dirigeant, avec une vision internationale malgré les défis persistants." },
    { year: "1997-1999", title: "Expansion Internationale", event: "Repositionnement stratégique vers les grands comptes internationaux. Signatures cruciales avec Swatch Group, Estée Lauder, et déploiement majeur pour Yves Rocher dans 12 pays." },
    { year: "2000-2006", title: "Croissance Exponentielle", event: "Acquisition de clients prestigieux chaque année, de Sephora à L'Oréal. AS INFOR s'impose comme le partenaire incontournable du retail dans des secteurs variés." },
    { year: "2007", title: "Cession Stratégique", event: "Cession réussie à CEGID, leader des solutions de gestion. Cette alliance stratégique ouvre de nouvelles perspectives de croissance et d'innovation." },
    { year: "2007-2008", title: "Intégration et Héritage", event: "Intégration des équipes AS INFOR au sein de CEGID. Lancement de la stratégie 'Cegid Retail', combinant l'expertise d'AS INFOR et la puissance de CEGID pour conquérir de nouveaux marchés internationaux." }
];

const ASINFORContent: NextPage = () => {
    return (
        <div className="pt-10 md:pt-20 w-full overflow-y-auto overflow-x-hidden bg-gray-50 text-gray-800">
            <div className="container mx-auto px-4 pt-8">
                {/* Title Section with Logo */}
                <div className="text-center mb-16">
                    <div className="flex justify-center items-center mb-6">
                        <Image
                            src="/assets/images/asinfor-logo.png"
                            alt="Logo ASINFOR"
                            width={200}
                            height={100}
                            className="mr-4"
                        />
                    </div>
                    <h1 className="text-5xl font-extrabold mb-4 text-neutral">
                    ASINFOR : Une Success Story du Retail Tech
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        De 1994 à 2007, ASINFOR a participé à l'évolution du commerce de détail en développant des solutions logicielles innovantes. Cette aventure entrepreneuriale, initiée par Laurent Balayre, s'est conclue par l'intégration au groupe CEGID.
                    </p>
                </div>

                {/* Key Metrics Section */}
                <div className="stats shadow w-full mb-16 bg-white">
                    {[
                        { value: "300", label: "magasins équipés en 1994" },
                        { value: "3500", label: "points de vente en 2000" },
                        { value: "9000", label: "installations en 2007" },
                        { value: "7.6M€", label: "chiffre d'affaires en 2007" }
                    ].map((metric, index) => (
                        <div key={index} className="stat place-items-center">
                            <div className="stat-value text-blue-600">{metric.value}</div>
                            <div className="stat-desc text-gray-600">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Solution Section */}
                <SolutionSection />

                {/* International Presence Section */}
                <InternationalPresenceSection />

                {/* Histoire Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Le Parcours d'ASINFOR</h2>
                    <div className="space-y-4">
                        {milestones.map((milestone, index) => (
                            <div key={index} className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300">
                                <div className="card-body">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="card-title text-blue-600">{milestone.year}</h3>
                                        <span className="text-sm font-semibold text-gray-500">{milestone.title}</span>
                                    </div>
                                    <p className="text-gray-700">{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Clients Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Nos Partenaires Commerciaux</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={`Logo de ${client.name}`}
                                    width={120}
                                    height={120}
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-800 bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm text-center text-white">{client.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Croissance Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Évolution de l'Entreprise</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card bg-white shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Présence sur le Marché</h3>
                                <MarketEvolutionChart />
                            </div>
                        </div>
                        <div className="card bg-white shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Évolution de l'Équipe</h3>
                                <TeamEvolutionChart />
                            </div>
                        </div>
                        <div className="card bg-white shadow-xl md:col-span-2">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Progression du Chiffre d'Affaires</h3>
                                <RevenueEvolutionChart />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ASINFORContent;