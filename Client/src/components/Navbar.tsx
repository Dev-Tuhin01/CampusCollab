const Navbar = () => {
  return (
    <nav className="bg-gray-800 flex flex-row  px-4 items-center">
      <p className="hidden sm:block text-gray-100 text-2xl w-3/4">QAS</p>
      <ul className="flex flex-row sm:w-1/4 w-full text-gray-200 place-content-between">
         <li>Chats</li>
         <li>Routine</li>
         <li>Notices</li>
         <li>Profile</li>
      </ul>
    </nav>
  )
}

export default Navbar
