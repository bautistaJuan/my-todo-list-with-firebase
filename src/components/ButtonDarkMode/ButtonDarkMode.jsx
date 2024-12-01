import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import PropTypes from "prop-types";
const ButtonDarkMode = ({ isDarkMode, setIsDarkMode }) => {
  return (
    <>
      {isDarkMode ? (
        <MdOutlineDarkMode
          className="absolute top-4 right-4 text-4xl cursor-pointer transition-transform duration-500 transform hover:scale-110"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      ) : (
        <MdOutlineLightMode
          className="absolute top-4 right-4 text-4xl cursor-pointer transition-transform duration-500 transform hover:scale-110"
          onClick={() => setIsDarkMode(!isDarkMode)}
        />
      )}
    </>
  );
};
ButtonDarkMode.propTypes = {
  isDarkMode: PropTypes.bool.isRequired,
  setIsDarkMode: PropTypes.func.isRequired,
};

export default ButtonDarkMode;
