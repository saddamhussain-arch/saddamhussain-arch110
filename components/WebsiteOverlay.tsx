/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';
import { ArchitectureDiagram } from './ArchitectureDiagram';
import { SparklesIcon, RocketLaunchIcon, AdjustmentsIcon, TerraformIcon } from './Icons';
import { useAppContext } from '../context/AppContext';

type Section = 'home' | 'objectives' | 'themes' | 'architecture' | 'team';

const RurtechLogo = ({ className = "h-12" }: { className?: string }) => (
    <svg viewBox="0 0 300 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" />
                <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="gradGreen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4ade80" />
                <stop offset="100%" stopColor="#16a34a" />
            </linearGradient>
            <linearGradient id="gradTeal" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
        </defs>
        
        {/* Abstract R Logo Mark */}
        <g transform="translate(10, 10) scale(0.8)">
            {/* Left Vertical Pillar (Blue) */}
            <path d="M10 0 L30 10 V60 L10 50 Z" fill="url(#gradBlue)" />
            
            {/* Top Loop (Teal) */}
            <path d="M10 0 H50 C70 0 70 30 50 30 H30 V10 L10 0" fill="url(#gradTeal)" />
            
            {/* Bottom Leg (Green) */}
            <path d="M30 30 L50 30 L70 60 L50 60 L30 30" fill="url(#gradGreen)" />
        </g>

        {/* Text */}
        <text x="80" y="52" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="42" fill="#fff" letterSpacing="2">RURTECH</text>
    </svg>
);

const APPS = [
    { id: 1, name: "Bhoomi", icon: "mic", color: "from-blue-500 to-cyan-500", desc: "Voice-First OS" },
    { id: 2, name: "Naksha", icon: "map", color: "from-emerald-500 to-green-600", desc: "Village GIS" },
    { id: 3, name: "Cocon", icon: "center_focus_strong", color: "from-amber-500 to-yellow-500", desc: "Crop Vision" },
    { id: 4, name: "AgriVision", icon: "movie_creation", color: "from-purple-500 to-indigo-500", desc: "Future Sims" },
    { id: 5, name: "Sentinel-X", icon: "cyclone", color: "from-red-500 to-orange-500", desc: "Climate AI" },
    { id: 6, name: "Nari Raksha", icon: "shield_person", color: "from-pink-600 to-rose-600", desc: "Women's Safety" },
    { id: 7, name: "Shiksha", icon: "school", color: "from-indigo-400 to-violet-500", desc: "Agri-Education" },
];

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
                ? 'text-cyan-400 border-cyan-400 font-bold shadow-[0_0_15px_rgba(34,211,238,0.4)]' 
                : 'text-gray-400 border-transparent hover:text-white hover:border-gray-500'}`}
        >
            {label}
        </button>
    );

    return (
        <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-500/40">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0c29]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
                    <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setActiveSection('home')}>
                        <RurtechLogo className="h-12 w-auto drop-shadow-lg transform group-hover:scale-105 transition-transform" />
                    </div>
                    
                    <nav className="hidden md:flex gap-1">
                        <NavButton id="home" label="Ecosystem" />
                        <NavButton id="themes" label="Solutions" />
                        <NavButton id="objectives" label="Vision" />
                        <NavButton id="architecture" label="Tech" />
                        <NavButton id="team" label="Leadership" />
                    </nav>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden text-white">
                        <AdjustmentsIcon className="w-6 h-6" />
                    </div>
                </div>
            </header>

            {/* Mobile Nav Strip */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-[#0f0c29]/95 backdrop-blur-lg border-t border-indigo-900/50 z-50 flex justify-around p-3">
                 <button onClick={() => setActiveSection('home')} className={`p-2 rounded-full ${activeSection === 'home' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><RocketLaunchIcon className="w-6 h-6"/></button>
                 <button onClick={() => setActiveSection('themes')} className={`p-2 rounded-full ${activeSection === 'themes' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><SparklesIcon className="w-6 h-6"/></button>
                 <button onClick={() => setActiveSection('team')} className={`p-2 rounded-full ${activeSection === 'team' ? 'text-cyan-400 bg-cyan-900/30' : 'text-gray-400'}`}><AdjustmentsIcon className="w-6 h-6"/></button>
            </div>

            {/* Content Container */}
            <div className="flex-grow pt-32 px-6 pb-24 md:pb-20 max-w-7xl mx-auto w-full relative z-10">
                
                {/* --- HOME SECTION: MILKY WAY GALAXY CYCLE --- */}
                {activeSection === 'home' && (
                    <div className="min-h-[75vh] flex flex-col justify-center items-center relative animate-fadeIn overflow-visible">
                        
                        {/* Milky Way Background Accent */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,rgba(88,28,135,0.4)_0%,rgba(15,23,42,0)_70%)] blur-3xl"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent blur-sm rotate-45"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm -rotate-45"></div>
                        </div>

                        <div className="text-center mb-8 relative z-20">
                            <h1 className="text-4xl md:text-6xl font-black text-white mb-2 drop-shadow-[0_0_20px_rgba(0,0,0,0.8)] tracking-tight">
                                THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-white to-green-400">BHARAT</span> GALAXY
                            </h1>
                            <p className="text-xl text-cyan-100 max-w-2xl mx-auto backdrop-blur-sm bg-black/30 p-2 rounded-lg">
                                Orbiting the Farmer • Powered by the Cosmos
                            </p>
                        </div>

                        {/* 3D Animation Container */}
                        <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center perspective-1000">
                            
                            {/* Central Node: ROTATING EARTH ONLY */}
                            <div className="absolute z-10 flex flex-col items-center justify-center">
                                {/* Earth Globe - SMALLER SIZE */}
                                <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.5)] animate-spin-slow">
                                    <div className="absolute inset-0 rounded-full bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Earth_Western_Hemisphere_transparent_background.png/600px-Earth_Western_Hemisphere_transparent_background.png')] bg-cover opacity-90 blur-[0.5px]"></div>
                                    {/* Atmosphere Glow */}
                                    <div className="absolute inset-0 rounded-full shadow-[inset_0_0_15px_rgba(0,0,0,0.8),0_0_15px_rgba(56,189,248,0.4)]"></div>
                                </div>

                                {/* SLOGAN - Positioned below the smaller earth */}
                                <div className="mt-6 bg-gradient-to-r from-orange-600 via-white/10 to-green-600 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full shadow-[0_0_20px_rgba(255,165,0,0.3)] transform hover:scale-105 transition-transform">
                                    <h2 className="text-white font-black text-sm md:text-lg tracking-widest uppercase drop-shadow-md whitespace-nowrap">
                                        JAI JAWAN • JAI KISAN
                                    </h2>
                                </div>
                            </div>

                            {/* Orbit Ring (Visual) */}
                            <div className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-cyan-500/20 animate-spin-slow pointer-events-none shadow-[0_0_30px_rgba(6,182,212,0.1)]"></div>
                            <div className="absolute w-[60%] h-[60%] rounded-full border border-dotted border-purple-500/20 animate-spin-reverse pointer-events-none"></div>

                            {/* Orbiting Apps */}
                            <div className="absolute w-full h-full animate-spin-slow-3d" style={{ transformStyle: 'preserve-3d' }}>
                                {APPS.map((app, index) => {
                                    const angle = (index / APPS.length) * 360;
                                    const radius = 45; // percentage
                                    
                                    return (
                                        <div 
                                            key={app.name}
                                            className="absolute top-1/2 left-1/2 w-24 h-24 md:w-32 md:h-32 -ml-12 -mt-12 md:-ml-16 md:-mt-16 flex flex-col items-center justify-center"
                                            style={{
                                                transform: `rotate(${angle}deg) translate(${radius}vw) rotate(-${angle}deg)`, 
                                            }}
                                        >
                                            {/* App Card */}
                                            <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${app.color} p-0.5 shadow-lg group hover:scale-110 transition-transform duration-300 cursor-pointer`}>
                                                <div className="w-full h-full bg-black/80 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center text-center p-2 relative overflow-hidden">
                                                    {/* Glow effect */}
                                                    <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                                                    
                                                    <span className={`material-symbols-outlined text-3xl md:text-4xl mb-2 text-transparent bg-clip-text bg-gradient-to-br ${app.color}`}>
                                                        {app.icon}
                                                    </span>
                                                    <h3 className="text-xs md:text-sm font-bold text-white leading-tight">{app.name}</h3>
                                                    <p className="text-[10px] text-gray-400 mt-1 leading-none">{app.desc}</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        
                        {/* Legend / Call to Action */}
                        <div className="mt-12 flex flex-wrap justify-center gap-4 relative z-20">
                            <div className="px-4 py-2 bg-black/40 border border-orange-500/30 rounded-full text-xs text-orange-200 flex items-center gap-2">
                                <span className="material-symbols-outlined text-sm">music_note</span>
                                Sound: Vande Mataram (Slow Reverb)
                            </div>
                            <div className="px-4 py-2 bg-black/40 border border-green-500/30 rounded-full text-xs text-green-200 flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Ecosystem Active
                            </div>
                        </div>

                        {/* Inline Style for the custom 3D spin */}
                        <style dangerouslySetInnerHTML={{__html: `
                            @keyframes spin-slow-3d {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                            /* Override radius for different screens */
                            @media (max-width: 768px) {
                                .animate-spin-slow-3d > div {
                                    transform: rotate(var(--angle)) translate(140px) rotate(calc(var(--angle) * -1)) !important;
                                }
                            }
                            @media (min-width: 769px) {
                                .animate-spin-slow-3d > div {
                                    transform: rotate(var(--angle)) translate(280px) rotate(calc(var(--angle) * -1)) !important;
                                }
                            }
                        `}} />
                        
                        {/* Inject custom variables for the rotation logic above */}
                        <div className="hidden">
                            {APPS.map((_, i) => (
                                <style key={i}>{`.animate-spin-slow-3d > div:nth-child(${i + 1}) { --angle: ${(i / APPS.length) * 360}deg; }`}</style>
                            ))}
                        </div>

                    </div>
                )}

                {/* --- THEMES / SOLUTIONS SECTION --- */}
                {activeSection === 'themes' && (
                    <div className="animate-slideUp pt-4">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">GALACTIC <span className="text-cyan-400">SCALE</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                Solutions that revolve around the farmer, powered by an ecosystem of intelligent agents.
                            </p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[
                                { 
                                    title: "Crop Constellations", 
                                    desc: "Mapping optimal crop patterns like stars in the sky, guided by satellite intelligence.", 
                                    icon: "✨",
                                    color: "from-purple-600/20 to-indigo-900/20"
                                },
                                { 
                                    title: "Precision Orbit", 
                                    desc: "IoT sensors orbiting the farm, delivering real-time telemetry on soil health.", 
                                    icon: "🪐",
                                    color: "from-cyan-500/20 to-blue-900/20"
                                },
                                { 
                                    title: "Market Gravity", 
                                    desc: "Connecting farmers directly to high-value markets, pulling profit back to the source.", 
                                    icon: "🌌",
                                    color: "from-pink-500/20 to-rose-900/20"
                                },
                                { 
                                    title: "Universal Credit", 
                                    desc: "Financial inclusion models that work universally, regardless of banking history.", 
                                    icon: "💳",
                                    color: "from-emerald-500/20 to-teal-900/20"
                                }
                            ].map((item, i) => (
                                <div key={i} className={`relative group bg-[#1a1638]/80 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 overflow-hidden`}>
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className="relative z-10">
                                        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg">{item.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-3 leading-tight min-h-[3rem]">{item.title}</h3>
                                        <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* --- OBJECTIVES SECTION --- */}
                {activeSection === 'objectives' && (
                    <div className="animate-slideUp max-w-6xl mx-auto pt-6">
                        <div className="flex flex-col md:flex-row gap-12 items-center">
                            <div className="flex-1 text-left">
                                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white leading-tight">
                                    MISSION <span className="text-purple-400">VISHWA GURU</span>
                                </h2>
                                <p className="text-xl text-gray-300 mb-8 leading-relaxed border-l-4 border-purple-500 pl-6">
                                    India is destined to be the world's teacher. We are exporting not just software, but a philosophy: that cutting-edge technology can bloom from the grass roots.
                                </p>
                                <div className="space-y-6">
                                    {[
                                        {
                                            head: "Showcase Impact",
                                            text: "Demonstrating that world-class AI can be built in rural India, for rural India."
                                        },
                                        {
                                            head: "Unlock Potential",
                                            text: "Proving that talent is universal, even if opportunity is not. We create the opportunity."
                                        },
                                        {
                                            head: "Facilitate Learning",
                                            text: "Like ISRO sharing launch capabilities, we share our agri-tech models with the Global South."
                                        },
                                        {
                                            head: "Global Benchmarking",
                                            text: "Setting the standard for frugal innovation—high impact, low cost, massive scale."
                                        }
                                    ].map((obj, i) => (
                                        <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors border border-transparent hover:border-purple-500/30">
                                            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h4 className="text-lg font-bold text-white mb-1">{obj.head}</h4>
                                                <p className="text-gray-400 text-sm leading-relaxed">{obj.text}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="flex-1 w-full relative">
                                {/* Visual Representation of Global Reach - Galaxy Style */}
                                <div className="aspect-square bg-gradient-to-b from-[#1a1638] to-black rounded-full border border-purple-500/30 p-12 relative animate-spin-slow-reverse overflow-hidden">
                                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-30 animate-pulse"></div>
                                     <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-spin-slow"></div>
                                     <div className="absolute inset-4 rounded-full border border-dashed border-purple-500/20 animate-spin-reverse"></div>
                                     
                                     <div className="w-full h-full bg-black/60 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center relative z-10 border border-white/10">
                                        <RocketLaunchIcon className="w-20 h-20 text-purple-400 mb-4 transform -rotate-45" />
                                        <h3 className="text-2xl font-bold text-white">Future Ready</h3>
                                        <p className="text-purple-200/70 text-sm mt-2 uppercase tracking-widest">Powered by Talent</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* --- ARCHITECTURE SECTION --- */}
                {activeSection === 'architecture' && (
                    <div className="animate-slideUp pt-5">
                        <div className="mb-10 text-center">
                             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">ENGINEERING <span className="text-cyan-400">CORE</span></h2>
                             <p className="text-gray-400 max-w-3xl mx-auto">
                                 The internal systems of our vehicle. Robust, redundant, and ready for launch.
                             </p>
                        </div>
                        <ArchitectureDiagram />
                    </div>
                )}

                {/* --- TEAM SECTION --- */}
                {activeSection === 'team' && (
                    <div className="animate-slideUp pt-10 pb-20">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">MISSION <span className="text-purple-400">COMMANDERS</span></h2>
                            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                                "We focus on talent, and talent can be developed without sources."
                            </p>
                        </div>
                        
                        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 max-w-6xl mx-auto mb-16">
                            
                            {/* CEO: Nabi Hussain */}
                            <div className="w-full md:w-1/2 bg-[#0f0c29] border border-gray-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-64 bg-gray-800 relative flex items-center justify-center overflow-hidden">
                                     {/* Placeholder for Man Photo (CEO) */}
                                     <img 
                                        src="https://placehold.co/600x600/1e293b/06b6d4?text=Nabi+Hussain+(Man)" 
                                        alt="Nabi Hussain" 
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                     />
                                </div>
                                <div className="p-8 text-center relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-1">Nabi Hussain</h3>
                                    <div className="inline-block px-3 py-1 mt-2 mb-6 bg-cyan-900/50 border border-cyan-500/30 rounded text-cyan-400 font-bold uppercase tracking-widest text-xs">
                                        Chief Executive Officer
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        The visionary leading Rurtech's global ascent. Nabi believes that leadership is about creating leaders, not followers. He is proof that with the right mindset, resources follow vision, not the other way around.
                                    </p>
                                </div>
                            </div>

                            {/* CTO: Saddam Hussain */}
                            <div className="w-full md:w-1/2 bg-[#0f0c29] border border-gray-800 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 group shadow-2xl relative">
                                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="h-64 bg-gray-800 relative flex items-center justify-center overflow-hidden">
                                     {/* Placeholder for Boy Photo (CTO) */}
                                     <img 
                                        src="https://placehold.co/600x600/1e293b/a855f7?text=Saddam+Hussain+(Boy)" 
                                        alt="Saddam Hussain" 
                                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                     />
                                </div>
                                <div className="p-8 text-center relative z-10">
                                    <h3 className="text-3xl font-bold text-white mb-1">Saddam Hussain</h3>
                                    <div className="inline-block px-3 py-1 mt-2 mb-6 bg-purple-900/50 border border-purple-500/30 rounded text-purple-400 font-bold uppercase tracking-widest text-xs">
                                        Founder & CTO
                                    </div>
                                    <p className="text-gray-300 leading-relaxed text-sm">
                                        The young prodigy architecting the galaxy of Rurtech's solutions. Saddam represents the untaped potential of India's youth—demonstrating that age is just a number when it comes to technical mastery and innovation.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Team Building CTA */}
                        <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto backdrop-blur-sm relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
                            <h3 className="text-2xl font-bold text-white mb-4">Join the Starfleet</h3>
                            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                                We are looking for dreamers who do. If you believe that technology can solve humanity's oldest problems, your seat is waiting.
                            </p>
                            <button className="px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-white/20">
                                View Mission Profiles
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
};