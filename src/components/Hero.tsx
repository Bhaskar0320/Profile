import React from "react";
import { Github, Linkedin, Mail, ArrowDown, Download } from "lucide-react";

import amanPhoto from "../Images/aman_photo.jpg";
import amanResume from '../Images/Resume.pdf'

const Hero = () => {
  return (
    <section
      id="home"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-indigo-50 to-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Section - Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 sm:mb-16 md:mb-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
              Hi, I'm <span className="text-indigo-600">Aman</span>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              I build exceptional digital experiences with clean, efficient
              code. Passionate about creating innovative solutions to complex
              problems.
            </p>

            {/* Buttons - Fixed Wrapping Issue */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-8">
              <a
                href="tel:+919369094498"
                className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                View Projects
              </a>
              <a
                href="https://medium.com/@Bhaskar03"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors"
              >
                Blogs
              </a>
              <a
                href={amanResume}
                download="Aman_Resume"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 font-medium rounded-lg hover:bg-indigo-50 transition-colors flex items-center gap-2"
              >
                Resume
                <Download />
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://github.com/Bhaskar0320"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/bhaskaraman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:bhaskaraman55@gmail.com"
                className="text-gray-600 hover:text-indigo-600 transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img
                  src={amanPhoto}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <div className="bg-green-400 h-4 w-4 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow for Scroll */}
        <div className="flex justify-center mt-16">
          <a href="#about" className="animate-bounce">
            <ArrowDown className="h-8 w-8 text-indigo-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
