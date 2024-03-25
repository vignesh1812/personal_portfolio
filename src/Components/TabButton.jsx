
const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-transparent bg-clip-text bg-gradient-to-br from-purple-400  to-pink-500 "
    : "ani-text text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold  ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;