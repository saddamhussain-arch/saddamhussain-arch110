/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { AgentWorkflow } from './AgentWorkflow';
import { SatelliteView } from './SatelliteView';
import { SparklesIcon, RocketLaunchIcon, AdjustmentsIcon, TerraformIcon, QuestionMarkCircleIcon, LightBulbIcon, GlobeIcon, CpuIcon, DatabaseIcon, CloudIcon, ServerIcon, CodeIcon } from './Icons';
import { useAppContext } from '../context/AppContext';

type Section = 'home' | 'vision' | 'challenge' | 'products' | 'workflow' | 'deployment' | 'team' | 'satellite' | 'contact';

// --- CUSTOM ICONS FOR UI ---
const MapPinIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const EnvelopeIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const PhoneIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const WarningIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
    </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const TargetIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const RurtechLogo = ({ className = "h-12" }: { className?: string }) => (
    <div className={`flex items-center gap-3 ${className}`}>
        {/* Logo Icon - Stylized R based on brand image */}
        <div className="h-10 w-10 relative flex-shrink-0">
             <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]">
                <defs>
                    <linearGradient id="logo_grad_blue" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0ea5e9" /> {/* Sky 500 */}
                        <stop offset="100%" stopColor="#1e3a8a" /> {/* Blue 900 */}
                    </linearGradient>
                    <linearGradient id="logo_grad_green" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#84cc16" /> {/* Lime 500 */}
                        <stop offset="100%" stopColor="#15803d" /> {/* Green 700 */}
                    </linearGradient>
                </defs>
                {/* Abstract R shape */}
                {/* Left vertical bar */}
                <path d="M20 10 V90 H40 V50 H50 L20 10" fill="url(#logo_grad_blue)" />
                {/* Top Curve */}
                <path d="M20 10 H60 C80 10 90 25 80 40 C70 55 50 50 40 50 H20" stroke="url(#logo_grad_blue)" strokeWidth="0" fill="url(#logo_grad_blue)" opacity="0.9"/>
                {/* Green Leg */}
                <path d="M40 50 L70 90 H95 L60 45" fill="url(#logo_grad_green)" />
            </svg>
        </div>
        
        {/* Text */}
        <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-3xl font-black tracking-widest text-white" style={{ fontFamily: 'sans-serif', letterSpacing: '0.1em' }}>
                <span className="text-blue-500">RUR</span><span className="text-gray-400">TECH</span>
            </h1>
            <span className="text-[8px] md:text-[9px] font-mono text-gray-500 tracking-[0.3em] uppercase -mt-1 ml-0.5">
                For Arayans LLP
            </span>
        </div>
    </div>
);

const RevolvingGalaxy = () => (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen overflow-hidden flex items-center justify-center">
        {/* Container is significantly larger than viewport (vmax) to ensure coverage during rotation */}
        <div className="w-[150vmax] h-[150vmax] animate-galaxy-spin flex-shrink-0">
             <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M101_hires_STScI-PRC2006-10a.jpg/1280px-M101_hires_STScI-PRC2006-10a.jpg" 
                alt="Rotating Galaxy" 
                className="w-full h-full object-cover"
            />
        </div>
        {/* Vignette to blend edges and focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_10%,#10002B_90%)]"></div>
        
        <style dangerouslySetInnerHTML={{__html: `
            @keyframes galaxy-spin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
            }
            .animate-galaxy-spin {
                animation: galaxy-spin 240s linear infinite;
            }
        `}} />
    </div>
);

export const WebsiteOverlay: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Section>('home');
    const { setCanvasSize } = useAppContext();

    // Ensure background looks good
    useEffect(() => {
        setCanvasSize('100%');
    }, [setCanvasSize]);

    const NavButton = ({ id, label }: { id: Section; label: string }) => (
        <button
            onClick={() => setActiveSection(id)}
            className={`px-4 py-2 text-xs md:text-sm uppercase tracking-widest transition-all duration-300 border-b-2 
            ${activeSection === id 
                ? 'text-cyan-400 border-cyan-400 font-bold shadow-[0_0_15px_rgba(0,255,255,0.4)] bg-[#10002B]/50' 
                : 'text-gray-400 border-transparent hover:text-white hover:border-fuchsia-500/50'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-fuchsia-500/40 text-gray-100 relative">
            {/* Full Screen Galaxy Background for Home */}
            {activeSection === 'home' && <RevolvingGalaxy />}

            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#10002B]/90 backdrop-blur-xl border-b border-fuchsia-500/20 shadow-2xl transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="cursor-pointer group" onClick={() => setActiveSection('home')}>
                        <RurtechLogo />
                    </div>
                    
                    <nav className="hidden md:flex gap-1 overflow-x-auto no-scrollbar">
                        <NavButton id="home" label="Home" />
                        <NavButton id="vision" label="Vision" />
                        <NavButton id="challenge" label="Challenge" />
                        <NavButton id="products" label="Products" />
                        <NavButton id="workflow" label="Workflow" />
                        <NavButton id="deployment" label="R&D" />
                        <NavButton id="team" label="Team" />
                        <NavButton id="satellite" label="Satellite" />
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden text-white">
                        <AdjustmentsIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                </div>
            </header>

            {/* Mobile Nav Strip */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#10002B]/95 backdrop-blur-lg border-t border-fuchsia-900/50 z-50 flex justify-around p-3 overflow-x-auto">
                 <button onClick={() => setActiveSection('home')} className={`p-2 rounded-full ${activeSection === 'home' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><RocketLaunchIcon className="w-6 h-6"/></button>
                 <button onClick={() => setActiveSection('workflow')} className={`p-2 rounded-full ${activeSection === 'workflow' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><CpuIcon className="w-6 h-6"/></button>
                 <button onClick={() => setActiveSection('satellite')} className={`p-2 rounded-full ${activeSection === 'satellite' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><GlobeIcon className="w-6 h-6"/></button>
            </div>

            {/* Content Container */}
            <div className="flex-grow pt-32 px-6 pb-24 md:pb-20 max-w-7xl mx-auto w-full relative z-10">
                
                {/* --- HERO SECTION --- */}
                {activeSection === 'home' && (
                    <div className="min-h-[70vh] flex flex-col justify-center items-center text-center animate-fadeIn relative">
                        
                        {/* Decorative HUD Elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-3xl pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-fuchsia-500/30 rounded-br-3xl pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-fuchsia-400 mb-6 drop-shadow-[0_0_10px_rgba(0,255,255,0.3)] tracking-tight">
                                EMPOWERING GLOBAL RURAL FUTURE<br/>THROUGH INNOVATION
                            </h1>
                            
                            <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mb-12 leading-relaxed mx-auto">
                                Leveraging <span className="text-cyan-400 font-bold">Voice-First AI</span> for Sustainable Development & Education in Rural Communities.
                            </p>
                            
                            <div className="flex gap-6 justify-center">
                                <button 
                                    onClick={() => setActiveSection('challenge')}
                                    className="px-8 py-3 bg-fuchsia-600 hover:bg-fuchsia-500 text-white font-bold rounded shadow-[0_0_20px_rgba(255,0,255,0.4)] transition-all hover:scale-105 uppercase tracking-widest"
                                >
                                    Discover More
                                </button>
                                <button 
                                    onClick={() => setActiveSection('workflow')}
                                    className="px-8 py-3 bg-black/40 backdrop-blur-sm border border-cyan-400 text-cyan-400 hover:bg-cyan-400/10 font-bold rounded shadow-[0_0_20px_rgba(0,255,255,0.2)] transition-all hover:scale-105 uppercase tracking-widest"
                                >
                                    Live Workflow
                                </button>
                            </div>
                        </div>

                        {/* Status Ticker */}
                        <div className="absolute bottom-10 w-full max-w-4xl bg-[#10002B]/80 border-y border-cyan-500/30 py-2 overflow-hidden flex items-center justify-between px-4 text-xs font-mono text-cyan-300/70 z-10">
                            <span>SYSTEM STATUS: ONLINE</span>
                            <span className="animate-pulse">● LIVE DATA FEED</span>
                            <span>NODE: UTTAR PRADESH</span>
                        </div>
                    </div>
                )}

                {/* --- VISION & MISSION --- */}
                {activeSection === 'vision' && (
                    <div className="animate-slideUp pt-4 max-w-5xl mx-auto">
                         <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400 uppercase tracking-widest border-b border-fuchsia-500/30 pb-4 inline-block w-full">Core Philosophy</h2>
                         
                         <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-[#1a0b36]/80 backdrop-blur-md border border-cyan-500/30 p-8 rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.1)] hover:border-cyan-400 transition-colors group">
                                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <SparklesIcon className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">VISION</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    To bridge the literacy and digital divide gap in rural communities globally. We envision a world where technology serves everyone, regardless of their ability to read or write.
                                </p>
                            </div>

                            <div className="bg-[#1a0b36]/80 backdrop-blur-md border border-fuchsia-500/30 p-8 rounded-xl shadow-[0_0_30px_rgba(255,0,255,0.1)] hover:border-fuchsia-400 transition-colors group">
                                <div className="text-fuchsia-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <TargetIcon className="w-12 h-12" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">MISSION</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    Developing cutting-edge, voice-first AI solutions to empower non-literate rural populations with access to essential services and economic opportunities.
                                </p>
                            </div>
                         </div>
                    </div>
                )}

                {/* --- PROBLEM & SOLUTION --- */}
                {activeSection === 'challenge' && (
                    <div className="animate-slideUp pt-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-4">The Challenge & Solution</h2>
                        
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Problem */}
                            <div className="space-y-6">
                                <div className="bg-red-900/20 border border-red-500/30 p-6 rounded-xl relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 bg-red-600/20 px-3 py-1 text-xs text-red-300 font-bold uppercase rounded-bl">Problem Detected</div>
                                    <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                                        <WarningIcon className="w-8 h-8" /> Systemic Exclusion
                                    </h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex gap-3">
                                            <span className="text-red-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Literacy Barrier:</strong> 30-40 crore non-literate Indians cannot use text-based apps, locking them out of Digital Public Infrastructure.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Undetected Symptoms:</strong> Symptomatic diseases often go undetected until critical stages, leading to fatal outcomes among women ("Death Reason").
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Educational Void:</strong> No tools exist for the illiterate to study based on their own interest and pace.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-red-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Land & Climate Crisis:</strong> High population density in villages means 40% of people have either no land or very low holdings. Coupled with weather abnormalities, traditional farming is unviable.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Solution */}
                            <div className="space-y-6">
                                <div className="bg-green-900/20 border border-green-500/30 p-6 rounded-xl relative overflow-hidden h-full">
                                    <div className="absolute top-0 right-0 bg-green-600/20 px-3 py-1 text-xs text-green-300 font-bold uppercase rounded-bl">Solution Deployed</div>
                                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                                        <CheckCircleIcon className="w-8 h-8" /> Voice-First AI Ecosystem
                                    </h3>
                                    <ul className="space-y-4 text-gray-300">
                                        <li className="flex gap-3">
                                            <span className="text-green-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Voice-First Interface:</strong> Zero literacy required. Works on basic feature phones in local dialects (Hindi, Bhojpuri, Awadhi).
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-green-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">AI by Sakhi:</strong> Early detection of disease symptoms before they become fatal, providing lifesaving health intervention for women.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-green-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">Gurdro:</strong> Democratizing education by allowing everyone to study autonomously based on their own interests and curiosity.
                                            </span>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="text-green-500 font-bold">></span>
                                            <span>
                                                <strong className="text-white">BHOOMI Transparency:</strong> A digital marketplace enabling direct land rental and export access for Rice/Wheat, creating a transparent, high-efficiency economy.
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- PRODUCTS --- */}
                {activeSection === 'products' && (
                    <div className="animate-slideUp pt-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-fuchsia-400 uppercase tracking-widest border-b border-fuchsia-500/30 pb-4">Our Flagship AI Products</h2>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Bhoomi */}
                            <div className="bg-[#1a0b36]/80 border border-cyan-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                                <div className="h-40 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=2070&auto=format&fit=crop" 
                                        alt="Bhoomi AI Core" 
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute bottom-2 left-2 z-20 text-xs font-bold text-white uppercase bg-cyan-600/80 px-2 py-1 rounded backdrop-blur-sm">Agri-Tech</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">BHOOMI</h3>
                                <p className="text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">The Voice-First Ecosystem</p>
                                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                    The core platform providing an integrated 4-pillar voice-first ecosystem: Rainfall & Weather, Soil Moisture, Crop Yield Prediction, and a Literacy Learning Programme. Works on basic feature phones.
                                </p>
                            </div>

                            {/* Sakhi */}
                            <div className="bg-[#1a0b36]/80 border border-fuchsia-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-pink-600"></div>
                                <div className="h-40 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000" 
                                        alt="AI by Sakhi" 
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute bottom-2 left-2 z-20 text-xs font-bold text-white uppercase bg-fuchsia-600/80 px-2 py-1 rounded backdrop-blur-sm">Health-Tech</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">AI by Sakhi</h3>
                                <p className="text-fuchsia-400 text-xs font-bold uppercase mb-4 tracking-widest">For Women</p>
                                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                    Empowering women with tailored voice-first AI assistance. Focuses on health, financial literacy, and essential services access, bypassing literacy barriers that disproportionately affect rural women.
                                </p>
                            </div>

                            {/* Gurdro */}
                            <div className="bg-[#1a0b36]/80 border border-yellow-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden flex flex-col">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                                <div className="h-40 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500 relative">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img 
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" 
                                        alt="Gurdro Education" 
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute bottom-2 left-2 z-20 text-xs font-bold text-white uppercase bg-yellow-600/80 px-2 py-1 rounded backdrop-blur-sm">Ed-Tech</div>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Gurdro</h3>
                                <p className="text-yellow-400 text-xs font-bold uppercase mb-4 tracking-widest">Literacy App Concept</p>
                                <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                                    An automated, adaptive, and gamified voice learning program. Schedules 30-minute interactive lessons delivered via voice to build foundational literacy (Devanagari script, numerals) within 18 months.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* --- WORKFLOW (ANIMATED) --- */}
                {activeSection === 'workflow' && (
                    <div className="animate-slideUp pt-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-cyan-400 uppercase tracking-widest border-b border-cyan-500/30 pb-4">Intelligent Agent Ecosystem</h2>
                        <AgentWorkflow />
                         <div className="mt-12 text-center text-gray-400 max-w-2xl mx-auto">
                            <p>Our distributed agent system processes voice inputs, documents, and satellite data in real-time, orchestrated by a Supervisor Agent to deliver actionable insights to the farmer.</p>
                        </div>
                    </div>
                )}

                {/* --- DEPLOYMENT ROADMAP (NEW SECTION) --- */}
                {activeSection === 'deployment' && (
                    <div className="animate-slideUp pt-4 max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-widest border-b border-gray-700 pb-4">
                            LLM Deployment Roadmap
                        </h2>
                        
                        <div className="relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 opacity-50"></div>

                            {/* Phase 1: Foundation */}
                            <div className="mb-12 flex flex-col md:flex-row items-center justify-between w-full relative">
                                <div className="order-1 md:w-5/12"></div>
                                <div className="order-1 md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                                    <div className="w-12 h-12 bg-gray-900 border-2 border-cyan-500 rounded-full flex items-center justify-center">
                                        <DatabaseIcon className="w-6 h-6 text-cyan-400" />
                                    </div>
                                </div>
                                <div className="order-1 md:w-5/12 bg-[#1a1638]/80 border border-cyan-500/30 p-6 rounded-xl relative ml-12 md:ml-0">
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">Phase 1: Foundational Models</h3>
                                    <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                                        <li>Leverage Transformer Architecture (Self-attention).</li>
                                        <li>Pre-train on vast agricultural data (Genomic, Climate).</li>
                                        <li>Develop Vision-Language Models (VLMs) for crop diagnosis.</li>
                                        <li>Evolution: BERT (2018) to GPT-4o (2024).</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 2: Applications */}
                            <div className="mb-12 flex flex-col md:flex-row-reverse items-center justify-between w-full relative">
                                <div className="order-1 md:w-5/12"></div>
                                <div className="order-1 md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                                    <div className="w-12 h-12 bg-gray-900 border-2 border-green-500 rounded-full flex items-center justify-center">
                                        <CpuIcon className="w-6 h-6 text-green-400" />
                                    </div>
                                </div>
                                <div className="order-1 md:w-5/12 bg-[#1a1638]/80 border border-green-500/30 p-6 rounded-xl relative ml-12 md:ml-0 text-right md:text-left">
                                    <h3 className="text-xl font-bold text-green-400 mb-2">Phase 2: Core Applications</h3>
                                    <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                                        <li><strong className="text-white">Crop Monitoring:</strong> Real-time growth tracking via VLMs.</li>
                                        <li><strong className="text-white">Disease Diagnosis:</strong> Image-based detection (YOLOv8 + RAG).</li>
                                        <li><strong className="text-white">Precision Irrigation:</strong> RL integration with DSSAT simulations.</li>
                                        <li><strong className="text-white">Advisory Bots:</strong> Multimodal chatbots (KissanGPT).</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 3: Integration */}
                            <div className="mb-12 flex flex-col md:flex-row items-center justify-between w-full relative">
                                <div className="order-1 md:w-5/12"></div>
                                <div className="order-1 md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                                    <div className="w-12 h-12 bg-gray-900 border-2 border-purple-500 rounded-full flex items-center justify-center">
                                        <GlobeIcon className="w-6 h-6 text-purple-400" />
                                    </div>
                                </div>
                                <div className="order-1 md:w-5/12 bg-[#1a1638]/80 border border-purple-500/30 p-6 rounded-xl relative ml-12 md:ml-0">
                                    <h3 className="text-xl font-bold text-purple-400 mb-2">Phase 3: Sensor Integration</h3>
                                    <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                                        <li><strong className="text-white">Proximal Sensing:</strong> Ground-based soil/moisture sensors.</li>
                                        <li><strong className="text-white">Remote Sensing (RS):</strong> UAVs & Satellites (Sentinel-2, Landsat).</li>
                                        <li><strong className="text-white">GeoChat:</strong> Conversational interface for geospatial data.</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Phase 4: Optimization */}
                            <div className="mb-12 flex flex-col md:flex-row-reverse items-center justify-between w-full relative">
                                <div className="order-1 md:w-5/12"></div>
                                <div className="order-1 md:w-2/12 flex justify-center relative z-10 mb-4 md:mb-0">
                                    <div className="w-12 h-12 bg-gray-900 border-2 border-red-500 rounded-full flex items-center justify-center">
                                        <AdjustmentsIcon className="w-6 h-6 text-red-400" />
                                    </div>
                                </div>
                                <div className="order-1 md:w-5/12 bg-[#1a1638]/80 border border-red-500/30 p-6 rounded-xl relative ml-12 md:ml-0 text-right md:text-left">
                                    <h3 className="text-xl font-bold text-red-400 mb-2">Phase 4: Optimization & Challenges</h3>
                                    <ul className="text-sm text-gray-300 space-y-2 list-disc list-inside">
                                        <li><strong className="text-white">Fine-Tuning:</strong> Parameter-Efficient Fine-Tuning (PEFT/LoRA).</li>
                                        <li><strong className="text-white">RAG:</strong> Retrieval-Augmented Generation for up-to-date facts.</li>
                                        <li><strong className="text-white">Challenges:</strong> Data scarcity, computational cost, hallucination risk.</li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>
                )}

                {/* --- TEAM SECTION --- */}
                {activeSection === 'team' && (
                    <div className="animate-slideUp pt-4">
                        <h2 className="text-3xl font-bold text-center mb-12 text-white uppercase tracking-widest border-b border-gray-700 pb-4">Leadership Team</h2>
                        
                        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                            {/* Nabi Hussain */}
                            <div className="bg-[#10002B] border border-cyan-500/30 rounded-2xl p-8 text-center hover:border-cyan-500 transition-all duration-300 group relative overflow-hidden">
                                <div className="w-32 h-32 mx-auto rounded-full border-4 border-cyan-500 p-1 mb-6 relative z-10 bg-[#10002B]">
                                     <img 
                                        src="https://placehold.co/400x400/10002B/00FFFF?text=Nabi" 
                                        alt="Nabi Hussain" 
                                        className="w-full h-full rounded-full object-cover"
                                     />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Nabi Hussain</h3>
                                <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest mb-4">Founder, CEO & CFO</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Leads vision, strategy, and financial governance with deep understanding of rural ecosystems and agriculture-linked economies.
                                </p>
                                <div className="inline-block bg-cyan-900/30 px-3 py-1 rounded border border-cyan-500/30 text-cyan-300 text-xs font-mono">
                                    Equity: 55%
                                </div>
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>

                            {/* Saddam Hussain */}
                            <div className="bg-[#10002B] border border-fuchsia-500/30 rounded-2xl p-8 text-center hover:border-fuchsia-500 transition-all duration-300 group relative overflow-hidden">
                                <div className="w-32 h-32 mx-auto rounded-full border-4 border-fuchsia-500 p-1 mb-6 relative z-10 bg-[#10002B]">
                                     <img 
                                        src="https://placehold.co/400x400/10002B/FF00FF?text=Saddam" 
                                        alt="Saddam Hussain" 
                                        className="w-full h-full rounded-full object-cover"
                                     />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">Saddam Hussain</h3>
                                <p className="text-fuchsia-400 font-bold uppercase text-xs tracking-widest mb-4">Co-Founder & CTO</p>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    Responsible for complete technology vision and execution. Expertise in AI/ML, Python, and cloud platforms with 13+ years experience.
                                </p>
                                <div className="inline-block bg-fuchsia-900/30 px-3 py-1 rounded border border-fuchsia-500/30 text-fuchsia-300 text-xs font-mono">
                                    Equity: 45%
                                </div>
                                {/* Background glow */}
                                <div className="absolute inset-0 bg-fuchsia-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* --- SATELLITE (LAST PAGE) --- */}
                {activeSection === 'satellite' && (
                    <div className="animate-slideUp pt-4 w-full">
                         <SatelliteView />
                    </div>
                )}

                {/* --- CONTACT --- */}
                {activeSection === 'contact' && (
                    <div className="animate-slideUp pt-10 flex flex-col items-center">
                        <div className="bg-[#10002B]/90 border border-gray-700 p-8 rounded-xl max-w-2xl w-full text-center shadow-2xl">
                            <h2 className="text-2xl font-bold text-white mb-8">CONTACT US</h2>
                            <div className="space-y-4 text-gray-300">
                                <p className="flex items-center justify-center gap-2">
                                    <MapPinIcon className="w-5 h-5 text-cyan-400" />
                                    <span>Bisrakh Jalalpur, Uttar Pradesh</span>
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <EnvelopeIcon className="w-5 h-5 text-cyan-400" />
                                    <a href="mailto:saddam.hussain@rurtechforarayans.com" className="hover:text-cyan-400 transition-colors">saddam.hussain@rurtechforarayans.com</a>
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <PhoneIcon className="w-5 h-5 text-cyan-400" />
                                    <span>7042548323</span>
                                </p>
                            </div>
                            <div className="mt-8 pt-8 border-t border-gray-800 text-xs text-gray-500 flex justify-center gap-4">
                                <a href="#" className="hover:text-white">Privacy Policy</a>
                                <span>|</span>
                                <a href="#" className="hover:text-white">Terms of Service</a>
                            </div>
                            <p className="mt-4 text-xs text-gray-600">
                                &copy; 2024 RURTECH FOR ARAYANS LLP. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};