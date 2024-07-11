import L from "leaflet";
import {makeVar, useReactiveVar} from "@apollo/client";
import {CustomMarkers} from "../config/custom-markers.tsx";

export type MarkerType = keyof typeof CustomMarkers
export type MarkerObject = {
    type: MarkerType,
    position: L.LatLng
}
export const markersVar = makeVar<MarkerObject[]>([])
export default function useCustomMarkers() {
    const markers = useReactiveVar(markersVar)
    const setMarker = (newMarkers: MarkerObject[]) => markersVar(newMarkers)

    return [markers, setMarker]
}
