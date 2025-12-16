/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { ShaderCanvas } from './components/ShaderCanvas';
import { AppProvider, useAppContext } from './context/AppContext';
import { useAppStoreComplete } from './hooks/useAppStore';
import { WebsiteOverlay } from './components/WebsiteOverlay';

const AppContent: React.FC = () => {
    const {
        activeShaderCode,
        allUniforms,
        renderCameraRef,
        isHdEnabled,
        isFpsEnabled,
    } = useAppContext();

    // Force high quality for the "Universe" background
    const shouldReduceQuality = false;

    return (
        <div className="h-screen w-screen bg-gray-900 text-white flex flex-col overflow-hidden relative font-sans selection:bg-cyan-500/30">
            
            {/* The 3D Universe Background */}
            <main className="absolute inset-0 z-0">
                <div className="w-full h-full">
                    {activeShaderCode && (
                        <ShaderCanvas
                            key={activeShaderCode}
                            fragmentSrc={activeShaderCode}
                            onError={() => {}}
                            uniforms={allUniforms}
                            cameraRef={renderCameraRef}
                            isHdEnabled={isHdEnabled}
                            isFpsEnabled={isFpsEnabled}
                            isPlaying={true}
                            shouldReduceQuality={shouldReduceQuality}
                        />
                    )}
                </div>
                {/* Cinematic Vignette & Color Grading Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/40 to-black opacity-80 pointer-events-none"></div>
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay pointer-events-none"></div>
            </main>
            
            {/* The Website Content */}
            <div className="relative z-10 w-full h-full overflow-y-auto custom-scrollbar">
                <WebsiteOverlay />
            </div>
        </div>
    );
};

const App: React.FC = () => {
    const store = useAppStoreComplete();
    return (
        <AppProvider value={store}>
            <AppContent />
        </AppProvider>
    );
};

export default App;