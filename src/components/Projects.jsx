import ProjectArray from './ProjectArray';
import './Projects.css'; // Import the CSS file for hover effects

export default function Projects() {
    return (
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2">
            <div className="hero-content flex-col">
                <h1 className="text-3xl font-bold py-6">Projects</h1>
                <p className="py-6 px-8 font-cascadia">Here I have a display of my projects that I am most proud of. This section will be regularly updated with new projects.</p>
                
                <div className="flex xl:flex-row xsm:flex-col gap-12">
                    {ProjectArray.map(project => (
                        <div className="card bg-base-100 shadow-xl border-2 flex-1 project-card" key={project.id}>
                            <figure>
                                <img src={project.image} alt={project.projectName} className="w-full h-64 object-cover" />
                            </figure>
                            
                            <div className="card-body">
                                <h2 className="card-title text-xl font-bold">{project.projectName}</h2>
                                <p className="my-4">{project.description}</p>
                                
                                <div className="flex justify-end">
                                    {project.pageLink && (
                                        <a href={project.pageLink} target="_blank" rel="noopener noreferrer">
                                            <button className="btn btn-outline rounded-md mx-3">View Page</button>
                                        </a>
                                    )}
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                                        <button className="btn btn-outline rounded-md">View Source Code</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}
