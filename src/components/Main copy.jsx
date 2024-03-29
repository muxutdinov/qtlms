import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);
  const [dataa, setDataa] = useState([]);

  useEffect(() => {
    getAxios();
    getAxioss();
  }, []);

  const getAxios = () => {
    axios
      .get("https://api.qtlms.uz/api/v1/course/ingilis-tili", {
        headers: {
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnF0bG1zLnV6XC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTYzODQwNDYwOCwiZXhwIjoxNjM5MjY4NjA4LCJuYmYiOjE2Mzg0MDQ2MDgsImp0aSI6Im9mMUxVUGcyOFBPTld0UU8iLCJzdWIiOjI5NTYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Ax8JB0aXS3FLmhWL8bqQPv_XzgzUrerG9cFWNPn0AFs",
        },
      })
      .then((res) => setData(res.data.data))
      .catch((err) => console.log(err));
  };

  const getAxioss = () => {
    axios
      .get("https://api.qtlms.uz/api/v1/course/ingilis-tili/sections", {
        headers: {
          Authorization:
            "Bearer " +
            "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLnF0bG1zLnV6XC9hcGlcL3YxXC9sb2dpbiIsImlhdCI6MTYzODQwNDYwOCwiZXhwIjoxNjM5MjY4NjA4LCJuYmYiOjE2Mzg0MDQ2MDgsImp0aSI6Im9mMUxVUGcyOFBPTld0UU8iLCJzdWIiOjI5NTYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.Ax8JB0aXS3FLmhWL8bqQPv_XzgzUrerG9cFWNPn0AFs",
        },
      })
      .then((res) => setDataa(res.data.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <main class="main">
        <section class="section section-breadcrumbs">
          <div class="container">
            <div class="breadcrumbs">
              <button type="button" class="btn btn-light left-sidebar-menu-btn">
                <span class="icon icon-list"></span>
              </button>
              <ul>
                <Link to="/">
                  <li>
                    <a href="">Asosiy</a>
                  </li>
                </Link>
                <li>
                  <a href=""></a>
                </li>
                <li>Ingliz tili</li>
              </ul>
            </div>
          </div>
        </section>
        ;
        <section class="section section-course pt-3">
          {dataa.map((value, index) => {
            return (
              <div class="container">
                <h3 class="mb-4">{data.name}</h3>
                <div class="row">
                  <div class="col-lg-3">
                    <div class="course-single__sidebar left-sidebar-menu">
                      <div class="left-sidebar-menu__inner">
                        {/* <div class="course-single__info">
                          <ul>
                            <li>
                              <span>Длительность</span>
                              <span>5ч. 17м.</span>
                            </li>
                            <li>
                              <span>Категория</span>
                              <span>Маркетинг</span>
                            </li>
                          </ul>
                          <button
                            type="button"
                            class="btn btn-primary px-2 mt-2 w-100"
                          >
                            Купить курс
                          </button>
                        </div> */}
                        <div class="course-single__menu">
                          <h6>Глава 1</h6>
                          <ul>
                            <li>
                              <a href="#">
                                <span class="icon icon-play"></span>
                                {value.name}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-play"></span>Теория
                                дифференциации на практике
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Теория
                                массового маркетинга
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Концепция
                                холистического маркетинга
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>
                                Использование модели Портера — Лоулера
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Должностная
                                инструкция маркетолога
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Основные KPI
                                менеджера по маркетингу
                              </a>
                            </li>
                          </ul>
                          <h6>Глава 2</h6>
                          <ul>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Концепция
                                воспринимаемой ценности
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Теория
                                дифференциации на практике
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Теория
                                массового маркетинга
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Концепция
                                холистического маркетинга
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>
                                Использование модели Портера — Лоулера
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Должностная
                                инструкция маркетолога
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <span class="icon icon-lock"></span>Основные KPI
                                менеджера по маркетингу
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-9">
                    <div class="course-single__content">
                      <div class="video mb-4">
                        <video
                          id="my-video"
                          class="video-js"
                          controls
                          preload="auto"
                          poster="images/video-img.jpg"
                          data-setup="{}"
                        >
                          <source src="images/video.mp4" type="video/mp4" />
                          <source src="images/video.webm" type="video/webm" />
                        </video>
                      </div>
                      <h3 class="mb-3">О чем этот курс?</h3>
                      <p>{data.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          ;
        </section>
      </main>
      ;
    </>
  );
};

export default Main;
