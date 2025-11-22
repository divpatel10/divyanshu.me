import React from "react";

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

const Tags = ({ icon, title, onclick = "", isMain = false }) => {
    if (isMain) return (
        <a
            href="/resume"
            className="relative inline-flex items-center justify-center
             mb-2 text-xs sm:text-sm mr-4 sm:mr-6 font-normal text-gray-400
             hover:text-white transition-colors duration-200 cursor-pointer"
            onClick={e => {
                e.preventDefault();
                openWindow(onclick);
            }}
        > 
            <span className="relative inline-block px-2 sm:px-3 py-1 border border-gray-700 hover:border-gray-500 rounded">
                {icon} {title}
            </span>
        </a>
    )
    else {
        return (
            <a
                className="relative inline-flex items-center
                         justify-center mb-2 text-xs sm:text-sm mr-2 sm:mr-3 font-normal 
                         text-gray-500 hover:text-gray-300 
                         transition-all duration-300 cursor-pointer hover:scale-105"
                onClick={e => {
                    e.preventDefault();
                    openWindow(onclick);
                }}
            >
                <span className="relative inline-block px-2 sm:px-3 py-1 sm:py-1.5 border border-gray-800 hover:border-gray-600 rounded transition-all duration-300 hover:shadow-lg">
                    {icon} {title}
                </span>
            </a>
        )
    }
}

export default Tags;