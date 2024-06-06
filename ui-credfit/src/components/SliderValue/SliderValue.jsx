import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/system";
import { Slider as BaseSlider, sliderClasses } from "@mui/base/Slider";
import { formatCurrency } from "../../utils.jsx";

function SliderValueLabel({ children }) {
  return <span className="valueLabel">{children}</span>;
}

SliderValueLabel.propTypes = {
  children: PropTypes.element.isRequired,
};

const Slider = styled(BaseSlider)(
  () => `
  color: #057D88;
  height: 72px;
  width: 100%;
  padding: 16px 0;
  display: inline-flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  touch-action: none;
  -webkit-tap-highlight-color: transparent;
  gap: 0px;
  opacity: 0px;


 

  & .${sliderClasses.rail} {
    display: block;
    position: absolute;
    width: 100%;
    border-radius:50%;
    height: 16px;
    border-radius: 24px;
    background-color:#D6DBDB;
    opacity: 1;
  }

  & .${sliderClasses.track} {
    display: block;
    position: absolute;
    height: 16px;
    background-color: #057D88;
    border-radius: 24px;
  }

  & .${sliderClasses.thumb} {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-left: -6px;
    width: 24px;
    height: 24px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 50%;
    outline: 0;
    background-color: #057D88;
    transition-property: box-shadow, transform;
    transition-timing-function: ease;
    transition-duration: 120ms;
    transform-origin: center;
  }

  & .${sliderClasses.mark} {
    width: 7px;
    height: 20px;
    position: absolute;
    border-radius: 0%;
    border: 2px;
    border-bottom:0px;
    border-left:0px;
    border-top:0px;
    border-color:#6B7A7B;
    border-style:dashed;
    background:none;
  }

  & .${sliderClasses.markActive} {
    background-color: none;
  }

  & .valueLabel {
    font-size: 0px;
    position: relative;
    top: -2em;
  }
`
);

function valuetext(value) {
  return `${value}°C`;
}

const SliderValue = ({ maxValue }) => {
  const [budget, setBudget] = React.useState(0);
  const [percentage, setPercentage] = React.useState(0);
  const onChange = (event) => {
    setPercentage(event.target.value);
    return setBudget(() =>
      formatCurrency((event.target.value / 1000) * maxValue)
    );
  };
  return (
    <div className="flex flex-col gap-2 items-center justify-items-center h-[168px]">
      <span className="rounded-2xl py-2 px-4 text-2xl text-greenSecundary bg-secundaryGray font-semibold">
        {budget}
      </span>
      <Slider
        aria-label="value slider"
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        onChange={onChange}
        marks={[{ value: maxValue / 2, label: `${maxValue / 2}` }]}
        min={0}
        max={1000}
        slots={{ valueLabel: SliderValueLabel }}
        value={percentage}
      />
    </div>
  );
};

SliderValue.propTypes = {
  maxValue: PropTypes.number,
};

export default SliderValue;
