import { BsGripVertical, BsPlus } from "react-icons/bs";
import ModuleControlButtons from "../Modules/ModuleControlButtons";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { CiSearch } from "react-icons/ci";
import AssignmentsControlButtons from "./AssignmentsControlButtons";
import { LuFileEdit } from "react-icons/lu";

export default function Assignments() {
  return (
    <div id="wd-assignments">
      <div className="row">
        <div className="col-md-8">
          <div className="input-group mb-2 m-1">
            <span className="input-group-text" id="basic-addon1">
              <CiSearch />{" "}
            </span>
            <input
              id="wd-search-assignment"
              className="form-control"
              placeholder="Search for Assignments"
            />
          </div>
        </div>
        <div className="col-md-4 text-end">
          <button
            id="wd-add-assignment-group"
            className="btn btn-lg btn-secondary m-1"
            type="button"
            data-bs-toggle="dropdown"
            style={{ marginRight: 2 }}
          >
            <BsPlus /> Group
          </button>
          <button
            id="wd-add-assignment"
            className="btn btn-lg btn-primary m-2 bg-danger"
            type="button"
            data-bs-toggle="dropdown"
          >
            <BsPlus /> Assignment
          </button>
        </div>
      </div>
      <div className="row">
        <ul id="wd-modules" className="list-group rounded-0">
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS <AssignmentsControlButtons />
            </div>
            <ul className="wd-lessons list-group rounded-0">
                <li className="wd-lesson list-group-item p-3 ps-1">
                  <BsGripVertical className="me-2 fs-3" />
                  <LuFileEdit className="me-2 fs-3" style={{ color: "green" }} />
                  <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                  A12 - ENV + HTML <LessonControlButtons />
                  </a>
                  <p className="ms-5">
                  <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am
                  | <b>Due</b> May 13 at 11:59pm | 100 pts
                  </p>
                  </li>
              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <LuFileEdit className="me-2 fs-3" style={{ color: "green" }} />
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                A2 - CSS + BOOTSTRAP <LessonControlButtons />
                </a>
                <p className="ms-5">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at
                  12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                </p>
              </li>

              <li className="wd-lesson list-group-item p-3 ps-1">
                <BsGripVertical className="me-2 fs-3" />
                <LuFileEdit className="me-2 fs-3" style={{ color: "green" }} />
                <a href="#/Kanbas/Courses/1234/Assignments/123" className="text-decoration-none">
                A3 - JAVASCRIPT + REACT <LessonControlButtons />
                </ a>
                <p className="ms-5">
                <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 6 at 12:00am
                  | <b>Due</b> May 13 at 11:59pm | 100 pts
                </p>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
