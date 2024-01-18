import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from "react-chat-engine-advanced";
import CountdownTimer from "./CountdownTimer";

// eslint-disable-next-line react/prop-types
const ChatsPage = ({ user }) => {
  const chatProps = useMultiChatLogic(
    "8fa69855-22ae-44e8-8a58-252e4a1e30fb",
    // eslint-disable-next-line react/prop-types
    user.username.username,
    // eslint-disable-next-line react/prop-types
    user.secret
  );
  return (
    <div style={{ height: "calc(100vh - 2rem)" }}>
      <CountdownTimer />

      <MultiChatSocket {...chatProps} />
      <MultiChatWindow
        {...chatProps}
        timezoneOffset={-3}
        style={{ height: "100%" }}
      />
    </div>
  );
};
export default ChatsPage;
