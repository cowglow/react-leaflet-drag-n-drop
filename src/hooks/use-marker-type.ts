import {makeVar, useReactiveVar} from "@apollo/client";
import {MarkerTypeKey} from "../config/custom-markers.tsx";

export const markerTypeVar = makeVar<MarkerTypeKey>("AddLocationIcon")
export default function useMarkerType() {
    const markerType = useReactiveVar(markerTypeVar)
    const setMarkerType = (newMarkerType: MarkerTypeKey) => markerTypeVar(newMarkerType)

    return {markerType, setMarkerType}
}
