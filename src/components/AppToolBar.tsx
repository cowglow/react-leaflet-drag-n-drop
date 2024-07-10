import {AppBar, IconButton, Toolbar} from "@mui/material";
import type {PropsWithChildren} from "react";
import MenuIcon from '@mui/icons-material/Menu';

interface AppToolBarProps extends PropsWithChildren {
    toggleDrawer: () => void
}
export default function AppToolBar({children, toggleDrawer}: AppToolBarProps) {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color="inherit" edge="start" sx={{marginRight: 2}} onClick={toggleDrawer}>
                    <MenuIcon/>
                </IconButton>
                LEAFLET-DRAG-N-DROP
            </Toolbar>
            {children}
        </AppBar>
    )
}
