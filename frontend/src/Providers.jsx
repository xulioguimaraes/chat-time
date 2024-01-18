import { UserProvider } from "./context/UserContext";
import { ToastContainer } from "react-toastify";
// eslint-disable-next-line react/prop-types
export const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {children}
    </UserProvider>
  );
};
