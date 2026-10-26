"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import { INITIAL_VIEW, TILE_LAYER } from "@/config/map";

// Imports Leaflet directly, so it must only be loaded through MapLoader (ssr: false).
export default function SeaRadarMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const map = L.map(container).setView(
      [INITIAL_VIEW.center.lat, INITIAL_VIEW.center.lon],
      INITIAL_VIEW.zoom,
    );

    L.tileLayer(TILE_LAYER.url, {
      attribution: TILE_LAYER.attribution,
      maxZoom: TILE_LAYER.maxZoom,
    }).addTo(map);

    // Leaflet tracks window resize itself; this also covers container-only size changes.
    const resizeObserver = new ResizeObserver(() => map.invalidateSize());
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      map.remove();
    };
  }, []);

  return <div ref={containerRef} className="map" />;
}
