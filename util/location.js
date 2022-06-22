import { GOOGLE_API_KEY } from "@env";
const mapZoomLevel = "14";
const mapSize = "400x200";
const mapType = "roadmap";

export function getMapPreview(lat, lng) {
  const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${mapZoomLevel}&size=${mapSize}&maptype=${mapType}&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${GOOGLE_API_KEY}`;
  return imagePreviewUrl;
}
