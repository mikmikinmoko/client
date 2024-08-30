import { Button, Card } from "antd";
import ReusableCard from "../../../components/Reusable/Card/ReusableCard";
import ReusableTable from "../../../components/Reusable/Table/ReusableTable";
import {
  useEditMember,
  useGetMembers,
} from "../../../services/admin/request/membership-controller";
import MemberTable from "./Table/MemberTable";
import ReusableDrawer from "../../../components/Reusable/Drawer/ReusableDrawer";
import { useState } from "react";
import Profile from "./Profile";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelectedMember } from "../../../store/admin/useMembership";

const Member = () => {
  const { data } = useGetMembers();

  const [drawer, setDrawer] = useState(false);
  const [viewProfile, setViewProfile] = useState(false);
  const edit = useEditMember();

  const { selectedMember } = useSelectedMember();
  console.log(selectedMember);

  const openDrawer = (mode) => {
    if (mode === "view") {
      setViewProfile(!viewProfile);
    } else {
      setDrawer(!drawer);
    }
  };

  return (
    <>
      <ReusableDrawer
        placement={"right"}
        className={"rounded-t-lg"}
        width={"80%"}
        open={drawer}
        onClose={() => setDrawer(!drawer)}
      >
        <div>Test</div>
      </ReusableDrawer>
      <ReusableCard
        title={viewProfile ? "Profile" : "Members"}
        extra={
          viewProfile && (
            <Button
              type="text"
              icon={<ArrowLeftOutlined />}
              onClick={() => setViewProfile(!viewProfile)}
            >
              Back
            </Button>
          )
        }
      >
        {viewProfile ? (
          <Profile />
        ) : (
          <MemberTable data={data?.data} openDrawer={openDrawer} edit={edit} />
        )}
      </ReusableCard>
    </>
  );
};

export default Member;
