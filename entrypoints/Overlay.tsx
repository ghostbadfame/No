import React, { useState, useEffect } from 'react';
import PromptModal from '../components/PromptModal';
import AiIcon from "@/assets/AI.svg";
import "@/assets/style.css"


function Overlay() {
  const [showModal, setShowModal] = useState(false);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const textBox = document.querySelector(".msg-form__contenteditable");
      if (textBox) {
        textBox.addEventListener("focus", handleFocus);
        textBox.addEventListener("blur", handleBlur);
        clearInterval(intervalId); 
      }
    }, 1000); 

    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  const handleFocus = () => {
    const textBox = document.querySelector(".msg-form__contenteditable");
    const container = document.createElement("div");
    container.className = "ai-icon";
    container.setAttribute("style", "position:absolute; bottom:0; right:2rem;");
    const imgElement = document.createElement("img");
    imgElement.src = AiIcon;
    imgElement.alt = "ai-icon";
    imgElement.setAttribute("style", "width: 34px; height: 34px; cursor:pointer;");
    imgElement.addEventListener("click", () => {
      setShowModal(true);
    });
    container.appendChild(imgElement);
    textBox?.appendChild(container);
  };

  // method to unmount AI Icon
  const handleBlur = () => {
    const textBox = document.querySelector(".msg-form__contenteditable");
    const container = textBox?.querySelector(".ai-icon"); 
    container?.remove();
  };

  return (
    <div>
      <PromptModal open={showModal} handleClose={() => setShowModal(false)} />
    </div>
  );
};


export default Overlay;