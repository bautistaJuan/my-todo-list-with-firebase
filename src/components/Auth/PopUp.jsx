import PropTypes from "prop-types";
const PopUp = ({ setPopUpOpen, messageError }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-red-50  max-h-[50vh] rounded-lg shadow-xl overflow-hidden">
        <div className="bg-orange-500 p-4 border-b flex justify-between items-center">
          <h2 className="text-xl font-semibold">Advertencia</h2>
          <button
            onClick={() => setPopUpOpen(false)}
            className="text-gray-600 hover:text-gray-900"
          >
            ✕
          </button>
        </div>
        <div className="p-6 overflow-y-auto max-h-[calc(50vh-100px)]">
          <p className="text-gray-700">{messageError}</p>
        </div>
      </div>
    </div>
  );
};
PopUp.propTypes = {
  setPopUpOpen: PropTypes.func.isRequired,
  messageError: PropTypes.string.isRequired,
};
export default PopUp;
