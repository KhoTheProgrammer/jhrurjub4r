import SideBar from "./Account/SideBar"
import Users from "./AccountManagement/Users"
export default function Admin(){
    return <div className=" flex md:w-full w-screen">
        <SideBar></SideBar>
        <Users></Users>
    </div>
}