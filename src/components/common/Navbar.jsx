import { useDevice } from "./use contexts/DeviceContext";
import Navbar_Desktop from "./desktop/Navbar_Desktop";
import Navbar_Mobile from "./mobile/Navbar_Mobile";

const Navbar = () => {
  const isMobile = useDevice();

  return <>{isMobile ? <Navbar_Mobile /> : <Navbar_Desktop />} </>;
};

export default Navbar;
