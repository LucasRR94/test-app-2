import PropTypes from "prop-types";

const NavigationButtons = ({ backPath, backTitle, nextPath, nextTitle }) => {
  return (
    <div className="flex flex-row gap-6 h-12 justify-end">
      <button
        className="w-[200px] h-full border-2 border-primary bg-white text-primary text-base font-semibold rounded-3xl hover:bg-primary hover:text-white"
        onClick={backPath}
      >
        {backTitle}
      </button>
      <button
        className="w-[200px] h-full border-2 border-primary bg-primary text-white text-base font-semibold rounded-3xl hover:bg-white hover:text-primary"
        onClick={nextPath}
      >
        {nextPath}
      </button>
    </div>
  );
};

NavigationButtons.propTypes = {
  backPath: PropTypes.func,
  backTitle: PropTypes.string,
  nextPath: PropTypes.func,
  nextTitle: PropTypes.string,
};

export default NavigationButtons;
