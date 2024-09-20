import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5010/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS5010 Software Design</h5>
              <p className="wd-dashboard-course-title">
                Programming Design Paradigm
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5100/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS5100 Algos</h5>
              <p className="wd-dashboard-course-title">
                Advanced Algorithms
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/5222/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS5222 Node JS</h5>
              <p className="wd-dashboard-course-title">
                Backed developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/6010/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS6010 Data</h5>
              <p className="wd-dashboard-course-title">
                Intro to data management
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>{" "}
        <div className="wd-dashboard-course">
          <Link
            className="wd-dashboard-course-link"
            to="/Kanbas/Courses/1234/Home"
          >
            <img src="/images/reactjs.webp" width={200} />
            <div>
              <h5>CS1234 React JS</h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
