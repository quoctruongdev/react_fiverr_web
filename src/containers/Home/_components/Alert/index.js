import { message } from "antd";

const successNotice = (content, position) => {
  message.success({
    content,
    style: {
      marginTop: position,
      zIndex: 1500,
    },
  });
};

const errorNotice = (content, position) => {
  message.error({
    content,
    style: {
      marginTop: position,
    },
  });
};

const warningNotice = (content, position) => {
  message.warning({
    content,
    style: {
      marginTop: position,
    },
  });
};

export { successNotice, errorNotice, warningNotice };
