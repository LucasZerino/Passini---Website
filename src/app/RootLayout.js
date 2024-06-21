import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/js/bootstrap";
import "../styles/index.scss";
import ScrollToTop from "@/components/common/ScrollTop";

export default function RootLayout({ children }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      {children}
      <ScrollToTop />
    </div>
  );
}
