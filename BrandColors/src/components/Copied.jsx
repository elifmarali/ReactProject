import React, { useContext, useEffect, useState } from "react";
import MainContext from "../context/MainContext";
import { getContrastYIQ } from "../helpers";
import { IoMdClose } from "react-icons/io";
function Copied() {
  const { copied, open, setOpen } = useContext(MainContext);
  useEffect(() => {
    open &&
      setTimeout(() => {
        setOpen(false);
      }, 2000);
  }, [open]);
  return (
    <>
      {open ? (
        <div
          className="copied"
          style={{
            "--copied-bg-color": `#${copied.colorText}`,
            "--copied-text-color": `${getContrastYIQ(copied.colorText)}`,
          }}
        >
          <div className="topSection">
            <h3>Copied</h3>
            <IoMdClose
              className="copyCloseButton"
              onClick={() => {
                setOpen(false);
              }}
            />
          </div>
          <div className="copiedText"> {copied.colorText}</div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Copied;
