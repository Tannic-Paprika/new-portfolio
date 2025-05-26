import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';   // ↖ use any icon set you like
import ProjectArray from './ProjectArray';
import './Projects.css';

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (dir = 1) => {
    const container = scrollRef.current;
    if (!container) return;

    // width of one card + the gap (gap is 2rem = 32 px)
    const cardWidth = container.firstChild.offsetWidth + 32;
    container.scrollBy({ left: dir * cardWidth * 3, behavior: 'smooth' });
  };

  return (
    <div className="hero min-h-screen bg-base-100 border-b-2 relative">
      <div className="hero-content flex-col">
        <h1 className="text-3xl font-bold py-6">Projects</h1>
        <p className="py-6 px-8 font-cascadia">
          Here I have a display of my projects that I am most proud of. This section will be regularly updated with new projects.
        </p>

        {/* arrows */}
        <button className="scroll-btn left-4"  onClick={() => scroll(-1)}>
          <ChevronLeft size={28} />
        </button>
        <button className="scroll-btn right-4" onClick={() => scroll( 1)}>
          <ChevronRight size={28} />
        </button>

        {/* cards */}
        <div className="project-scroll-container" ref={scrollRef}>
          {ProjectArray.map(project => (
            <div className="card project-card bg-base-100 shadow-xl border-2" key={project.id}>
              <figure className="overflow-hidden rounded-t-xl">
                <img
                  src={project.image}
                  alt={project.projectName}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title text-xl font-bold">{project.projectName}</h2>
                <p className="my-4">{project.description}</p>

                <div className="flex justify-end flex-wrap gap-3">
                  {project.pageLink && (
                    <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-outline rounded-md">View Page</button>
                    </a>
                  )}
                  {project.githubLink && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <button className="btn btn-outline rounded-md">View Source Code</button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
