import { IconButton, Box, useTheme } from "@mui/material";
import {
  Brightness7 as LightIcon,
  Brightness4 as DarkIcon,
} from "@mui/icons-material";
import { ColorContext } from "../../contexts/ColorContext";
import { useContext } from "react";
export const SwitchModeButton = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorContext);
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode==="dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
    </Box>
  );
};
