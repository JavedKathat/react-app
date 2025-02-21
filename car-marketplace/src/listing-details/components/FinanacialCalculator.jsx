import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";


function FinanacialCalculator({ carDetails}) {
  const [carPrice, setCarPrice] = useState((carDetails?.sellingPrice)*100000||0);
  const [intrestRate, setInterstRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [downPayment, setDownPayment] = useState(0);
  const [monthlyPayment,setMonthlyPayment] = useState(0);

  useEffect(()=>{
    setCarPrice(Number((carDetails?.sellingPrice)*100000 || 0));
  },[carDetails])

  const CalculateMonthlyPayment = () => {
    console.log(carPrice,intrestRate,loanTerm,downPayment);
    
    const Principle = carPrice - downPayment;
    const MonthlyInterestRate = intrestRate / 1200;
    const MonthlyPayment =
      (Principle *
        MonthlyInterestRate *
        Math.pow(1 + MonthlyInterestRate, loanTerm)) /
      (Math.pow(1 + MonthlyInterestRate, loanTerm) - 1);
      setMonthlyPayment(MonthlyPayment.toFixed(2));
  };

  return (
    <div className="w-[95%] p-10 mt-7 shadow-md rounded-xl border">
      <h2 className="font-medium text-2xl">Finanacial Calculator</h2>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>₹ Price</label>
          <Input
            type="number"
            onChange={(e) => setCarPrice(e.target.value)}
            value={carPrice.toFixed(2)}
          />
        </div>
        <div className="w-full">
          <label>Intrest Rate</label>
          <Input
            type="number"
            onChange={(e) => setInterstRate(e.target.value)}
          />
        </div>
      </div>
      <div className="flex gap-5 mt-5">
        <div className="w-full">
          <label>Loan Term (Months)</label>
          <Input
            type="number"
            onChange={(e) => setLoanTerm(e.target.value)}
          />
        </div>
        <div className="w-full">
          <label>Down Payment</label>
          <Input
            type="number"
            onChange={(e) => setDownPayment(e.target.value)}
          />
        </div>
      </div>

      {monthlyPayment>0 &&<h2 className="font-medium text-2xl mt-4">Monthly Payment: <span className="text-3xl text-primary font-bold">₹{monthlyPayment}</span></h2>}
      
      <Button onClick={CalculateMonthlyPayment} className="w-full mt-5 text-lg">
        Calculate
      </Button>
    </div>
  );
}

export default FinanacialCalculator;
