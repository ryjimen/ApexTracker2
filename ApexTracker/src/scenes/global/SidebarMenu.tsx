import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { tokens } from "../../theme";

import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import SocialDistanceOutlinedIcon from "@mui/icons-material/SocialDistanceOutlined";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import MenuIcon from "@mui/icons-material/Menu";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import SettingsIcon from '@mui/icons-material/Settings';

const Item = ({ title, to, icon, selected, setSelected }: any) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      component={<Link to={to} />}
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography> {title} </Typography>
    </MenuItem>
  );
};

function SidebarMenu() {
  const [collapsed, setCollapsed] = useState(true);
  const [selected, setSelected] = useState("Home");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box
      sx={{
        backgroundColor: `${colors.primary[400]}`,
        height: "100vh",
        "& .ps-sidebar-container": {
          background: `${colors.primary[400]} !important`,
          borderRight: "none !important", // Ensure no border
        },
        "& .ps-menu-button": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .ps-menu-button:hover": {
          color: "#868dfb !important",
        },
        "& .ps-menu-button.ps-active": {
          color: "#6870fa !important",
        },
        "& .ps-menu-icon": {
          backgroundColor: "transparent !important",
        },
      }}
    >
      <Sidebar collapsed={collapsed} width="175px" style={{height: "100%"}}>
        <Box
          display="flex"
          justifyContent="center"
          p={collapsed ? "5px 5px" : "5px 15px"}
          sx={{
            border: "3px",
          }}
        >
          <IconButton
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed === false ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </Box>
        {!collapsed && (
          <Box mb="25px">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></Box>
          </Box>
        )}
        <Menu>
          <Item
            title="Home"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          ></Item>
          <Item
            title="Dashboard"
            to="/dashboard"
            icon={<QueryStatsIcon />}
            selected={selected}
            setSelected={setSelected}
          ></Item>
          <Item
            title="Compare"
            to="/compare"
            icon={<SocialDistanceOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          ></Item>
        </Menu>
        <Box
        sx={{
            position: "absolute",
            bottom: 0,
            width: "100%"
          }}>
          <Menu>
            <Item
              title="Settings"
              to="/settings"
              icon={<SettingsIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Box>
      </Sidebar>
    </Box>
  );
}

export default SidebarMenu;
// import { Box, IconButton, useTheme } from "@mui/material"
