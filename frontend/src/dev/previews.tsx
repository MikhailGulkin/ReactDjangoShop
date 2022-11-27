import React from "react";
import { ComponentPreview, Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";
import { Login } from "@/pages/Auth/Login";

const ComponentPreviews = () => {
  return (
    <Previews palette={<PaletteTree />}>
      <ComponentPreview path="/Login">
        <Login />
      </ComponentPreview>
    </Previews>
  );
};

export default ComponentPreviews;
