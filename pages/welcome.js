import Logo from "../components/atom/welcomeLogo";
import styleWelcome from "../styles/Welcome.module.css";

function Welcome() {
  return (
    <>
      <div className="container text-center">
        <div className={styleWelcome.content}>
          <Logo />
          <h1>Get Started</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </p>
        </div>
      </div>
    </>
  );
}

export default Welcome;
