export default function Delete({
  password,
  setPassword,
  newPassword,
  setNewPassword,
}) {
  const handleSubmit = () => {
    if (password === newPassword){
      alert("DELETED SUCCESSFULLY");
    }
    else{
      alert("FAILED TO DELETE, PASSWORD DOESNT MATCH");
    }
    
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  return (
    <div className=" bg-green-300 w-full px-24 py-16 rounded-2xl mt-16 sm:px-8 ">
      <h2 className="text-center font-bold text-3xl text-white mb-8 sm:text-2xl">
        DELETE PASSWORD
      </h2>
      <form onSubmit={handleSubmit}>
        <label className=" text-lg font-medium text-white">Password</label>{" "}
        <br></br>
        <input
          type="password"
          placeholder="your password..."
          required
          className="py-4 w-full text-black mb-8 px-2 rounded-lg"
          onChange={handlePassword}
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">
          Confirm Password
        </label>{" "}
        <br></br>
        <input
          type="password"
          placeholder="your password again..."
          required
          className="py-4 px-2 w-full  text-black mb-8 rounded-lg"
          onChange={handleNewPassword}
        ></input>{" "}
        <br></br>
        <button
          className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg"
          type="submit"
        >
          DELETE
        </button>
      </form>
    </div>
  );
}
