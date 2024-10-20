import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { CheckCircle, Globe, Users, ChartBar, Zap, Flag, MessageSquare } from 'lucide-react';


// Données pour le graphique d'évolution du marché
const marketData = [
    { year: '1994', magasins: 300, licences: 150 },
    { year: '1997', magasins: 700, licences: 600 },
    { year: '2000', magasins: 3500, licences: 3000 },
    { year: '2003', magasins: 7000, licences: 8000 },
    { year: '2007', magasins: 9000, licences: 15000 },
];

export const MarketEvolutionChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="magasins" fill="#8884d8" name="Magasins" />
            <Bar dataKey="licences" fill="#82ca9d" name="Licences" />
        </BarChart>
    </ResponsiveContainer>
);

// Données pour le graphique d'évolution des équipes
const teamData = [
    { year: 1995, employees: 3 },
    { year: 1997, employees: 6 },
    { year: 1999, employees: 17 },
    { year: 2001, employees: 25 },
    { year: 2003, employees: 29 },
    { year: 2005, employees: 48 },
    { year: 2006, employees: 55 },
    { year: 2007, employees: 65 },
];

export const TeamEvolutionChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <LineChart data={teamData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="employees" stroke="#8884d8" name="Employés" />
        </LineChart>
    </ResponsiveContainer>
);

// Données pour le graphique d'évolution du chiffre d'affaires
const revenueData = [
    { year: 2000, revenue: 1000 },
    { year: 2001, revenue: 1500 },
    { year: 2002, revenue: 2200 },
    { year: 2003, revenue: 3000 },
    { year: 2004, revenue: 4000 },
    { year: 2005, revenue: 5500 },
    { year: 2006, revenue: 6800 },
    { year: 2007, revenue: 7600 },
];

export const RevenueEvolutionChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="revenue" fill="#8884d8" name="Chiffre d'Affaires (K€)" />
        </BarChart>
    </ResponsiveContainer>
);


export const SolutionSection = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral">winShop : Le Cœur de Notre Innovation</h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6">
                <p className="text-lg text-gray-700 mb-6">
                    winShop redéfinissait l&apos;expérience retail avec une suite logicielle tout-en-un :
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <CheckCircle className="text-green-500" />, text: "Gestion des ventes et stocks en temps réel" },
                        { icon: <Users className="text-blue-500" />, text: "Analyse client pour un marketing ciblé" },
                        { icon: <Zap className="text-yellow-500" />, text: "Outils de fidélisation et promotions dynamiques" },
                        { icon: <ChartBar className="text-purple-500" />, text: "Reporting avancé pour des décisions éclairées" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            {item.icon}
                            <span className="text-gray-700">{item.text}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-semibold">
                        De la mode à l&apos;automobile, winShop s&apos;adaptait à tous les secteurs du retail avec une interface intuitive et évolutive.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

interface StatCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
}

const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center">
      {icon}
      <p className="text-4xl font-bold text-blue-600 mt-2">{value}</p>
      <p className="text-gray-600 text-lg">{label}</p>
    </div>
  );
  
export const InternationalPresenceSection = () => (
    <section className="bg-white mb-16 p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Notre Empreinte Mondiale</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <StatCard 
          icon={<Globe className="text-blue-500 w-12 h-12" />}
          value="30"
          label="Pays"
        />
        <StatCard 
          icon={<Flag className="text-green-500 w-12 h-12" />}
          value="40%"
          label="Installations hors France"
        />
        <StatCard 
          icon={<MessageSquare className="text-purple-500 w-12 h-12" />}
          value="12"
          label="Langues supportées"
        />
      </div>
      
      <div className="bg-blue-100 border-l-4 border-blue-500 p-4 rounded">
        <p className="text-blue-800 font-semibold text-lg">
          ASINFOR : Un savoir-faire adapté aux défis du retail international, de l&apos;Europe au Moyen-Orient.
        </p>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg text-gray-700">
          Notre présence internationale témoigne de notre capacité à répondre aux besoins variés du retail global,
          en offrant des solutions adaptées aux spécificités locales tout en maintenant une cohérence globale.
        </p>
      </div>
    </section>
  );