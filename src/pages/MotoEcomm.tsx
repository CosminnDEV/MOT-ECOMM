import { FunctionComponent } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./MotoEcomm.css";

const MotoEcomm: FunctionComponent = () => {
  return (
    <div className="moto-ecomm">
      <header className="contact-icons">
        <div className="nav-bar">
          <a className="ub">ub</a>
          <div className="navigation-links">
            <div className="about-us-link">
              <a className="products">Products</a>
              <a className="about-us">about us</a>
            </div>
          </div>
          <a className="cart0">cart(0)</a>
        </div>
      </header>
      <section className="content">
        <FrameComponent1 />
        <FrameComponent />
      </section>
    </div>
  );
};

export default MotoEcomm;
