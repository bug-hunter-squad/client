import Logo from "../components/atom/splashLogo";
import styleSplash from "../styles/Splash.module.css";

function Splash() {
  return (
    <>
      <div className={`${styleSplash.container} container-fluid`}>
        <Logo />
      </div>
    </>
  );
}

export default Splash;
