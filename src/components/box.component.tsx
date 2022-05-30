/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { IBox } from "./props/box.props";

export const Box: React.FC<IBox> = (props) => {
  const { className, imgSrc, imgAlt, text, hash, animatable, children } = props;

  const [dispatchAnimation, setDispatchAnimation] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    if (!dispatchAnimation && animatable) {
      setDispatchAnimation(true);
    }

    return () => setDispatchAnimation(false);
  }, [imgSrc]);

  return (
    <div className={`box ${className || ""}`}>
      {children}
      <img
        className={
          dispatchAnimation
            ? animatable === "flip"
              ? "image-anim--flip"
              : "image-anim--fade"
            : ""
        }
        src={imgSrc}
        alt={imgAlt}
        onAnimationEnd={() => setDispatchAnimation(false)}
      />
      {text && <div className={text.className}>{text.content}</div>}
      {hash && (
        <div className="box-hash--container">
          {hash.hashes.map(
            (currentHash, i) =>
              currentHash && (
                <span className={hash.className} key={i}>
                  {`#${currentHash}`}
                </span>
              )
          )}
        </div>
      )}
    </div>
  );
};
