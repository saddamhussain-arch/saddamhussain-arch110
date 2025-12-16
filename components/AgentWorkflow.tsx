/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { CpuIcon, GlobeIcon, DatabaseIcon, ServerIcon, CloudIcon, CubeIcon, WifiIcon, CodeIcon, DocumentPlusIcon } from './Icons';

const ServiceNode: React.FC<{
    icon: React.ReactNode;
    title: string;
    subtitle?: string;
    color: string;
    className?: string;
    status?: string;
}> = ({ icon, title, subtitle, color, className = "", status }) => (
    <div className={`
        relative flex flex-col items-center justify-center p-4 rounded-lg 
        bg-white border-2 shadow-lg transition-transform hover:scale-105 hover:z-10
        ${className}
    `} style={{ borderColor: color }}>
        {status && (
            <div className="absolute -top-3 px-2 py-0.5 bg-gray-800 text-[9px] font-bold text-white rounded uppercase tracking-wider border border-gray-600 shadow-md">
                {status}
            </div>
        )}
        <div className={`p-3 rounded-full mb-2 ${color.replace('border-', 'bg-').replace('500', '100')}`}>
            <div className={`${color.replace('border-', 'text-')}`}>
                {icon}
            </div>
        </div>
        <h4 className="text-gray-800 font-bold text-xs uppercase tracking-wide text-center">{title}</h4>
        {subtitle && <p className="text-gray-500 text-[10px] text-center mt-1 font-mono leading-tight">{subtitle}</p>}
    </div>
);

const ConnectorArrow: React.FC<{ 
    className?: string;
    direction?: 'right' | 'down' | 'down-right';
}> = ({ className, direction = 'right' }) => {
    if (direction === 'down') {
        return (
            <div className={`flex flex-col items-center justify-center h-8 ${className}`}>
                <div className="w-0.5 h-full bg-gray-400"></div>
                <div className="w-2 h-2 border-b-2 border-r-2 border-gray-400 transform rotate-45 -mt-1"></div>
            </div>
        );
    }
    return (
        <div className={`flex items-center justify-center w-8 ${className}`}>
            <div className="h-0.5 w-full bg-gray-400"></div>
            <div className="w-2 h-2 border-t-2 border-r-2 border-gray-400 transform rotate-45 -ml-1"></div>
        </div>
    );
};

export const AgentWorkflow: React.FC = () => {
    return (
        <div className="w-full bg-gray-100 rounded-xl border border-gray-300 p-8 overflow-hidden relative shadow-2xl">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')] opacity-10 pointer-events-none"></div>
            
            {/* Header */}
            <div className="absolute top-0 left-0 bg-gray-200 px-4 py-1 rounded-br-lg border-b border-r border-gray-300">
                <span className="text-xs font-mono font-bold text-gray-600">RURTECH • AGENT ORCHESTRA</span>
            </div>

            <div className="flex flex-col gap-12 relative z-10 pt-6">
                
                {/* TOP LAYER: Ingestion & Orchestration */}
                <div className="flex justify-center items-start gap-16">
                    {/* User Ingestion */}
                    <div className="flex flex-col items-center">
                        <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 bg-gray-50/50">
                            <ServiceNode 
                                icon={<CloudIcon className="w-6 h-6" />}
                                title="Data Sources"
                                subtitle="NASA / Bhuvan / Sensors"
                                color="border-gray-500"
                                className="w-40"
                            />
                        </div>
                        <ConnectorArrow direction="down" className="h-12" />
                    </div>
                </div>

                {/* MIDDLE LAYER: The Core Logic */}
                <div className="flex justify-center items-center gap-8">
                    
                    {/* The Brain */}
                    <ServiceNode 
                        icon={<CpuIcon className="w-8 h-8" />}
                        title="Bhoomi 1.0.0"
                        subtitle="Foundation LLM (Daily Analysis)"
                        color="border-cyan-500"
                        className="w-48 z-20 shadow-cyan-200 border-cyan-500"
                        status="ORCHESTRATOR"
                    />

                    {/* Agent Swarm - Testing Phase */}
                    <div className="relative border-2 border-yellow-400/50 bg-yellow-50/30 rounded-xl p-6 flex flex-col gap-4">
                        <div className="absolute -top-3 left-4 bg-yellow-100 px-2 text-xs font-bold text-yellow-700 uppercase tracking-widest border border-yellow-400 rounded">
                            The Orchestra: Information Retrieval
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4 opacity-90">
                            <ServiceNode icon={<WifiIcon className="w-5 h-5"/>} title="Maati" subtitle="Soil Agent" color="border-green-500" className="w-32 text-xs" />
                            <ServiceNode icon={<GlobeIcon className="w-5 h-5"/>} title="Gyan Vahak" subtitle="Satellite Agent" color="border-blue-500" className="w-32 text-xs" />
                            <ServiceNode icon={<DocumentPlusIcon className="w-5 h-5"/>} title="Munshi" subtitle="OCR & Handwriting" color="border-orange-500" className="w-32 text-xs" />
                            <ServiceNode icon={<CloudIcon className="w-5 h-5"/>} title="Bhunidhi" subtitle="Land Records" color="border-cyan-500" className="w-32 text-xs" />
                            <ServiceNode icon={<CubeIcon className="w-5 h-5"/>} title="Baniya" subtitle="Market/Trade Agent" color="border-pink-500" className="w-32 text-xs" />
                            <ServiceNode icon={<ServerIcon className="w-5 h-5"/>} title="Mausam" subtitle="Weather/Climate" color="border-indigo-500" className="w-32 text-xs" />
                        </div>
                    </div>
                </div>

                {/* Connectors for Middle Layer */}
                <div className="absolute top-[170px] left-[calc(50%-120px)] w-24 border-t-2 border-dashed border-gray-400"></div>
                <div className="absolute top-[160px] left-[calc(50%-120px)] text-[10px] text-gray-500 font-mono bg-gray-100 px-1">Daily Feed</div>

                {/* BOTTOM LAYER: Data & Infrastructure */}
                <div className="flex justify-center items-start gap-8 pt-4">
                    <div className="flex flex-col gap-4">
                        <ConnectorArrow direction="down" className="h-8 mx-auto -mt-8" />
                        <ServiceNode 
                            icon={<DatabaseIcon className="w-6 h-6" />}
                            title="Individual Storage"
                            subtitle="Analyzed Data Persistence"
                            color="border-yellow-500"
                            className="w-48"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};