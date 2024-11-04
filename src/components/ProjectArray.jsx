import gallery from '../image/gallery.jpg'
import livecode from '../image/livecode.png'
import project1 from '../image/project1.png'

const ProjectArray = [
    {
        id: 1,
        image: gallery,
        projectName: 'ClearDrive',
        description: 'A website which shows the most safest roads during poor visibility conditions to prevent accidents.',
        githubLink: "https://github.com/Tannic-Paprika/Air-visibility-index",
        pageLink: "https://devpost.com/software/cleardrive",
    },
    {
        id: 2,
        image: livecode,
        projectName: 'Live Code',
        description: 'A code editor made for hackathons in which participants can code together and collaborate',
        githubLink: "https://github.com/Tannic-Paprika/Live-Code",
        pageLink: "https://live-code-mu.vercel.app/",
    },
    {
        id: 3,
        image: project1,
        projectName: 'SmartWarch Stresstor',
        description: 'Built a web interface to show stress levels in real time after ML processing of health vitals from an IoT device.',
        githubLink: "https://github.com/Tannic-Paprika/Titan_hackathon",
        pageLink: "https://titan_hackathon.pythonanywhere.com/",
    },
]

export default ProjectArray;
