import { useNavigate } from "react-router-dom";

const GameMirror = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/vapor-lounge"); // Navigate to the BookRecommendations page
  };

  return (
    <div id="mirror" onClick={handleClick} className="cursor-pointer mirror">
      <div id="mirror-content"></div>
    </div>
  );
};

export default GameMirror;
