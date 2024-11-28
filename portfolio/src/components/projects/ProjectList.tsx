import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'AI-Powered Task Manager',
    description: 'A smart task management application that uses machine learning to prioritize and categorize tasks.',
    image: 'https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React', 'Python', 'TensorFlow', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Blockchain Explorer',
    description: 'A web application for visualizing and analyzing blockchain transactions and smart contracts.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['TypeScript', 'Web3.js', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  },
  {
    title: 'Real-time Chat App',
    description: 'A modern chat application with real-time messaging, file sharing, and end-to-end encryption.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800&h=500',
    tech: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    demo: 'https://demo.com'
  }
];

export default function ProjectList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}