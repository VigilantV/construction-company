import Navbar from "./Navbar";

const AnimatedNavbarInterface = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default AnimatedNavbarInterface;
