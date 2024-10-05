import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { GrAnnounce } from "react-icons/gr";
import { GrNotes } from "react-icons/gr";
import { SiSimpleanalytics } from "react-icons/si";
import { CiCircleInfo } from "react-icons/ci";

export default function CourseStatus() {
    return (
<div id="wd-course-status" style={{ width: "300px", marginLeft: "28px" }}>
      <h2>Course Status</h2>
      <div className="d-flex">
        <div className="w-50 pe-1">
          <button className="btn btn-lg btn-secondary w-100 text-nowrap ">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </button>
        </div>
        <div className="w-50">
          <button className="btn btn-lg btn-success w-100">
            <FaCheckCircle className="me-2 fs-5" /> Publish </button>
        </div>
      </div><br />
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <BiImport className="me-2 fs-5" /> Import Existing Content </button>
      <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrNotes className="me-2 fs-5" /> View Course Stream </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <GrAnnounce className="me-2 fs-5" /> New Announcement </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <SiSimpleanalytics className="me-2 fs-5" /> New Analytics </button>
        <button className="btn btn-lg btn-secondary w-100 mt-1 text-start">
        <CiCircleInfo className="me-2 fs-5" /> View Course Notifications </button>
    </div>
    );}
  