export default function Contact() {
    return (
        <>
        <div className="hero min-h-screen bg-base-100">
          <div className="hero-content text-center">
            <div className="max-w-xl">
              <h1 className="text-5xl font-bold">Contact me</h1>
              <p className="py-6">You can contact me via Email</p>
              <div className="flex justify-center gap-6">
                <a href="mailto:rajpattnaik426@gmail.com"><button className="btn btn-outline rounded-md xl:w-32 md:w-24">Email Me</button></a>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}