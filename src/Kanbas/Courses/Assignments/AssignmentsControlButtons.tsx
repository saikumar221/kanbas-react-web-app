import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { BsPlus } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

export default function AssignmentsControlButtons() {
    return (
        <div className="float-end">
          <span> 40% of Total </span>
          <BsPlus />
          <IoEllipsisVertical className="fs-4" />
        </div>
      );
}

