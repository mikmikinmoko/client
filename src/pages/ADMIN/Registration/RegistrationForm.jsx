import { Button, DatePicker, Form, Input, message, Select } from "antd";
import brgy from "../../../assets/resources/json/refbrgy.json";
import city from "../../../assets/resources/json/refcitymun.json";
import province from "../../../assets/resources/json/refprovince.json";
import region from "../../../assets/resources/json/refregion.json";
import { useRegistration } from "../../../services/admin/request/membership";
import dayjs from "dayjs";

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const reg = Form.useWatch("regionId", form);
  const prov = Form.useWatch("provinceId", form);
  const cit = Form.useWatch("cityId", form);

  const register = useRegistration();

  const onFinish = (val) => {
    const { birthDate, ...newVal } = val;
    register.mutate(
      {
        ...newVal,
        birthDate: dayjs(birthDate).format("YYYY-MM-DD"),
      },
      {
        onSuccess: (data) => {
          message.success(data.data.message);
          form.resetFields("");
        },
        onError: (err) => {
          message.warning(err.response.data.message);
        },
      }
    );
  };

  return (
    <Form layout="vertical" form={form} onFinish={onFinish}>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-5">
        <div>
          <div className="text-[16px] text-[#878585] font-semibold py-2 border-b-2 rounded-md border-transparent shadow-md">
            Personal Information
          </div>
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                message: "Please input your First Name",
              },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <Form.Item label="Middle Name" name="middleName">
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                message: "Please input your Last Name",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile Number"
            name="mobileNumber"
            rules={[
              {
                required: true,
                message: "Please input your Mobile Number",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Birth Date"
            name="birthDate"
            rules={[
              {
                required: true,
                message: "Please input your Birth Date",
              },
            ]}
          >
            <DatePicker
              className="w-full cursor-pointer"
              format={"YYYY-MM-DD"}
            />
          </Form.Item>
          <Form.Item
            label="Sex"
            name="sex"
            rules={[
              {
                required: true,
                message: "Please input your Sex",
              },
            ]}
          >
            <Select>
              <Select.Option value="0">Male</Select.Option>
              <Select.Option value="1">Female</Select.Option>
            </Select>
          </Form.Item>
        </div>
        <div>
          <div className="text-[16px] text-[#878585] font-semibold py-2 border-b-2 rounded-md border-transparent shadow-md">
            Address
          </div>
          <Form.Item
            label="Region"
            name="regionId"
            rules={[
              {
                required: true,
                message: "Please input your Region",
              },
            ]}
          >
            <Select>
              {region.map((r) => (
                <Select.Option key={r.id} value={r.regCode}>
                  {r.regDesc}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Province"
            name="provinceId"
            rules={[
              {
                required: true,
                message: "Please input your Province",
              },
            ]}
          >
            <Select>
              {province
                .filter((p) => p.regCode === reg)
                .map((p) => (
                  <Select.Option key={p.id} value={p.provCode}>
                    {p.provDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="City"
            name="cityId"
            rules={[
              {
                required: true,
                message: "Please input your City",
              },
            ]}
          >
            <Select>
              {city
                .filter((c) => c.provCode === prov)
                .map((c) => (
                  <Select.Option key={c.id} value={c.citymunCode}>
                    {c.citymunDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Barangay"
            name="brgyId"
            rules={[
              {
                required: true,
                message: "Please input your Barangay",
              },
            ]}
          >
            <Select>
              {brgy
                .filter((b) => b.citymunCode === cit)
                .map((b) => (
                  <Select.Option key={b.id} value={b.brgyCode}>
                    {b.brgyDesc}
                  </Select.Option>
                ))}
            </Select>
          </Form.Item>
        </div>
        <div>
          <div className="text-[16px] text-[#878585] font-semibold py-2 border-b-2 rounded-md border-transparent shadow-md">
            Credentials
          </div>
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your desired Username",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your desired password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* <Form.Item
            label="Confirm Password"
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your desired password",
              },
            ]}
          >
            <Input.Password />
          </Form.Item> */}
        </div>
      </div>
      <div className="flex justify-end">
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            // onClick={() => form.submit()}
          >
            Submit
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default RegistrationForm;
