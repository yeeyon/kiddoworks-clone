"use client";

import { useEffect, useState } from "react";
import { timeAgo } from "@/lib/time";

export function ClientTimestamp({ date }: { date: string }) {
  const [relative, setRelative] = useState<string>(formatDate(date));

  useEffect(() => {
    setRelative(timeAgo(date));
  }, [date]);

  return <>{relative}</>;
}

function formatDate(date: string) {
  const d = new Date(date);
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}
