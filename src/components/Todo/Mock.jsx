import mockImg from "../../assets/HandsPoint.png";
const Mock = () => {
  return (
    <div className="text-center text-gray-400 flex flex-col items-center justify-center h-full">
      <img src={mockImg} alt="Crea tus tareas" className="opacity-60" />
      <h1 className="text-[2rem]">¡Empeza a crear tus tareas!</h1>
    </div>
  );
};

export default Mock;
