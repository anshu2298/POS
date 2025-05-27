import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className='footer'>
      <button
        onClick={() => {
          navigate("/checkout");
        }}
        className='button'
      >
        Next
      </button>
    </div>
  );
};

export default Footer;
