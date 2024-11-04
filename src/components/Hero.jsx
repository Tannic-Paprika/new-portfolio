import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';  // Import LeetCode icon
import heroImage from '../image/heroImage.jpeg';

export default function Hero() {
    return (
        <div className="hero min-h-screen bg-base-100 border-b-2 flex flex-col md:flex-row justify-center xl:px-48 px-6 md:space-x-12 space-y-8 md:space-y-0 items-center">
            <div className="flex flex-col gap-4 text-center md:text-left md:w-1/2">
                <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">Hello 👋, I am Raj, and</h1>
                
                <div className="flex flex-col items-center md:items-start">
                    <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl pl-4 md:pl-0">I'm a</h2>
                    <h2 className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-primary">Backend Web Developer</h2>
                </div>
                
                <p className="font-medium text-lg md:text-xl leading-relaxed text-center md:text-left">
    With a strong foundation in backend development, I specialize in Python and JavaScript-based backends. I'm passionate about creating scalable and efficient server-side solutions that drive impactful applications.
</p>

                
                <div className="flex justify-center md:justify-start space-x-4">
                    {/* GitHub Link */}
                    <a href="https://github.com/Tannic-Paprika" target='_blank' rel="noopener noreferrer">
                        <button className="btn btn-circle w-12 h-12 p-0 bg-gray-400">
                            <BsGithub className="text-white text-xl" />
                        </button>
                    </a>
                    
                    {/* LinkedIn Link */}
                    <a href="https://linkedin.com/in/raj-pattnaik" target='_blank' rel="noopener noreferrer">
                        <button className="btn btn-circle w-12 h-12 p-0 bg-blue-600">
                            <BsLinkedin className="text-white text-xl" />
                        </button>
                    </a>
                    
                    {/* LeetCode Link */}
                    <a href="https://leetcode.com/u/warmlobster_87/" target='_blank' rel="noopener noreferrer">
                        <button className="btn btn-circle w-12 h-12 p-0 bg-orange-500">
                            <SiLeetcode className="text-white text-xl" />
                        </button>
                    </a>
                </div>
            </div>
            
            <div className="md:w-1/3 w-full flex justify-center md:justify-end">
                <img src={heroImage} alt="Profile" className="w-2/3 md:w-full max-w-xs rounded-xl shadow-lg object-cover"/>
            </div>
        </div>
    );
}
