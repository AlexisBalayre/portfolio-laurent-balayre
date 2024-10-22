import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { CheckCircle, Globe, Users, ChartBar, Zap, Flag, MessageSquare } from 'lucide-react';

// Data for the market evolution chart
const marketData = [
    { year: '1997', stores: 1000, licenses: 1500 },
    { year: '2000', stores: 2000, licenses: 4000 },
    { year: '2003', stores: 3500, licenses: 8000 },
    { year: '2006', stores: 6000, licenses: 14000 },
];

export const MarketEvolutionChart = () => (
    <ResponsiveContainer width="100%" height={400}>
        <BarChart data={marketData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="stores" fill="#8884d8" name="Stores" />
            <Bar dataKey="licenses" fill="#82ca9d" name="Licenses" />
        </BarChart>
    </ResponsiveContainer>
);

// Data for the team evolution chart
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
            <Line type="monotone" dataKey="employees" stroke="#8884d8" name="Employees" />
        </LineChart>
    </ResponsiveContainer>
);

// Data for the revenue evolution chart
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
            <Bar dataKey="revenue" fill="#8884d8" name="Revenue (€K)" />
        </BarChart>
    </ResponsiveContainer>
);

export const SolutionSection = () => (
    <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral">winShop: The Heart of Our Innovation</h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="p-6">
                <p className="text-lg text-gray-700 mb-6">
                    winShop redefined the retail experience with an all-in-one software suite:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { icon: <CheckCircle className="text-green-500" />, text: "Real-time sales and inventory management" },
                        { icon: <Users className="text-blue-500" />, text: "Customer analysis for targeted marketing" },
                        { icon: <Zap className="text-yellow-500" />, text: "Loyalty tools and dynamic promotions" },
                        { icon: <ChartBar className="text-purple-500" />, text: "Advanced reporting for informed decisions" },
                    ].map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            {item.icon}
                            <span className="text-gray-700">{item.text}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 font-semibold">
                        From fashion to automotive, winShop adapted to all retail sectors with an intuitive and scalable interface.
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
    <section className="mb-16 p-8 rounded-xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-neutral">Our Global Footprint</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <StatCard
                icon={<Globe className="text-blue-500 w-12 h-12" />}
                value="30"
                label="Countries"
            />
            <StatCard
                icon={<Flag className="text-green-500 w-12 h-12" />}
                value="40%"
                label="Installations outside France"
            />
            <StatCard
                icon={<MessageSquare className="text-purple-500 w-12 h-12" />}
                value="12"
                label="Supported languages"
            />
        </div>
    </section>
);