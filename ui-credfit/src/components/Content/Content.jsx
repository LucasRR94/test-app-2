import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import "./Content.css";
import Toast from "../Toast/Toast";
import SliderValue from "../SliderValue/SliderValue";
import QuotaBudget from "../QuotaBudget/QuotaBudget";
import SummaryLoan from "../SummaryLoan/SummaryLoan";
import AccordionLoan from "../AccordionLoan/AccordionLoan";

const Content = () => {
  return (
    <div className="py-6 px-6 border-2 rounded-2xl shadow-base max-h-[515px] min-h-[373px] content-card bg-white overflow-y align-center content-center">
      <CardContent className="flex flex-col gap-4">
        <h2 className="text-base text-primary font-bold p-0">
          Simular Empréstimo
        </h2>
        <Toast informative="Você possui saldo para Crédito Consignado pela empresa Seguros Seguradora. Faça uma simulação! Digite quanto você precisa:"></Toast>
        {/* <SliderValue maxValue="10000" /> */}
        {/* <QuotaBudget value="10000" onClick={() => {}}></QuotaBudget> */}
        {/* <SummaryLoan value="10000" quotas="2"></SummaryLoan> */}
        <AccordionLoan
          numberOperation="1"
          totalValue="10000"
          quotas="2"
          company="Ari ari"
          nextDatePayment="29/01/25"
          isSolicitation
        ></AccordionLoan>
      </CardContent>
    </div>
  );
};

export default Content;
