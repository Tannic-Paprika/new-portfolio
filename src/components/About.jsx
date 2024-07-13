import jsicon from '../image/icons/js1.png'
import htmlicon from '../image/icons/html5.svg'
import cssicon from '../image/icons/css3.svg'
import reacticon from '../image/icons/react.png'
import nodeicon from '../image/icons/nodejs.svg'
import cppicon from '../image/icons/cpp.svg'
import vsicon from '../image/icons/vscode.svg'
import mongodb from '../image/icons/mongodb.svg'

export default function About() {
  const Skills = [jsicon, htmlicon, cssicon, reacticon, nodeicon, cppicon, mongodb, vsicon]
    return(
        <>
        <div className="hero min-h-screen bg-base-100 border-b-2 xl:px-48 xsm:px-12 xl:py-24 xsm:py-12">
          <div className="w-full min-h-screen flex flex-col justify-center gap-16">
            <div className="md:w-1/2">
              <h1 className="font-bold text-3xl mb-4">About me</h1>
              <p className="font-semibold text-lg border-b-2">I am a full-stack web developper. 
              My primary focus is to create Responsive, User Friendly Websites, that follow modern technologies, and that provide the best experience possible. <br />
              My other interests include Math and Game Development.
              </p>
              <p className="font-semibold text-lg">While web development fuels my professional journey, I'm also excited about branching out into new realms. 
                I'm diving into game development. 
                I am currently learning languages like C++ to create immersive gaming experiences.</p>
            </div>
            <hr className='md:hidden'/>
            <div className="md:w-1/2 self-end xl:px-4">
              <h1 className="font-bold text-3xl mb-4">My Skills</h1>
              <p className="font-semibold text-lg mb-2">Technologies I know and actively working with to make all of my new projects:</p>
              <div className="flex flex-col gap-4">
                <div className="grid grid-cols-4 gap-4">
                  {/* Rendering the text elements in a grid layout */}
                  {Skills.map((icon, index) => (
                    <div key={index} className="xl:w-32 xl:h-32 flex justify-center items-center rounded-3xl bg-neutral">
                    <img src={icon} className='p-4' />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}