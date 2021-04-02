import React, { useState } from "react";
import styled from "styled-components";

import Nav from "@components/Nav";
import Modal from "@components/Modal";
import Content from "@templates/Content";
const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Main = () => {
  const [openModal, setOpenModal] = useState(false)
  const handleModal = (props) => {
    
  }
  return (
    <MainStyled>
      <Nav className="nav" setOpenModal={setOpenModal}></Nav>
      {
        openModal && (
          <Modal className="Modal" setOpenModal={setOpenModal}>
            <Content />
          </Modal>
        )
      }
    </MainStyled>
  );
};

export default Main;
