
import logo from "./logo.jpg";
import Search from "../Search and Filtering/Search";
export default function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-3">
      <p className="font-bold text-5xl"> KonnectUs</p>
      <ul className="flex p-3 justify-end">
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Home</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          About Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          Products
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Team</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          Contact Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Login</li>
        <Search/>
      </ul>
      
    </div>
  );
}
