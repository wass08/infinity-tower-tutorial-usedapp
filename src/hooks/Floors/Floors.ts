import { useLogs } from "@usedapp/core";
import { useMemo } from "react";

import { contract } from "..";
import { HexToStrColor } from "../../utils/ColorUtils";

export type FloorItem = {
  ownerName: string;
  message: string;
  link: string;
  color: string;
  windowsTint: string;
};

export const useFloors = () => {
  const logs = useLogs({
    contract,
    event: "NewFloor",
    args: [null],
  });

  const floors = useMemo(() => {
    return (
      logs?.value?.map((log) => {
        const floor: FloorItem = {
          ownerName: log.data.ownerName,
          message: log.data.message,
          link: log.data.link,
          color: HexToStrColor(log.data.color._hex),
          windowsTint: HexToStrColor(log.data.windowsTint._hex),
        };
        return floor;
      }) || []
    );
  }, [logs?.value]);

  return {
    floors,
  };
};
