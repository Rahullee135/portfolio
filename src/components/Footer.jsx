import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          Designed & Built with <FaHeart className="heart" /> by <strong>Rahul</strong>
        </p>
        <p className="footer-sub">© {new Date().getFullYear()} All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
