/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

const Card: React.FC<{ title: string; children: React.ReactNode; className?: string }> = ({ title, children, className = "" }) => (
    <div className={`bg-[#1a1638]/60 backdrop-blur-md border border-purple-500/30 rounded-xl p-6 hover:border-cyan-400/60 transition-colors duration-300 ${className}`}>
        <h3 className="text-cyan-400 font-bold mb-4 uppercase tracking-wider text-sm">{title}</h3>
        {children}
    </div>
);

const CodeBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-black/60 rounded-lg p-3 font-mono text-xs text-pink-300 border-l-2 border-pink-500/50 mt-2 overflow-x-auto">
        <pre>{children}</pre>
    </div>
);

export const ArchitectureDiagram: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* CORE INFRASTRUCTURE LAYERS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card title="Agent Hosting Layer">
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Rurtech Primary Agents</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Python Execution Environment</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Custom ML Models</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Containerized Services</li>
                    </ul>
                </Card>
                <Card title="Orchestration Layer">
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Event-Driven Bus</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Agent Message Queues</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>Workflow Coordinator</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-cyan-500 rounded-full"></div>External API Gateway</li>
                    </ul>
                </Card>
                <Card title="Memory & Knowledge">
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div>Semantic Memory (RAG)</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div>State & Session DB</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div>Document Storage</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-pink-500 rounded-full"></div>Vector Search Index</li>
                    </ul>
                </Card>
                 <Card title="Monitoring & Control">
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div>Performance Logging</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div>Distributed Tracing</li>
                        <li className="flex items-center gap-2"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div>Compliance Sentinel</li>
                    </ul>
                </Card>
            </div>

            {/* AGENT LOGIC FLOWS */}
            <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white text-center">Active Agents & Logic</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* SUPERVISOR */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <Card title="1. Supervisor Agent (Orchestrator)">
                            <p className="text-sm text-gray-400 mb-3">Coordinates all other agents and manages task delegation using simple Python logic.</p>
                            <CodeBlock>
{`IF request_complexity > threshold:
  ACTIVATE multi-agent_mode
  BREAK_DOWN task -> subtasks
  DELEGATE to specialized_agents
ELSE:
  ROUTE directly to single_agent

IF agent_failure:
  TRIGGER fallback_mechanism
  REASSIGN task`}
                            </CodeBlock>
                        </Card>
                    </div>

                    {/* DOCUMENT */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-cyan-900 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <Card title="2. Document Processing Agent">
                            <p className="text-sm text-gray-400 mb-3">Handles OCR, text extraction, and analysis of farming records.</p>
                            <CodeBlock>
{`IF document_type == "PDF":
  USE TextExtraction_Engine
  EXTRACT tables_and_text

ELIF document_type == "IMAGE":
  USE Vision_Model + OCR
  PERFORM object_detection

IF confidence < 0.8:
  FLAG for human_review`}
                            </CodeBlock>
                        </Card>
                    </div>

                    {/* CONVERSATIONAL */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-900 to-rose-900 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <Card title="3. Conversational Agent">
                            <p className="text-sm text-gray-400 mb-3">Manages farmer interactions with empathy and multi-lingual support.</p>
                            <CodeBlock>
{`IF user_intent == "technical_support":
  ROUTE to specialist_agent

IF sentiment_score < -0.5:
  ACTIVATE empathy_mode
  CONSIDER human_handoff

IF language != "English":
  ACTIVATE RealTime_Translation`}
                            </CodeBlock>
                        </Card>
                    </div>

                     {/* DATA ANALYSIS */}
                     <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal-900 to-emerald-900 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-500"></div>
                        <Card title="4. Data Analysis Agent">
                            <p className="text-sm text-gray-400 mb-3">Performs real-time analytics on crop yields and market data.</p>
                            <CodeBlock>
{`IF analysis_type == "real_time":
  USE Stream_Processor
  MODE = continuous_flow

ELSE:
  USE Batch_Processor
  SCHEDULE off_peak

IF anomaly_detected:
  TRIGGER alert_system`}
                            </CodeBlock>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};