export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page
          of
        </textarea>
        <br />
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} />
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select id="wd-group">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="assignments2">ASSIGNMENTS2</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
              <select id="wd-display-grade-as">
                <option value="percentage">Percentage</option>
                <option value="Sum">Sum</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select id="wd-submission-type">
                <option value="online">Online</option>
                <option value="paperback">Paper back</option>
              </select>
            </td>
          </tr>
          <br />
          <tr>
            <td align="right" valign="top">
              <label>Online Entry Options</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-text-entry" />
            </td>
            <td>
              <label htmlFor="wd-text-entry">Text Entry</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-website-url" />
            </td>
            <td>
              <label htmlFor="wd-website-url">Website URL</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-media-recordings" />
            </td>
            <td>
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-student-annotation" />
            </td>
            <td>
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <input type="checkbox" id="wd-file-upload" />
            </td>
            <td>
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
        </table>

        <label htmlFor="wd-assign-to">Assign To</label>
        <br />
        <input id="wd-assign-to" value="Everyone" />
        <br />
        <br />
        <label htmlFor="wd-due-date">Due</label>
        <br />
        <input type="date" id="wd-due-date" value="2024-05-13" />
        <br />
        <br />
        <table>
          <tr>
            <td>
              <label htmlFor="wd-available-from">Available From</label>
              <br />
              <input type="date" id="wd-available-from" value="2024-05-06" />
            </td>
            <br />
            <td>
              <label htmlFor="wd-available-until">Until</label>
              <br />
              <input type="date" id="wd-available-until" value="2024-05-20" />
            </td>
          </tr>
        </table>
        <hr />
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </form>
    </div>
  );
}
