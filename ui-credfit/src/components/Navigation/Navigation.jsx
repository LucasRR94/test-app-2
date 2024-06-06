import PropTypes from "prop-types";
import NavMenu from "../NavMenu/NavMenu";

const Navigation = ({ children, currentStage, nextStage }) => {
  <section className="flex flex-col justify-items-center items-center">
    <NavMenu operationTitle="Crédito Consignado" currentPath="Home"></NavMenu>
    <></>
  </section>;
};

Navigation.propTypes = {
  children: PropTypes.node,
};

export default Navigation;
