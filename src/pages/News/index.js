import React from "react";

import {
  Column,
  Row,
  Img,
  Stack,
  Button,
  Text,
  Line,
  List,
  Input,
} from "components";

const NewsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_header.png')" }}
          >
            <Column className="bg-gray_900_a2 flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
              <Column className="flex flex-col items-center justify-start mb-[11px] sm:mb-[4px] md:mb-[5px] w-[100%]">
                <header className="max-w-[1463px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Img
                      src="images/img_logo.svg"
                      className="max-w-[100%] w-[22%]"
                      alt="logo"
                    />
                    <Img
                      src="images/img_menu.svg"
                      className="sm:h-[21px] md:h-[27px] h-[52px] max-w-[100%] sm:ml-[24px] md:ml-[31px] ml-[61px] sm:w-[20px] md:w-[26px] w-[52px]"
                      alt="menu"
                    />
                    <Stack className="h-[42px] ml-[14px] sm:ml-[5px] md:ml-[7px] relative w-[36%]">
                      <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-[0] justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%] common-row-list">
                        <ul className="flex flex-row items-start justify-between">
                          <li className="w-[auto] mb-[5px] sm:w-[100%] sm:my-[10px] md:mb-[2px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[18px] text-white_A700 underline"
                              rel="noreferrer"
                            >
                              Новости
                            </a>
                          </li>
                          <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[18px] text-white_A700 underline"
                              rel="noreferrer"
                            >
                              Наши арендаторы
                            </a>
                          </li>
                          <li className="w-[auto] sm:w-[100%] sm:my-[10px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[18px] text-white_A700 underline"
                              rel="noreferrer"
                            >
                              Аренда офисов
                            </a>
                          </li>
                          <li className="w-[auto] mb-[5px] sm:w-[100%] sm:my-[10px] md:mb-[2px]">
                            <a
                              href={"javascript:"}
                              className="cursor-pointer font-normal not-italic text-[18px] text-white_A700 underline"
                              rel="noreferrer"
                            >
                              Контакты
                            </a>
                          </li>
                        </ul>
                      </Row>
                      <Button
                        className="absolute cursor-pointer font-normal min-w-[19%] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                        size="md"
                        variant="FillWhiteA700"
                      >
                        Новости
                      </Button>
                    </Stack>
                    <Button
                      className="flex items-center justify-center md:ml-[21px] min-w-[17%] ml-[42px] sm:ml-[16px] text-center w-[max-content]"
                      leftIcon={
                        <Img
                          src="images/img_location.svg"
                          className="mr-[12px] sm:mr-[4px] md:mr-[6px] text-center"
                          alt="location"
                        />
                      }
                      variant="OutlineWhiteA700"
                    >
                      <div className="bg-transparent cursor-pointer font-normal not-italic text-[18px] text-white_A700">
                        Московское шоссе, 41
                      </div>
                    </Button>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[16px] ml-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                      <Img
                        src="images/img_call.svg"
                        className="flex-shrink-0 md:h-[11px] h-[20px] sm:h-[8px] max-w-[100%] mt-[1px] md:w-[10px] w-[20px] sm:w-[7px]"
                        alt="call"
                      />
                      <Text
                        className="flex-grow font-normal mb-[1px] ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-white_A700"
                        variant="body11"
                      >
                        +7 (846) 372-72-72
                      </Text>
                    </Row>
                  </Row>
                </header>
                <Column className="flex flex-col font-circe justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                  <Line className="bg-white_A700 h-[1px] w-[100%]" />
                  <Column className="flex flex-col justify-start max-w-[478px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[33%]">
                      <a
                        href={"javascript:"}
                        className="font-normal mb-[1px] not-italic text-[15px] text-white_A700 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Главная
                      </a>
                      <div className="bg-white_A700 sm:h-[2px] md:h-[3px] h-[4px] mb-[4px] md:ml-[11px] ml-[22px] sm:ml-[8px] sm:mt-[3px] md:mt-[4px] mt-[9px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                      <Text
                        className="md:ml-[10px] ml-[21px] sm:ml-[8px] not-italic text-white_A700 w-[auto]"
                        variant="body15"
                      >
                        Новости
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-start justify-between sm:mt-[28px] md:mt-[36px] mt-[71px] w-[100%]">
                      <Text
                        className="not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Новости
                      </Text>
                      <Text
                        className="md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-amber_A400 w-[auto]"
                        variant="body3"
                      >
                        18 июня 2021
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center md:px-[117px] sm:px-[15px] px-[228px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[657px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="bg-amber_A400 flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[27px] sm:w-[100%] w-[18%]">
                <Text
                  className="font-normal mb-[1px] not-italic text-black_900 w-[auto]"
                  variant="body9"
                >
                  ВСЕ
                </Text>
              </Column>
              <Text
                className="font-normal sm:ml-[17px] md:ml-[22px] ml-[43px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                от РДЦ
              </Text>
              <Text
                className="font-normal sm:ml-[33px] md:ml-[43px] ml-[84px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Новости арендаторов
              </Text>
              <Text
                className="font-normal sm:ml-[33px] md:ml-[43px] ml-[84px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                СМИ о нас
              </Text>
            </Row>
          </Row>
          <List
            className="font-circe sm:gap-[14px] md:gap-[18px] gap-[36px] grid max-w-[1462px] min-h-[auto] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="vertical"
          >
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] md:p-[13px] sm:p-[15px] p-[26px] sm:w-[100%] w-[49%]"
                style={{ backgroundImage: "url('images/img_1_482X713.png')" }}
              >
                <Column className="flex flex-col items-center justify-start sm:mt-[115px] md:mt-[149px] mt-[289px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-bold leading-[120.00%] sm:mx-[0] text-white_A700 sm:w-[100%] w-[98%]"
                    variant="body7"
                  >
                    В РДЦ появились свободные торговые площади и офисы для
                    аренды.
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[43px] w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-white_A700 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Img
                            src="images/img_calendar.svg"
                            className="flex-shrink-0 max-w-[100%] w-[12%]"
                            alt="calendar"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-white_A700"
                            variant="body16"
                          >
                            21 апреля 2021 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[20px] ml-[40px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_eye.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[42%]"
                            alt="eye"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-white_A700"
                            variant="body16"
                          >
                            120
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    РДЦ выступил партнером XII Ежегодной офисной конференции
                    <br />
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[13%]"
                            alt="calendar One"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            21 марта 2021 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[24px] ml-[48px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[44%]"
                            alt="eye One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            261
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32_229X339.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo One"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    Арендатор РДЦ – компания «Водоходъ», открывает Центр продаж
                    на 1 этаже
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[11%]"
                            alt="calendar Two"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            18 февраля 2021 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[15px] ml-[30px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[41%]"
                            alt="eye Two"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            350
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32_1.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo One"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    В РДЦ прошла международная встреча акционеров АО «САНЕКО»
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[12%]"
                            alt="calendar One"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            14 января 2021 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[21px] ml-[41px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[42%]"
                            alt="eye One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            163
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32_2.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo One One"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    Лифты Schindler обеспечивают безопасное, комфортное
                    передвижение пассажиров с максимальной эффективностью.
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[29px] mt-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[12%]"
                            alt="calendar One One"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            1 декабря 2020 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[19px] ml-[38px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[25%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[40%]"
                            alt="eye One One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            284
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32_3.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo Two"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    Ваша переговорная – средоточие деловой жизни офиса. Это
                    небольшое помещение открывает большие возможности для
                    развития вашей фирмы.{" "}
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[18px] mt-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[12%]"
                            alt="calendar Two One"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            2 ноября 2020 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[21px] ml-[42px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[42%]"
                            alt="eye Two One"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            318
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                <Img
                  src="images/img_rectangle32_4.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyTwo Three"
                />
                <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                  <Text
                    className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                    variant="body11"
                  >
                    Кафе «Своя Тарелка» приглашает на корпоративные обеды, а
                    также предлагает доставку в ваш офис
                  </Text>
                  <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Line className="bg-black_900 h-[1px] w-[100%]" />
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[66%]">
                          <Img
                            src="images/img_calendar_16X15.svg"
                            className="flex-shrink-0 max-w-[100%] w-[11%]"
                            alt="calendar Three"
                          />
                          <Text
                            className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                            variant="body16"
                          >
                            24 сентября 2021 г.
                          </Text>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[12px] ml-[24px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Img
                            src="images/img_eye_12X21.svg"
                            className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[41%]"
                            alt="eye Three"
                          />
                          <Text
                            className="flex-grow font-normal not-italic text-black_900"
                            variant="body16"
                          >
                            407
                          </Text>
                        </Row>
                      </Row>
                    </Column>
                  </Column>
                </Column>
              </Column>
            </Row>
          </List>
          <Button
            className="flex items-center justify-center md:mt-[35px] min-w-[18%] mt-[69px] sm:mt-[27px] text-center w-[max-content]"
            leftIcon={
              <Img
                src="images/img_refresh.svg"
                className="mr-[16px] sm:mr-[6px] md:mr-[8px] text-center"
                alt="refresh"
              />
            }
          >
            <div className="bg-transparent cursor-pointer font-bold text-[16px] text-black_900 uppercase">
              Загрузить еще новости
            </div>
          </Button>
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-end mt-[100px] sm:mt-[39px] md:mt-[51px] sm:p-[15px] md:p-[161px] p-[313px] w-[100%]"
            style={{ backgroundImage: "url('images/img_office101400.png')" }}
          >
            <Column className="flex flex-col items-center justify-start max-w-[434px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="bg-amber_A400_ab flex flex-col items-center justify-end sm:p-[15px] md:p-[22px] p-[44px] w-[100%]">
                <Text
                  className="font-bold font-verdana leading-[140.00%] mt-[11px] sm:mt-[4px] md:mt-[5px] sm:mx-[0] text-center text-shadow-ts text-white_A700 sm:w-[100%] w-[94%]"
                  variant="body1"
                >
                  <span className="text-white_A700 text-[40px] font-pfdindisplaypro font-normal sm:text-[15px] md:text-[20px] not-italic">
                    Аренда офисов
                    <br />
                    от 10 м
                  </span>
                  <span className="text-white_A700 text-[40px] font-pfdindisplaypro font-normal sm:text-[15px] md:text-[20px] not-italic">
                    2{" "}
                  </span>
                  <span className="text-white_A700 text-[40px] font-pfdindisplaypro font-normal sm:text-[15px] md:text-[20px] not-italic">
                    до 1350 м
                  </span>
                  <span className="text-white_A700 text-[40px] font-pfdindisplaypro font-normal sm:text-[15px] md:text-[20px] not-italic">
                    2
                  </span>
                </Text>
                <Button
                  className="cursor-pointer font-bold font-pfdindisplaypro min-w-[55%] sm:mt-[12px] md:mt-[16px] mt-[32px] text-[16px] text-black_900 text-center uppercase w-[max-content]"
                  variant="FillWhiteA700"
                >
                  Выбрать офис
                </Button>
              </Column>
            </Column>
          </Column>
          <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-end sm:p-[15px] md:p-[33px] p-[65px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1462px] ml-[auto] mr-[auto] mt-[3px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h3"
                  variant="h3"
                >
                  Заинтересованы?
                </Text>
                <Text
                  className="md:mt-[11px] mt-[23px] sm:mt-[9px] not-italic text-black_900 w-[auto]"
                  variant="body17"
                >
                  +7 (846) 372-72-72
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                  <Input
                    className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                    wrapClassName="md:mt-[7px] mt-[14px] sm:mt-[5px] sm:mx-[0] sm:w-[100%] w-[24%]"
                    name="GroupNinetyOne"
                    placeholder="Ваше имя"
                  ></Input>
                  <Input
                    className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                    wrapClassName="md:mt-[7px] mt-[14px] sm:mt-[5px] sm:mx-[0] sm:w-[100%] w-[24%]"
                    name="GroupNinetyTwo"
                    placeholder="Ваш телефон"
                    size="md"
                  ></Input>
                  <Button className="cursor-pointer font-bold mb-[2px] min-w-[20%] text-[16px] text-black_900 text-center uppercase w-[max-content]">
                    перезвоните мне
                  </Button>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
                    <div className="border-2 border-amber_A400 border-solid sm:h-[13px] md:h-[17px] h-[31px] sm:w-[12px] md:w-[16px] w-[31px]"></div>
                    <Text
                      className="font-normal ml-[15px] sm:ml-[5px] md:ml-[7px] not-italic text-black_900 w-[auto]"
                      variant="body14"
                    >
                      Я согласен на обработку моих персональных данных
                    </Text>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
          <footer className="font-pfdindisplaypro w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1920px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
              <Column className="bg-gray_900 flex flex-col items-center justify-start md:py-[13px] sm:py-[15px] py-[26px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mb-[11px] md:mb-[14px] mb-[28px] w-[100%]">
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Text
                      className="font-normal not-italic text-white_A700 w-[auto]"
                      variant="body9"
                    >
                      О центре Новости Наши арендаторы Аренда офисов Сервис
                      Инфраструктура Паркинг Контакты
                      <br />
                    </Text>
                    <Line className="bg-white_A700 h-[1px] md:mt-[12px] mt-[25px] sm:mt-[9px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[21px] md:mt-[27px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[77%]">
                      <Column className="flex flex-col font-pfdindisplaypro sm:mx-[0] sm:pb-[2px] md:pb-[3px] pb-[6px] sm:px-[0] sm:w-[100%] w-[22%] common-column-list">
                        <ul className="flex flex-col">
                          <li className="w-[100%] max-w-[100%]">
                            <Img
                              src="images/img_logo.svg"
                              className="cursor-pointer max-w-[100%]"
                              alt="logo One"
                            />
                          </li>
                          <li className="w-[94%] mt-[34px] ml-[3px] sm:mt-[13px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[17px] flex-row flex">
                            <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
                              <Img
                                src="images/img_location.svg"
                                className="flex-shrink-0 max-w-[100%] w-[7%]"
                                alt="location One"
                              />
                              <Text
                                className="flex-grow ml-[15px] sm:ml-[5px] md:ml-[7px] not-italic text-white_A700 uppercase"
                                variant="body6"
                              >
                                Московское шоссе, 41
                              </Text>
                            </Row>
                          </li>
                          <li className="w-[73%] mt-[32px] sm:mt-[12px] sm:w-[100%] sm:mx-[0] sm:px-[0] md:mt-[16px] flex-row flex">
                            <Row className="cursor-pointer flex flex-row md:flex-wrap sm:flex-wrap items-center">
                              <Img
                                src="images/img_call.svg"
                                className="flex-shrink-0 sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                                alt="call One"
                              />
                              <Text
                                className="flex-grow ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-white_A700 uppercase"
                                variant="body6"
                              >
                                +7 (846) 372-72-72
                              </Text>
                            </Row>
                          </li>
                        </ul>
                      </Column>
                      <Text
                        className="font-circe font-normal leading-[160.00%] ml-[180px] md:ml-[92px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[66%]"
                        variant="body11"
                      >
                        Офисный центр премиум-класса для крупных региональных,
                        федеральных и иностранных компаний. Один из немногих
                        центров деловой недвижимости в Самаре, где сочетается
                        высокий уровень объекта, престижность, выгодность его
                        расположения и доступность транспортных магистралей.
                        Общая площадь РДЦ- 13500 кв.м. Высокая транспортная
                        доступность, современное оснащение здания, комплекс
                        услуг управляющей компании, услуги наших арендаторов,
                        внутренняя система коммуникаций призваны экономить ваше
                        время секунду за секундой. А чем быстрее вы закрываете
                        рабочие задачи, тем больше зарабатывает ваша компания.{" "}
                        <br />
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
              <Column className="bg-black_901 flex flex-col font-circe items-center justify-start md:p-[11px] sm:p-[15px] p-[23px] w-[100%]">
                <Column className="flex flex-col items-center justify-start mb-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                    <Text
                      className="font-normal sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-white_A700 w-[auto]"
                      variant="body14"
                    >
                      © 2021 «Региональный Деловой Центр»
                    </Text>
                    <a
                      href={"javascript:"}
                      className="font-normal sm:ml-[131px] md:ml-[169px] ml-[329px] sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-[16px] text-white_A700 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Политика конфиденциальности
                    </a>
                    <a
                      href={"javascript:"}
                      className="font-normal sm:ml-[129px] md:ml-[166px] ml-[323px] sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-[16px] text-white_A700 underline w-[auto]"
                      rel="noreferrer"
                    >
                      Разработка и сопровождение
                    </a>
                    <Img
                      src="images/img_eye_34X65.svg"
                      className="max-w-[100%] md:ml-[10px] ml-[20px] sm:ml-[7px] w-[5%]"
                      alt="eye Two"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default NewsPage;
