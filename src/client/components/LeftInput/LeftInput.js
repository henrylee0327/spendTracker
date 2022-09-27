import React, { useState, useEffect } from "react";
import useSelectedMonthProvider from "../../providers/selected-month/use-selected-month-provider";
import { Button } from "react-bootstrap";
import RegisterModal from "./RegisterModal";
import usePostNewCard from "../../hooks/usePostNewCard";

const LeftInput = () => {
  const { month, onSelectMonth } = useSelectedMonthProvider();
  const [isRegisterCardModalVisible, setIsRegisterCardModalVisible] =
    useState(false);
  const [newCardInfo, setNewCardInfo] = useState({
    description: "",
    last4digits: "",
  });
  const { postNewCard, isPostingNewCard } = usePostNewCard();

  const onSaveCard = (e) => {
    e.preventDefault();
    postNewCard();
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "brown",
          margin: "1rem",
          borderRadius: "5px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button
          onClick={() => setIsRegisterCardModalVisible(true)}
          variant="success"
          style={{ margin: "1rem" }}
        >
          Register your card
        </Button>
        {isRegisterCardModalVisible && (
          <RegisterModal
            onClose={() => setIsRegisterCardModalVisible(false)}
            onSaveCard={onSaveCard}
            newCardInfo={newCardInfo}
            setNewCardInfo={setNewCardInfo}
            isPostingNewCard={isPostingNewCard}
          />
        )}
      </div>
    </>
  );
};

export default LeftInput;
