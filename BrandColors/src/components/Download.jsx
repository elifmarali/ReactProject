import React, { useContext, useEffect, useState } from "react";
import MainContext from "../context/MainContext";
import { FaLink, FaDownload } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import useDownloader from "react-use-downloader";
import { useNavigate, useParams } from "react-router-dom";

function Download() {
  const navigate = useNavigate();
  const [downloadUrl, setDownloadUrl] = useState("");
  const [downloadName, setDownloadName] = useState("");
  const { size, elapsed, percentage, download, error, isInProgress } =
    useDownloader();
  const { selectedBrands, setSelectedBrands, brands } = useContext(MainContext);

  useEffect(() => {
    if (selectedBrands.length > 0) {
      let output = "";
      selectedBrands.map((slug, index) => {
        let brand = brands?.find((brand, index) => brand.slug === slug);
        brand?.colors.map(
          (color, key) => (output += `--${slug}-${key}: #${color};\n`)
        );
      });
      const blob = new Blob([output]);
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
      return () => {
        URL.revokeObjectURL(url);
        setDownloadUrl("");
      };
    }
  }, [selectedBrands]);
  const getLink = () => {
    navigate(`/collections/${selectedBrands.map((slug) => slug)}`);
  };
  return (
    <div className="download">
      <FaLink className=" downButton downLinkButton" onClick={getLink} />
      <a download="test.css" href={downloadUrl}>
        <FaDownload
          className=" downButton downDownloadButton"
          onClick={() => download(downloadUrl, downloadName)}
        />
      </a>
      <IoMdClose
        onClick={() => setSelectedBrands([])}
        className=" downButton downRemoveButton"
      />
      <div className="downloadText">
        {selectedBrands.length} brands collected
      </div>
    </div>
  );
}

export default Download;
