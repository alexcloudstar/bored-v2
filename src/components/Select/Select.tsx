import { Form, Select } from 'antd';
import { FC, Fragment } from 'react';
import { FormOptionsType } from 'src/constants/formData';

const { Option } = Select;

type SelectComponentProps = {
  name: string;
  label: string;
  options: FormOptionsType[];
  required?: boolean;
};

const SelectComponent: FC<SelectComponentProps> = ({
  name,
  label,
  options,
  required,
}) => {
  return (
    <Form.Item name={name} label={label} rules={[{ required }]}>
      <Select placeholder='Select a option' allowClear>
        {options.map(({ id, name, value }) => (
          <Fragment key={id}>
            <Option value={name}>{value}</Option>
          </Fragment>
        ))}
      </Select>
    </Form.Item>
  );
};

export default SelectComponent;
