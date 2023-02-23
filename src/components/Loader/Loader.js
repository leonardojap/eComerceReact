import "./Loader.css";

export const Loader = () => {
  return (
    <>
      <div className="spinner-border customLoader" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};
