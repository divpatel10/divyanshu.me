import React from "react"
import { SiMongodb, SiGit, SiTailwindcss, SiAndroidstudio, SiDjango, SiDynatrace, SiTerraform, SiGitlab, SiReact, SiDocker } from 'react-icons/si';
import { FaNodeJs, FaCloud, FaMicrosoft } from 'react-icons/fa';

function Frameworks() {
    return (
        <div className="text-center text-white component-glass-border">
            <p className='text-lg text-gray-200 uppercase tracking-wider mb-10 font-medium'>Frameworks & Tools</p>

            <div className='flex flex-wrap justify-center items-center gap-8'>
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <FaCloud className="text-3xl text-orange-400 mb-2 group-hover:text-orange-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">AWS</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiReact className="text-3xl text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">React</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiDocker className="text-3xl text-blue-500 mb-2 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Docker</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiTerraform className="text-3xl text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Terraform</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiDynatrace className="text-3xl text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Dynatrace</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiGitlab className="text-3xl text-orange-500 mb-2 group-hover:text-orange-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">GitLab</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiDjango className="text-3xl text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Django</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <FaNodeJs className="text-3xl text-green-500 mb-2 group-hover:text-green-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Node.js</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiMongodb className="text-3xl text-green-600 mb-2 group-hover:text-green-500 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">MongoDB</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <FaMicrosoft className="text-3xl text-blue-500 mb-2 group-hover:text-blue-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Azure</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiGit className="text-3xl text-orange-600 mb-2 group-hover:text-orange-500 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Git</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiAndroidstudio className="text-3xl text-green-500 mb-2 group-hover:text-green-400 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Android</p>
                </div>
                
                <div className='flex flex-col items-center group cursor-pointer transition-all duration-300 hover:scale-110'>
                    <SiTailwindcss className="text-3xl text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors duration-300" />
                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Tailwind</p>
                </div>
            </div>
        </div>
    );
}

export default Frameworks;