import React, { Fragment, FunctionComponent, ReactNode } from "react";
import { GovBanner } from "@trussworks/react-uswds";

interface Props {
  children: ReactNode;
}

export const Header: FunctionComponent<Props> = ({ children }: Props) => {
  return (
    <Fragment>
      <GovBanner
        language="english"
        tld=".gov"
        aria-label="Official government website"
      />
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
        <div>{children}</div>
      </div>
    </Fragment>
  );
};
