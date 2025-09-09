import "./header.css";
import { useState } from "react";
import Navbar from "./Navbar";
import HeaderLeft from "./HeaderLeft";
import HeaderRight from "./HeaderRight";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { user } = useSelector((state) => state.auth);
  return (
    <header className="header">
      <HeaderLeft toggle={toggle} setToggle={setToggle} />
      <Navbar toggle={toggle} setToggle={setToggle} user={user} />
      <HeaderRight user={user} />
    </header>
  );
};

export default Header;
