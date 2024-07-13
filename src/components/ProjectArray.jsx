import resumeIMG from '../image/bloggpage.png'
import shopIMG from '../image/shopPage.png'
import personalIMG from '../image/personalpage.png'

const ProjectArray = [
    {
        id: 1,
        image: personalIMG,
        projectName: 'Personal Page',
        description: 'My personal page where i will be keeping track of my new projects and adding more information about me as time goes by. Also the page you are currently viewing!',
    },
    {
        id: 2,
        image: resumeIMG,
        projectName: 'Blogging Page',
        description: 'a blog page using React Js for from frontend and appwrite for backend.for state management use redux toolkit and for routing uses React router',
        githubLink: "https://github.com/Subham15112001/Blogging_webpage",
        pageLink: "https://blogging-webpage-vs5s.vercel.app",
    },
    {
        id: 3,
        image: shopIMG,
        projectName: 'Shopping Page',
        description: 'A project I have worked on to learned redux-toolkit , react-router and implemented cloud function from appwrite also implemented full shopping cart functionality.',
        githubLink: "https://github.com/Subham15112001/shopping_cart/tree/main/shopping_page",
        pageLink: "https://shopping-cart-nine-teal.vercel.app/",
    },
]

export default ProjectArray;