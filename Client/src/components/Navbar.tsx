import {Link} from 'react-router-dom';
import { BsChatSquareDots } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex flex-row h-10  px-4 items-center bg-background-secondary">
      <p className="hidden sm:block text-Accent text-2xl w-3/4">CampusCollab</p>
      <ul className="flex flex-row sm:w-1/4 w-full text-gray-200 place-content-between">
         <li className="text-2xl"><Link to="/"><BsChatSquareDots /></Link></li>
         <li className="text-2xl"><Link to="/Routine" ><RiCalendarScheduleLine /></Link></li>
         <li className="text-2xl"><Link to="/Notice"><IoMdNotificationsOutline /></Link></li>
         <li className="text-2xl"><Link to="/User"><FaUser /></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
