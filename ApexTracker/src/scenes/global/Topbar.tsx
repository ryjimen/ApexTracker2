
import { useTheme } from "@mui/material/styles";
import { useContext } from "react"
import { ColorModeContext, tokens } from "../../theme"

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase"
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

function Topbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

    return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: colors.primary[400],
        // padding
        p: 2,
        elevation: 9
      }}
    >
      <h2 style={{ margin: 0 }}>Tracker</h2>
      {/* Search bar */}
      <Box
        sx={{
          border: 1,
          display: "flex",
          alignItems: "center",
          borderRadius: "3px",
          borderColor: colors.primary[200],
          //Padding left and right
        }}
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx = {{p: 1}}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      {/* Toggle button */}
      <Box>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
      </Box>
    </Paper>
  );
}

export default Topbar

