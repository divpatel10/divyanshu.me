import React from "react"
import Tags from "./Tags";
import { SiExpress, SiMongodb, SiReact, SiAndroid, SiNasa } from 'react-icons/si';
import { FaJava, FaRocket, FaChartLine, FaSpider } from 'react-icons/fa';

function Projects() {
    const PROJECT_TIMESTAMP = "https://div-timestamp-microservice.herokuapp.com/"
    const PROJECT_FILE_METADATA = "https://file-mta-dta.herokuapp.com"
    const PROJECT_URL_SHORTENER = "https://u-r-lshrtner.herokuapp.com"
    const PROJECT_GAUNTLET = "https://github.com/divpatel10/gauntlet"
    const PROJECT_SF = "https://divpatel10.github.io/The-Secondary-Frontier/"
    const PROJECT_UIP = "https://github.com/divpatel10/SpaceApp"
    const PROJECT_COSMOS = "https://github.com/divpatel10/NASA-Planetary-Factsheet"
    const PROJECT_LIGHTCRAWL = "https://github.com/divpatel10/lightcrawl"
    return (
        <div className="text-center text-white component-glass-border">
            <p className='text-lg text-gray-200 uppercase tracking-wider mb-10 font-medium'>
                Projects
            </p>

            <div className='flex flex-wrap justify-center gap-4'>
                <Tags title="Cosmos Capsule API" onclick={PROJECT_COSMOS} icon={<FaRocket className="inline-block text-base text-cyan-400" />} />
                <Tags title="The Secondary Frontier" onclick={PROJECT_SF} icon={<FaChartLine className="inline-block text-base text-purple-400" />} />
                <Tags title="LightCrawl" onclick={PROJECT_LIGHTCRAWL} icon={<FaSpider className="inline-block text-base text-green-400" />} />
                <Tags title="Time Stamp Microservice" onclick={PROJECT_TIMESTAMP} icon={<SiExpress className="inline-block text-base text-gray-300" />} />
                <Tags title="Universe in Pixels" onclick={PROJECT_UIP} icon={<SiAndroid className="inline-block text-base text-green-500" />} />
                <Tags title="This Webpage" icon={<SiReact className="inline-block text-base text-cyan-400" />} />
                <Tags title="URL Shortener" onclick={PROJECT_URL_SHORTENER} icon={<SiMongodb className="inline-block text-base text-green-600" />} />
                <Tags title="File Meta Data Microservice" onclick={PROJECT_FILE_METADATA} icon={<SiExpress className="inline-block text-base text-gray-300" />} />
                <Tags title="Gauntlet" onclick={PROJECT_GAUNTLET} icon={<FaJava className="inline-block text-base text-orange-400" />} />
            </div>
        </div>
    );
}

export default Projects;