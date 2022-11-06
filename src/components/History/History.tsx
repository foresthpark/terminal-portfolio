import React from "react";
import LeftLane from "../LeftLane/LeftLane";
import { HistoryState } from "./History.jotai";

interface HistoryProps {
  histories: HistoryState[];
}

export default function History({ histories }: HistoryProps) {
  return (
    <div>
      {histories.map((history) => (
        <>
          <div className="flex flex-row space-x-2">
            <div className="flex-shrink">
              <LeftLane />
            </div>

            <div className="flex-grow text-term-green">{history.command}</div>
          </div>
          <div
            key={history.id}
            className="mb-2 whitespace-pre-wrap text-term-yellow"
            style={{ lineHeight: "normal" }}
            dangerouslySetInnerHTML={{ __html: history.output }}
          />
        </>
      ))}
    </div>
  );
}
