import PropTypes from "prop-types";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { Menu } from "@mui/base/Menu";
import { MenuItem } from "@mui/base/MenuItem";
import Brand from "../../assets/brand.svg";
import UserIcon from "../../assets/user.svg";
import ArrowDown from "../../assets/ArrowDown.svg";

const Header = ({ name }) => {
  const createHandleMenuClick = () => {};
  return (
    <header className="flex flex-row h-12 bg-primary items-center justify-between px-6">
      <img src={Brand} alt="brand da credfit" className="h-7" />
      <div className="w-40">
        <Dropdown>
          <MenuButton>
            <div className="w-40 flex flex-row items-center justify-center">
              <img src={UserIcon} alt="user img" className="w-12 h-12" />
              <span className="text-sm font-bold text-white w-full mr-0.25rem">
                {name}
              </span>
              <img
                src={ArrowDown}
                alt="arrow placeholder"
                className="w-4  h-12"
              />
            </div>
          </MenuButton>
          <Menu className="bg-white w-40 rounded-2xl border-2 border-black">
            <MenuItem
              className="hover:bg-black hover:text-white w-40 select-none p-2 rounded-2xl w-38"
              onClick={createHandleMenuClick("Profile")}
            >
              Profile
            </MenuItem>
            <MenuItem
              className="hover:bg-black hover:text-white w-40 select-none p-2 rounded-2xl w-38"
              onClick={createHandleMenuClick("Log out")}
            >
              Sair
            </MenuItem>
          </Menu>
        </Dropdown>
      </div>
    </header>
  );
};

Header.propTypes = {
  name: PropTypes.string,
};

export default Header;
