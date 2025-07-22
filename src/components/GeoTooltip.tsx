"use client";
import { Tooltip } from "pol-ui";
import { useMemo } from "react";

export const GeoTooltip = () => {
  return useMemo(
    () => (
      <Tooltip label={<div>JP</div>}>
        <span className="cursor-help">Osaka, Japan.</span>
      </Tooltip>
    ),
    [],
  );
};
