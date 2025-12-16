/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useEffect } from 'react';

// Using high-reliability placeholders that look like technical satellite data
const SATELLITE_DATA = [
    {
        id: 'ndvi-global',
        title: 'NDVI VEGETATION INDEX',
        source: 'SENTINEL-2 / MODIS',
        region: 'GLOBAL COMPOSITE',
        // Reliable abstract map data visualization
        url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop', 
        description: 'Normalized Difference Vegetation Index. Assessing global photosynthetic activity and crop biomass health.',
        color: 'text-green-400',
        barColor: 'bg-green-500'
    },
    {
        id: 'smap-moisture',
        title: 'SOIL MOISTURE ANOMALY',
        source: 'NASA SMAP (L4)',
        region: 'INDUS BASIN',
        // High-tech blue data visualization
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop',
        description: 'Root zone soil moisture analysis. Critical metrics for drought prediction and irrigation scheduling.',
        color: 'text-blue-400',
        barColor: 'bg-blue-500'
    },
    {
        id: 'thermal-stress',
        title: 'THERMAL STRESS MAP',
        source: 'ECOSTRESS',
        region: 'DECCAN PLATEAU',
        // Thermal/Heatmap style image
        url: 'https://images.unsplash.com/photo-1543857770-5243dd798992?q=80&w=2034&auto=format&fit=crop',
        description: 'Land Surface Temperature (LST) heatmap monitoring evapotranspiration rates and water stress.',
        color: 'text-red-400',
        barColor: 'bg-red-500'
    }
];

export const SatelliteView: React.FC = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Cycling Timer
    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prev => (prev + 1) % SATELLITE_DATA.length);
        }, 6000); // Change every 6 seconds
        
        return () => clearInterval(interval);
    }, []);

    const activeData = SATELLITE_DATA[slideIndex];

    return (
        <div className="flex flex-col justify-center items-center relative animate-fadeIn py-8 w-full">
            
            <div className="text-center mb-6 relative z-20">
                <h1 className="text-3xl md:text-5xl font-mono font-bold text-white mb-2 tracking-tighter">
                    <span className="text-green-500">BHOOMI</span> • GIBS UPLINK
                </h1>
                <p className="text-sm font-mono text-green-300/70 tracking-widest uppercase">
                    NASA GLOBAL IMAGERY BROWSE SERVICES (GIBS) • REAL-TIME AGRI INDICES
                </p>
            </div>

            {/* LIVE FEED CONTAINER */}
            <div className="w-full max-w-6xl aspect-video bg-black/80 rounded-xl border border-gray-700 relative overflow-hidden shadow-2xl group">
                
                {/* Top Status Bar */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-black/60 backdrop-blur-md border-b border-white/10 flex items-center justify-between px-4 z-30 font-mono text-[10px] md:text-xs text-cyan-400">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                            <span className="font-bold text-white">LIVE</span>
                        </div>
                        <span className="hidden md:inline text-gray-400">|</span>
                        <span className="hidden md:inline">SAT: {activeData.source}</span>
                        <span className="hidden md:inline text-gray-400">|</span>
                        <span className="text-green-400">FREQ: 14.5 GHz</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>REGION: {activeData.region}</span>
                        <span className="hidden md:inline text-yellow-400">LAT: 22.57° N</span>
                    </div>
                </div>

                {/* Main Imagery - Cycling */}
                <div className="absolute inset-0 z-10 bg-gray-900 flex items-center justify-center overflow-hidden">
                    {SATELLITE_DATA.map((data, index) => (
                        <div 
                            key={data.id}
                            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === slideIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <img 
                                src={data.url} 
                                alt={data.title} 
                                className="w-full h-full object-cover opacity-80 transition-transform duration-[8000ms] ease-linear scale-110"
                                style={{ transform: index === slideIndex ? 'scale(1.05)' : 'scale(1.0)' }}
                            />
                            {/* Color Overlay for Technical Feel */}
                            <div className={`absolute inset-0 mix-blend-overlay opacity-30 ${data.barColor}`}></div>
                        </div>
                    ))}
                    
                    {/* Digital Overlay Mesh */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent pointer-events-none"></div>
                    
                    {/* Grid Lines */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
                </div>

                {/* HUD Elements */}
                <div className="absolute inset-0 z-20 pointer-events-none p-4 md:p-12 flex flex-col justify-between">
                    
                    {/* Center Reticle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                            <div className="absolute w-full h-[1px] bg-white/20"></div>
                            <div className="absolute h-full w-[1px] bg-white/20"></div>
                            <div className="w-56 h-56 border border-dashed border-green-500/20 rounded-full animate-spin-slow"></div>
                            <div className="absolute text-[10px] text-green-500 font-mono mt-32">SCANNING SURFACE...</div>
                    </div>

                    {/* Scanner */}
                    <div className="absolute inset-0 border-t border-green-500/30 animate-scandown opacity-20"></div>

                    {/* Side Information Panel */}
                    <div className="mt-8 self-start bg-black/70 backdrop-blur-sm border-l-2 border-green-500 p-4 max-w-xs rounded-r-lg transform transition-all duration-500 shadow-lg">
                        <h3 className={`font-mono font-bold text-sm mb-1 ${activeData.color}`}>{activeData.title}</h3>
                        <div className="h-px w-full bg-white/20 mb-2"></div>
                        <p className="text-[10px] text-gray-300 leading-relaxed font-mono">
                            {activeData.description}
                        </p>
                        
                        <div className="mt-3">
                            <div className="flex justify-between text-[9px] text-gray-400 mb-1">
                                <span>ANOMALY DETECTED</span>
                                <span>ANALYZING...</span>
                            </div>
                            <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                                <div className={`h-full ${activeData.barColor} w-2/3 animate-pulse`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Deployment Explanation (Bottom Right) */}
                    <div className="self-end bg-black/70 backdrop-blur-sm border-r-2 border-cyan-500 p-4 max-w-xs rounded-l-lg text-right shadow-lg">
                        <h4 className="text-[10px] font-bold text-cyan-400 mb-1 tracking-widest">DEPLOYMENT LOG</h4>
                        <div className="font-mono text-[10px] text-gray-300 space-y-1">
                            <p>> <span className="text-white font-bold">Bhoomi Agent</span> deployed.</p>
                            <p>> Connecting to GIBS API...</p>
                            <p>> Retrieving {activeData.id} layer.</p>
                            <p className="text-green-400">> Optimizing crop yield models.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2 mt-4">
                {SATELLITE_DATA.map((_, idx) => (
                    <button 
                        key={idx} 
                        onClick={() => setSlideIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === slideIndex ? 'bg-green-500 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                    />
                ))}
            </div>

            <div className="mt-4 text-[10px] text-gray-500 font-mono">
                Source: NASA Global Imagery Browse Services (GIBS) • Sentinel-2 • MODIS • ECOSTRESS
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                @keyframes scandown {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 0.3; }
                    90% { opacity: 0.3; }
                    100% { top: 100%; opacity: 0; }
                }
                .animate-scandown {
                    animation: scandown 4s linear infinite;
                }
            `}} />
        </div>
    );
};