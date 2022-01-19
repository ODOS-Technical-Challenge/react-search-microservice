import React, { FunctionComponent, ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

export const SubHeader: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <div
      style={{
        height: "4rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        boxShadow:
          "0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08)",
      }}
    >
      <div style={{ margin: "16px" }}>logo</div>
      {children}
    </div>
  );
};
