import { notification } from 'antd';

export default ({ text, type = 'info', title, duration = 2.5 }) =>
    notification[type]({
        message: title,
        description: text,
        duration,
    });