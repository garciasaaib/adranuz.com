import React from "react";
import styled from "styled-components";
import closeIcon from "@assets/svg/close.svg";
const ModalStyled = styled.div`
  position: relative;
  background: white;
  width: 95%;
  height: 75%;
  overflow-y: auto;
  margin-bottom: 1rem;
  z-index: 0;

  .head {
    position: fixed;
    padding: 4px;
    width: inherit;
    height: 40px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    justify-content: flex-end;
    figure{ 
      width: 30px;
    }
    img {
      height: 100%;
    }
  }
`;
const Modal = ({ children, setOpenModal }) => {
  return (
    <ModalStyled>
      <div className="head">
        <figure >
          <img src={closeIcon} alt="" onClick={() => setOpenModal(false)}/>
        </figure>
      </div>
      <div className="body">
        {children}
      </div>
    </ModalStyled>
  );
};
export default Modal;
