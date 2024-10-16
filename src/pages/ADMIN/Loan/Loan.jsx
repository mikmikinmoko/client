import { Button } from "antd";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";

const Load = () => {
  return (
    <>
      <div className="w-full h-full">
        <div className="flex justify-between items-center pb-5">
          <div>Loan Management</div>
          <div>
            <Button>Add Events</Button>
          </div>
        </div>
        <ReusableTable />
      </div>
    </>
  );
};

export default Load;
