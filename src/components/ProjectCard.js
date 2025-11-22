import React from "react"

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

function ProjectCard({ img, title, link, description }) {
  return (
    <div className="inline-block cursor-pointer group"
      onClick={e => {
        e.preventDefault();
        openWindow(link);
      }}
    >
      <div className="overflow-hidden transition-opacity duration-200 hover:opacity-70">
        <div>
          <img className="object-cover h-24 w-32 border border-gray-700" src={img} alt={title} />
        </div>
        <div className="py-1.5 px-2 bg-gray-900 border border-t-0 border-gray-700 w-32">
          <h3 className="text-xs font-medium text-white mb-1 leading-tight">{title}</h3>
          <p className="text-[10px] text-gray-500 leading-tight line-clamp-2">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;