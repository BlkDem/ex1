import React from "react";

import { Column, Row, Img, Button, Text, Line, List, Input } from "components";

const ServicePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center justify-start w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_header.png')" }}
          >
            <Column className="bg-gray_900_a2 flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
              <Column className="flex flex-col items-center justify-start mb-[2px] w-[100%]">
                <header className="max-w-[1463px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
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
                <Column className="flex flex-col font-circe justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                  <Line className="bg-white_A700 h-[1px] w-[100%]" />
                  <Column className="flex flex-col justify-start max-w-[953px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                      <a
                        href={"javascript:"}
                        className="font-normal not-italic text-[15px] text-white_A700 underline w-[auto]"
                        rel="noreferrer"
                      >
                        Главная
                      </a>
                      <div className="bg-white_A700 sm:h-[2px] md:h-[3px] h-[4px] md:ml-[11px] ml-[22px] sm:ml-[8px] sm:my-[3px] md:my-[4px] my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                      <Text
                        className="md:ml-[10px] ml-[21px] sm:ml-[8px] not-italic text-white_A700 w-[auto]"
                        variant="body15"
                      >
                        Сервис
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-start sm:mt-[27px] md:mt-[35px] mt-[68px] w-[100%]">
                      <Text
                        className="not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Сервис
                      </Text>
                      <Text
                        className="sm:ml-[17px] md:ml-[22px] ml-[43px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic text-amber_A400 w-[auto]"
                        variant="body3"
                      >
                        Офисный центр класса «А». Качество – во всём.
                      </Text>
                    </Row>
                  </Column>
                </Column>
              </Column>
            </Column>
          </Column>
          <List
            className="sm:gap-[24px] md:gap-[31px] gap-[60.31px] grid max-w-[1465px] min-h-[auto] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:pl-[15px] sm:pr-[15px] w-[100%]"
            orientation="vertical"
          >
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group100.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour"
                />
                <Text
                  className="font-pfdindisplaypro mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                  variant="body6"
                >
                  Рецепция и зона ожидания для гостей
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body11"
                >
                  Администраторы всегда помогут сориентироваться на территории,
                  подскажут необходимую информацию. На 1 этаже размещены кофейня
                  с мягкой зоной, буфет с обеденной зоной, в цоколе расположена
                  столовая «Своя тарелка». Посетители могут воспользоваться
                  бесплатным Wi-Fi в зоне ожидания 1 этажа.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group101.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour One"
                />
                <Text
                  className="font-pfdindisplaypro leading-[140.00%] ml-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body6"
                >
                  Клининг, дезинфекция офисов, уход за растениями
                  <br />
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] ml-[1px] mt-[10px] sm:mt-[3px] md:mt-[5px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body11"
                >
                  Квалифицированный персонал и современная уборочная техника
                  позволяют поддерживать чистоту и проводить мероприятия по
                  дезинфекции в течение всего времени работы Бизнес Центра.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group102.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour Two"
                />
                <Text
                  className="font-pfdindisplaypro leading-[140.00%] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body6"
                >
                  Проведение плановых и текущих ремонтных работ
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] mt-[10px] sm:mt-[3px] md:mt-[5px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body11"
                >
                  Высококвалифицированные специалисты проводят плановые и
                  текущие ремонтные работы.
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group105.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour One"
                />
                <Text
                  className="font-pfdindisplaypro mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                  variant="body6"
                >
                  Круглосуточная охрана помещений{" "}
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body11"
                >
                  Поддержание общественного порядка осуществляет круглосуточная
                  специализированная охрана, размещенная на 1 этаже
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group104.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFive"
                />
                <Text
                  className="leading-[140.00%] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body6"
                >
                  Система автоматического распознавания
                  <br />
                  гос номеров автомобилей
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_group103.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour One One"
                />
                <Text
                  className="mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                  variant="body6"
                >
                  Выделение гостевых парковочных мест
                </Text>
              </Column>
            </Row>
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:px-[0] w-[100%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_rectangle34_279X464.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour Two"
                />
                <Text
                  className="font-pfdindisplaypro mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic text-black_900 w-[auto]"
                  variant="body6"
                >
                  Усиленные меры профилактики COVID-19
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] mt-[10px] sm:mt-[3px] md:mt-[5px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[99%]"
                  variant="body11"
                >
                  В бизнес-центре проводятся необходимые комплексные мероприятия
                  для дезинфекции мест общего пользования. Установлены
                  диспенсеры с антисептиками для посетителей. Размещены
                  требования соблюдения масочного режима. Посетители, не имеющие
                  при себе масок, могут получить одноразовую маску на рецепции.
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_rectangle35.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFive One"
                />
                <Text
                  className="leading-[140.00%] ml-[1px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body6"
                >
                  Предоставляются услуги 2 провайдеров связи: Регион Связь
                  Консалт и Жигули-телеком
                </Text>
              </Column>
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                <Img
                  src="images/img_rectangle34_2.png"
                  className="max-w-[100%] w-[100%]"
                  alt="RectangleThirtyFour One Two"
                />
                <Text
                  className="leading-[140.00%] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] not-italic text-black_900 sm:w-[100%] w-[95%]"
                  variant="body6"
                >
                  Возможность размещения световой вывески арендатора на фасаде
                  здания
                </Text>
              </Column>
            </Row>
          </List>
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
                      alt="eye"
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

export default ServicePage;
