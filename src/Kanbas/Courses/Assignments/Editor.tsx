import React from 'react';

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      {/* Breadcrumb */}
      <div className="mb-4">
        <span>Course Name</span>
      </div>

      <form>
        {/* Assignment Name Section */}
        <div className="mb-4">
          <div className="row">
            <div className="col">
              <label htmlFor="wd-name" className="form-label">Assignment Name</label>
              <input
                id="wd-name"
                className="form-control"
                value="A1"
                placeholder="Enter Assignment Name"
              />
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="mb-4">
          <div className="row">
            <div className="col">
              <label htmlFor="wd-description" className="form-label">Description</label>
              <textarea
                id="wd-description"
                className="form-control"
                rows={4}
                defaultValue={`The assignment is available online. 
Submit a link to the landing page of your Web application running on Netlify. The landing page should include:
• Your full name and section
• Links to each lab assignment
• Link to the Kanbas application
• Links to all relevant source code repositories.`}
              />
            </div>
          </div>
        </div>

        {/* Points and Assignment Group Section */}
        <div className="mb-4">
          <h5>Points and Assignment Group</h5>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-points" className="form-label">Points</label>
              <input id="wd-points" className="form-control" type="number" value={100} />
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-group" className="form-label">Assignment Group</label>
              <select id="wd-group" className="form-control">
                <option value="assignments">ASSIGNMENTS</option>
                <option value="assignments2">ASSIGNMENTS2</option>
              </select>
            </div>
          </div>
        </div>

        {/* Display Grade As and Submission Type Section */}
        <div className="mb-4">
          <h5>Display Grade As and Submission Type</h5>
          <hr />
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
              <select id="wd-display-grade-as" className="form-control">
                <option value="percentage">Percentage</option>
                <option value="sum">Sum</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
              <select id="wd-submission-type" className="form-control">
                <option value="online">Online</option>
                <option value="paperback">Paperback</option>
              </select>
            </div>
          </div>
        </div>

        {/* Online Entry Options Section */}
        <div className="mb-4">
          <h5>Online Entry Options</h5>
          <hr />
          <div className="row">
            <div className="col">
              <label className="form-label">Options</label>
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
        </div>

        {/* Assign To Section */}
        <div className="mb-4">
          <h5>Assign</h5>
          <hr />
          <div className="row">
            <div className="col">
              <label htmlFor="wd-assign-to" className="form-label">Assign To</label>
              <input
                id="wd-assign-to"
                className="form-control"
                value="Everyone"
                placeholder="Assign To"
              />
            </div>
          </div>
        </div>

        {/* Due Date, Available From, Until Section */}
        <div className="mb-4">
          <h5>Dates</h5>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <label htmlFor="wd-due-date" className="form-label">Due Date</label>
              <input
                type="date"
                id="wd-due-date"
                className="form-control"
                defaultValue="2024-05-13"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="wd-available-from" className="form-label">Available From</label>
              <input
                type="date"
                id="wd-available-from"
                className="form-control"
                defaultValue="2024-05-06"
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="wd-available-until" className="form-label">Until</label>
              <input
                type="date"
                id="wd-available-until"
                className="form-control"
                defaultValue="2024-05-20"
              />
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="row">
          <div className="col">
            <hr />
            <button type="submit" className="btn btn-primary me-2">Save</button>
            <button type="button" className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
}
