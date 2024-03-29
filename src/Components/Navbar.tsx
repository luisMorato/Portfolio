import { NavLink } from "react-router-dom";

const Navbar = ({ smoothScrollTo }: { smoothScrollTo: ((id: string) => void) | undefined }) => {
  
  
  return (
    <nav>
        <ul 
          className="flex justify-end gap-x-5 text-white text-base font-medium
          sm:text-lg"
        >
            <NavLink to="/">
              <li className="cursor-pointer hover:text-[#7000FF]">Home</li>
            </NavLink>
            {location.pathname !== "/Projects" && 
            (
              <>
                <button
                  onClick={() => smoothScrollTo && smoothScrollTo("about")}
                >
                  <li className="cursor-pointer hover:text-[#7000FF]">About</li>
                </button>
                <NavLink to="/Projects">
                  <li className="cursor-pointer hover:text-[#7000FF]">Projects</li>
                </NavLink>
                <button 
                  onClick={() => smoothScrollTo && smoothScrollTo("contact")}
                >
                  <li className="cursor-pointer hover:text-[#7000FF]">Contact</li>
                </button>
              </>
            )}
        </ul>
    </nav>
  )
}

export default Navbar;