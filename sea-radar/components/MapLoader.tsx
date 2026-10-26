"use client";

import dynamic from "next/dynamic";

// Leaflet accesses `window` on import, so the map is never rendered on the server.
const SeaRadarMap = dynamic(() => import("./SeaRadarMap"), { ssr: false });

export default function MapLoader() {
  return <SeaRadarMap />;
}
