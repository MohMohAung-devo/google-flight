import React, { useState } from "react";
import { Box, Drawer, AppBar, Toolbar, useTheme } from "@mui/material";
import Header from "./Header";
import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";

const drawerWidth = 300;

const Layout: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box
      sx={{ display: "flex", minHeight: "100vh", backgroundColor: "#f8f9fa" }}
    >
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "white",
          color: "text.primary",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <Header handleDrawerToggle={handleDrawerToggle} />
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 },
          position: "fixed",
        }}
      >
        <Drawer
          open={mobileOpen ? mobileOpen : false}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
            },
          }}
        >
          <Navbar />
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // p: {
          //   xs: 0,
          //   lg: 3,
          // },
          // width: { sm: `calc(100% - ${drawerWidth}px)` },
          px: 2,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <div style={{ marginTop: "64px" }}>
          <Outlet />
        </div>
      </Box>
    </Box>
  );
};

export default Layout;
