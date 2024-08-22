import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const PageLoader = () => {
  return (
    <Spin
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 48,
          }}
          spin
        />
      }
    />
  );
};

export default PageLoader;
