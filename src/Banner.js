import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substring(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://e0.pxfuel.com/wallpapers/988/40/desktop-wallpaper-black-youtube-banner-2048x1152-youtube-thumbnail.jpg')`,
        backgroundPosition: "center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `this is a test description this is a test description this is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test descriptionthis is a test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
