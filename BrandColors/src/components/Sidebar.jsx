import React, { useState } from "react";
import Modal from "react-modal";
import { IoMdClose } from "react-icons/io";

function Sidebar() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };
  return (
    <>
      <aside className="sidebar">
        <h3 className="sidebarHead">
          Brand <b>Colors</b>
        </h3>
        <p className="sidebarDescription">
          The biggest collection of official brand color codes around. Curated
          by
          <b> @brandcolors </b> and friends.
        </p>
        <nav className="sidebarList">
          <ul>
            <li>
              <a href="#" onClick={toggleModal}>
                About BrandColors
              </a>
            </li>
            <li>
              <a href="#">Suggest a Brand </a>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={isOpenModal}
        onRequestClose={toggleModal}
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <IoMdClose onClick={toggleModal} className="modalCloseButton" />
        <h2>About BrandColors</h2>

        <p>
          BrandColors was created by <b>DesignBombs</b>. The goal was to create
          a helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>
          It's been featured by Smashing Magazine, CSS-Tricks, Web Design Depot,
          Tuts+, and over <b>2 million pageviews</b>. There are now over
          <b>600 brands</b> with <b>1600 colors</b> and the collection is always
          growing.
        </p>
      </Modal>
    </>
  );
}

export default Sidebar;
