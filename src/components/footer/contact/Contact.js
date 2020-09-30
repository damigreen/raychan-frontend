import React from 'react'
import { Form, Input, Button } from 'antd';
import '../footer.scss'

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 19,
    offset: 2,
  },
};
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};



function Contact() {
  const onFinish = (values) => {
    console.log(values);
  };
  
  /* 
  TODO
  * Reduce form margins
  */
  return(
    <div id="contact-form">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item
          className="form-input"
          name='name'
          // label="Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Name" />
        </Form.Item>

        <Form.Item
          className="form-input"
          name='email'
          // label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item className="form-input" name='subject'>
          <Input placeholder="Subject" />
        </Form.Item>
        <Form.Item className="form-input" name='message'>
          <Input.TextArea placeholder="Message" />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol  }}>
          <div id="btn">
            <Button className="btn btn-submit" type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  )
}

export default Contact
