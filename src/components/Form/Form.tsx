import { Button, Form } from 'antd';
import Select from '../Select/Select';
import {
  accessibilityOptions,
  activityTypes,
  participantsOptions,
  priceOptions,
} from 'src/constants/formData';
import { useActivityStore } from 'src/constants/store';

type FormValues = {
  type: string;
  accessibility: string;
  participants: string;
  price: string;
};

const FormComponent = () => {
  const [form] = Form.useForm<FormValues>();
  const { activity, setActivity } = useActivityStore(state => state);

  const onFinish = async (values: FormValues) => {
    const { type, accessibility, participants, price } = values;
    let url = `http://www.boredapi.com/api/activity?type=${type}`;

    if (accessibility) url += `&accessibility=${accessibility}`;
    if (participants) url += `&participants=${participants}`;
    if (price) url += `&price=${price}`;

    const res = await fetch(url);
    const data = await res.json();
    setActivity(data);
  };

  const onReset = () => form.resetFields();

  const onGetRandomActivity = async () => {
    const res = await fetch('http://www.boredapi.com/api/activity/');
    const data = await res.json();

    form.setFieldsValue({
      type: data.type,
      accessibility: data.accessibility,
      participants: data.participants,
      price: data.price,
    });

    setActivity(data);
  };

  console.log(activity);

  return (
    <Form
      layout='inline'
      form={form}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Select
        name='type'
        label='Type of Activity'
        options={activityTypes}
        required
      />
      <Select
        name='accessibility'
        label='Accessibility'
        options={accessibilityOptions}
      />
      <Select
        name='participants'
        label='Number of Participants'
        options={participantsOptions}
      />
      <Select name='price' label='Price' options={priceOptions} />
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='button' onClick={onReset}>
          Reset
        </Button>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='button' onClick={onGetRandomActivity}>
          Get Random Activity
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
