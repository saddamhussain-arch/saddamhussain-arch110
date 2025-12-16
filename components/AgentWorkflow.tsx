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
}> = ({ icon, title, subtitle, color, className = "" }) => (
    <div className={`
        relative flex flex-col items-center justify-center p-4 rounded-lg 
        bg-white border-2 shadow-lg transition-transform hover:scale-105 hover:z-10
        ${className}
    `} style={{ borderColor: color }}>
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
    if (direction === 'down-right') {
        return (
            <svg className={`absolute w-32 h-32 pointer-events-none text-gray-400 ${className}`} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 0 L 0 50 Q 0 100 50 100 L 90 100" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M 90 95 L 100 100 L 90 105" fill="currentColor" />
            </svg>
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
                <span className="text-xs font-mono font-bold text-gray-600">RURTECH • CLOUD ARCHITECTURE V2.4</span>
            </div>

            <div className="flex flex-col gap-12 relative z-10 pt-6">
                
                {/* TOP LAYER: Ingestion & Orchestration */}
                <div className="flex justify-center items-start gap-16">
                    {/* User Ingestion */}
                    <div className="flex flex-col items-center">
                        <div className="border-2 border-dashed border-gray-400 rounded-lg p-4 bg-gray-50/50">
                            <ServiceNode 
                                icon={<CloudIcon className="w-6 h-6" />}
                                title="Ingestion Layer"
                                subtitle="Voice / Image / Text"
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
                        title="Supervisor Agent"
                        subtitle="LLM Router / Python Logic"
                        color="border-purple-600"
                        className="w-48 z-20 shadow-purple-200"
                    />

                    {/* Agent Swarm */}
                    <div className="relative border border-gray-300 bg-white/50 rounded-xl p-6 flex flex-col gap-4">
                        <div className="absolute -top-3 left-4 bg-gray-100 px-2 text-xs font-bold text-gray-500 uppercase tracking-widest border border-gray-300 rounded">
                            Specialized Agent Swarm
                        </div>
                        
                        <div className="grid grid-cols-3 gap-4">
                            <ServiceNode icon={<WifiIcon className="w-5 h-5"/>} title="IoT/Soil" color="border-green-500" className="w-32 text-xs" />
                            <ServiceNode icon={<GlobeIcon className="w-5 h-5"/>} title="Satellite" color="border-blue-500" className="w-32 text-xs" />
                            <ServiceNode icon={<DocumentPlusIcon className="w-5 h-5"/>} title="Doc OCR" color="border-orange-500" className="w-32 text-xs" />
                            <ServiceNode icon={<CloudIcon className="w-5 h-5"/>} title="Weather" color="border-cyan-500" className="w-32 text-xs" />
                            <ServiceNode icon={<CubeIcon className="w-5 h-5"/>} title="Market" color="border-pink-500" className="w-32 text-xs" />
                            <ServiceNode icon={<ServerIcon className="w-5 h-5"/>} title="Gov Scheme" color="border-indigo-500" className="w-32 text-xs" />
                        </div>
                    </div>
                </div>

                {/* Connectors for Middle Layer */}
                <div className="absolute top-[170px] left-[calc(50%-120px)] w-24 border-t-2 border-dashed border-gray-400"></div>
                <div className="absolute top-[160px] left-[calc(50%-120px)] text-[10px] text-gray-500 font-mono bg-gray-100 px-1">JSON Request</div>

                {/* BOTTOM LAYER: Data & Infrastructure */}
                <div className="flex justify-center items-start gap-8 pt-4">
                    
                    {/* Knowledge Base */}
                    <div className="flex flex-col gap-4">
                        <ConnectorArrow direction="down" className="h-8 mx-auto -mt-8" />
                        <ServiceNode 
                            icon={<DatabaseIcon className="w-6 h-6" />}
                            title="Vector Database"
                            subtitle="RAG Knowledge Store"
                            color="border-yellow-500"
                            className="w-40"
                        />
                    </div>

                    {/* Model Registry */}
                    <div className="flex flex-col gap-4">
                        <ConnectorArrow direction="down" className="h-8 mx-auto -mt-8" />
                        <ServiceNode 
                            icon={<CodeIcon className="w-6 h-6" />}
                            title="Fine-Tuned LLM"
                            subtitle="Llama 3 / Gemini 1.5"
                            color="border-red-500"
                            className="w-40"
                        />
                    </div>

                    {/* Storage */}
                    <div className="flex flex-col gap-4">
                        <ConnectorArrow direction="down" className="h-8 mx-auto -mt-8" />
                        <ServiceNode 
                            icon={<CubeIcon className="w-6 h-6" />}
                            title="Object Storage"
                            subtitle="S3 / Data Lake"
                            color="border-teal-500"
                            className="w-40"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};