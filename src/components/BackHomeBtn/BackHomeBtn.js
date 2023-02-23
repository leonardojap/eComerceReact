import { Link } from "react-router-dom";
export const BackHomeBtn = () => {
  return (
    <>
      <div className="col-12">
        <Link to="/" className="decoration">
          <p className="btnSeguirComprando">
            <i className="fa fa-angle-left"></i> Seguir Comprando
          </p>
        </Link>
      </div>
    </>
  );
};
