import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <header>
        <Logo width={210} height={68} currentColor="#FF6060" />
        <Nav />
      </header>
    </>
  );
}

export default Header;
