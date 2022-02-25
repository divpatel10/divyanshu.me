import React from "react";

const Tags = ({icon, title,  isMain=false}) => {
   if(isMain) return (
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-xl mr-6 font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
        <span class="relative inline-block px-5 py-2.5 transition-all ease-in duration-75 bg-black dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
           {icon} {title}
        </span>
    </button>
    )

    else{
        return (
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-md mr-3 font-medium text-violet-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:ring-cyan-200 dark:focus:ring-cyan-800">
            <span class="relative inline-block px-2.5 py-2 transition-all ease-in duration-75 bg-black dark:bg-black rounded-md group-hover:bg-opacity-0">
               {icon} {title}
            </span>
        </button>
        )   
    }
}


export default Tags;