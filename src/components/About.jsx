import { FaPython, FaNodeJs, FaCloud, FaServer } from 'react-icons/fa';
import { SiDjango, SiFlask } from 'react-icons/si';
import jsicon from '../image/icons/js1.png';
import htmlicon from '../image/icons/html5.svg';
import cssicon from '../image/icons/css3.svg';
import reacticon from '../image/icons/react.png';
import nodeicon from '../image/icons/nodejs.svg';
import cppicon from '../image/icons/cpp.svg';
import vsicon from '../image/icons/vscode.svg';
import mongodb from '../image/icons/mongodb.svg';
import aws from '../image/icons/awsimage.png';
import django from '../image/icons/django.png';
import docker from '../image/icons/docker.png';
import ubuntu from '../image/icons/ubuntu.png';
import './About.css';

export default function About() {
  const Skills = [jsicon, htmlicon, cssicon, reacticon, nodeicon, cppicon, mongodb, vsicon, aws, django, docker, ubuntu];

  return (
    <div className="hero min-h-screen bg-base-100 border-b-2 xl:px-48 xsm:px-12 xl:py-24 xsm:py-12 font-cascadia">
      <div className="w-full min-h-screen flex flex-col lg:flex-row justify-center gap-16 items-center">
        
        {/* About Me Section */}
        <div className="about-container lg:w-1/2 p-6 bg-white shadow-lg rounded-lg relative">
          <h1 className="font-bold text-4xl mb-6 text-center lg:text-left text-purple-700">About Me</h1>
          
          <p className="text-lg leading-relaxed text-gray-700 mb-4">
              My expertise lies in backend development, with substantial experience in 
              <SiDjango className="inline-block text-green-600 mx-1" size={18} /> Django, 
              <SiFlask className="inline-block text-gray-600 mx-1" size={18} /> Flask, and 
              <FaNodeJs className="inline-block text-green-500 mx-1" size={18} /> Node.js. 
              I am deeply committed to continuously expanding my knowledge in backend technologies, 
              including <FaServer className="inline-block text-gray-500 mx-1" size={18} /> 
              API development and <FaCloud className="inline-block text-indigo-600 mx-1" size={18} /> cloud computing.
          </p>
          
          <p className="text-lg leading-relaxed text-gray-700">
              I also bring experience in full-stack development, seamlessly integrating 
              React-based frontends with microservices-driven backends. With a solid background 
              in state management using Redux, I've developed scalable and efficient APIs, 
              leveraging modern backend frameworks and technologies.
          </p>
        </div>
        
        {/* Skills Section */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <h1 className="font-bold text-4xl mb-4 text-purple-700">My Skills</h1>
          <p className="text-lg text-gray-700 mb-6 text-center">Technologies I know and actively work with:</p>
          <div className="grid grid-cols-4 gap-6">
            {Skills.map((icon, index) => (
              <div key={index} className="xl:w-24 xl:h-24 w-20 h-20 flex justify-center items-center rounded-3xl bg-neutral skill-icon">
                <img src={icon} className="p-3 w-full h-full object-contain" alt="Skill Icon" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
