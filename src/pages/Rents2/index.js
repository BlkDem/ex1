import React from "react";

import { Column, Row, Img, Button, Text, Line, List, Input } from "components";

const Rents2Page = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
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
                <Column className="flex flex-col justify-start max-w-[743px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[28%]">
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
                      Аренда офисов
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-start justify-between sm:mt-[27px] md:mt-[35px] mt-[68px] w-[100%]">
                    <Text
                      className="not-italic text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Аренда офисов
                    </Text>
                    <Text
                      className="md:mt-[12px] mt-[25px] sm:mt-[9px] not-italic text-amber_A400 w-[auto]"
                      variant="body3"
                    >
                      10 предложений
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
        <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center md:px-[140px] sm:px-[15px] px-[273px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[545px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="font-normal not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              Визуальный подбор
            </Text>
            <Column className="bg-amber_A400 flex flex-col items-center md:ml-[19px] ml-[37px] sm:mx-[0] md:p-[11px] sm:p-[15px] p-[23px] sm:w-[100%] w-[63%]">
              <Text
                className="font-normal mt-[4px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Таблица свободных площадей
              </Text>
            </Column>
          </Row>
        </Row>
        <Column className="flex flex-col items-center justify-start max-w-[1464px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column className="flex flex-col items-center justify-start w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between sm:mx-[0] sm:px-[0] sm:w-[100%] w-[5%]">
                  <Text
                    className="flex-grow font-bold mb-[1px] text-black_900 uppercase"
                    variant="body14"
                  >
                    Этаж
                  </Text>
                  <Img
                    src="images/img_forward.svg"
                    className="flex-shrink-0 max-w-[100%] mt-[1px] w-[15%]"
                    alt="forward"
                  />
                </Row>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center ml-[167px] md:ml-[86px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                  <Text
                    className="flex-grow font-bold text-black_900 uppercase"
                    variant="body14"
                  >
                    площадь
                  </Text>
                  <Img
                    src="images/img_forward.svg"
                    className="flex-shrink-0 max-w-[100%] ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[1px] w-[10%]"
                    alt="forward One"
                  />
                </Row>
                <Text
                  className="font-bold sm:ml-[111px] md:ml-[144px] ml-[279px] text-black_900 uppercase w-[auto]"
                  variant="body14"
                >
                  Ремонт
                </Text>
                <Text
                  className="font-bold sm:ml-[110px] md:ml-[142px] ml-[277px] text-black_900 uppercase w-[auto]"
                  variant="body14"
                >
                  Окна и расположение
                </Text>
                <Text
                  className="font-bold ml-[180px] sm:ml-[71px] md:ml-[92px] text-black_900 uppercase w-[auto]"
                  variant="body14"
                >
                  ПОдробнее
                </Text>
              </Row>
              <Line className="bg-black_900 h-[2px] mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]" />
            </Column>
          </Column>
          <List
            className="font-circe sm:gap-[10px] md:gap-[13px] gap-[26px] grid min-h-[auto] mt-[18px] sm:mt-[7px] md:mt-[9px] w-[100%]"
            orientation="vertical"
          >
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Цоколь
                  </Text>
                  <Text
                    className="font-normal ml-[184px] sm:ml-[73px] md:ml-[94px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      26,8 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[117px] md:ml-[152px] ml-[295px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal sm:ml-[103px] md:ml-[133px] ml-[258px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Внутренее расположение
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] md:ml-[103px] ml-[200px] sm:ml-[79px] w-[3%]"
                    alt="bluetooth"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[25px] sm:mt-[9px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[94%]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Цоколь
                  </Text>
                  <Text
                    className="font-normal ml-[186px] sm:ml-[74px] md:ml-[96px] mt-[2px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      16,2 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[101px] md:ml-[130px] ml-[253px] mt-[3px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Идёт плановый ремонт
                  </Text>
                  <Text
                    className="font-normal md:ml-[109px] ml-[212px] sm:ml-[84px] mt-[3px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Внутренее расположение
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] md:ml-[103px] ml-[200px] sm:ml-[79px] w-[3%]"
                    alt="bluetooth One"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] mt-[17px] sm:mt-[6px] md:mt-[8px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal mt-[2px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    4
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] mt-[3px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      32,6 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[118px] md:ml-[152px] ml-[296px] mt-[3px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal sm:ml-[103px] md:ml-[133px] ml-[258px] mt-[4px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Внутренее расположение
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] md:ml-[103px] ml-[200px] sm:ml-[79px] w-[3%]"
                    alt="bluetooth Two"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] mt-[18px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal mt-[3px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    4
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] mt-[4px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      65,0 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal md:ml-[112px] ml-[217px] sm:ml-[86px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Ремонт от прошлого арендатора
                  </Text>
                  <Text
                    className="font-normal ml-[162px] sm:ml-[64px] md:ml-[83px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С видом на юг, в сторону ЦАВ
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] ml-[185px] sm:ml-[73px] md:ml-[95px] w-[3%]"
                    alt="bluetooth Three"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] mt-[19px] sm:mt-[7px] md:mt-[9px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal mt-[4px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    4
                  </Text>
                  <Text
                    className="font-normal md:ml-[106px] ml-[206px] sm:ml-[82px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      126,1 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[117px] md:ml-[151px] ml-[294px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal md:ml-[116px] ml-[226px] sm:ml-[90px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С видом на запад, в сторону Волги
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] ml-[169px] sm:ml-[67px] md:ml-[87px] w-[3%]"
                    alt="bluetooth Four"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[10px] mt-[20px] sm:mt-[7px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    5
                  </Text>
                  <Text
                    className="font-normal md:ml-[108px] ml-[211px] sm:ml-[84px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      17,3 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[119px] md:ml-[153px] ml-[298px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal ml-[192px] sm:ml-[76px] md:ml-[99px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С видом на север, в сторону парка Гагарина
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] ml-[135px] sm:ml-[53px] md:ml-[69px] w-[3%]"
                    alt="bluetooth Five"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[10px] mt-[21px] sm:mt-[8px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    5
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      20,0 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[117px] md:ml-[152px] ml-[295px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal sm:ml-[103px] md:ml-[133px] ml-[258px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Внутренее расположение
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] md:ml-[103px] ml-[200px] sm:ml-[79px] w-[3%]"
                    alt="bluetooth Six"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[11px] mt-[22px] sm:mt-[8px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    5
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      66,3 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[117px] md:ml-[152px] ml-[295px] sm:mt-[3px] md:mt-[4px] mt-[8px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal sm:ml-[103px] md:ml-[133px] ml-[258px] sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    Внутренее расположение
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] md:ml-[103px] ml-[200px] sm:ml-[79px] w-[3%]"
                    alt="bluetooth Seven"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[11px] mt-[23px] sm:mt-[9px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    7
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      59,2 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[118px] md:ml-[152px] ml-[296px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal ml-[192px] sm:ml-[76px] md:ml-[99px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С видом на север, в сторону парка Гагарина
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] ml-[135px] sm:ml-[53px] md:ml-[69px] w-[3%]"
                    alt="bluetooth Eight"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]" />
              </Column>
            </Column>
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start w-[100%]">
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                  <Text
                    className="font-normal sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    7
                  </Text>
                  <Text
                    className="font-normal md:ml-[107px] ml-[208px] sm:ml-[83px] mt-[10px] sm:mt-[3px] md:mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    <span className="text-gray_900 text-[17px] font-circe">
                      24,5 м
                    </span>
                    <span className="text-gray_900 text-[17px] font-circe">
                      2
                    </span>
                  </Text>
                  <Text
                    className="font-normal sm:ml-[118px] md:ml-[152px] ml-[296px] mt-[10px] sm:mt-[3px] md:mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С отделкой
                  </Text>
                  <Text
                    className="font-normal ml-[192px] sm:ml-[76px] md:ml-[99px] mt-[11px] sm:mt-[4px] md:mt-[5px] not-italic text-gray_900 w-[auto]"
                    variant="body13"
                  >
                    С видом на север, в сторону парка Гагарина
                  </Text>
                  <Img
                    src="images/img_bluetooth.svg"
                    className="max-w-[100%] ml-[135px] sm:ml-[53px] md:ml-[69px] w-[3%]"
                    alt="bluetooth Nine"
                  />
                </Row>
                <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[25px] sm:mt-[9px] w-[100%]" />
              </Column>
            </Column>
          </List>
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
                    alt="eye"
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

export default Rents2Page;
