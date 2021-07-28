import React, { useState } from "react";
import MainRender from "./Cases/MainRender";

const PreMadeHome = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [play, usePlay] = useState(false);
  const [subHead, setSubHead] = useState("");
  const [full, setFull] = useState(false);

  return (
    <MainRender
      play={play}
      usePlay={usePlay}
      user={user}
      subHead={subHead}
      setSubHead={setSubHead}
      full={full}
      setFull={setFull}
    />
  );
};

export default PreMadeHome;
