import Head from 'next/head';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function InvestmentsPage() {
    interface Investment {
        name: string;
        year: number;
        description: string;
        logo: string;
        website: string;
    }

    const [soloInvestments, setSoloInvestments] = useState<Investment[]>([]);
    const [seed4softInvestments, setSeed4softInvestments] = useState<Investment[]>([]);

    useEffect(() => {
        // Placeholder data representing solo investments
        setSoloInvestments([
            {
                name: 'Hightee',
                year: 2008,
                description: 'Accompagnateur global pour startups.',
                logo: '/assets/images/hightee.png',
                website: 'https://www.hightee.com',
            },
            {
                name: 'SquareClock',
                year: 2009,
                description: 'Investissement en tant que Business Angel.',
                logo: '/assets/images/square-clock.jpg',
                website: 'https://www.squareclock.com',
            },
            {
                name: 'SaaSValue',
                year: 2009,
                description: 'Cofondateur.',
                logo: '/assets/images/saasvalue.jpg',
                website: 'https://www.saasvalue.com',
            },
            {
                name: 'Navidis',
                year: 2009,
                description: 'Investissement Business Angel.',
                logo: '/images/navidis.png',
                website: 'https://www.navidis.com',
            },
            {
                name: 'Carredeboeuf.com',
                year: 2009,
                description: 'Investissement Business Angel.',
                logo: '/images/carredeboeuf.png',
                website: 'https://www.carredeboeuf.com',
            },
        ]);

        // Placeholder data representing Seed4Soft investments
        setSeed4softInvestments([
            {
                name: 'Contentsquare',
                year: 2011,
                description:
                    'Accompagnement de la startup devenue licorne. Highlights: 2011: Rencontre avec Jonathan, incubé à l’ESSEC. 2012: Financement Seed4Soft (400 K$). 2013: Changement de nom en Contentsquare. 2014: Prêt BPI (2 M€). 2015: Préparation de la Série A. 2016: Série A (20 M$) avec Highland. 2017: Expansion aux États-Unis. 2018: Série B (42 M€) avec Canaan Partners. 2019: Série C (60 M$) avec Eurazeo, acquisition de Clicktale. 2020: Série D (190 M$) avec BlackRock et BPI. 2021: Série E (500 M$) avec SoftBank, 1200 collaborateurs.',
                logo: '/images/contentsquare.png',
                website: 'https://www.contentsquare.com',
            },
            {
                name: 'CodinGame',
                year: 2011,
                description: 'Plateforme pour améliorer ses compétences en programmation par des jeux.',
                logo: '/images/codingame.png',
                website: 'https://www.codingame.com',
            },
            {
                name: 'Cozy.io',
                year: 2011,
                description: 'Solution de stockage cloud personnel sécurisé.',
                logo: '/images/cozyio.png',
                website: 'https://www.cozy.io',
            },
            {
                name: 'Roofstreet',
                year: 2012,
                description: 'Analyse des comportements de déplacement urbain.',
                logo: '/images/roofstreet.png',
                website: 'https://www.roofstreet.com',
            },
            {
                name: 'Elevo',
                year: 2012,
                description: 'Plateforme de gestion de la performance et des talents.',
                logo: '/images/elevo.png',
                website: 'https://www.elevo.fr',
            },
            {
                name: 'Qemotion',
                year: 2013,
                description: 'Analyse des émotions à partir des commentaires clients.',
                logo: '/images/qemotion.png',
                website: 'https://www.qemotion.com',
            },
            {
                name: 'AddWorking',
                year: 2014,
                description: 'Solution de gestion des sous-traitants et travailleurs indépendants.',
                logo: '/images/addworking.png',
                website: 'https://www.addworking.com',
            },
            {
                name: 'Tigerlily',
                year: 2014,
                description: 'Solution de marketing social pour les entreprises multi-sites.',
                logo: '/images/tigerlily.png',
                website: 'https://www.tigerlilyapps.com',
            },
            {
                name: 'Confiant',
                year: 2015,
                description: 'Sécurité publicitaire pour protéger contre les malvertisements.',
                logo: '/images/confiant.png',
                website: 'https://www.confiant.com',
            },
            {
                name: 'Wittyfit',
                year: 2016,
                description: 'Plateforme pour améliorer le bien-être des collaborateurs en entreprise.',
                logo: '/images/wittyfit.png',
                website: 'https://www.wittyfit.com',
            },
            {
                name: 'Jus Mundi',
                year: 2017,
                description: 'Moteur de recherche pour le droit international.',
                logo: '/images/jusmundi.png',
                website: 'https://www.jusmundi.com',
            },
        ]);
    }, []);

    return (
        <div>
            <Head>
                <title>Investissements de Laurent Balayre</title>
            </Head>
            <main className="p-6 bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen text-white">
                <div className="max-w-6xl mx-auto">
                    <h1 className="text-6xl font-bold mb-12 text-center">Investissements de Laurent Balayre</h1>

                    <h2 className="text-4xl font-semibold mt-12 mb-8 text-center">Aventures Solo</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
                        {soloInvestments.map((investment, index) => (
                            <div
                                key={index}
                                className="relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={investment.logo}
                                    alt={`Logo de ${investment.name}`}
                                    width={120}
                                    height={120}
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-800 bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-sm text-center text-white">
                                        <h3 className="text-lg font-bold mb-2">{investment.name}</h3>
                                        <p>{investment.description}</p>
                                        <Link href={investment.website} legacyBehavior>
                                            <a target="_blank" className="btn btn-secondary text-white mt-4">Visiter le site</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-4xl font-semibold mt-16 mb-8 text-center">Investissements avec Seed4Soft</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {seed4softInvestments.map((investment, index) => (
                            <div
                                key={index}
                                className="relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={investment.logo}
                                    alt={`Logo de ${investment.name}`}
                                    width={120}
                                    height={120}
                                    style={{ objectFit: 'contain' }}
                                    className="transition-transform duration-300 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-blue-800 bg-opacity-90 flex items-center justify-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-sm text-center text-white">
                                        <h3 className="text-lg font-bold mb-2">{investment.name}</h3>
                                        <p>{investment.description}</p>
                                        <Link href={investment.website} legacyBehavior>
                                            <a target="_blank" className="btn btn-secondary text-white mt-4">Visiter le site</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}

// Add this to your tailwind.config.js to include DaisyUI plugin
// module.exports = {
//   plugins: [require("daisyui")],
// }
