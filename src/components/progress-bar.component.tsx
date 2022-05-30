import React from "react";

import { IProgressBar } from "./props/progress-bar.props";

export const ProgressBar: React.FC<IProgressBar> = (props) => {
  const { loading } = props;

  return loading ? (
    <div className="progressbar-container">
      <div className="progressbar-bar">
        <div className="progressbar-bar--value"></div>
      </div>
    </div>
  ) : null;
};
