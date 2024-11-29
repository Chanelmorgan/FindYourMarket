import React from "react";

const AddPopup = ({ isOpen, title, inputFields, formData, onInputChange, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.popup}>
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          {inputFields.map((field, index) => (
            <div key={index} style={styles.inputGroup}>
              <label>{field.label}:</label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={onInputChange}
                required={field.required}
              />
            </div>
          ))}
          <div style={styles.buttons}>
            <button type="submit">Submit</button>
            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Styles
const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    width: "300px",
  },
  inputGroup: {
    marginBottom: "15px",
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  },
};

export default AddPopup;
