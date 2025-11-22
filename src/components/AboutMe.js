import React from "react"
import { FaBook, FaGithub, FaLinkedin } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';

const LINKED_URL = "https://www.linkedin.com/in/divvpatel/"
const GITHUB_URL = "https://github.com/divpatel10"
const EMAIL_ID = "mailto:div@duck.com"

function openWindow(url) {
    const link = document.createElement('a');
    if (url !== "") {
        link.href = url;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        link.remove();
    }
}

function AboutMe() {

    return (
        <div className="text-center text-white component-glass-border">
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-light mb-4 sm:mb-6 md:mb-8 tracking-tight'>
                Hi, I'm Divyanshu
            </h1>
            <p className='text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 md:mb-10 mx-auto leading-relaxed max-w-2xl px-4'>
                Software Engineer at Ally. I build things that matter and solve real problems. Always learning, always building.
            </p>

            <div className='flex justify-center items-center flex-wrap gap-6 sm:gap-8 md:gap-12 lg:gap-16'>
                <div 
                    className='group cursor-pointer transition-all duration-300 hover:scale-110 relative tooltip-container'
                    onClick={() => openWindow(require("../files/resume.pdf"))}
                >
                    <FaBook className="text-2xl sm:text-3xl md:text-4xl text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300" />
                    <span className="tooltip">View my resume</span>
                </div>
                
                <div 
                    className='group cursor-pointer transition-all duration-300 hover:scale-110 relative tooltip-container'
                    onClick={() => openWindow(LINKED_URL)}
                >
                    <FaLinkedin className="text-2xl sm:text-3xl md:text-4xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                    <span className="tooltip">Connect on LinkedIn</span>
                </div>
                
                <div 
                    className='group cursor-pointer transition-all duration-300 hover:scale-110 relative tooltip-container'
                    onClick={() => openWindow(EMAIL_ID)}
                >
                    <GrMail className="text-2xl sm:text-3xl md:text-4xl text-red-400 group-hover:text-red-300 transition-colors duration-300" />
                    <span className="tooltip">Send me an email</span>
                </div>
                
                <div 
                    className='group cursor-pointer transition-all duration-300 hover:scale-110 relative tooltip-container'
                    onClick={() => openWindow(GITHUB_URL)}
                >
                    <FaGithub className="text-2xl sm:text-3xl md:text-4xl text-gray-300 group-hover:text-white transition-colors duration-300" />
                    <span className="tooltip">Check out my code</span>
                </div>
            </div>
        </div>

    );
}

export default AboutMe;