import axios from "axios";
import { toast } from "react-toastify";

import icon from "../assets/timechat.png";
const AuthPage = (props) => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    if (!value) {
      return toast.error(
        "It is necessary to enter a value with more than 3 characters"
      );
    }
    try {
      const response = await axios.post("http://localhost:4000/authenticate", {
        username: value,
      });

      // eslint-disable-next-line react/prop-types
      props.onAuth({ username: response.data, secret: value });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="content-header-home">
          <img src={icon} alt="" />
          <div className="form-header">Chat Time</div>
        </div>
        <div className="form-title">Welcome 👋</div>

        <div className="form-subtitle">
          Set a username to get started. <br /> This application is limited to
          only 10 users at a time
        </div>
        <div className="form-subtitle"></div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;
