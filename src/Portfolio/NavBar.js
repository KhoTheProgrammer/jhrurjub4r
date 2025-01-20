function NavBar() {
  return (
    <div className="flex items-center h-24 max-w-[1240px] m-auto px-4 justify-between">
      <h1 className=" text-3xl w-full font-bold text-green-400">REACT.</h1>
      <ul className="flex ">
        <li className="p-4">Home</li>
        <li className="p-4">About</li>
        <li className="p-4">Company</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
}

export default NavBar;
