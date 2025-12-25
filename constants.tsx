
import React from 'react';
import { Cpu, Code, Database, Zap, Activity, Globe } from 'lucide-react';
import { ServiceCard, IndustryData, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Genesis', href: '#hero' },
  { label: 'Transform', href: '#transform' },
  { label: 'Sectors', href: '#sectors' },
  { label: 'Intelligence', href: '#intelligence' },
  { label: 'Future', href: '#future' },
];

export const SERVICES: ServiceCard[] = [
  {
    title: 'AI Automations',
    description: 'Neural-driven workflows that eliminate human latency and maximize operational velocity.',
    icon: 'Cpu',
    color: '#db5627',
  },
  {
    title: 'Custom Software',
    description: 'Architecting intelligent software ecosystems that evolve alongside your business.',
    icon: 'Code',
    color: '#a855f7',
  },
  {
    title: 'Data Intelligence',
    description: 'Deep-learning models that transform raw data streams into predictive market dominance.',
    icon: 'Database',
    color: '#06b6d4',
  },
  {
    title: 'Process Optimization',
    description: 'Autonomous systems that identify and rectify inefficiencies in real-time.',
    icon: 'Zap',
    color: '#f59e0b',
  },
];

export const INDUSTRIES: IndustryData[] = [
  {
    name: 'Employee Management System',
    impact: 'Smart HR workflows.',
    image: '/ems.png',
  },
  {
    name: 'Payroll Management System',
    impact: 'Seamless salary automation.',
    image: '/payroll-product.png',
  },
  {
    name: 'Task Management System',
    impact: 'AI-powered productivity booster.',
    image: '/taskmanage-product.png',
  },
  {
    name: 'Applicant Management System',
    impact: 'Intelligent hiring made easy.',
    image: 'applicant.png',
  },
  {
    name: 'Qora.ai',
    impact: 'AI Agents for Marketing & Finance.',
    image: "/qora-product.png",
  },
  {
    name: 'Agri Business App',
    impact: 'AI chatbot & voice agent for farmers.',
    image: '/agriapp.jfif',
  },
  {
    name: 'Galix.ai',
    impact: 'One AI platform for all commercial applications.',
    image: "/galix-product.png",
  },

];
