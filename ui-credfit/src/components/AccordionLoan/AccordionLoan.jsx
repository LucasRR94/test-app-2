import PropTypes from "prop-types";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import "./AccordionLoad.css";
import SolicitationIcon from "../../assets/SolicitationIcon.svg";
import LoanIcon from "../../assets/LoanIcon.svg";
import EyeIcon from "../../assets/EyeIcon.svg";
import AprovedIcon from "../../assets/AprovedIcon.svg";
import ReprovedIcon from "../../assets/ReprovedIcon.svg";
import { formatCurrency } from "../../utils.jsx";

const AccordionLoan = ({
  isSolicitation,
  company,
  nextDatePayment,
  quotas,
  totalValue,
  numberOperation,
}) => {
  return (
    <>
      {isSolicitation ? (
        <Accordion className="bg-black!">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <span className="flex flex-row items-center align-center gap-2 font-bold text-base text-labelGrey">
              <img src={SolicitationIcon} alt="loan icon" />
              SOLICITAÇÃO DE EMPRÉSTIMO {numberOperation}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <section className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <span className="flex flex-row items-center align-center gap-2 font-bold text-base text-alertText bg-alertReproved rounded-lg p-2 h-11">
                  <img
                    src={ReprovedIcon}
                    alt="loan icon"
                    className="border-box p-1.5"
                  />
                  Reprovado por Score
                </span>

                <button className="flex flex-row gap-2 text-xs text-[neutralGreyMedium] items-center underline">
                  <img src={EyeIcon} alt="hide icon" />
                  Ocultar
                </button>
              </div>
              <article className="flex flex-row flex-wrap">
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16 pt-2">
                  <span className="text-labelGrey font-semibold">Empresa</span>
                  <span className="text-neutralGreyMedium">{company}</span>
                </div>
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16 pt-2">
                  <span className="text-labelGrey font-semibold">
                    Valor da Parcela
                  </span>
                  <span className="text-neutralGreyMedium">{`${formatCurrency(
                    parseFloat(totalValue) / parseInt(quotas)
                  )}`}</span>
                </div>
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16 pt-4">
                  <span className="text-labelGrey font-semibold">
                    Número de parcelas
                  </span>
                  <span className="text-neutralGreyMedium">{quotas} x</span>
                </div>
              </article>
            </section>
          </AccordionDetails>
        </Accordion>
      ) : (
        <Accordion className="bg-black!">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3-content"
            id="panel3-header"
          >
            <span className="flex flex-row items-center align-center gap-2 font-bold text-base text-labelGrey">
              <img src={LoanIcon} alt="loan icon" />
              EMPRÉSTIMO CORRENTE {numberOperation}
            </span>
          </AccordionSummary>
          <AccordionDetails>
            <section className="flex flex-col gap-4">
              <div className="flex flex-row items-center justify-between">
                <span className="flex flex-row items-center align-center gap-2 font-bold text-base text-labelGrey bg-greyAgree rounded-lg p-2 h-11">
                  <img
                    src={AprovedIcon}
                    alt="loan icon"
                    className="border-box p-1.5"
                  />
                  Crédito aprovado
                </span>

                <button className="flex flex-row gap-2 text-xs text-[neutralGreyMedium] items-center underline">
                  <img src={EyeIcon} alt="hide icon" />
                  Ocultar
                </button>
              </div>
              <article className="flex flex-row flex-wrap">
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16">
                  <span className="text-labelGrey font-semibold">Empresa</span>
                  <span className="text-neutralGreyMedium">{company}</span>
                </div>
                <div className="border-box flex flex-col min-w-[200px] gap-2 text-base pl-6 basis-2/4 h-16">
                  <span className="text-labelGrey font-semibold">
                    Próximo Vencimento
                  </span>
                  <span className="text-neutralGreyMedium">
                    {nextDatePayment}
                  </span>
                </div>
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16 pt-4">
                  <span className="text-labelGrey font-semibold">
                    Total financiado
                  </span>
                  <span className="text-neutralGreyMedium">{`${formatCurrency(
                    totalValue
                  )}`}</span>
                </div>
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-6 basis-2/4 h-16 pt-4">
                  <span className="text-labelGrey font-semibold">
                    Valor da Parcela
                  </span>
                  <span className="text-neutralGreyMedium">{`${formatCurrency(
                    parseFloat(totalValue) / parseInt(quotas)
                  )}`}</span>
                </div>
                <div className="flex flex-col min-w-[200px] gap-2 text-base pl-4 basis-2/4 h-16 pt-4">
                  <span className="text-labelGrey font-semibold">
                    Número de parcelas
                  </span>
                  <span className="text-neutralGreyMedium">{quotas} x</span>
                </div>
              </article>
            </section>
          </AccordionDetails>
          <AccordionActions>
            <Button>Cancel</Button>
            <Button>Agree</Button>
          </AccordionActions>
        </Accordion>
      )}
    </>
  );
};

AccordionLoan.propTypes = {
  isSolicitation: PropTypes.bool,
  company: PropTypes.string,
  nextDatePayment: PropTypes.string,
  quotas: PropTypes.number,
  totalValue: PropTypes.number,
  numberOperation: PropTypes.number,
};

export default AccordionLoan;
