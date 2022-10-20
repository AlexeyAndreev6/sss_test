import React from "react";
import "./otherNews.scss";

function OtherNews({ news }) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ]; // для вывода месяца новостей

  function convertDate(date) {
    const day = date.getDate();
    const month = months[date.getMonth()];

    return `${day} ${month} `;
  }

  return (
    <div className="otherNews">
      {news.map((_, index) => (
        <p key={index} className="content">
          <span className="date">
            {convertDate(new Date(news[index].created_at))}
          </span>
          <span className="subject">{news[index].subject}</span>
        </p>
      ))}
    </div>
  );
}

export default OtherNews;
