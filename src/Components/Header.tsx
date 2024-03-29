import Navbar from "./Navbar";

const Header = ({ smoothScrollTo }: { smoothScrollTo: ((id: string) => void) | undefined }) => {
  return (
    <header className="w-full bg-black py-5 px-8
    sm:px-24">
        <Navbar 
          smoothScrollTo={smoothScrollTo}
        />
    </header>
  )
}

export default Header;