import React from "react"
import { SiJavascript, SiPython, SiSharp, SiCplusplus, SiTypescript } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

function Skills() {
    return (
        <div className="text-center text-white component-glass-border">
            <p className='text-lg text-gray-200 uppercase tracking-wider mb-10 font-medium'>Languages</p>
            
            <div className='flex justify-center items-center gap-12'>
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiPython className="text-3xl text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Python</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiTypescript className="text-3xl text-blue-500 mb-2 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">TypeScript</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiJavascript className="text-3xl text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">JavaScript</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <FaJava className="text-3xl text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Java</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiSharp className="text-3xl text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">C#</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiCplusplus className="text-3xl text-blue-500 mb-2 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">C++</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;