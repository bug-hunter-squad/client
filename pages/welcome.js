import { useMediaQuery } from "react-responsive";
import Welcomes from "../components/organisms/Mobile/welcome";

function welcome() {
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 400 });
    return isMobile ? children : null;
  };
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 401 });
    return isNotMobile ? children : null;
  };
  return (
    <>
      <div>
        <Mobile>
          <Welcomes />
        </Mobile>
        <Default><Welcomes /></Default>
      </div>
    </>
  );
}

export default welcome;
