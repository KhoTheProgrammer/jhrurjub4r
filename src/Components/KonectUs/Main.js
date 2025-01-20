import logo from "./s.jpg";
function Main() {
  return (
    <div style={{ 
        backgroundImage: `url(${logo})` }} className=" h-lvh bg-contain align-middle">
      <h1 className =" align-middle text-white">
        Welcome to Konnect Us <br></br>Farmers Zone<br></br>Connect buyers with
        farmers effortlessly
      </h1>
      <button>Join us now</button>
    </div>
  );
}

export default Main;
