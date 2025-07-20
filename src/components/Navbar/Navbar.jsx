import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className="container px-4 py-2">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="font-bold text-3xl">
              Start Framework
            </Link>
          </Typography>
          <div className="flex gap-5 font-bold text-xl">
            <Link to="about">About</Link>
            <Link to="portfolio">Portfolio</Link>
            <Link to="contact">Contact</Link>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
