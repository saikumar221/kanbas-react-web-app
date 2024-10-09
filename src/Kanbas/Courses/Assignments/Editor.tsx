import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <form>
        <div className="row">
          <div className="col">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" className="form-control" value="A1 - ENV + HTML" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-description">Description</label>
            <textarea id="wd-description" className="form-control">
              The assignment is available online. Submit a link to the landing page.
            </textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-points">Points</label>
            <input id="wd-points" className="form-control" value={100} />
          </div>
          <div className="col">
            <label htmlFor="wd-group">Assignment Group</label>
            <select id="wd-group" className="form-control">
              <option value="assignments">ASSIGNMENTS</option>
              <option value="assignments2">ASSIGNMENTS2</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
            <select id="wd-display-grade-as" className="form-control">
              <option value="percentage">Percentage</option>
              <option value="sum">Sum</option>
            </select>
          </div>
          <div className="col">
            <label htmlFor="wd-submission-type">Submission Type</label>
            <select id="wd-submission-type" className="form-control">
              <option value="online">Online</option>
              <option value="paperback">Paperback</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label>Online Entry Options</label>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-text-entry" />
              <label className="form-check-label" htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-website-url" />
              <label className="form-check-label" htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
              <label className="form-check-label" htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
              <label className="form-check-label" htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="wd-file-upload" />
              <label className="form-check-label" htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-assign-to">Assign To</label>
            <input id="wd-assign-to" className="form-control" value="Everyone" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-due-date">Due Date</label>
            <input type="date" id="wd-due-date" className="form-control" value="2024-05-13" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <label htmlFor="wd-available-from">Available From</label>
            <input type="date" id="wd-available-from" className="form-control" value="2024-05-06" />
          </div>
          <div className="col">
            <label htmlFor="wd-available-until">Until</label>
            <input type="date" id="wd-available-until" className="form-control" value="2024-05-20" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <hr />
            <button type="submit" className="btn btn-primary">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
