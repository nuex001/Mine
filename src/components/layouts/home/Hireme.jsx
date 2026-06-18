import React, { useState } from 'react';
import Modal from '../../Modal';

function Hireme() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (formData) => {
    // Integrate with your Web3Forms API
    const fullFormData = new FormData();
    fullFormData.append("access_key", "bc895016-3b52-483d-a6f1-62dbcfb41bf6");
    fullFormData.append("email", formData.email);
    fullFormData.append("message", formData.intent);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: fullFormData
    });

    const data = await response.json();
    if (data.success) {
      console.log("Form Submitted Successfully");
    } else {
      throw new Error("Submission failed");
    }
  };

  return (
    <>
      <section className='hireme'>
        <h1>Available for new projects</h1>
        <button
          className="btn"
          onClick={() => setIsModalOpen(true)}
        >
          [ Start a Project ]
        </button>
      </section>

      <Modal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
}

export default Hireme;