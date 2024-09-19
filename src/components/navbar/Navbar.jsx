import Sidebar from "../sidebar/Sidebar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          @PRANAY
        </motion.span>
        <div className="social">
          <a href="#">
            <FontAwesomeIcon  className="imgs" icon={faSquareFacebook} />
          </a>
          <a href="#">
          <FontAwesomeIcon className="imgs" icon={faInstagram} />
          </a>
          <a href="#">
          <FontAwesomeIcon className="imgs" icon={faGithub} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
