function Popup({ setIsPopupOpen }) {
  const handleClose = () => {
    setIsPopupOpen(false); // Close the popup
  };
 
 
  return (
    <div className="popup">
      <div onClick={handleClose} className="overlay"></div>
      <div className="popup-content">
        <h2>Hello Modal</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
          perferendis suscipit officia recusandae, eveniet quaerat assumenda id
          fugit, dignissimos maxime non natus placeat illo iusto! Sapiente
          dolorum id maiores dolores? Illum pariatur possimus quaerat ipsum
          quos molestiae rem aspernatur dicta tenetur. Sunt placeat tempora
          vitae enim incidunt porro fuga ea.
        </p>
        <button className="close-popup" onClick={handleClose}>
          CLOSE
        </button>
      </div>
    </div>
  );
 }
 
 
 export default Popup;
 