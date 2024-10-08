import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import LoadingBar from "react-top-loading-bar";
import { Provider } from "react-redux";
import store from "@/redux/store";
import { loadCart } from "@/redux/cartSlice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import React from "react";

function App({ Component, pageProps }) {
  const [user, setUser] = useState({ value: null });
  const [key, setKey] = useState(0);
  const [login, setLogin] = useState(false);
  const router = useRouter();
  const logOut = () => {
    localStorage.removeItem("user"), setLogin(false);
    setKey(Math.random()), setUser({ value: null });
  };
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });
    store.dispatch(loadCart());
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ value: token });
      setKey(Math.random());
    }
  }, [router.query]);

  return (
    <>
      <LoadingBar
        color="black"
        progress={progress}
        waitingTime={400}
        onLoaderFinished={() => setProgress(0)}
      />
      <Provider store={store}>
        <Navbar logOut={logOut} login={login} setLogin={setLogin} user={user} />{" "}
        <Component {...pageProps} login={login} setLogin={setLogin} />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
