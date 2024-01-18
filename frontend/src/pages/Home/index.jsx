import { useUser } from "../../hooks/useUser";
import AuthPage from "../../components/AuthPage";
import ChatsPage from "../../components/ChatsPage";

export const Home = () => {
  const { user, setUser } = useUser();

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
};
