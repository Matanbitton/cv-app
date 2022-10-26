import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom";
import {motion} from "framer-motion";
import {useEffect, useState} from "react";
const SuccessModal = ({message}) => {
  const overlay = document.getElementById("overlay-root");

  const [isMobile, setMobile] = useState(window.innerWidth < 720);

  const updateMedia = () => {
    setMobile(window.innerWidth < 720);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return ReactDOM.createPortal(
    <>
      <div className="h-screen">
        {isMobile && (
          <motion.div
            animate={{y: 0, x: "-50%"}}
            initial={{y: -100, x: "-50%"}}
            transition={{ease: "easeIn", duration: 0.2}}
            className=" fixed left-[50%] translate-x-[-50%] w-[90%] flex items-center justify-center text-white font-semibold  sm:top-4 md:bottom-12 gap-2 rounded-lg lg:bottom-2  bg-sky-500 border-2 px-2 py-2 shadow-xl"
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{message}</p>
          </motion.div>
        )}
        {!isMobile && (
          <motion.div
            animate={{y: 0, x: "-50%"}}
            initial={{y: 100, x: "-50%"}}
            transition={{ease: "easeIn", duration: 0.2}}
            className=" fixed left-[50%] translate-x-[-50%] w-[90%] flex items-center justify-center text-white font-semibold  sm:top-4 md:bottom-12 gap-2 rounded-lg lg:bottom-2  bg-sky-500 border-2 px-2 py-2 shadow-xl"
          >
            <FontAwesomeIcon icon={faThumbsUp} />
            <p>{message}</p>
          </motion.div>
        )}
      </div>
    </>,
    overlay
  );
};

export default SuccessModal;
