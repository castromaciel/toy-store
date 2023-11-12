import { logo } from '@/assets'

const Footer = () => (
  <footer className="container-fluid background-navbar d-flex justify-content-between align-items-center">
    <img src={logo} alt="Logo" width="50" height="50" />

    <nav>
      <ul className="navbar-nav d-flex flex-row align-items-center gap-3">
        <li className="nav-item-footer">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link-footer gap-1"
          >
            <i className="bi bi-facebook" />
            <span>Facebook</span>
          </a>
        </li>
        <li className="nav-item-footer">
          <a
            href="http://web.whatsapp.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link-footer gap-1"
          >
            <i className="bi bi-whatsapp" />
            <span>Whatsapp</span>
          </a>
        </li>
        <li className="nav-item-footer">
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noreferrer"
            className="nav-link-footer gap-1"
          >
            <i className="bi bi-twitter-x" />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
    </nav>

    <p className="m-0 terms-and-conditions" data-bs-toggle="Terms" data-bs-target="#terms-and-conditions">
      Términos y condiciones
    </p>
  </footer>
)

export default Footer
