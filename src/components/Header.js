import Nav from "./Nav";
import Logo from "./Logo";

function Header() {
  return (
    <>
      <header>
        <Logo width={100} height={40} currentColor="#FF6060" />
        <Nav />
      </header>
    </>
  );
}

export default Header;
