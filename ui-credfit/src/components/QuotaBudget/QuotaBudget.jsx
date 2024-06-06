import { useState } from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActionArea } from "@mui/material";
import { formatCurrency } from "../../utils.jsx";

const QuotaBudget = ({ value, onClick }) => {
  const [selectedQuota, setSelectedQuota] = useState(-1);
  const maxQuotasPossible = 4;
  const onSelect = (currentIndex) => {
    onClick(currentIndex);
    setSelectedQuota(currentIndex);
  };

  const getStyle = (index) =>
    index === selectedQuota
      ? `box-border w-[226px] h-16 !bg-[#FFD899]`
      : `box-border w-[226px] h-16 !bg-[#FAFAFA]`;

  return (
    <div className="w-full h-full flex flex-row flex-wrap gap-4 rounded-lg m-0 p-0 b-0">
      {Array.from({ length: maxQuotasPossible }, (_, index) => {
        return (
          <Card
            key={index}
            className={getStyle(index)}
            onClick={() => onSelect(index)}
          >
            <CardActionArea className="w-full">
              <CardContent className="w-full flex flex-row items-center align-center">
                <div className="box-border w-2 h-16 bg-[#E66900]"></div>
                <article className="w-full flex flex-row items-center align-center gap-2 justify-center">
                  <span className="text-[20px] leading-[26.6px] text-neutralGreyMedium">{`${index + 1}x de `}</span>
                  <span className="text-[24px] leading-[31.92px] text-primary font-semibold">{`${formatCurrency(value / (index + 1))}`}</span>
                </article>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
};

QuotaBudget.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func,
};

export default QuotaBudget;
