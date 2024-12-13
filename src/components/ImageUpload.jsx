import React from "react";

const ImageUpload = ({ setImage }) => {
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="image-upload">
      <label className="config-label">
        Upload Image:{" "}
        <input type="file" accept="image/*" className="file-input" onChange={handleImageUpload}/>
      </label>
    </div>
  );
};

export default ImageUpload;
