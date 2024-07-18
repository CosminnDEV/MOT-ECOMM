import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <footer className={`benefits-list-wrapper ${className}`}>
      <div className="benefits-list">
        <div className="beneficii">
          <button className="benefit-details">
            <div className="stylish-design">stylish design</div>
          </button>
          <div className="benefit-details1">
            <div className="superior-safety">superior safety</div>
          </div>
          <div className="benefit-details2">
            <div className="lightweight">lightweight</div>
          </div>
        </div>
        <button className="buton">
          <div className="see-all-products">See all products</div>
        </button>
      </div>
    </footer>
  );
};

export default FrameComponent;
