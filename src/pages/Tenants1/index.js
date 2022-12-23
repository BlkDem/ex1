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

const Tenants1Page = () => {
  function handleNavigate() {
    window.location.href = "www.samara-rdc.ru/loko-bank";
  }
  function handleNavigate1() {
    window.location.href = "www.lockobank.ru";
  }

  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_header.png')" }}
          >
            <Column className="bg-gray_900_a2 flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] w-[100%]">
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
                    <Stack className="h-[42px] sm:ml-[12px] md:ml-[16px] ml-[32px] relative w-[35%]">
                      <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap inset-y-[19%] w-[100%] common-row-list">
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
                        className="absolute cursor-pointer font-normal left-[16%] min-w-[36%] not-italic text-[18px] text-black_900 text-center w-[max-content]"
                        size="sm"
                        variant="FillWhiteA700"
                      >
                        Наши арендаторы
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
                <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                  <Line className="bg-white_A700 h-[1px] w-[100%]" />
                  <Column className="flex flex-col justify-start max-w-[624px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[68%]">
                      <a
                        href={"javascript:"}
                        className="font-normal not-italic text-[15px] text-white_A700 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Главная
                      </a>
                      <div className="bg-white_A700 sm:h-[2px] md:h-[3px] h-[4px] md:ml-[11px] ml-[22px] sm:ml-[8px] sm:my-[3px] md:my-[4px] my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                      <a
                        href={"javascript:"}
                        className="font-normal md:ml-[10px] ml-[21px] sm:ml-[8px] not-italic text-[15px] text-white_A700 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Наши арендаторы
                      </a>
                      <div className="bg-white_A700 sm:h-[2px] md:h-[3px] h-[4px] md:ml-[10px] ml-[21px] sm:ml-[8px] sm:my-[3px] md:my-[4px] my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                      <Text
                        className="md:ml-[10px] ml-[21px] sm:ml-[8px] not-italic text-white_A700 w-[auto]"
                        variant="body15"
                      >
                        АО «КБ ЛОКО-БАНК»
                      </Text>
                    </Row>
                    <Text
                      className="font-pfdindisplaypro sm:mt-[25px] md:mt-[33px] mt-[65px] not-italic text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      АО «КБ ЛОКО-БАНК»
                    </Text>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <Text
            className="md:ml-[118px] ml-[229px] sm:ml-[91px] sm:mt-[30px] md:mt-[39px] mt-[76px] not-italic text-black_900 w-[auto]"
            as="h6"
            variant="h6"
          >
            АО «КБ ЛОКО-БАНК»
          </Text>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1214px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[24px] md:mt-[32px] mt-[62px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Логотип компании
              </Text>
              <Stack className="border border-black_900 border-solid h-[241px] md:mt-[12px] mt-[24px] sm:mt-[9px] md:p-[12px] p-[25px] sm:px-[15px] sm:py-[9px] relative w-[100%]">
                <Img
                  src="images/img_lockobanklogo.png"
                  className="absolute h-[175px] inset-x-[0] max-w-[100%] mx-[auto] sm:w-[100%] w-[71%]"
                  alt="LockoBankLogo"
                />
              </Stack>
            </Column>
            <Column className="flex flex-col justify-start md:ml-[197px] ml-[383px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[39%]">
              <Text
                className="font-pfdindisplaypro not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Данные о компании
              </Text>
              <a
                href={"https://www.lockobank.ru/"}
                target="_blank"
                className="common-pointer font-circe font-normal leading-[160.00%] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic text-[19px] text-gray_900 w-[100%]"
                onClick={handleNavigate}
                rel="noreferrer"
              >
                Категория: Финансы и кредит
                <br />
                Страница на сайте: www.samara-rdc.ru/loko-bank
                <br />
                Располжение в РДЦ: 1 этаж, 200 м2, помещение 104
              </a>
              <Button
                className="flex items-center justify-center md:mt-[9px] min-w-[73%] mt-[18px] sm:mt-[7px] text-center w-[max-content]"
                leftIcon={
                  <Img
                    src="images/img_cut.svg"
                    className="mr-[18px] sm:mr-[7px] md:mr-[9px] text-center"
                    alt="cut"
                  />
                }
              >
                <div className="bg-transparent cursor-pointer font-bold font-pfdindisplaypro text-[16px] text-black_900 uppercase">
                  Показать на плане этажа
                </div>
              </Button>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1171px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[22px] md:mt-[28px] mt-[56px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[29%]">
              <Stack className="h-[40px] relative sm:w-[100%] w-[88%]">
                <Text
                  className="absolute not-italic text-black_900 w-[auto]"
                  variant="body3"
                >
                  Контактные данные
                </Text>
                <Text
                  className="absolute not-italic text-black_900 w-[auto]"
                  variant="body3"
                >
                  Контактные данные
                </Text>
              </Stack>
              <Column className="flex flex-col font-circe items-center justify-start md:mt-[11px] mt-[22px] sm:mt-[8px] sm:px-[0] w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start w-[100%]">
                  <Column className="flex flex-col items-center justify-start mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                    <Img
                      src="images/img_globe.svg"
                      className="max-w-[100%] w-[100%]"
                      alt="globe"
                    />
                    <Img
                      src="images/img_call_24X24.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[36px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="call One"
                    />
                    <Img
                      src="images/img_clock.svg"
                      className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] sm:mt-[14px] md:mt-[18px] mt-[36px] md:w-[12px] w-[24px] sm:w-[9px]"
                      alt="clock"
                    />
                  </Column>
                  <a
                    href={"https://www.lockobank.ru/"}
                    target="_blank"
                    className="common-pointer font-normal leading-[160.00%] ml-[13px] md:ml-[6px] sm:mx-[0] not-italic text-[19px] text-gray_900 sm:w-[100%] w-[90%]"
                    onClick={handleNavigate1}
                    rel="noreferrer"
                  >
                    www.lockobank.ru
                    <br />
                    <br />
                    8-800-250-50-50 (многоканальный)
                    <br />
                    <br />
                    Время работы:
                    <br />
                    Пн-Чт — с 9:00 до 18:00
                    <br />
                    <br />
                    Пт — с 9:00 до 17:00
                    <br />
                    <br />
                    Сб-Вс — выходной
                  </a>
                </Row>
              </Column>
            </Column>
            <Column className="flex flex-col justify-start md:ml-[212px] ml-[411px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
              <Text
                className="font-pfdindisplaypro not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Контактные лица
              </Text>
              <a
                href={"https://www.lockobank.ru/"}
                target="_blank"
                className="font-circe font-normal leading-[160.00%] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic text-[19px] text-gray_900 w-[100%]"
                rel="noreferrer"
              >
                Директор: Якушев Мирон Владимирович
                <br />
                Главный бухгалтер: Медведева Любовь Петровна
              </a>
            </Column>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1497px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[60px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col sm:mx-[0] sm:px-[0] sm:w-[100%] w-[48%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Описание
              </Text>
              <Column className="border border-gray_300 border-solid flex flex-col font-circe justify-start md:mt-[12px] mt-[24px] sm:mt-[9px] md:p-[10px] p-[20px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col justify-start sm:mb-[31px] md:mb-[40px] mb-[78px] sm:mt-[1px] md:mt-[2px] mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[88%]">
                  <Text
                    className="font-bold text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    «ЛОКО-Банк» входит в ТОП 50 крупнейших Российских Банков.
                  </Text>
                  <Text
                    className="font-normal md:mt-[11px] mt-[23px] sm:mt-[9px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Локо-Банк оказывает банковские услуги для юридических и
                    физических лиц:
                  </Text>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                    <Text
                      className="font-normal leading-[160.00%] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[49%]"
                      variant="body13"
                    >
                      Кредиты,
                      <br />
                      Вклады в рублях,
                      <br />
                      Вклады в валюте,
                      <br />
                      Накопительный счет,
                      <br />
                      Дебетовые карты,
                      <br />
                      Кредитные карты,
                      <br />
                      Переводы через СБП,
                      <br />
                      Автокредиты,
                      <br />
                      Курсы валют,
                      <br />
                      Страхование и иные услуги,
                      <br />
                      Счета,
                    </Text>
                    <Text
                      className="font-normal leading-[160.00%] md:ml-[27px] ml-[53px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[42%]"
                      variant="body13"
                    >
                      Переводы и платежи,
                      <br />
                      РКО для бизнеса,
                      <br />
                      Бизнес карта,
                      <br />
                      Банковские гарантии,
                      <br />
                      Эквайринг,
                      <br />
                      Бонусы и скидки,
                      <br />
                      Онлайн-бухгалтерия,
                      <br />
                      Регистрация бизнеса,
                      <br />
                      Валютный контроль,
                      <br />
                      Депозиты для бизнеса.
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
            <Column className="flex flex-col md:ml-[18px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Text
                className="not-italic text-black_900 w-[auto]"
                variant="body3"
              >
                Фотогалерея
              </Text>
              <Stack className="h-[482px] mt-[14px] sm:mt-[5px] md:mt-[7px] relative w-[100%]">
                <Stack className="absolute h-[482px] w-[100%]">
                  <Stack
                    className="absolute bg-cover bg-no-repeat h-[482px] left-[0] p-[15px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[96%]"
                    style={{
                      backgroundImage: "url('images/img_1_482X713.png')",
                    }}
                  >
                    <Img
                      src="images/img_image87.png"
                      className="absolute h-[173px] left-[3%] max-w-[100%] top-[0] sm:w-[100%] w-[63%]"
                      alt="imageEightySeven"
                    />
                  </Stack>
                  <Img
                    src="images/img_maskgroup.png"
                    className="absolute bottom-[2%] h-[377px] max-w-[100%] right-[0] sm:w-[100%] w-[57%]"
                    alt="MaskGroup"
                  />
                </Stack>
                <Row className="absolute bottom-[5%] flex flex-row md:flex-wrap sm:flex-wrap items-start left-[41%] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                  <Text
                    className="font-normal mb-[1px] not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    1
                  </Text>
                  <Line className="bg-black_900 h-[2px] sm:mb-[2px] md:mb-[3px] mb-[6px] md:ml-[12px] ml-[25px] sm:ml-[9px] mt-[14px] sm:mt-[5px] md:mt-[7px] w-[29%]" />
                  <Line className="bg-black_900_7e h-[2px] sm:mb-[2px] md:mb-[3px] mb-[6px] mt-[14px] sm:mt-[5px] md:mt-[7px] w-[14%]" />
                  <Text
                    className="font-normal md:ml-[10px] ml-[20px] sm:ml-[7px] not-italic text-black_900 w-[auto]"
                    variant="body9"
                  >
                    3
                  </Text>
                </Row>
              </Stack>
            </Column>
          </Row>
          <Column className="flex flex-col items-center justify-start max-w-[713px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[60px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[74%]">
                <Text
                  className="flex-grow not-italic text-black_900"
                  as="h6"
                  variant="h6"
                >
                  Новости компании
                </Text>
                <Img
                  src="images/img_group188.svg"
                  className="flex-shrink-0 max-w-[100%] sm:ml-[18px] md:ml-[24px] ml-[47px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[24%]"
                  alt="Group188"
                />
              </Row>
              <List
                className="font-circe sm:gap-[13px] md:gap-[18px] gap-[35px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] sm:mt-[16px] md:mt-[21px] mt-[41px] w-[100%]"
                orientation="horizontal"
              >
                <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_rectangle32_5.png"
                    className="max-w-[100%] w-[100%]"
                    alt="RectangleThirtyTwo"
                  />
                  <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col items-center justify-end md:p-[13px] sm:p-[15px] p-[26px] w-[100%]">
                    <Text
                      className="font-bold leading-[120.00%] mt-[14px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] text-black_900 sm:w-[100%] w-[97%]"
                      variant="body11"
                    >
                      Локо-Банк заключил сделку, позволившую легализовать
                      комплекс апартаментов Loft 17.
                    </Text>
                    <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] pb-[2px] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Line className="bg-black_900 h-[1px] w-[100%]" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                            <Img
                              src="images/img_calendar_16X15.svg"
                              className="flex-shrink-0 max-w-[100%] mb-[1px] w-[13%]"
                              alt="calendar"
                            />
                            <Text
                              className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                              variant="body16"
                            >
                              15 июня 2021 г.
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[25px] ml-[50px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                            <Img
                              src="images/img_eye_12X21.svg"
                              className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[41%]"
                              alt="eye"
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
                      Арендатор РДЦ – компания Локо-Банк, открывает Центр продаж
                      на 1 этаже
                    </Text>
                    <Column className="flex flex-col items-center justify-start sm:mt-[31px] md:mt-[41px] mt-[80px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[98%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Line className="bg-black_900 h-[1px] w-[100%]" />
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:mt-[10px] mt-[20px] sm:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[54%]">
                            <Img
                              src="images/img_calendar_16X15.svg"
                              className="flex-shrink-0 max-w-[100%] w-[13%]"
                              alt="calendar One"
                            />
                            <Text
                              className="flex-grow font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[2px] not-italic text-black_900"
                              variant="body16"
                            >
                              12 марта 2018 г.
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between md:ml-[24px] ml-[47px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[26%]">
                            <Img
                              src="images/img_eye_12X21.svg"
                              className="flex-shrink-0 max-w-[100%] w-[37%]"
                              alt="eye One"
                            />
                            <Text
                              className="flex-grow font-normal not-italic text-black_900"
                              variant="body16"
                            >
                              1672
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </Column>
              </List>
            </Column>
          </Column>
          <Column className="flex flex-col items-center justify-start max-w-[1323px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[23px] md:mt-[30px] mt-[60px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Line className="bg-gray_300 h-[1px] w-[100%]" />
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[11px] md:mt-[14px] mt-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                <Img
                  src="images/img_line3_black_900.svg"
                  className="flex-shrink-0 max-w-[100%] w-[10%]"
                  alt="LineThree"
                />
                <Text
                  className="flex-grow font-bold ml-[13px] sm:ml-[5px] md:ml-[6px] text-black_900 uppercase"
                  variant="body14"
                >
                  К списку арендаторов
                </Text>
              </Row>
            </Column>
          </Column>
          <Column className="bg-gray_50 flex flex-col items-center justify-start mt-[100px] sm:mt-[39px] md:mt-[51px] sm:p-[15px] md:p-[42px] p-[83px] w-[100%]">
            <Column className="flex flex-col items-center justify-start max-w-[1463px] mb-[17px] sm:mb-[6px] md:mb-[8px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
                  <Text
                    className="flex-grow not-italic text-black_900"
                    as="h3"
                    variant="h3"
                  >
                    Другие компании в этой категории
                  </Text>
                  <Img
                    src="images/img_group188.svg"
                    className="flex-shrink-0 max-w-[100%] w-[9%]"
                    alt="arrs"
                  />
                </Row>
                <List
                  className="sm:gap-[14px] md:gap-[19px] gap-[37px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] mt-[17px] sm:mt-[6px] md:mt-[8px] sm:w-[100%] w-[49%]"
                  orientation="horizontal"
                >
                  <Column className="bg-white_A700 flex flex-col items-center justify-end md:p-[10px] sm:p-[15px] p-[20px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start mb-[1px] sm:mt-[10px] md:mt-[13px] mt-[26px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_rsblogo3line.png"
                        className="max-w-[100%] sm:w-[100%] w-[75%]"
                        alt="RSBLogo3line"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[44px] w-[100%]">
                        <Input
                          className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group156"
                          placeholder="АО «Банк Русский Стандарт»"
                          size="lg"
                        ></Input>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-center justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Text
                            className="font-normal not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Финансы
                          </Text>
                          <Text
                            className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            4 этаж
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                  <Column className="bg-white_A700 flex flex-col items-center justify-end sm:p-[15px] p-[19px] md:p-[9px] w-[100%]">
                    <Column className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[24px] mt-[48px] sm:px-[0] w-[100%]">
                      <Img
                        src="images/img_group147_46X222.svg"
                        className="max-w-[100%] sm:w-[100%] w-[75%]"
                        alt="Group147"
                      />
                      <Column className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[65px] w-[100%]">
                        <Input
                          className="font-normal not-italic p-[0] text-[20px] placeholder:text-black_900 text-black_900 w-[100%]"
                          wrapClassName="w-[100%]"
                          name="Group158"
                          placeholder="ООО «МКК «ПРОФИРЕАЛ»"
                          size="md"
                        ></Input>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                          <Text
                            className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Займы
                          </Text>
                          <Text
                            className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Цоколь
                          </Text>
                        </Row>
                      </Column>
                    </Column>
                  </Column>
                </List>
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
                                alt="call Two"
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

export default Tenants1Page;
