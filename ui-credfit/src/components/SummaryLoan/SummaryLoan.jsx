import PropTypes from "prop-types";
import { formatCurrency } from "../../utils";

const SummaryLoan = ({ value, quotas }) => {
  return (
    <article className="flex flex-row flex-wrap">
      <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16">
        <span className="text-labelGrey font-semibold">Valor a Creditar</span>
        <span className="text-neutralGreyMedium">{formatCurrency(value)}</span>
      </div>
      <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16">
        <span className="text-labelGrey font-semibold">Valor a Financiar</span>
        <span className="text-neutralGreyMedium">{formatCurrency(value)}</span>
      </div>
      <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16">
        <span className="text-labelGrey font-semibold">Parcelamento</span>
        <span className="text-neutralGreyMedium">{`${quotas} x ${formatCurrency(value)}`}</span>
      </div>
    </article>
  );
};

SummaryLoan.propTypes = {
  value: PropTypes.number,
  quotas: PropTypes.number,
};

export default SummaryLoan;
