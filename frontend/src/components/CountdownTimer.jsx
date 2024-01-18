import { useEffect, useState } from "react";
import { useUser } from "../hooks/useUser";
import dayjs from "dayjs";
import { api } from "../services/api";
import { toast } from "react-toastify";

const getMinutes = (created) => {
  const dayCurrency = dayjs();
  const userCreatedDate = dayjs(created);

  const diff = dayCurrency.diff(userCreatedDate);

  const minutos = Math.floor(diff / 60000);

  if (minutos === -1) {
    return 9;
  }

  return 9 - minutos;
};

const getSeconds = (created) => {
  const dayCurrency = dayjs();
  const userCreatedDate = dayjs(created);

  const diff = dayCurrency.diff(userCreatedDate);

  const segundos = Math.floor((diff % 60000) / 1000);
  if (segundos === -1) {
    return 59;
  }
  return 59 - segundos;
};
const CountdownTimer = () => {
  const { user, setUser } = useUser();
  const [minutes, setMinutes] = useState(() =>
    getMinutes(user?.username?.created)
  );
  const [seconds, setSeconds] = useState(() =>
    getSeconds(user?.username?.created)
  );

  const userDelete = async () => {
    try {
      const response = await api.delete(`/delete/${user.username.id}`);
      toast(response.data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const timer = setInterval(async () => {
      if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        await userDelete();
        setUser(undefined);
      } else {
        if (seconds === 0) {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        } else {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [minutes, seconds]);

  return (
    <div className="content-time">
      <p className="text-time">
        This account will be deleted in{" "}
        {`${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
          2,
          "0"
        )}`}
      </p>
    </div>
  );
};

export default CountdownTimer;
