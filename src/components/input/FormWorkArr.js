import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

export default function FormWorkArr({ workArr, handleDelete }) {
  return (
    <div className="flex flex-col gap-2">
      {workArr.map((work) => {
        return (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            transition={{ ease: "easeIn", duration: 0.3 }}
            key={work.id}
            className="flex justify-center"
          >
            <div className="bg-slate-800 rounded-lg flex-col w-[90%] justify-center items-center gap-2">
              <div className="flex items-center gap-2 justify-between">
                <div className="flex gap-2 items-center">
                  <h1 className="text-white font-bold text-xl pl-2">
                    {work.company}
                  </h1>
                  <p className="text-sky-500">-</p>
                  <h1 className="text-white ">{work.position}</h1>
                </div>

                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleDelete("work", work.id);
                  }}
                  className="bg-red-500 rounded-r-lg text-white py-2 w-8"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
