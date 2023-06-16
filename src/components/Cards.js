import React from "react";
import './cards.css'
import Card from './Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis,faEye,faShareNodes,faLocationDot,faBagShopping,faCircleInfo,faPencil } from '@fortawesome/free-solid-svg-icons'

export default function PostCard() {
  return (
    <>
    <div className="container d-flex justify-content-between">
      <div className="mt-4">
        <div className="row justify-content cards" style={{width:'98%'}} >
          <div className="col-lg-11">
            <div className="card">
              <img
                src="./image/1.png"
                className="card-img-top"
                alt="Post"
              />
              <div className="card-body">
                <p className="card-text">✍️ Article</p>
                <div className="d-flex align-items-center justify-content-between">
                  <h4 className="card-text">
                    What if famous brands had regular fonts? Meet RegulaBrands!
                  </h4>
                  <FontAwesomeIcon icon={faEllipsis} size="xl"/>
                </div>
                <p className="card-text">
                  I've worked in UX for the better part of a decade. From now
                  on, I plan to rei…
                </p>
              </div>
              <div className="card-footer d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <img
                    src="./image/11.png"
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
      <div className="conatiner mt-4 hide">
        <div className="d-flex justify-content-between border-bottom border-light border-2">
          <div className="d-flex ">
          <FontAwesomeIcon icon={faLocationDot} className="mt-1 me-2" />
            Noida, India
          </div>
          <FontAwesomeIcon icon={faPencil} />
        </div><br />
        <div>
          <p className="text-secondary">
          <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
            Your location will help us serve better and extend a personalised
            experience.
          </p>
        </div>
      </div>
    </div>
    <Card/>
    <div className="container mt-4">
      <div className="row justify-content">
        <div className="col-lg-6">
          <div className="card">
            <img
              src="./image/3.png"
              className="card-img-top"
              alt="Post"
            />
            <div className="card-body">
              <p className="card-text">🗓️ Meetup</p>
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="card-text">
                Finance & Investment Elite Social Mixer @Lujiazui
                </h4>
                <FontAwesomeIcon icon={faEllipsis} size="xl"/>
              </div>
              <div>
              <p className="card-text">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-event" viewBox="0 0 16 16">
  <path d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>  Fri, 12 Oct, 2018  
              </p>
              <div className="d-flex">
            <FontAwesomeIcon icon={faLocationDot} className="mt-1 me-2" />
            <p className="text-left">Ahmedabad, India</p>
          </div>
              </div>
              <button className="btn-btn-primary bg-transparent w-100 rounded border">
                <p className="text-center fw-bolder" style={{color:'#fd7e14'}}>View Website</p>
              </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="./image/33.png"
                  className="rounded-circle me-2"
                  alt="User"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="fw-bold">Ronal Jones</span>
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
    <div className="container mt-4">
      <div className="row justify-content">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <p className="card-text">💼️ Job</p>
              <div className="d-flex align-items-center justify-content-between">
                <h4 className="card-text">
                Software Developer
                </h4>
                <FontAwesomeIcon icon={faEllipsis} size="xl"/>
              </div>
              <div>
              <p className="card-text">
              <FontAwesomeIcon icon={faBagShopping} />  Innovaccer Analytics Private Ltd.  
              </p>
              <div className="d-flex">
              <FontAwesomeIcon icon={faLocationDot} className="mt-1 me-2" />
            <p className="text-left">Noida, India</p>
          </div>
              </div>
              <button className="btn-btn-primary bg-transparent w-100 rounded border">
                <p className="text-center fw-bolder text-success">Apply on Timesjobs</p>
              </button>
            </div>
            <div className="card-footer d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <img
                  src="./image/44.png"
                  className="rounded-circle me-2"
                  alt="User"
                  style={{ width: "40px", height: "40px" }}
                />
                <span className="fw-bold">Joseph Gray</span>
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
    </>
  );
}
