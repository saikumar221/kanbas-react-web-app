import { useLocation } from "react-router";

export default function TOC() {
  const { pathname } = useLocation();

  return (
    <div>
      <h1>Venkata Sai Kumar Reddy Peddakam</h1> <br />
      <h2>Section 01</h2>
      <a
        id="wd-github"
        href="https://github.com/saikumar221/kanbas-react-web-app.git"
      >
        click here
      </a>{" "}
      to visit GitHub repository
      <br />
      <ul className="nav nav-pills">
        <li className="nav-item">
          <a id="wd-a" href="#/Labs" className="nav-link">
            Labs
          </a>
        </li>

        <li className="nav-item">
          <a
            id="wd-a1"
            href="#/Labs/Lab1"
            className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
          >
            Lab 1
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a2"
            href="#/Labs/Lab2"
            className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
          >
            Lab 2
          </a>
        </li>
        <li className="nav-item">
          <a
            id="wd-a3"
            href="#/Labs/Lab3"
            className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
          >
            Lab 3
          </a>
        </li>
        <li className="nav-item">
          <a id="wd-k" href="#/Kanbas" className="nav-link">
            Kanbas
          </a>
        </li>
      </ul>
    </div>
  );
}
