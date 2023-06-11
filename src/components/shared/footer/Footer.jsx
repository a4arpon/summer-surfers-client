import { ChatHeartFill } from 'react-bootstrap-icons'
import logoWeb from '../../../assets/imgs/imgLogo.png'
const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content ">
      <div className="footer p-10 container mx-auto">
        <div>
          <img src={logoWeb} className="h-28" />
          <p>
            <strong
              className="text-xl"
              style={{ fontFamily: 'Satisfy, cursive' }}
            >
              SummerSurfer
            </strong>
            <br />
            Providing reliable services since 2001
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Photography Courses</a>
          <a className="link link-hover">Be A Instructor</a>
          <a className="link link-hover">Resellers</a>
          <a className="link link-hover">Hire A Photographer</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
          <a className="link link-hover">Refund policy</a>
        </div>
        <div>
          <span className="footer-title">Contact</span>
          <p>
            Phone: <a className="link link-hover">+1 646 980 45 99</a>
          </p>
          <p>
            Email: <a className="link link-hover">mail@summersurfer.com</a>
          </p>
          <div className="ring p-2 rounded-lg ring-gray-300">
            <p className="text-lg font-semibold text-gray-500">
              Subscribe to our newsletter.
            </p>
            <div className="input-group">
              <input type="email" className="input focus:outline-none" />
              <button className="btn btn-primary">
                <ChatHeartFill size={28} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-base-300 py-2 font-semibold">
        &copy; SummerSurfers 2023
      </div>
    </footer>
  )
}

export default Footer
