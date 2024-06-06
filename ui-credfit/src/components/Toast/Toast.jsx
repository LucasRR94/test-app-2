import PropTypes from "prop-types";
import IconAssistant from "../../assets/IconAssistant.svg";

const Toast = ({ informative }) => {
  return (
    <article className="flex flex-row p-4 gap-4 bg-toast rounded-2xl">
      <img
        src={IconAssistant}
        alt="icone de assistente"
        className="w-10 h-10"
      />
      <span className="color-[#2A3535]">{informative}</span>
    </article>
  );
};

Toast.propTypes = {
  informative: PropTypes.string,
};

export default Toast;
