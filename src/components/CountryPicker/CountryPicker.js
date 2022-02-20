import React from "react";
import { NativeSelect, FormControl } from "@mui/material";
const Countrypicker = () => {
  return (
    <div>
      <FormControl>
        <NativeSelect>
          <option value="global">Global</option>
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default Countrypicker;
