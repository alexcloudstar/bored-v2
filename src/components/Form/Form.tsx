import { Button, Form } from 'antd';
import Select from '../Select/Select';
import {
  accessibilityOptions,
  activityTypes,
  participantsOptions,
  priceOptions,
} from 'src/constants/formData';
import { useActivityStore } from 'src/constants/store';
import useWindowDimensions from 'src/hooks/useWindowDimensions';

type FormValues = {
  type: string;
  accessibility: string;
  participants: string;
  price: string;
};

const FormComponent = () => {
  const [form] = Form.useForm<FormValues>();
  const { setActivity, setError } = useActivityStore(state => state);
  const { width } = useWindowDimensions();

  console.log(width);

  const onFinish = async (values: FormValues) => {
    const { type, accessibility, participants, price } = values;
    let url = `http://www.boredapi.com/api/activity?type=${type}`;

    if (accessibility) url += `&accessibility=${accessibility}`;
    if (participants) url += `&participants=${participants}`;
    if (price) url += `&price=${price}`;

    const res = await fetch(url);

    if (!res.ok) {
      setActivity(null);
      setError('Something went wrong. Please try again.');
      return;
    }

    const data = await res.json();

    if (data.error) {
      return setError(data.error);
    }

    setActivity(data);
  };

  const onReset = () => {
    form.resetFields();
    setActivity(null);
    setError(null);
  };

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

  return (
    <Form
      layout={width > 1440 ? 'inline' : 'horizontal'}
      form={form}
      onFinish={onFinish}
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
