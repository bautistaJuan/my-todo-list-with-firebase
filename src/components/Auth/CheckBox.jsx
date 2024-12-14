import PropTypes from "prop-types";
const CheckBox = ({ isRegister, setIsRegister }) => {
  return (
    <div className="absolute top-10 m-autouto left-1/2 transform -translate-x-1/2">
      <label className="relative flex items-center w-12 h-6 cursor-pointer">
        <input
          type="checkbox"
          className="sr-only"
          checked={isRegister}
          onChange={() => setIsRegister(!isRegister)}
        />
        <div
          className={`absolute inset-0  border-2 border-gray-800 rounded-md transition-all ${
            isRegister ? "bg-blue-700" : "bg-green-700"
          }`}
        ></div>
        <div
          className={`absolute w-5 h-5 bg-white border-2 border-gray-800 rounded-md transition-transform ${
            isRegister ? "translate-x-6" : "translate-x-0"
          }`}
        ></div>
      </label>
    </div>
  );
};
CheckBox.propTypes = {
  isRegister: PropTypes.bool.isRequired,
  setIsRegister: PropTypes.func.isRequired,
};

export default CheckBox;
