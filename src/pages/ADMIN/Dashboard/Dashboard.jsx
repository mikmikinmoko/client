import { Helmet } from "react-helmet";
import ReusableCount from "../../../components/Reusable/Count/CountUp";
import {
  useGetGenderCount,
  useGeTotalMembers,
} from "../../../services/admin/request/dashboard";

const Dashboard = () => {
  const { data: genderCount } = useGetGenderCount();
  const { data: totalMember } = useGeTotalMembers();

  return (
    <>
      <Helmet>
        <title>SIRMMPC | Dashboard</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-4 ">
        <div className="w-full h-40 rounded-lg border-2 shadow-sm flex justify-center items-center">
          <ReusableCount end={genderCount?.data?.male} />
        </div>
        <div className="w-full h-40 rounded-lg border-2 shadow-sm flex justify-center items-center">
          <ReusableCount end={genderCount?.data?.female} />
        </div>
        <div className="w-full h-40 rounded-lg border-2 shadow-sm flex justify-center items-center">
          <ReusableCount end={totalMember?.data?.total} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
