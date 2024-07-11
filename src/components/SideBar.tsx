import type React from "react";
import {cloneElement} from "react";
import {Drawer, type DrawerProps, IconButton, List, ListItem, styled} from "@mui/material";
import useMarkerType from "../hooks/use-marker-type.ts";
import {CustomMarkers} from "../config/custom-markers.tsx";
import {MarkerType} from "../hooks/use-custom-markers.ts";

const StyledDrawer = styled<DrawerProps>(Drawer)`
    & div {
        margin-top: 64px;
        bottom: 0;
    }
`

export default function SideBar(props: DrawerProps) {
    const [markerType] = useMarkerType()
    const [, setMarker] = useMarkerType()
    return (
        <StyledDrawer variant="persistent" {...props}>
            <List dense disablePadding>
                {Object.keys(CustomMarkers).map((key, index) => (
                    <ListItem key={`marker-${index}-${key}`}>
                        <IconButton draggable onDragStart={() => setMarker(key as MarkerType)}>
                            {cloneElement(CustomMarkers[key], {
                                color: key === markerType ? "primary" : "unset",
                                fontSize: "large"
                            })}
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </StyledDrawer>
    )
}
