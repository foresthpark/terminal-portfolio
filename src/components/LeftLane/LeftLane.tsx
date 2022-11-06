import React, { useEffect, useState } from "react";

export default function LeftLane() {
  const [hostName, setHostName] = useState<string | undefined>();

  useEffect(() => {
    if (typeof window !== undefined) {
      setHostName(window.location.hostname);
    }
  }, []);

  return (
    <div className="flex flex-row items-center text-center">
      <span className="text-term-text-primary">(base) </span>
      <span className="text-term-white">-</span>
      <span className="text-term-text-secondary">{hostName} </span>
      <span className="text-term-white">-</span>
      <span className="text-term-text-success-primary">git:(</span>
      <span className="text-term-text-primary">master</span>
      <span className="text-term-text-success-primary">)</span>
    </div>
  );
}
