import React from "react";

import { IWrapper } from "./props/wrapper.props";
import { Button } from "./button.component";

export const Wrapper: React.FC<IWrapper> = (props) => {
  const { title, logo, cta } = props;

  return (
    <div className="wrapper">
      <img src={logo.src} alt="logo" className={logo.className} />
      <div className="wrapper-block">
        <h1 className={title.className}>{title.content}</h1>
        <Button
          text={cta.label}
          onClick={cta.onClick}
          className={cta.className}
        />
      </div>
    </div>
  );
};
