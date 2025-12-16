/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { ServerIcon, DatabaseIcon, CloudIcon, CpuIcon, GlobeIcon, CodeIcon } from './Icons';

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string; status?: string }> = ({ title, children, className = "", status }) => (
    <div className={`bg-[#1a1638]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-colors duration-300 ${className} relative overflow-hidden`}>
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-cyan-400 font-bold uppercase tracking-wider text-sm">{title}</h3>
            {status && (
                <span className={`text-[10px] px-2 py-0.5 rounded border ${
                    status === 'ACTIVE' ? 'bg-green-900/30 border-green-500/50 text-green-400' : 
                    status === 'TESTING' ? 'bg-yellow-900/30 border-yellow-500/50 text-yellow-400' :
                    'bg-gray-800 border-gray-600 text-gray-400'
                } font-mono`}>
                    {status}
                </span>
            )}
        </div>
        {children}
    </div>
);

export const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="space-y-8">
            {/* STATUS DASHBOARD */}
            <div className="bg-gray-900/80 border border-gray-700 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 shadow-lg shadow-purple-900/20">
                <div className="flex items-center gap-4">
                    <div className="relative">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <div>
                        <h4 className="text-white font-bold text-sm tracking-wide">ECOSYSTEM STATUS: HYBRID DEPLOYMENT</h4>
                        <p className="text-gray-400 text-xs mt-0.5">Foundation LLM Active • Sub-Agents in Data Feeding Phase</p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-3">
                    <div className="px-3 py-1.5 bg-purple-900/40 border border-purple-500/50 rounded flex items-center gap-2 shadow-inner shadow-purple-900/50">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                        <span className="text-xs text-purple-200 font-mono"><strong className="text-white">Bhoomi 1.0.0:</strong> ONLINE</span>
                    </div>
                    <div className="px-3 py-1.5 bg-yellow-900/40 border border-yellow-500/50 rounded flex items-center gap-2 shadow-inner shadow-yellow-900/50">
                        <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-yellow-200 font-mono"><strong className="text-white">Small Agents:</strong> TESTING & DATA FEEDING</span>
                    </div>
                </div>
            </div>

            {/* CORE INFRASTRUCTURE LAYERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* 1. Data Ingestion */}
                <Card title="Data Ingestion Sources">
                    <ul className="space-y-3 text-sm text-gray-300 font-mono">
                        <li className="flex items-center gap-3">
                            <GlobeIcon className="w-4 h-4 text-blue-400 flex-shrink-0"/> 
                            <span>NASA Sentinel Data</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <ServerIcon className="w-4 h-4 text-green-400 flex-shrink-0"/> 
                            <span>Bhunidhi Portal</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CloudIcon className="w-4 h-4 text-cyan-400 flex-shrink-0"/> 
                            <span>Bhuvan Geo-Platform</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <DatabaseIcon className="w-4 h-4 text-purple-400 flex-shrink-0"/> 
                            <span>Historical Weather</span>
                        </li>
                    </ul>
                </Card>

                {/* 2. Foundation Model */}
                <Card title="Foundation LLM: Bhoomi 1.0.0" className="border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-2">
                            <CpuIcon className="w-4 h-4 text-cyan-400"/>
                            <span className="text-white font-bold">Text-to-Text Pipeline</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                            Imagery Data Reading
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                            Climate vs Yield Conversion
                        </li>
                        <li className="bg-cyan-900/30 p-2 rounded border border-cyan-500/30 mt-2">
                            <span className="text-[10px] text-cyan-300 block mb-1">CURRENT TASK</span>
                            <span className="text-xs text-white font-mono block">Calculating Next Season Coefficient...</span>
                        </li>
                    </ul>
                </Card>

                {/* 3. Memory & Knowledge */}
                <Card title="Memory & Context">
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>Coefficient Matrix</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>Crop Yield History</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>Soil Profile DB</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-pink-500 rounded-full"></div>Vector Search Index</li>
                    </ul>
                </Card>

                 {/* 4. Output & Control */}
                 <Card title="Predictive Output">
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Future Yield Prediction</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Advisory Generation</li>
                        <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div>Resource Allocation</li>
                        <li className="mt-2 text-xs text-indigo-300 font-mono border-t border-indigo-500/30 pt-2">
                            Target: Precision Farming
                        </li>
                    </ul>
                </Card>
            </div>
        </div>
    );
};