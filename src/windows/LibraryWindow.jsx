import { useNavigate } from "react-router-dom";

const LibraryWindow = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/book-recommendations"); // Navigate to the BookRecommendations page
  };

  return (
    <div id="mirror-two" onClick={handleClick} className="cursor-pointer mirror">
      <div id="mirror-content-two"></div>
    </div>
  );
};

export default LibraryWindow;
