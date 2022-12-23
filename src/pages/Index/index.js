import React from "react";

import {
  Column,
  Row,
  Img,
  Button,
  Text,
  Line,
  List,
  Stack,
  Input,
} from "components";

const IndexPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_main.png')" }}
        >
          <Column className="bg-gradient  flex flex-col items-center justify-end sm:pt-[11px] md:pt-[15px] pt-[30px] md:px-[15px] sm:px-[15px] px-[30px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1464px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <header className="w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap w-[100%] common-row-list">
                  <ul className="flex flex-row items-center">
                    <li className="w-[22%] sm:w-[100%] sm:my-[10px] max-w-[100%]">
                      <Img
                        src="images/img_logo.svg"
                        className="max-w-[100%]"
                        alt="logo"
                      />
                    </li>
                    <li className="w-[4%] mt-[10px] mb-[11px] ml-[61px] sm:ml-[24px] sm:mb-[10px] sm:w-[100%] md:ml-[31px] md:my-[5px] max-w-[100%]">
                      <Img
                        src="images/img_menu.svg"
                        className="sm:h-[21px] md:h-[27px] h-[52px] max-w-[100%] sm:w-[20px] md:w-[26px] w-[52px]"
                        alt="menu"
                      />
                    </li>
                    <li className="w-[35%] ml-[32px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[16px] md:my-[12px] flex-row flex my-[24px]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center">
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal not-italic text-[18px] text-white_A700 underline w-[auto]"
                          rel="noreferrer"
                        >
                          Новости
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:ml-[15px] md:ml-[19px] ml-[38px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                          rel="noreferrer"
                        >
                          Наши арендаторы
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:ml-[15px] md:ml-[19px] ml-[38px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                          rel="noreferrer"
                        >
                          Аренда офисов
                        </a>
                        <a
                          href={"javascript:"}
                          className="cursor-pointer font-normal sm:ml-[15px] md:ml-[19px] ml-[38px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                          rel="noreferrer"
                        >
                          Контакты
                        </a>
                      </Row>
                    </li>
                    <li className="w-[max-content] mt-[7px] mb-[8px] ml-[42px] sm:ml-[16px] sm:w-[100%] sm:my-[10px] md:ml-[21px] md:mb-[4px] md:mt-[3px] min-w-[17%] text-center">
                      <Button
                        className="flex items-center justify-center min-w-[17%] text-center w-[max-content]"
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
                    </li>
                    <li className="w-[12%] mt-[24px] mb-[28px] ml-[32px] sm:w-[100%] sm:my-[10px] sm:mx-[0] sm:px-[0] md:ml-[16px] md:mb-[14px] md:mt-[12px] flex-row flex">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start">
                        <Img
                          src="images/img_call.svg"
                          className="flex-shrink-0 md:h-[11px] h-[20px] sm:h-[8px] max-w-[100%] mt-[1px] md:w-[10px] w-[20px] sm:w-[7px]"
                          alt="call"
                        />
                        <a
                          href={"javascript:"}
                          className="cursor-pointer flex-grow font-normal mb-[1px] ml-[12px] sm:ml-[4px] md:ml-[6px] not-italic text-white_A700 hover:underline"
                          variant="body11"
                          rel="noreferrer"
                        >
                          +7 (846) 372-72-72
                        </a>
                      </Row>
                    </li>
                  </ul>
                </Row>
              </header>
              <Column className="flex flex-col justify-start sm:mt-[35px] md:mt-[45px] mt-[88px] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                  <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                    <Text
                      className="font-verdana leading-[100.00%] text-white_A700 w-[100%]"
                      as="h4"
                      variant="h4"
                    >
                      <span className="text-white_A700 text-[25px] font-pfdindisplaypro font-normal sm:text-[21px] md:text-[23px] not-italic">
                        Это –
                      </span>
                      <span className="text-white_A700 text-[20px] font-pfdindisplaypro font-normal not-italic">
                        {" "}
                        <br />
                      </span>
                      <span className="text-white_A700 text-[70px] font-pfdindisplaypro font-normal sm:text-[48px] md:text-[48px] not-italic">
                        офисный центр
                        <br />
                      </span>
                      <span className="text-white_A700 text-[70px] font-pfdindisplaypro font-normal sm:text-[48px] md:text-[48px] not-italic">
                        класса А в Самаре
                      </span>
                    </Text>
                    <Button className="cursor-pointer font-bold font-pfdindisplaypro min-w-[33%] mt-[13px] sm:mt-[5px] md:mt-[6px] text-[16px] text-black_900 text-center uppercase w-[max-content]">
                      о центре
                    </Button>
                    <Text
                      className="font-circe font-normal leading-[140.00%] sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[78%]"
                      variant="body11"
                    >
                      Сочетание современного дизайна, эффективных инженерных
                      решений, комфортной среды и профессионального сервиса
                    </Text>
                  </Column>
                  <a
                    href={"javascript:"}
                    className="font-normal leading-[140.00%] ml-[112px] md:ml-[57px] sm:mx-[0] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-white_A700 underline sm:w-[100%] w-[15%]"
                    rel="noreferrer"
                  >
                    Географический
                    <br />
                    центр города
                  </a>
                  <a
                    href={"javascript:"}
                    className="font-normal leading-[140.00%] ml-[136px] md:ml-[70px] sm:mx-[0] not-italic sm:text-[21px] md:text-[23px] text-[25px] text-white_A700 underline sm:w-[100%] w-[22%]"
                    rel="noreferrer"
                  >
                    Полный спектр
                    <br />
                    профессиональных услуг
                  </a>
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[173px] sm:mt-[69px] md:mt-[89px] w-[100%]">
                  <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] rounded-radius20 sm:w-[100%] w-[8%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                        <Column className="border-2 border-solid border-white_A700 flex flex-col items-center sm:mx-[0] md:p-[4px] p-[8px] sm:px-[0] sm:py-[3px] rounded-radius10 sm:w-[100%] w-[19%]">
                          <div className="bg-amber_A400 sm:h-[3px] md:h-[4px] h-[7px] sm:mb-[3px] md:mb-[4px] mb-[8px] rounded-radius2 w-[100%]"></div>
                        </Column>
                        <a
                          href={"javascript:"}
                          className="font-bold ml-[13px] sm:ml-[5px] md:ml-[6px] text-[16px] text-white_A700 underline w-[auto]"
                          rel="noreferrer"
                        >
                          Подробнее
                        </a>
                      </Row>
                      <Line className="bg-white_A700 sm:h-[26px] md:h-[34px] h-[64px] ml-[10px] sm:ml-[3px] md:ml-[5px] sm:mr-[39px] md:mr-[51px] mr-[99px] sm:mt-[11px] md:mt-[14px] mt-[29px] w-[2px]" />
                    </Column>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:w-[100%] w-[33%]"
                    style={{
                      backgroundImage: "url('images/img_btnoffices.png')",
                    }}
                  >
                    <Column className="bg-amber_A400_9e flex flex-col items-center justify-start sm:p-[15px] md:p-[22px] p-[43px] w-[100%]">
                      <Text
                        className="font-normal leading-[140.00%] sm:mx-[0] not-italic text-black_900 text-center sm:w-[100%] w-[67%]"
                        variant="body1"
                      >
                        <span className="text-black_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          Аренда офисов
                          <br />
                          от 500 руб./м
                        </span>
                        <span className="text-black_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          2
                        </span>
                      </Text>
                    </Column>
                  </Column>
                </Row>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700 flex flex-col items-end justify-start md:p-[10px] sm:p-[15px] p-[20px] w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1671px] ml-[auto] mr-[auto] sm:mx-[0] sm:my-[19px] md:my-[24px] my-[48px] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                as="h3"
                variant="h3"
              >
                Новости{" "}
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[17px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                <Text
                  className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-amber_A400 w-[auto]"
                  variant="body9"
                >
                  ВСЕ
                </Text>
                <Text
                  className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                  variant="body9"
                >
                  от РДЦ
                </Text>
                <Text
                  className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                  variant="body9"
                >
                  Новости арендаторов
                </Text>
                <Text
                  className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                  variant="body9"
                >
                  СМИ о нас
                </Text>
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[52px] items-center justify-center sm:ml-[328px] md:ml-[424px] ml-[823px] rotate-[180deg] rounded-radius50 sm:w-[20px] md:w-[26px] w-[52px]"
                  size="mdIcn"
                  variant="icbFillBlack90063"
                >
                  <Img
                    src="images/img_arr.svg"
                    className="flex items-center justify-center"
                    alt="Arr"
                  />
                </Button>
                <Button
                  className="flex sm:h-[21px] md:h-[27px] h-[52px] items-center justify-center md:ml-[10px] ml-[20px] sm:ml-[7px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[52px]"
                  size="mdIcn"
                  variant="icbFillAmberA400"
                >
                  <Img
                    src="images/img_arr.svg"
                    className="flex items-center justify-center"
                    alt="Arr One"
                  />
                </Button>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start justify-between sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                <List
                  className="sm:gap-[14px] md:gap-[18px] gap-[36px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 min-h-[auto] sm:w-[100%] w-[88%]"
                  orientation="horizontal"
                >
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]"
                    style={{
                      backgroundImage: "url('images/img_1_482X713.png')",
                    }}
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
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
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
                  <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
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
                        Арендатор РДЦ – компания «Водоходъ», открывает Центр
                        продаж на 1 этаже
                      </Text>
                      <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                        <Column className="flex flex-col justify-start w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                              <Img
                                src="images/img_calendar_16X15.svg"
                                className="flex-shrink-0 max-w-[100%] w-[12%]"
                                alt="calendar Two"
                              />
                              <Text
                                className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                                variant="body16"
                              >
                                21 февраля 2021 г.
                              </Text>
                            </Row>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[16px] ml-[31px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
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
                </List>
                <Img
                  src="images/img_pagination.svg"
                  className="max-w-[100%] sm:mt-[32px] md:mt-[41px] mt-[81px] w-[2%]"
                  alt="pagination"
                />
              </Row>
              <Button className="cursor-pointer font-bold min-w-[18%] sm:ml-[234px] md:ml-[303px] ml-[588px] sm:mt-[27px] md:mt-[35px] mt-[69px] text-[16px] text-black_900 text-center uppercase w-[max-content]">
                посмотреть все новости
              </Button>
            </Column>
          </Column>
        </Column>
        <Row className="bg-gray_900 flex flex-row md:flex-wrap sm:flex-wrap items-center sm:p-[15px] md:p-[19px] p-[37px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1460px] md:ml-[97px] ml-[auto] mr-[auto] mt-[3px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center ml-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                <Text
                  className="leading-[110.00%] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[50%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-white_A700 text-[70px] font-pfdindisplaypro font-normal sm:text-[48px] md:text-[48px]">
                    класс «А»
                    <br />
                  </span>
                  <span className="text-gray_500 text-[20px] font-pfdindisplaypro font-normal">
                    подтвержденная категория
                  </span>
                </Text>
                <Text
                  className="leading-[110.00%] md:ml-[36px] ml-[70px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[38%]"
                  as="h3"
                  variant="h3"
                >
                  <span className="text-white_A700 text-[70px] font-pfdindisplaypro font-normal sm:text-[48px] md:text-[48px]">
                    1-8
                    <br />
                  </span>
                  <span className="text-gray_500 text-[20px] font-pfdindisplaypro font-normal">
                    этажей и цокольный этаж
                  </span>
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[18px] mt-[35px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[12px] sm:mt-[4px] md:mt-[6px] w-[3%]"
                  alt="LineThree"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[11px] ml-[22px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Удобный доступ к главным артериям города: Московское шоссе и
                  ул. Ново-Садовая. Меньше времени на дорогу, больше – на
                  развитие бизнеса.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[12px] sm:mt-[4px] md:mt-[6px] w-[3%]"
                  alt="LineThree One"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[11px] ml-[22px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Панорамное остекление с видом на деловую часть Самары, реку
                  Волга и Жигулевские горы
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Two"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Высота потолков от 3,3 до 5,1 метров соответствует стандартам
                  элитной коммерческой недвижимости.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Three"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Итальянский дизайн интерьеров, современные планировочные
                  решения создают идеальные условия для продуктивной работы,
                  вдохновляют и заряжают энергией.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Four"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Центральное кондиционирование «Daikin», приточно-вытяжная
                  вентиляция «Vts Clima» и регулируемая система отопления
                  создают безупречный комфорт.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Five"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  4 пассажирских швейцарских лифта Schindler и 1 грузовой
                  позволяют разделить потоки резидентов центра и соответствовать
                  современным требованиям профилактики инфекционных болезней.{" "}
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Six"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Спринклерная водонаполненная система пожаротушения «Grundfos»,
                  интеллектуальная система управления зданием «Simens Building
                  Technologies», видеомониторинг периметра и внутренних зон
                  эффективно обеспечивают безопасность.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Seven"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  Оптоволоконный доступ в Интернет и неограниченное количество
                  телефонных номеров позволяют всегда оставаться на связи.
                </Text>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                <Img
                  src="images/img_line3.svg"
                  className="flex-shrink-0 max-w-[100%] mt-[13px] sm:mt-[5px] md:mt-[6px] w-[3%]"
                  alt="LineThree Eight"
                />
                <Text
                  className="flex-grow font-normal leading-[120.00%] md:ml-[12px] ml-[25px] sm:mx-[0] not-italic text-white_A700"
                  variant="body11"
                >
                  У РДЦ расположена собственная малая парковка для арендаторов
                  на 382 машиноместа + большая парковка на 500 машиномест
                </Text>
              </Row>
            </Column>
            <Img
              src="images/img_ill.svg"
              className="max-w-[100%] sm:ml-[14px] md:ml-[19px] ml-[37px] sm:w-[100%] w-[49%]"
              alt="ill"
            />
          </Row>
        </Row>
        <Column className="flex flex-col items-center justify-start max-w-[1464px] ml-[auto] mr-[auto] sm:mt-[27px] md:mt-[35px] mt-[69px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col justify-start w-[100%]">
            <Text
              className="ml-[1px] not-italic text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Сервис
            </Text>
            <List
              className="font-circe sm:gap-[14px] md:gap-[18px] gap-[36.69px] grid min-h-[auto] md:mt-[12px] mt-[25px] sm:mt-[9px] w-[100%]"
              orientation="vertical"
            >
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] md:p-[10px] sm:p-[15px] p-[21px] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group100.png')" }}
                >
                  <Text
                    className="font-bold leading-[140.00%] md:ml-[4px] ml-[9px] mt-[187px] sm:mt-[74px] md:mt-[96px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[46%]"
                    variant="body11"
                  >
                    Рецепция и зона ожидания для гостей
                  </Text>
                </Column>
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] sm:p-[2px] md:p-[3px] p-[7px] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group101.png')" }}
                >
                  <Text
                    className="font-bold leading-[140.00%] md:ml-[11px] ml-[22px] md:mt-[103px] mt-[200px] sm:mt-[79px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[78%]"
                    variant="body11"
                  >
                    Клининг, дезинфекция офисов, уход за растениями
                    <br />
                  </Text>
                </Column>
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] md:p-[10px] sm:p-[15px] p-[21px] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group102.png')" }}
                >
                  <Text
                    className="font-bold leading-[140.00%] md:ml-[4px] ml-[9px] mt-[187px] sm:mt-[74px] md:mt-[96px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[72%]"
                    variant="body11"
                  >
                    Проведение плановых и текущих ремонтных работ
                  </Text>
                </Column>
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] md:p-[11px] sm:p-[15px] p-[22px] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group105.png')" }}
                >
                  <Text
                    className="font-bold sm:ml-[2px] md:ml-[3px] ml-[7px] md:mt-[109px] mt-[213px] sm:mt-[85px] text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    Круглосуточная охрана помещений{" "}
                  </Text>
                </Column>
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group104.png')" }}
                >
                  <Column className="bg-gradient1  flex flex-col items-center justify-end md:p-[11px] p-[22px] sm:px-[15px] sm:py-[8px] w-[100%]">
                    <Text
                      className="font-bold leading-[140.00%] mt-[184px] sm:mt-[73px] md:mt-[94px] sm:mx-[0] text-white_A700 sm:w-[100%] w-[93%]"
                      variant="body11"
                    >
                      Система автоматического распознавания
                      <br />
                      гос номеров автомобилей
                    </Text>
                  </Column>
                </Column>
                <Column
                  className="bg-cover bg-no-repeat flex flex-col sm:mx-[0] md:p-[11px] sm:p-[15px] p-[22px] sm:w-[100%] w-[32%]"
                  style={{ backgroundImage: "url('images/img_group103.png')" }}
                >
                  <Text
                    className="font-bold sm:ml-[2px] md:ml-[3px] ml-[7px] md:mt-[107px] mt-[208px] sm:mt-[83px] text-white_A700 w-[auto]"
                    variant="body11"
                  >
                    Выделение гостевых парковочных мест
                  </Text>
                </Column>
              </Row>
            </List>
            <Button className="cursor-pointer font-bold min-w-[18%] sm:ml-[242px] md:ml-[313px] ml-[607px] sm:mt-[14px] md:mt-[18px] mt-[36px] text-[16px] text-black_900 text-center uppercase w-[max-content]">
              Подробнее о сервисе
            </Button>
          </Column>
        </Column>
        <Column
          className="bg-cover bg-no-repeat flex flex-col justify-end sm:mt-[27px] md:mt-[35px] mt-[68px] p-[148px] sm:p-[15px] md:p-[76px] w-[100%]"
          style={{ backgroundImage: "url('images/img_map.png')" }}
        >
          <Column className="flex flex-col items-center justify-start max-w-[1142px] md:ml-[41px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
              <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col justify-start sm:mx-[0] sm:p-[15px] p-[18px] md:p-[9px] sm:w-[100%] w-[33%]">
                <Text
                  className="ml-[12px] sm:ml-[4px] md:ml-[6px] mt-[13px] sm:mt-[5px] md:mt-[6px] not-italic text-black_900 w-[auto]"
                  variant="body4"
                >
                  Инфраструктура
                </Text>
                <Column className="flex flex-col items-center justify-start md:mb-[11px] mb-[23px] sm:mb-[9px] md:ml-[3px] ml-[7px] sm:mt-[12px] md:mt-[16px] mt-[32px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center w-[100%]">
                    <Img
                      src="images/img_7.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="Seven One"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Прогулки и парки
                    </Text>
                    <Text
                      className="font-normal ml-[115px] sm:ml-[45px] md:ml-[59px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      4
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_3.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="Three One"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Банки и обмены валют
                    </Text>
                    <Text
                      className="font-normal sm:ml-[29px] md:ml-[37px] ml-[73px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      9
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_settings.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="settings"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Рестораны и кафе
                    </Text>
                    <Text
                      className="font-normal ml-[103px] sm:ml-[41px] md:ml-[53px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      10
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_airplane.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="airplane"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Спортивные центры
                    </Text>
                    <Text
                      className="font-normal sm:ml-[38px] md:ml-[50px] ml-[97px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      7
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_computer.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="computer"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Продуктовые магазины
                    </Text>
                    <Text
                      className="font-normal sm:ml-[22px] md:ml-[28px] ml-[56px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      12
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_1.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="One One"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Медицинские учреждения
                    </Text>
                    <Text
                      className="font-normal sm:ml-[16px] md:ml-[21px] ml-[41px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      5
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                    <Img
                      src="images/img_car.svg"
                      className="sm:h-[16px] md:h-[21px] h-[40px] max-w-[100%] sm:w-[15px] md:w-[20px] w-[40px]"
                      alt="car"
                    />
                    <Text
                      className="font-normal ml-[17px] sm:ml-[6px] md:ml-[8px] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Платные парковки
                    </Text>
                    <Text
                      className="font-normal ml-[107px] sm:ml-[42px] md:ml-[55px] not-italic text-gray_501 w-[auto]"
                      variant="body9"
                    >
                      2
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Column className="bg-black_900_a2 flex flex-col justify-end sm:mx-[0] md:p-[14px] sm:p-[15px] p-[29px] sm:w-[100%] w-[31%]">
                <Text
                  className="ml-[1px] mt-[2px] not-italic text-white_A700 w-[auto]"
                  variant="body4"
                >
                  Чем заняться в обед?
                </Text>
                <Column className="flex flex-col justify-start md:mt-[10px] mt-[21px] sm:mt-[8px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle41.png"
                    className="max-w-[100%] w-[100%]"
                    alt="RectangleFortyOne"
                  />
                  <a
                    href={"javascript:"}
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Покататься на велосипеде в парке
                  </a>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[39px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle41_116X291.png"
                    className="max-w-[100%] w-[100%]"
                    alt="RectangleFortyOne One"
                  />
                  <a
                    href={"javascript:"}
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Поиграть в бильярд или сходить в тир
                  </a>
                </Column>
                <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[39px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle41_1.png"
                    className="max-w-[100%] w-[100%]"
                    alt="RectangleFortyOne Two"
                  />
                  <a
                    href={"javascript:"}
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-[18px] text-white_A700 underline w-[auto]"
                    rel="noreferrer"
                  >
                    Окунуться в виртуальную реальность
                  </a>
                </Column>
              </Column>
              <Img
                src="images/img_location_66X49.svg"
                className="max-w-[100%] sm:ml-[146px] md:ml-[189px] ml-[367px] sm:mt-[119px] md:mt-[154px] mt-[300px] w-[5%]"
                alt="location One"
              />
            </Row>
          </Column>
        </Column>
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Stack
            className="bg-cover bg-no-repeat h-[930px] sm:pb-[15px] md:pb-[39px] pb-[77px] sm:pl-[15px] md:pl-[39px] pl-[77px] relative w-[100%]"
            style={{ backgroundImage: "url('images/img_group36.png')" }}
          >
            <Stack className="absolute h-[852px] sm:w-[100%] w-[89%]">
              <Column className="absolute bottom-[1%] flex flex-col items-center justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Text
                    className="font-pfdindisplaypro not-italic text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Транспортная доступность
                  </Text>
                  <Text
                    className="font-circe font-normal leading-[160.00%] sm:mt-[11px] md:mt-[14px] mt-[29px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[88%]"
                    variant="body9"
                  >
                    <span className="text-white_A700 text-[20px]">
                      Бизнес-центр «Региональный Деловой Центр» расположен в
                      престижном Октябрьском районе г. Самары по адресу:{" "}
                    </span>
                    <span className="text-white_A700 text-[20px] font-bold">
                      Московское шоссе, д. 41
                      <br />
                      <br />
                    </span>
                    <span className="text-white_A700 text-[20px]">
                      Рядом с РДЦ пролегают основные транспортные артерии
                      города: Московское шоссе, ул. Авроры, ул. Советской Армии,
                      ул. Ново-Садовая, ул. Стара-Загора.
                      <br />
                      <br />
                      Удобное расположение в географическом и деловом центре
                      города обеспечивает перспективное бизнес-окружение.
                      Бизнес-центр также имеет прямой доступ к историческим и
                      промышленным районам города, междугороднему автовокзалу и
                      международному аэропорту Курумоч.
                      <br />
                    </span>
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[14px] md:mt-[19px] mt-[37px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                    <Column className="flex flex-col font-circe justify-start mb-[17px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                      <Text
                        className="not-italic text-amber_A400 w-[auto]"
                        variant="body8"
                      >
                        1. До Автовокзала
                      </Text>
                      <Line className="bg-amber_A400 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                    </Column>
                    <Text
                      className="font-pfdindisplaypro ml-[15px] sm:ml-[5px] md:ml-[7px] mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      0,7 км
                    </Text>
                  </Row>
                  <List
                    className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid min-h-[auto] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:w-[100%] w-[66%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                      <Column className="flex flex-col font-circe justify-start mb-[17px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                        <Text
                          className="not-italic text-amber_A400 w-[auto]"
                          variant="body8"
                        >
                          2. До пляжа у «Ладьи»
                        </Text>
                        <Line className="bg-amber_A400 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                      </Column>
                      <Text
                        className="font-pfdindisplaypro ml-[15px] sm:ml-[5px] md:ml-[7px] mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        5,7 км
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
                      <Column className="flex flex-col font-circe justify-start mb-[17px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Text
                          className="not-italic text-amber_A400 w-[auto]"
                          variant="body8"
                        >
                          3. До ЖД вокзала
                        </Text>
                        <Line className="bg-amber_A400 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                      </Column>
                      <Text
                        className="font-pfdindisplaypro mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700 w-[auto]"
                        variant="body3"
                      >
                        7,6 км
                      </Text>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mt-[11px] md:mt-[15px] mt-[30px] w-[100%]">
                    <Column className="flex flex-col font-circe justify-start mb-[11px] sm:mb-[4px] md:mb-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                      <Text
                        className="not-italic text-amber_A400 w-[auto]"
                        variant="body8"
                      >
                        4. До Аэропорта «Курумоч»
                      </Text>
                      <Line className="bg-amber_A400 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
                    </Column>
                    <Text
                      className="font-pfdindisplaypro mt-[19px] sm:mt-[7px] md:mt-[9px] not-italic text-white_A700 w-[auto]"
                      variant="body3"
                    >
                      46 км
                    </Text>
                  </Row>
                </Column>
              </Column>
              <Stack className="absolute h-[852px] sm:w-[100%] w-[65%]">
                <Stack className="absolute bottom-[4%] h-[822px] w-[100%]">
                  <Stack className="absolute h-[821px] top-[0] w-[100%]">
                    <Stack className="absolute h-[821px] w-[100%]">
                      <Stack className="absolute h-[803px] top-[2%] w-[100%]">
                        <Img
                          src="images/img_.png"
                          className="absolute h-[803px] max-w-[100%] top-[0] w-[100%]"
                          alt="Forty"
                        />
                        <Img
                          src="images/img__803X1090.png"
                          className="absolute bottom-[0] h-[803px] max-w-[100%] w-[100%]"
                          alt="FortyOne"
                        />
                      </Stack>
                      <Img
                        src="images/img__808X1066.png"
                        className="absolute h-[808px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[98%]"
                        alt="FortyTwo"
                      />
                    </Stack>
                    <Img
                      src="images/img__700X1088.png"
                      className="absolute bottom-[4%] h-[700px] inset-x-[0] max-w-[100%] w-[100%]"
                      alt="FortyThree"
                    />
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[92%]"
                    style={{ backgroundImage: "url('images/img_group37.png')" }}
                  >
                    <Column className="flex flex-col items-end justify-start ml-[135px] md:ml-[69px] md:mr-[280px] mr-[543px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                      <Stack className="h-[72px] relative w-[9%]">
                        <Line className="absolute bg-amber_A400 sm:h-[26px] md:h-[34px] h-[64px] right-[42%] top-[0] w-[2px]" />
                        <Column
                          className="absolute bg-cover bg-no-repeat flex flex-col justify-start p-[2px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group38.svg')",
                          }}
                        >
                          <Text
                            className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] ml-[4px] text-black_900 w-[auto]"
                            variant="body9"
                          >
                            4
                          </Text>
                        </Column>
                      </Stack>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mt-[128px] mt-[249px] sm:mt-[99px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                        <Text
                          className="flex-grow font-bold leading-[130.00%] sm:mb-[13px] md:mb-[17px] mb-[34px] sm:mx-[0] rotate-[51deg] text-white_A700"
                          variant="body9"
                        >
                          р. Волга
                        </Text>
                        <Img
                          src="images/img_location_66X49.svg"
                          className="flex-shrink-0 max-w-[100%] ml-[151px] sm:ml-[60px] md:ml-[77px] sm:mt-[16px] md:mt-[21px] mt-[41px] w-[19%]"
                          alt="location Two"
                        />
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mr-[11px] mr-[22px] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[93%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-end mb-[1px] sm:mx-[0] p-[2px] sm:w-[100%] w-[9%]"
                          style={{
                            backgroundImage: "url('images/img_group38.svg')",
                          }}
                        >
                          <Text
                            className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] mr-[4px] text-black_900 w-[auto]"
                            variant="body9"
                          >
                            2
                          </Text>
                        </Column>
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col md:ml-[118px] ml-[229px] mt-[1px] sm:mx-[0] p-[2px] sm:w-[100%] w-[9%]"
                          style={{
                            backgroundImage: "url('images/img_group38.svg')",
                          }}
                        >
                          <Text
                            className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] ml-[4px] text-black_900 w-[auto]"
                            variant="body9"
                          >
                            1
                          </Text>
                        </Column>
                      </Row>
                    </Column>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col items-end justify-start mb-[104px] sm:mb-[41px] md:mb-[53px] ml-[107px] md:ml-[55px] mt-[177px] sm:mt-[70px] md:mt-[91px] sm:mx-[0] p-[2px] sm:w-[100%] w-[3%]"
                      style={{
                        backgroundImage: "url('images/img_group38.svg')",
                      }}
                    >
                      <Text
                        className="font-bold sm:mb-[2px] md:mb-[3px] mb-[6px] mr-[4px] text-black_900 w-[auto]"
                        variant="body9"
                      >
                        3
                      </Text>
                    </Column>
                  </Column>
                </Stack>
                <Text
                  className="absolute bottom-[0] font-bold leading-[130.00%] left-[29%] sm:mx-[0] rotate-[-15deg] text-white_A700 sm:w-[100%] w-[9%]"
                  variant="body9"
                >
                  р. Самара
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Column>
        <Column className="bg-white_A700 flex flex-col items-center justify-start sm:p-[15px] md:p-[35px] p-[69px] w-[100%]">
          <Column className="flex flex-col justify-start max-w-[1463px] sm:mb-[3px] md:mb-[4px] mb-[9px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Наши арендаторы
            </Text>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[17px] sm:mt-[6px] md:mt-[8px] sm:px-[0] w-[100%]">
              <Text
                className="font-normal sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-amber_A400 w-[auto]"
                variant="body9"
              >
                ВСЕ
              </Text>
              <Text
                className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Финансы
              </Text>
              <Text
                className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Энергетика
              </Text>
              <Text
                className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Технологии
              </Text>
              <Text
                className="font-normal sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Здравоохранение
              </Text>
              <Button
                className="flex sm:h-[21px] md:h-[27px] h-[52px] items-center justify-center sm:ml-[272px] md:ml-[352px] ml-[683px] rotate-[180deg] rounded-radius50 sm:w-[20px] md:w-[26px] w-[52px]"
                size="mdIcn"
                variant="icbFillBlack90063"
              >
                <Img
                  src="images/img_arr.svg"
                  className="flex items-center justify-center"
                  alt="Arr Two"
                />
              </Button>
              <Button
                className="flex sm:h-[21px] md:h-[27px] h-[52px] items-center justify-center md:ml-[10px] ml-[20px] sm:ml-[7px] rounded-radius50 sm:w-[20px] md:w-[26px] w-[52px]"
                size="mdIcn"
                variant="icbFillAmberA400"
              >
                <Img
                  src="images/img_arr.svg"
                  className="flex items-center justify-center"
                  alt="Arr Three"
                />
              </Button>
            </Row>
            <Stack className="h-[481px] sm:mt-[14px] md:mt-[18px] mt-[36px] relative w-[100%]">
              <Stack className="absolute h-[481px] w-[100%]">
                <Stack className="absolute h-[481px] w-[100%]">
                  <Stack className="absolute h-[481px] w-[100%]">
                    <Stack className="absolute bottom-[0] h-[241px] right-[0] sm:w-[100%] w-[75%]">
                      <Stack className="absolute h-[241px] right-[0] sm:w-[100%] w-[67%]">
                        <Stack className="absolute border border-black_900 border-solid h-[241px] md:p-[30px] p-[60px] sm:px-[15px] sm:py-[23px] right-[0] sm:w-[100%] w-[50%]">
                          <Img
                            src="images/img__121X121.png"
                            className="absolute h-[121px] inset-[0] justify-center m-[auto] max-w-[100%] w-[121px] sm:w-[48px] md:w-[62px]"
                            alt="FiftyThree"
                          />
                        </Stack>
                        <Stack className="absolute border border-black_900 border-solid h-[241px] left-[0] md:p-[34px] p-[67px] sm:px-[15px] sm:py-[26px] sm:w-[100%] w-[51%]">
                          <Img
                            src="images/img_logo11.png"
                            className="absolute h-[61px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[64%]"
                            alt="logoEleven"
                          />
                        </Stack>
                      </Stack>
                      <Stack className="absolute border border-black_900 border-solid h-[241px] left-[0] md:p-[12px] p-[25px] sm:px-[15px] sm:py-[9px] w-[34%]">
                        <Img
                          src="images/img_lockobanklogo.png"
                          className="absolute h-[175px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[71%]"
                          alt="LockoBankLogo"
                        />
                      </Stack>
                    </Stack>
                    <Stack className="absolute border border-black_900 border-solid bottom-[0] h-[241px] left-[0] md:p-[35px] p-[69px] sm:px-[15px] sm:py-[27px] w-[26%]">
                      <Img
                        src="images/img_logo1.png"
                        className="absolute h-[56px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[63%]"
                        alt="logoOne"
                      />
                    </Stack>
                    <Stack className="absolute border border-black_900 border-solid h-[241px] md:p-[36px] p-[71px] sm:px-[15px] sm:py-[28px] right-[0] top-[0] w-[25%]">
                      <Img
                        src="images/img_20210625093.png"
                        className="absolute h-[59px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[61%]"
                        alt="20210625093"
                      />
                    </Stack>
                  </Stack>
                  <Stack className="absolute border border-black_900 border-solid h-[241px] md:p-[37px] p-[72px] sm:px-[15px] sm:py-[28px] right-[25%] top-[0] w-[26%]">
                    <Img
                      src="images/img_21.png"
                      className="absolute h-[68px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[61%]"
                      alt="TwentyOne Two"
                    />
                  </Stack>
                </Stack>
                <Stack className="absolute border border-black_900 border-solid h-[241px] left-[25%] md:p-[37px] p-[72px] sm:px-[15px] sm:py-[28px] top-[0] w-[26%]">
                  <Img
                    src="images/img_00205a6859a3.png"
                    className="absolute h-[38px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[61%]"
                    alt="00205a6859aThree"
                  />
                </Stack>
              </Stack>
              <Stack className="absolute border border-black_900 border-solid h-[241px] left-[0] md:p-[37px] p-[72px] sm:px-[15px] sm:py-[28px] top-[0] w-[26%]">
                <Img
                  src="images/img_rsblogo3line.png"
                  className="absolute h-[89px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[61%]"
                  alt="RSBLogo3line"
                />
              </Stack>
            </Stack>
            <Button className="cursor-pointer font-bold min-w-[24%] sm:ml-[222px] md:ml-[286px] ml-[556px] sm:mt-[23px] md:mt-[30px] mt-[60px] text-[16px] text-black_900 text-center uppercase w-[max-content]">
              Показать всех арендаторов
            </Button>
          </Column>
        </Column>
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_review.png')" }}
        >
          <Column className="bg-amber_A400_a2 flex flex-col items-center justify-end sm:p-[15px] md:p-[48px] p-[93px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[965px] ml-[auto] mr-[auto] mt-[1px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Text
                className="not-italic text-white_A700 w-[auto]"
                as="h3"
                variant="h3"
              >
                Отзывы клиентов
              </Text>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[123px] sm:mt-[49px] md:mt-[63px] w-[100%]">
                <Img
                  src="images/img_logow1.png"
                  className="max-w-[100%] w-[14%]"
                  alt="logowOne"
                />
                <Img
                  src="images/img_logow2.svg"
                  className="max-w-[100%] w-[10%]"
                  alt="logowTwo"
                />
                <Img
                  src="images/img__47X133.png"
                  className="max-w-[100%] w-[14%]"
                  alt="FiftyFive"
                />
                <Img
                  src="images/img_logow1_53X133.png"
                  className="max-w-[100%] w-[14%]"
                  alt="logowOne One"
                />
                <Img
                  src="images/img_lightbulb.svg"
                  className="sm:h-[25px] md:h-[32px] h-[61px] max-w-[100%] sm:w-[24px] md:w-[31px] w-[61px]"
                  alt="lightbulb"
                />
                <Img
                  src="images/img_logowoma1.svg"
                  className="max-w-[100%] w-[18%]"
                  alt="logowOmaOne"
                />
              </Row>
              <Column className="flex flex-col font-circe items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[42px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[82%]">
                <Text
                  className="font-bold leading-[140.00%] text-center text-white_A700 w-[100%]"
                  variant="body9"
                >
                  «Офис компании Asset располагается в офисном центре «РДЦ»
                  более восьми лет. За это время мы имели возможность оценить не
                  только качество помещений и инженерных решений, удобное
                  расположение и транспортную доступность, но и высокий
                  профессиональный уровень сотрудников арендодателя, позволяющий
                  оперативно решать любые вопросы»
                </Text>
                <Line className="bg-white_A700 h-[1px] md:mt-[11px] mt-[22px] sm:mt-[8px] w-[6%]" />
                <Text
                  className="font-normal leading-[140.00%] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-center text-white_A700 w-[100%]"
                  variant="body11"
                >
                  Александр Вейлер
                  <br />
                  Генеральный директор
                  <br />
                  ООО «Asset»
                </Text>
              </Column>
              <Button
                className="cursor-pointer font-bold min-w-[30%] mt-[121px] sm:mt-[48px] md:mt-[62px] text-[16px] text-black_900 text-center uppercase w-[max-content]"
                variant="FillWhiteA700"
              >
                Показать все отзывы
              </Button>
            </Column>
          </Column>
        </Column>
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-end sm:p-[15px] md:p-[161px] p-[313px] w-[100%]"
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
        <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] md:p-[33px] p-[65px] w-[100%]">
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
        <footer className="w-[100%]">
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
                              alt="location Three"
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
                      расположения и доступность транспортных магистралей. Общая
                      площадь РДЦ- 13500 кв.м. Высокая транспортная доступность,
                      современное оснащение здания, комплекс услуг управляющей
                      компании, услуги наших арендаторов, внутренняя система
                      коммуникаций призваны экономить ваше время секунду за
                      секундой. А чем быстрее вы закрываете рабочие задачи, тем
                      больше зарабатывает ваша компания. <br />
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
                    alt="eye Three"
                  />
                </Row>
              </Column>
            </Column>
          </Column>
        </footer>
      </Column>
    </>
  );
};

export default IndexPage;
