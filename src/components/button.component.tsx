import React from "react";

import { IButton } from "./props/button.props";

export const Button: React.FC<IButton> = (props) => {
  const { text, className, onClick } = props;

  return (
    <div onClick={onClick} className={className}>
      {text}
    </div>
  );
};
