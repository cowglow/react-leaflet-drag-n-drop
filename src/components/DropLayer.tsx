import L from "leaflet";
import {Marker, Popup, useMapEvents} from "react-leaflet";
import {cloneElement, useEffect} from "react";
import {renderToString} from "react-dom/server";
import {CustomMarkers} from "../config/custom-markers.tsx";
import useCustomMarkers, {MarkerObject} from "../hooks/use-custom-markers.ts";
import useMarkerType from "../hooks/use-marker-type.ts";
import "../assets/leaflet-custom-style.css"

export default function DropLayer() {
    const {markerType} = useMarkerType()
    const {markers, setMarkers} = useCustomMarkers()
    const map = useMapEvents({})

    useEffect(() => {
        const handleDrop = (event: DragEvent) => {
            event.preventDefault();
            const rect = map.getContainer().getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const latLng = map.containerPointToLatLng([x, y]);
            const newMarker: MarkerObject = {type: markerType, position: latLng}
            setMarkers([...markers, newMarker]);
        };

        const mapContainer = map.getContainer();
        mapContainer.addEventListener('dragover', (event) => event.preventDefault());
        mapContainer.addEventListener('drop', handleDrop);

        return () => {
            mapContainer.removeEventListener('dragover', (event) => event.preventDefault());
            mapContainer.removeEventListener('drop', handleDrop);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [map, markerType]);

    if (!map) return null

    const CUSTOM_MARKER_SIZE = 50
    return [...markers].map(({type, position}, index) => {
            const customIcon = L.divIcon({
                className: "custom-icon-override",
                html: renderToString(cloneElement(CustomMarkers[type])),
                iconSize: new L.Point(CUSTOM_MARKER_SIZE, CUSTOM_MARKER_SIZE),
                iconAnchor: [CUSTOM_MARKER_SIZE / 2, CUSTOM_MARKER_SIZE]
            })
            return (
                <Marker key={`marker-${index}}`} position={position} icon={customIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br/> Easily customizable.
                    </Popup>
                </Marker>
            )
        }
    )

}
