"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Chart as ChartJS, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import {CategoryScale,BarElement,Title} from 'chart.js';
import { Bar } from 'react-chartjs-2';

export const ChartLeft = () => {
    const data = [
        { name: 'Growth', value: 68.7 },
        { name: 'Remaining', value: 31.3 },
    ];

    const COLORS = ['#00C2FF', '#2D3748'];

    return (
        <div style={{ background: '#0B111D', padding: '20px', borderRadius: '12px', color: 'white' }}>
            <h3 style={{ fontSize: '14px', color: '#94A3B8' }}>Total Value Locked</h3>
            <h2 style={{ fontSize: '28px', margin: '10px 0' }}>$46.89B</h2>

            <div style={{ height: '150px', position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="100%"
                            startAngle={180}
                            endAngle={0}
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={0}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} stroke="none" />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div style={{ position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)', textAlign: 'center' }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>TVL Change</span>
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <div style={{ background: '#161D29', padding: '10px', borderRadius: '8px', textAlign: 'center', flex: 1, marginRight: '5px' }}>
                    <p style={{ fontSize: '12px', color: '#94A3B8' }}>Daily</p>
                    <p style={{ color: '#10B981' }}>↗ 10.2%</p>
                </div>
                <div style={{ background: '#161D29', padding: '10px', borderRadius: '8px', textAlign: 'center', flex: 1, marginLeft: '5px' }}>
                    <p style={{ fontSize: '12px', color: '#94A3B8' }}>Weekly</p>
                    <p style={{ color: '#10B981' }}>↗ 68.7%</p>
                </div>
            </div>
        </div>
    );
};

// ----------------------------------------

export const ChartRight = () => {
    const value = 72;
    const data = [
        { value: value },
        { value: 100 - value },
    ];

    return (
        <div style={{ background: '#0B111D', padding: '20px', borderRadius: '12px', color: 'white' }}>
            <h3 style={{ fontSize: '14px', color: '#94A3B8' }}>ⓘ Fear & Greed Index</h3>

            <div style={{ height: '200px', position: 'relative', marginTop: '20px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            startAngle={90}
                            endAngle={450}
                            dataKey="value"
                        >
                            <Cell fill="#A3E635" stroke="none" />
                            <Cell fill="#2D3748" stroke="none" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
                    <h1 style={{ fontSize: '48px', margin: 0 }}>72</h1>
                    <p style={{ color: '#A3E635', fontWeight: 'bold', margin: 0 }}>Greed</p>
                    <p style={{ fontSize: '12px', color: '#94A3B8', marginTop: '10px' }}>Yesterday: 65 <span style={{ color: '#10B981' }}>↗ 7</span></p>
                </div>
            </div>
        </div>
    );
};

// ------------------------------------------

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);
export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
    },
};
export const data = {
    datasets: [
        {
            label: 'Projects',
            data: [
                { x: 1, y: 20 },
                { x: 2, y: 35 },
                { x: 3, y: 15 },
                { x: 4, y: 50 },
            ],
            backgroundColor: '#D7499F',
        },
    ],
};
export const ProjectChart1 = () => {
    return (
        <div className='bg-[#0B111D]'>
            <Scatter options={options} data={data} />
        </div>
    )
}

// --------------------------------
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

export const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const data2 = {
    labels,
    datasets: [
        {
            label: 'Hours',
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Minutes',
            data: [1, 2, 3, 4, 5, 6, 7],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export const ProjectChart2 = () => {
    return (
        <div className='bg-[#0B111D]'>
            <Bar options={options2} data={data2} />;
        </div>
    )
}