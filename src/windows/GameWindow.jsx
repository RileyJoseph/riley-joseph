const GameMirror = () => {
  const handleClick = () => {
    window.open("https://project-manager-curve-50566.netlify.app/", "_blank");
  };

  return (
    <div id="mirror-three" onClick={handleClick} className="cursor-pointer mirror">
      <div id="mirror-content-three"></div>
    </div>
  );
};

export default GameMirror;