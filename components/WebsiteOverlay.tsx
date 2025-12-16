/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { AgentWorkflow } from './AgentWorkflow';
import { SatelliteView } from './SatelliteView';
import { SparklesIcon, RocketLaunchIcon, AdjustmentsIcon, TerraformIcon, QuestionMarkCircleIcon, LightBulbIcon, GlobeIcon, CpuIcon } from './Icons';
import { useAppContext } from '../context/AppContext';

type Section = 'home' | 'vision' | 'challenge' | 'products' | 'workflow' | 'team' | 'satellite' | 'contact';

const RurtechLogo = ({ className = "h-12" }: { className?: string }) => (
    <div className={`flex flex-col ${className}`}>
        <h1 className="text-2xl md:text-3xl font-black tracking-widest text-cyan-400" style={{ textShadow: '0 0 10px rgba(0,255,255,0.5)' }}>
            RURTECH
        </h1>
        <span className="text-[10px] md:text-xs font-mono text-fuchsia-300 tracking-[0.2em] uppercase">
            For Arayans LLP
        </span>
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
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#10002B]/80 backdrop-blur-xl border-b border-fuchsia-500/20 shadow-2xl transition-all duration-300">
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
                                EMPOWERING RURAL FUTURES<br/>THROUGH INNOVATION
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
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">✨</div>
                                <h3 className="text-2xl font-bold text-white mb-4">VISION</h3>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    To bridge the literacy and digital divide gap in rural communities globally. We envision a world where technology serves everyone, regardless of their ability to read or write.
                                </p>
                            </div>

                            <div className="bg-[#1a0b36]/80 backdrop-blur-md border border-fuchsia-500/30 p-8 rounded-xl shadow-[0_0_30px_rgba(255,0,255,0.1)] hover:border-fuchsia-400 transition-colors group">
                                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-500">🎯</div>
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
                                        <span className="text-2xl">⚠️</span> Systemic Exclusion
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
                                                <strong className="text-white">Land & Climate Crisis:</strong> 40% of farmers possess negligible land (0.002 ha) or are landless. Climate abnormalities and high population density make traditional farming unviable.
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
                                        <span className="text-2xl">✅</span> Voice-First AI Ecosystem
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
                                                <strong className="text-white">BHOOMI Transparency:</strong> Enables landless farmers to direct-rent from large owners (60%). Big owners gain direct export access (Rice/Wheat), creating a fair, transparent economy.
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
                            <div className="bg-[#1a0b36]/80 border border-cyan-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600"></div>
                                <div className="h-48 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                                    <img 
                                        src="https://images.unsplash.com/photo-1625246333195-5519a49d75f0?q=80&w=1000&auto=format&fit=crop" 
                                        alt="Bhoomi Agriculture" 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">BHOOMI</h3>
                                <p className="text-cyan-400 text-xs font-bold uppercase mb-4 tracking-widest">The Voice-First Ecosystem</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    The core platform providing an integrated 4-pillar voice-first ecosystem: Rainfall & Weather, Soil Moisture, Crop Yield Prediction, and a Literacy Learning Programme. Works on basic feature phones.
                                </p>
                            </div>

                            {/* Sakhi */}
                            <div className="bg-[#1a0b36]/80 border border-fuchsia-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-fuchsia-500 to-pink-600"></div>
                                <div className="h-48 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                                    <img 
                                        src="https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=1000" 
                                        alt="AI by Sakhi" 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">AI by Sakhi</h3>
                                <p className="text-fuchsia-400 text-xs font-bold uppercase mb-4 tracking-widest">For Women</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Empowering women with tailored voice-first AI assistance. Focuses on health, financial literacy, and essential services access, bypassing literacy barriers that disproportionately affect rural women.
                                </p>
                            </div>

                            {/* Gurdro */}
                            <div className="bg-[#1a0b36]/80 border border-yellow-500/50 p-6 rounded-xl hover:bg-[#25104a] transition-colors relative group overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-600"></div>
                                <div className="h-48 mb-4 overflow-hidden rounded-lg group-hover:scale-105 transition-transform duration-500">
                                    <img 
                                        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1000&auto=format&fit=crop" 
                                        alt="Gurdro Education" 
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Gurdro</h3>
                                <p className="text-yellow-400 text-xs font-bold uppercase mb-4 tracking-widest">Literacy App Concept</p>
                                <p className="text-gray-300 text-sm leading-relaxed">
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
                                    <span>📍</span> Bisrakh Jalalpur, Uttar Pradesh
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <span>📧</span> <a href="mailto:saddam.hussain@rurtechforarayans.com" className="hover:text-cyan-400 transition-colors">saddam.hussain@rurtechforarayans.com</a>
                                </p>
                                <p className="flex items-center justify-center gap-2">
                                    <span>📱</span> 7042548323
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