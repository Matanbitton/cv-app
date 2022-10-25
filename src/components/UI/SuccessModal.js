import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";

const SuccessModal = ({message}) => {
  const overlay = document.getElementById("overlay-root");

  return ReactDOM.createPortal(
    <>
      <div className="h-screen">
        <div className=" fixed left-[50%] translate-x-[-50%] w-[80%] flex items-center justify-center text-white font-semibold  sm:top-2 md:bottom-12 gap-2 rounded-lg lg:bottom-2  bg-sky-500 border-2 px-2 py-1 shadow-xl">
          <FontAwesomeIcon icon={faThumbsUp} />
          <p>{message}</p>
        </div>
      </div>
    </>,
    overlay
  );
};

export default SuccessModal;
