import { FunctionComponent } from "react";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent ${className}`}>
      <div className="helmet-image-wrapper">
        <div className="helmet-image">
          <div className="wrapper-motorbike-helmet-1">
            <img
              className="motorbike-helmet-1-icon"
              alt=""
              src="/motorbikehelmet-1@2x.png"
            />
          </div>
          <img
            className="motorbike-helmet-2-icon"
            loading="lazy"
            alt=""
            src="/motorbikehelmet-1@2x.png"
          />
        </div>
      </div>
      <b className="unbounded">
        <p className="unbounded1">unbounded</p>
      </b>
    </div>
  );
};

export default FrameComponent1;
