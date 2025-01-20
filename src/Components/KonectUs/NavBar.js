function NavBar() {
  return (
    <div>
      <div className="p-4 my-2">
        <input
          type="search"
          placeholder="search"
          className="float-right p-1 text-l block"
        ></input>{" "}
        <br></br>
      </div>
      <ul className ="flex justify-around mt-1 w-3/4 float-right">
        <li className = "text-[#75d481] font-bold">Home</li>
        <li className = "text-[#75d481] font-bold">About us</li>
        <li className = "text-[#75d481] font-bold">Products</li>
        <li className = "text-[#75d481] font-bold">Team</li>
        <li className = "text-[#75d481] font-bold">Contact us</li>
        <li className = "text-[#75d481] font-bold">Log in</li>
      </ul>
    </div>
  );
}

export default NavBar;
