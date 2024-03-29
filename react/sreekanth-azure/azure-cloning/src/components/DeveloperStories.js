import React from "react"
import "./DeveloperStories.css"

function DeveloperStories({ developerData }) {
  return (
    <>
      <div className="developer-stories">
        <div className="developer-stories-img">
          <img src={developerData.backgroundImg} />
        </div>
        <div className="developer-stories-content">
          <div className="developer-stories-container">
            <div className="developer-stories-content-container">
              <h2>{developerData.text}</h2>
              <div className="developer-stories-btn-container">
                <a className="watch-story">
                  <span className="play-btn"></span>
                  <span>Watch the story (2:56)</span>
                </a>
                <a className="more-developers-stories-btn">
                  <span>Check out more developer stories</span>
                  <span className="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeveloperStories
