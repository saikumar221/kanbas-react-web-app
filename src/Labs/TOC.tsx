import { Link } from "react-router-dom";

export default function TOC() {
    return (
      <div>
        <h1>Venkata Sai Kumar Reddy Peddakam</h1> <br />
        <h2>Section 01</h2>
        <a id="wd-github" href="https://github.com/saikumar221/kanbas-react-web-app.git">click here</a> to visit GitHub repository<br/>
      <ul>
        <li><Link to="/Labs">Labs</Link></li>
        <li><Link to="/Labs/Lab1">Lab 1</Link></li>
        <li><Link to="/Labs/Lab2">Lab 2</Link></li>
        <li><Link to="/Labs/Lab3">Lab 3</Link></li>
        <li><Link to="/Kanbas">Kanbas</Link></li>
        </ul>
      </div>
    );
  }
  