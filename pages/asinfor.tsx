import React from 'react';
import Image from 'next/image';
import { MarketEvolutionChart, TeamEvolutionChart, RevenueEvolutionChart, SolutionSection, InternationalPresenceSection } from '~~/components/AsinforComponents';
import { NextPage } from 'next';

// Clients data
const clients = [
    { name: "Swatch Group", logo: "/assets/images/Swatch.png", description: "Global leader in watchmaking, key partner since international beginnings." },
    { name: "Sephora", logo: "/assets/images/Sephora-Logo.png", description: "Global beauty reference, marking the breakthrough in the sector in 2000." },
    { name: "Cultura", logo: "/assets/images/logo-cultura.jpeg", description: "Major player in culture, enriching the offering for specialized retail." },
    { name: "Yves Rocher", logo: "/assets/images/Logo-Yves-Rocher.jpg", description: "Pioneer of natural beauty, catalyst for international growth." },
    { name: "Photoservice", logo: "/assets/images/photoservice.jpg", description: "Innovator in photo printing, showcasing technological adaptability." },
    { name: "Estée Lauder", logo: "/assets/images/Estee-Lauder.png", description: "Premium cosmetics giant, symbol of expansion in the UK." },
    { name: "France Loisirs", logo: "/assets/images/logo_france_loisirs.jpg", description: "France Loisirs is a book club based in France with 1.5 million active members in 2017. The club is present throughout France via a network of 34 stores, as well as a website and mail-order services." },
    { name: "Norauto", logo: "/assets/images/norauto.png", description: "Leader in car maintenance, diversifying the portfolio in 2003." },
    { name: "L'Oréal", logo: "/assets/images/LOreal-Logo.png", description: "World's number one in cosmetics, strengthening the position in 2005." },
    { name: "Habitat", logo: "/assets/images/habitat.jpg", description: "Iconic home decor brand, expanding retail expertise." },
    { name: "Sia Home", logo: "/assets/images/sia.png", description: "Iconic home decor brand, expanding retail expertise." },
    { name: "Lenôtre", logo: "/assets/images/logo-lenotre.jpeg", description: "Icon of French gastronomy, demonstrating sector versatility." },
];

// Milestones data
const milestones = [
    { year: "1990-1993", title: "First Steps", event: "Creation of PREST INFOR and development of WinMag, the first management software for sports stores. An intense learning period, marked by self-financing and discovering the challenges of the startup world." },
    { year: "1994-1996", title: "Birth of ASINFOR", event: "Founding of AS INFOR and launch of winShop, the flagship solution. Transition from a technical role to leadership, with an international vision despite persistent challenges." },
    { year: "1997-1999", title: "International Expansion", event: "Strategic repositioning towards major international accounts. Key contracts with Swatch Group, Estée Lauder, and major deployment for Yves Rocher in 12 countries." },
    { year: "2000-2006", title: "Exponential Growth", event: "Acquisition of prestigious clients year after year, from Sephora to L'Oréal. AS INFOR becomes the essential retail partner across various sectors." },
    { year: "2007", title: "Strategic Sale", event: "Successful sale to CEGID, a leader in management solutions. This strategic alliance opens new growth and innovation opportunities." },
    { year: "2007-2008", title: "Integration and Legacy", event: "Integration of AS INFOR's teams into CEGID. Launch of the 'Cegid Retail' strategy, combining AS INFOR's expertise with CEGID's power to conquer new international markets." }
];

const ASINFORContent: NextPage = () => {
    return (
        <div className="pt-14 md:pt-20 w-full overflow-y-auto overflow-x-hidden bg-gray-50 text-gray-800">
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
                        AS INFOR: A Retail Tech Success Story
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto text-gray-600 leading-relaxed">
                        From 1994 to 2007, AS INFOR played a key role in advancing the retail industry by developing innovative software solutions. This entrepreneurial journey, initiated by Laurent Balayre, concluded with integration into the CEGID group.
                    </p>
                </div>

                {/* Key Metrics Section */}
                <div className="stats shadow w-full mb-16 bg-white">
                    {[
                        { value: "300", label: "stores equipped in 1994" },
                        { value: "3500", label: "sales points in 2000" },
                        { value: "9000", label: "installations in 2007" },
                        { value: "€7.6M", label: "revenue in 2007" }
                    ].map((metric, index) => (
                        <div key={index} className="stat place-items-center">
                            <div className="stat-value text-blue-600">{metric.value}</div>
                            <div className="stat-desc text-gray-600">{metric.label}</div>
                        </div>
                    ))}
                </div>

                {/* Clients Grid */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Our Clients</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                        {clients.map((client, index) => (
                            <div
                                key={index}
                                className="cursor-pointer relative aspect-square bg-white rounded-lg p-4 flex items-center justify-center overflow-hidden group shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <Image
                                    src={client.logo}
                                    alt={`Logo of ${client.name}`}
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

                {/* Solution Section */}
                <SolutionSection />

                {/* History Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">The Journey of ASINFOR</h2>
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


                {/* International Presence Section */}
                <InternationalPresenceSection />

                {/* Growth Section */}
                <section className="mb-16">
                    <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Company Growth</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="card bg-white shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Market Presence</h3>
                                <MarketEvolutionChart />
                            </div>
                        </div>
                        <div className="card bg-white shadow-xl">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Team Evolution</h3>
                                <TeamEvolutionChart />
                            </div>
                        </div>
                        <div className="card bg-white shadow-xl md:col-span-2">
                            <div className="card-body">
                                <h3 className="card-title text-blue-600">Revenue Growth</h3>
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