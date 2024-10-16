import { Button } from "antd";
import TableLoan from "./TableLoan";

const Load = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-between items-center pb-5">
          <div>Loan Management</div>
          <div>
            <Button>Add Loan</Button>
          </div>
        </div>
        <TableLoan />
      </div>
    </>
  );
};

export default Load;
