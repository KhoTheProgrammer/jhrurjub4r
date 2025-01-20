import Update from "./Update";
import Change from "./Change";
import Delete from "./Delete";
import Dashboard from "./Dashboard";
import NavBar from "./NavBar";

export default function AccountPage() {
  return (
    <div>
        <NavBar></NavBar>
        <Dashboard></Dashboard>
      <div className="sm:grid sm:grid-cols-1 sm:gap-y-8 md:grid md:grid-cols-3 mx-8 gap-8 text-white ">
        <Update></Update>
        <Change></Change>
        <Delete></Delete>
      </div>
    </div>
  );
}
