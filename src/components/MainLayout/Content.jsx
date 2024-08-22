import { Layout } from "antd";
import { Suspense } from "react";
import PageLoader from "../PageLoader";

const { Content } = Layout;

const Contents = () => {
  return (
    <Content className="px-4 py-5 w-4/5">
      <Suspense fallback={<PageLoader />}></Suspense>
    </Content>
  );
};

export default Contents;
