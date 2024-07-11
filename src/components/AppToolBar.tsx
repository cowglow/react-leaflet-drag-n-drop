import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import type {PropsWithChildren} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import useMarkerType from "../hooks/use-marker-type.ts";

interface AppToolBarProps extends PropsWithChildren {
    toggleDrawer: () => void
}

export default function AppToolBar({children, toggleDrawer}: AppToolBarProps) {
    const [markerType] = useMarkerType()

    return (
        <AppBar position="sticky">
            <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
                <Box>
                    <IconButton color="inherit" edge="start" sx={{marginRight: 2}} onClick={toggleDrawer}>
                        <MenuIcon/>
                    </IconButton>
                    LEAFLET-DRAG-N-DROP</Box>
                <Box>{JSON.stringify({markerType}, null, 2)}</Box>
            </Toolbar>
            {children}
        </AppBar>
    )
}
