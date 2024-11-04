import { BsSend, BsGithub, BsTwitterX, BsInstagram, BsYoutube } from 'react-icons/bs'

export default function Footer() {
    return (
        <>
        <footer className="footer md:p-10 xsm:p-4 bg-neutral text-white">
            <div className="flex flex-col items-center justify-between w-full">
                <div className="md:w-1/2 h-full flex flex-col justify-center items-center mb-4">
                    <h1 className="font-bold text-2xl">Created by Raj</h1>
                    <p>Page made using React, TailwindCSS and DaisyUI</p>
                </div>
                <div className="xsm:w-full md:w-1/2">
                    <form action="mailto:rajpattnaik426@gmail.com" method="post" encType="text/plain">
                      <h6 className="footer-title">Send Me a Message!</h6>
                      <div className="form-control w-full mb-4">
                          <label className="label">
                              <span className="label-text">Name</span>
                          </label>
                          <input type="text" placeholder="Your Name" className="input rounded-md placeholder-black text-black"/>
                      </div>
                      <div className="form-control w-full mb-4">
                          <label className="label">
                              <span className="label-text">Email</span>
                          </label>
                          <input type="email" placeholder="example@gmail.com" className="input rounded-md placeholder-black text-black" />
                      </div>
                      <div className="form-control w-full mb-4">
                          <label className="label">
                              <span className="label-text">Message</span>
                          </label>
                          <textarea placeholder="Your Message..." className="textarea rounded-md h-24 placeholder-black text-black"></textarea>
                      </div>
                      <button type="submit" className="btn bg-white w-full mb-4"><BsSend/>Send</button>
                    </form>
                    <div className="flex gap-4 md:justify-normal xsm:justify-center">
                      <a href="https://github.com/Tannic-Paprika" target='_blank'><button className="btn btn-circle"><BsGithub/></button></a>
                      {/* <a href="https://twitter.com/flackjsx" target='_blank'><button className="btn btn-circle"><BsTwitterX/></button></a>
                      <a href="https://www.instagram.com/flackwav/" target='_blank'><button className="btn btn-circle"><BsInstagram/></button></a>
                      <a href="https://www.youtube.com/channel/UCV5DS_mBLPdfjpyrTFWYVBg" target='_blank'><button className="btn btn-circle"><BsYoutube/></button></a> */}
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}