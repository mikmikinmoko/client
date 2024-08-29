import { Card } from "antd";
import ReusableCard from "../../../components/Reusable/Card/ReusableCard";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";
import { useGetMembers } from "../../../services/admin/request/membership-controller";
import MemberTable from "./Table/MemberTable";

const Member = () => {
  const { data } = useGetMembers();

  console.log(data);

  // console.log(getMembers);
  return (
    <ReusableCard title={"Members"}>
      <MemberTable data={data?.data} />
    </ReusableCard>
  );
};

export default Member;
