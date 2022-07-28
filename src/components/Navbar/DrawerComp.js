import React, { useState } from "react";
import { Drawer, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const DrawerComp = () => {
  const [openDraw, setOpenDraw] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={openDraw} onClose={() => setOpenDraw(false)}>
        <div className="nav-list">
          <a href="#ourservice">Our Services</a>
          <a href="#whyus">Why Us</a>
          <a href="testimonial">Testimonial</a>
          <a href="FAQ">FAQ</a>
        </div>
      </Drawer>
      <IconButton onClick={() => setOpenDraw(!openDraw)}>
        <MenuIcon />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
