import "../styles/globals.css";
import "quill/dist/quill.snow.css";
import Topbar from "../component/topbar";
import Footer from "../component/footer";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../src/Context/authContext";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Topbar />
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
      {router.pathname != "/admin/post" ? <Footer /> : null}
    </>
  );
}

export default MyApp;
