import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../../store/news/fetchNews";
import response from "../../assets/response.json";
import "./news.scss";

export const News = ({ news }) => {
  //const dispatch = useDispatch();
  //useEffect(() => {
  // dispatch(fetchNews());
  //}, [dispatch]);

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
  ]; // для вывода даты новостей

  function convertDateWithMinutes(lastNews, index) {
    const newsDate = lastNews[index].created_at;
    const newDate = new Date(newsDate);
    const day = newDate.getDate();
    const month = months[newDate.getMonth()];
    const hour = newDate.getHours();
    let minute = newDate.getMinutes();
    if (minute < 10) {
      minute = `0${minute}`;
    }
    return `${day} ${month} ${hour}:${minute}`;
  }

  return (
    <div className="mainNews">
      <div className="news">
        <div className="description">
          <p>{news[0].subject}</p>
          <span className="time">{convertDateWithMinutes(news, 0)}</span>
        </div>
      </div>
      <div className="news1">
        <div className="description">
          <p>{news[1].subject}</p>
          <span className="time">{convertDateWithMinutes(news, 1)}</span>
        </div>
      </div>
    </div>
  );
};
