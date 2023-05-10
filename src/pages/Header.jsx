import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { ReactComponent as Logo } from "../logo.svg";

function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{ backgroundColor: "#C8102E" }}
    >
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {/* empty space */}
        </Typography>
        <Box marginY={"2rem"}>
          <Typography color="#fff" fontWeight={700}> Optimal</Typography>
          <Logo height="2rem"></Logo>
        </Box>

        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          {/* empty space */}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
