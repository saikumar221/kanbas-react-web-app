import { Link, useLocation, useParams } from "react-router-dom";
export default function CoursesNavigation() {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];
  const { pathname } = useLocation();
  const { cid } = useParams();
  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          id="wd-course-home-link"
          to={`/Kanbas/Courses/${cid}/${link}`}
          className={`list-group-item
            ${pathname.includes(link) ? "active" : "text-danger"} border border-0`}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
