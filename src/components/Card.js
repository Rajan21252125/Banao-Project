import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faEye,faShareNodes } from '@fortawesome/free-solid-svg-icons'

export default function PostCard() {
  return (
    <div className="container mt-4">
      <div className="row justify-content">
        <div className="col-lg-6">
          <div className="card">
            <img
              src="./image/Rectangle 5.png"
              className="card-img-top"
              alt="Post"
            />
            <div className="card-body">
              <p className="card-text">🔬️ Education</p>
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="card-text">
                Tax Benefits for Investment under National Pension Scheme launched by Government
                </h4>
                <FontAwesomeIcon icon={faEllipsis} size="xl"/>
              </div>
              <p className="card-text">
                I've worked in UX for the better part of a decade. From now on,
                I plan to rei…
              </p>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="./image/22.png"
                  className="rounded-circle me-2"
                  alt="User"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="fw-bold">John Doe</span>
              </div>
              <div className="text-end mt-2">
                <small className="text-muted d-flex align-items-center">
                <FontAwesomeIcon icon={faEye} className="me-2"/><span className="me-2">1.4k views</span>
                <FontAwesomeIcon icon={faShareNodes} />
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
