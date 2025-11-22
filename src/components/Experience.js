import React from "react"

function Experience() {
    return (
        <div className="text-center text-white component-glass-border">
            <p className='text-base sm:text-lg text-gray-200 uppercase tracking-wider mb-6 sm:mb-8 md:mb-10 font-medium'>Experience</p>
            
            <div className='space-y-4 sm:space-y-6 max-w-4xl mx-auto px-2 sm:px-4'>
                <div className='text-left'>
                    <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0'>
                        <h3 className='text-sm sm:text-base font-medium text-gray-200'>Senior Software Engineer</h3>
                        <span className='text-xs sm:text-sm text-gray-500'>Ally • July 2025 - Present</span>
                    </div>
                </div>
                
                <div className='text-left'>
                    <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0'>
                        <h3 className='text-sm sm:text-base font-medium text-gray-200'>Software Engineer</h3>
                        <span className='text-xs sm:text-sm text-gray-500'>Ally • July 2023 - June 2024</span>
                    </div>
                </div>
                
                <div className='text-left'>
                    <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0'>
                        <h3 className='text-sm sm:text-base font-medium text-gray-200'>Software Developer Intern</h3>
                        <span className='text-xs sm:text-sm text-gray-500'>Clemson University • Aug 2022 - May 2023</span>
                    </div>
                </div>
                
                <div className='text-left'>
                    <div className='flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-0'>
                        <h3 className='text-sm sm:text-base font-medium text-gray-200'>Software Engineer Co-op</h3>
                        <span className='text-xs sm:text-sm text-gray-500'>Itron • Jan 2022 - Aug 2022</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;

