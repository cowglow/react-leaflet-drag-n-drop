import {cloneElement} from "react";
import {Drawer, DrawerProps, IconButton, List, ListItem, styled} from "@mui/material";
import useMarkerType from "../hooks/use-marker-type.ts";
import {CustomMarkers, MarkerTypeKey} from "../config/custom-markers.tsx";


const StyledDrawer = styled(Drawer)`
    & div {
        margin-top: 64px;
        bottom: 0;
    }
`

export default function SideBar({open}: DrawerProps) {
    const {markerType} = useMarkerType()
    const {setMarkerType} = useMarkerType()
    return (
        <StyledDrawer variant="persistent" open={open}>
            <List dense disablePadding>
                {Object.keys(CustomMarkers).map((key, index) => (
                    <ListItem key={`marker-${index}-${key}`}>
                        <IconButton draggable onDragStart={() => setMarkerType(key as MarkerTypeKey)}>
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
