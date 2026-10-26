// Map configuration: the single place for region, initial view and tile layer.

export type LatLon = { lat: number; lon: number };

// Strait of Dover: southwest and northeast corners.
export const REGION = {
  southWest: { lat: 50.75, lon: 0.95 },
  northEast: { lat: 51.25, lon: 1.95 },
} as const satisfies { southWest: LatLon; northEast: LatLon };

export const INITIAL_VIEW = {
  center: { lat: 51.0, lon: 1.45 },
  zoom: 10,
} as const satisfies { center: LatLon; zoom: number };

export const TILE_LAYER = {
  url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 19,
} as const;
