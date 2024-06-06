import PropTypes from "prop-types";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import BackSimbol from "../../assets/BackSimbol.svg";
import "./NavigationMenu.css";

const NavigationMenu = ({ operationTitle, currentPath }) => {
  return (
    <nav className="max-w-[536px] max-h-[548px] flex flex-row">
      <button className="hover:bg-gray-200">
        <img src={BackSimbol}></img>
      </button>
      <div className="flex flex-col">
        <Breadcrumbs className="max-h-6" aria-label="breadcrumb">
          <Link
            underline="hover"
            color="#606060"
            href="/"
            sx={{
              fontSize: "12px",
              lineHeight: "24px",
            }}
          >
            {currentPath}
          </Link>
          <Link
            underline="hover"
            color="black"
            href="/material-ui/getting-started/installation/"
            sx={{
              fontSize: "12px",
              lineHeight: "24px",
            }}
          >
            {operationTitle}
          </Link>
        </Breadcrumbs>
        <h1 className="text-[20px] leading-[26.6px] text-primary">
          {operationTitle}
        </h1>
      </div>
    </nav>
  );
};

NavigationMenu.propTypes = {
  operationTitle: PropTypes.string,
  currentPath: PropTypes.string,
};

export default NavigationMenu;
