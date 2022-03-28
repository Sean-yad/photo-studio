import * as React from "react";
import Button from "@mui/material/Button";
import "./component.css";


export default function DisableElevation() {
  return (
    <Button variant="contained" disableElevation>
      Disable elevation
    </Button>
  );
}
