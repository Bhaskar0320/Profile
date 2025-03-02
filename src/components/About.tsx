import React from 'react';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Working on code" 
              className="rounded-lg shadow-xl max-w-full h-auto"
            />
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Passionate Software Engineer with 1+ years of experience
            </h3>
            <p className="text-gray-600 mb-6">
              I'm a software engineer specializing in building exceptional digital experiences. 
              Currently, I'm focused on building accessible, human-centered products at a leading tech company.
              
            </p>
            <p className="text-gray-600 mb-8">
              My approach to software development combines technical expertise with a deep understanding of user needs. 
              I believe in writing clean, maintainable code that solves real problems and delivers value to users.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Code className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">Frontend Development</span>
              </div>
              <div className="flex items-center">
                <Server className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">Backend Systems</span>
              </div>
              <div className="flex items-center">
                <Database className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">Database Design</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-indigo-600 mr-2" />
                <span className="text-gray-700">Web Applications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;