import { useState } from "react";
function Mode() {
  const [isLightMode, setIsLightMode] = useState(true);

  const handleThemeMode = () => {
    setIsLightMode(!isLightMode);
  };
  return (
    <div
      onClick={handleThemeMode}
      className={isLightMode ? "bg-white h-screen" : "bg-black h-screen"}
    >
      <h1
        className={
          isLightMode
            ? "text-center text-lg font-bold my-1 text-black"
            : "text-center text-lg font-bold my-1 text-white"
        }
      >
        {isLightMode ? "Light mode is on" : "Dark mode is on"}
      </h1>
      <button
        className={
          isLightMode
            ? "border bg-black text-white font-bold rounded-md p-2 block m-auto"
            : "border bg-white text-black font-bold rounded-md p-2 block m-auto"
        }
        onClick={handleThemeMode}
      >
        {isLightMode ? "Go to Dark Mode" : "Go to Light mode"}
      </button>
    </div>
  );
}

export default Mode;
