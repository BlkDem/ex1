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
  Grid,
  Input,
} from "components";

const RentsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col justify-start w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_header.png')" }}
          >
            <Column className="bg-gray_900_a2 flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
              <Column className="flex flex-col items-center justify-start mb-[2px] w-[100%]">
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
                        className="absolute cursor-pointer font-normal min-w-[31%] not-italic right-[18%] text-[18px] text-black_900 text-center w-[max-content]"
                        size="sm"
                        variant="FillWhiteA700"
                      >
                        Аренда офисов
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
          <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center md:px-[118px] sm:px-[15px] px-[229px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[549px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
              <Column className="bg-amber_A400 flex flex-col items-center sm:mx-[0] md:p-[11px] sm:p-[15px] p-[23px] sm:w-[100%] w-[46%]">
                <Text
                  className="font-normal mt-[4px] not-italic text-black_900 w-[auto]"
                  variant="body9"
                >
                  Визуальный подбор
                </Text>
              </Column>
              <Text
                className="font-normal sm:ml-[15px] md:ml-[20px] ml-[40px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                Таблица свободных площадей
              </Text>
            </Row>
          </Row>
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1692px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[49%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-end justify-start sm:p-[15px] md:p-[19px] p-[37px] w-[100%]"
                style={{ backgroundImage: "url('images/img_front.png')" }}
              >
                <Column
                  className="bg-cover bg-no-repeat flex flex-col items-center justify-start mb-[123px] sm:mb-[49px] md:mb-[63px] md:mt-[121px] mt-[235px] sm:mt-[93px] sm:mx-[0] md:p-[13px] sm:p-[15px] p-[27px] sm:w-[100%] w-[80%]"
                  style={{ backgroundImage: "url('images/img_group69.svg')" }}
                >
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center justify-start sm:mb-[29px] md:mb-[37px] mb-[73px] px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{ backgroundImage: "url('images/img_4.svg')" }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      4
                    </Text>
                  </Column>
                </Column>
              </Column>
              <Column className="flex flex-col justify-start sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Свободные площади
                </Text>
                <List
                  className="font-circe md:gap-[10px] gap-[20px] sm:gap-[7px] grid min-h-[auto] sm:mt-[11px] md:mt-[14px] mt-[28px] w-[100%]"
                  orientation="vertical"
                >
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            32,6 м
                          </span>
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            2
                          </span>
                        </Text>
                        <div className="bg-black_900 sm:h-[2px] md:h-[3px] h-[4px] ml-[16px] sm:ml-[6px] md:ml-[8px] my-[16px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          Внутренее расположение
                        </Text>
                        <Button
                          className="flex sm:h-[15px] md:h-[19px] h-[36px] items-center justify-center sm:ml-[12px] md:ml-[16px] ml-[31px] rounded-radius50 sm:w-[14px] md:w-[18px] w-[36px]"
                          size="smIcn"
                          variant="icbFillAmberA400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            65,0 м
                          </span>
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            2
                          </span>
                        </Text>
                        <div className="bg-black_900 sm:h-[2px] md:h-[3px] h-[4px] ml-[16px] sm:ml-[6px] md:ml-[8px] my-[16px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          С видом на юг, в сторону ЦАВ
                        </Text>
                        <Button
                          className="flex sm:h-[15px] md:h-[19px] h-[36px] items-center justify-center sm:ml-[11px] md:ml-[14px] ml-[29px] rounded-radius50 sm:w-[14px] md:w-[18px] w-[36px]"
                          size="smIcn"
                          variant="icbFillAmberA400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright One"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]" />
                    </Column>
                  </Column>
                  <Column className="flex flex-col items-center justify-start w-[100%]">
                    <Column className="flex flex-col justify-start w-[100%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[70%]">
                        <Text
                          className="font-normal not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            126,1 м
                          </span>
                          <span className="text-gray_900 text-[17px] font-circe font-bold">
                            2
                          </span>
                        </Text>
                        <div className="bg-black_900 sm:h-[2px] md:h-[3px] h-[4px] ml-[12px] sm:ml-[4px] md:ml-[6px] my-[16px] sm:my-[6px] md:my-[8px] rounded-radius50 sm:w-[1px] md:w-[2px] w-[4px]"></div>
                        <Text
                          className="font-normal ml-[10px] sm:ml-[3px] md:ml-[5px] not-italic text-gray_900 w-[auto]"
                          variant="body13"
                        >
                          С видом на запад, в сторону Волги
                        </Text>
                        <Button
                          className="flex sm:h-[15px] md:h-[19px] h-[36px] items-center justify-center sm:ml-[12px] md:ml-[16px] ml-[31px] rounded-radius50 sm:w-[14px] md:w-[18px] w-[36px]"
                          size="smIcn"
                          variant="icbFillAmberA400"
                        >
                          <Img
                            src="images/img_arrowright.svg"
                            className="flex items-center justify-center"
                            alt="arrowright Two"
                          />
                        </Button>
                      </Row>
                      <Line className="bg-gray_300 h-[2px] md:mt-[12px] mt-[24px] sm:mt-[9px] w-[100%]" />
                    </Column>
                  </Column>
                </List>
              </Column>
            </Column>
            <Column className="flex flex-col justify-start md:ml-[18px] ml-[36px] sm:mt-[10px] md:mt-[13px] mt-[27px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
              <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
                <Text
                  className="not-italic text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  Планировки этажей
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[10px] sm:mt-[3px] md:mt-[5px] sm:px-[0] w-[100%]">
                  <List
                    className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[19%]"
                    orientation="horizontal"
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] justify-start px-[11px] sm:px-[4px] md:px-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_1_amber_A400.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[3px] ml-[4px] not-italic text-black_900 uppercase w-[auto]"
                        variant="body7"
                      >
                        -1
                      </Text>
                    </Column>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] justify-start px-[11px] sm:px-[4px] md:px-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_1_52X52.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[3px] sm:ml-[3px] md:ml-[4px] ml-[9px] not-italic text-black_900 uppercase w-[auto]"
                        variant="body7"
                      >
                        1
                      </Text>
                    </Column>
                  </List>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{ backgroundImage: "url('images/img_1_52X52.svg')" }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      2
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{ backgroundImage: "url('images/img_1_52X52.svg')" }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      3
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{ backgroundImage: "url('images/img_4_52X52.svg')" }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      4
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{
                      backgroundImage: "url('images/img_1_amber_A400.svg')",
                    }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      5
                    </Text>
                  </Column>
                  <Column
                    className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center px-[11px] sm:px-[4px] md:px-[5px] sm:w-[20px] md:w-[26px] w-[52px]"
                    style={{ backgroundImage: "url('images/img_1_52X52.svg')" }}
                  >
                    <Text
                      className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                      variant="body7"
                    >
                      6
                    </Text>
                  </Column>
                  <List
                    className="sm:gap-[11px] md:gap-[15px] gap-[30px] grid sm:grid-cols-1 grid-cols-2 min-h-[auto] w-[19%]"
                    orientation="horizontal"
                  >
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center justify-start px-[11px] sm:px-[4px] md:px-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_1_amber_A400.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                        variant="body7"
                      >
                        7
                      </Text>
                    </Column>
                    <Column
                      className="bg-cover bg-no-repeat flex flex-col sm:h-[21px] md:h-[27px] h-[52px] items-center justify-start px-[11px] sm:px-[4px] md:px-[5px] w-[100%]"
                      style={{
                        backgroundImage: "url('images/img_1_52X52.svg')",
                      }}
                    >
                      <Text
                        className="font-normal mb-[3px] not-italic text-black_900 uppercase w-[auto]"
                        variant="body7"
                      >
                        8
                      </Text>
                    </Column>
                  </List>
                </Row>
              </Column>
              <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[40px] sm:px-[0] w-[100%]">
                <Stack className="h-[836px] relative w-[100%]">
                  <Img
                    src="images/img_9.svg"
                    className="absolute h-[818px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[99%]"
                    alt="Nine"
                  />
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col justify-start p-[3px] w-[100%]"
                    style={{ backgroundImage: "url('images/img_group70.svg')" }}
                  >
                    <Column className="flex flex-col justify-start sm:mb-[29px] md:mb-[38px] mb-[74px] mt-[11px] sm:mt-[4px] md:mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start md:mr-[114px] mr-[222px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Column className="flex flex-col items-end justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end justify-between w-[100%]">
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-end justify-evenly sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                              <Text
                                className="font-bold sm:mt-[14px] md:mt-[18px] mt-[36px] text-black_900 w-[auto]"
                                variant="body9"
                              >
                                С
                              </Text>
                              <Stack className="h-[57px] mb-[1px] relative sm:w-[100%] w-[82%]">
                                <Img
                                  src="images/img_ellipse14.svg"
                                  className="absolute h-[57px] max-w-[100%] right-[0] sm:w-[22px] md:w-[29px] w-[57px]"
                                  alt="EllipseFourteen"
                                />
                                <Img
                                  src="images/img_play.svg"
                                  className="absolute bottom-[11%] h-[17px] left-[0] max-w-[100%] w-[17px] sm:w-[6px] md:w-[8px]"
                                  alt="play"
                                />
                              </Stack>
                            </Row>
                            <Text
                              className="bg-black_900 flex font-bold font-circe items-center mb-[1px] md:mt-[12px] mt-[25px] sm:mt-[9px] sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                              variant="body13"
                            >
                              14
                            </Text>
                          </Row>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] mt-[163px] sm:mt-[65px] md:mt-[84px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[52%]">
                            <Text
                              className="bg-black_900 flex font-bold items-center md:mb-[10px] mb-[21px] sm:mb-[8px] px-[12px] sm:px-[4px] md:px-[6px] rounded-radius50 text-white_A700 w-[31px]"
                              variant="body13"
                            >
                              1
                            </Text>
                            <Text
                              className="bg-black_900 flex font-bold items-center mb-[3px] sm:ml-[33px] md:ml-[43px] ml-[85px] mt-[18px] sm:mt-[7px] md:mt-[9px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                              variant="body13"
                            >
                              9
                            </Text>
                            <Text
                              className="bg-black_900 flex font-bold items-center sm:ml-[24px] md:ml-[31px] ml-[61px] md:mt-[10px] mt-[21px] sm:mt-[8px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                              variant="body13"
                            >
                              4
                            </Text>
                          </Row>
                        </Column>
                        <Text
                          className="bg-black_900 flex font-bold items-center sm:mb-[37px] md:mb-[48px] mb-[93px] sm:ml-[16px] md:ml-[21px] ml-[42px] mt-[149px] sm:mt-[59px] md:mt-[76px] sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          13
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] mt-[12px] sm:mt-[4px] md:mt-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[45%]">
                        <Text
                          className="font-bold font-pfdindisplaypro sm:mt-[15px] md:mt-[20px] mt-[40px] text-black_900 w-[auto]"
                          variant="body9"
                        >
                          <span className="text-black_900 text-[20px]">
                            32,6 м
                          </span>
                          <span className="text-black_900 text-[20px]">2</span>
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold font-circe items-center sm:ml-[38px] md:ml-[49px] ml-[96px] my-[17px] sm:my-[6px] md:my-[8px] sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          12
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold font-circe items-center sm:mb-[13px] md:mb-[18px] mb-[35px] ml-[113px] sm:ml-[45px] md:ml-[58px] px-[12px] sm:px-[4px] md:px-[6px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          1
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start justify-end ml-[auto] sm:mt-[21px] md:mt-[27px] mt-[54px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                        <Text
                          className="bg-black_900 flex font-bold items-center sm:mb-[3px] md:mb-[4px] mb-[9px] md:mt-[10px] mt-[20px] sm:mt-[7px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          6
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center md:ml-[102px] ml-[199px] sm:ml-[79px] sm:mt-[11px] md:mt-[14px] mt-[29px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          8
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center md:mb-[12px] mb-[25px] sm:mb-[9px] ml-[103px] sm:ml-[41px] md:ml-[53px] mt-[4px] px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          2
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center sm:mb-[11px] md:mb-[14px] mb-[29px] sm:ml-[36px] md:ml-[46px] ml-[91px] px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          5
                        </Text>
                      </Row>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start justify-end ml-[auto] md:mr-[45px] mr-[88px] sm:mt-[19px] md:mt-[25px] mt-[50px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[71%]">
                        <Text
                          className="bg-black_900 flex font-bold items-center sm:mt-[17px] md:mt-[23px] mt-[45px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          9
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center md:mb-[10px] mb-[21px] sm:mb-[8px] ml-[152px] sm:ml-[60px] md:ml-[78px] md:mt-[12px] mt-[24px] sm:mt-[9px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          6
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center mb-[1px] ml-[144px] sm:ml-[57px] md:ml-[74px] sm:mt-[17px] md:mt-[22px] mt-[44px] px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          7
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold items-center sm:mb-[17px] md:mb-[23px] mb-[45px] ml-[115px] sm:ml-[45px] md:ml-[59px] px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          3
                        </Text>
                      </Row>
                      <Text
                        className="font-bold font-pfdindisplaypro sm:ml-[277px] md:ml-[358px] ml-[694px] sm:mt-[10px] md:mt-[13px] mt-[27px] text-black_900 w-[auto]"
                        variant="body9"
                      >
                        <span className="text-black_900 text-[20px]">
                          65,0 м
                        </span>
                        <span className="text-black_900 text-[20px]">2</span>
                      </Text>
                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mt-[27px] md:mt-[35px] mt-[68px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                        <Text
                          className="bg-black_900 flex font-bold font-circe items-center mb-[1px] sm:px-[3px] md:px-[4px] px-[8px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          11
                        </Text>
                        <Text
                          className="bg-black_900 flex font-bold font-circe items-center mb-[1px] sm:ml-[26px] md:ml-[34px] ml-[67px] sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                          variant="body13"
                        >
                          10
                        </Text>
                        <Text
                          className="font-bold font-pfdindisplaypro ml-[102px] sm:ml-[40px] md:ml-[52px] sm:mt-[2px] md:mt-[3px] mt-[6px] text-black_900 w-[auto]"
                          variant="body9"
                        >
                          <span className="text-black_900 text-[20px]">
                            126,1 м
                          </span>
                          <span className="text-black_900 text-[20px]">2</span>
                        </Text>
                      </Row>
                    </Column>
                  </Column>
                </Stack>
              </Column>
            </Column>
          </Row>
          <Column className="flex flex-col justify-start max-w-[1462px] md:ml-[117px] ml-[auto] mr-[auto] sm:mt-[30px] md:mt-[39px] mt-[76px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Text
              className="not-italic text-black_900 w-[auto]"
              as="h3"
              variant="h3"
            >
              Занятые площади на этаже
            </Text>
            <Stack className="h-[1219px] mt-[10px] sm:mt-[3px] md:mt-[5px] relative w-[100%]">
              <Column className="absolute flex flex-col items-center justify-start top-[1%] w-[100%]">
                <List
                  className="sm:gap-[14px] md:gap-[18px] gap-[36px] grid min-h-[auto] w-[100%]"
                  orientation="vertical"
                >
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        АО «Банк Русский Стандарт»
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[26px] sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_rsblogo3line.png"
                            className="max-w-[100%] sm:w-[100%] w-[75%]"
                            alt="RSBLogo3line"
                          />
                          <Column className="flex flex-col items-center justify-start sm:mt-[33px] md:mt-[43px] mt-[85px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Финансы и кредиты
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        ООО «Элит Софт»
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[14px] md:mt-[19px] mt-[37px] sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_21.png"
                            className="max-w-[100%] sm:w-[100%] w-[75%]"
                            alt="TwentyOne"
                          />
                          <Column className="flex flex-col items-center justify-start sm:mt-[38px] md:mt-[49px] mt-[96px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Тендеры
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[25%] font-normal inset-x-[0] mx-[auto] not-italic text-black_900 w-[max-content]"
                        variant="body9"
                      >
                        ООО «Поволжская Металлургиче...
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[23px] mt-[45px] sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_logo11.png"
                            className="max-w-[100%] sm:w-[100%] w-[79%]"
                            alt="logoEleven"
                          />
                          <Column className="flex flex-col items-center justify-start sm:mt-[38px] md:mt-[49px] mt-[96px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Промышленность
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        ООО «ЦЕНТР АН»
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[52px] sm:px-[0] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                            style={{
                              backgroundImage:
                                "url('images/img__gray_502.svg')",
                            }}
                          >
                            <Text
                              className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Нет лого
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start mt-[102px] sm:mt-[40px] md:mt-[52px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Категория
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                    <Stack className="h-[274px] relative sm:w-[100%] w-[49%]">
                      <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[92%]">
                        <Stack className="h-[274px] relative sm:w-[100%] w-[52%]">
                          <Text
                            className="absolute bottom-[27%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                            variant="body9"
                          >
                            Аквабот
                          </Text>
                          <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                            <Column className="flex flex-col items-center justify-start sm:mt-[10px] md:mt-[13px] mt-[26px] sm:px-[0] w-[100%]">
                              <Img
                                src="images/img_image91.png"
                                className="max-w-[100%] sm:w-[100%] w-[40%]"
                                alt="imageNinetyOne"
                              />
                              <Column className="flex flex-col items-center justify-start sm:mt-[32px] md:mt-[41px] mt-[81px] w-[100%]">
                                <Line className="bg-black_900 h-[1px] w-[100%]" />
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                                  <Text
                                    className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                    variant="body14"
                                  >
                                    Категория
                                  </Text>
                                  <Text
                                    className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                    variant="body14"
                                  >
                                    4 этаж
                                  </Text>
                                </Row>
                              </Column>
                            </Column>
                          </Column>
                        </Stack>
                        <Img
                          src="images/img_logo21.png"
                          className="max-w-[100%] sm:mt-[25px] md:mt-[32px] mt-[63px] w-[33%]"
                          alt="logoTwentyOne"
                        />
                      </Row>
                      <Stack className="absolute h-[274px] right-[0] sm:w-[100%] w-[48%]">
                        <Text
                          className="absolute bottom-[27%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                          variant="body9"
                        >
                          Solo-IT-studio
                        </Text>
                        <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                          <Column className="flex flex-col items-center justify-start md:mt-[104px] mt-[202px] sm:mt-[80px] sm:px-[0] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Категория
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Stack>
                    </Stack>
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        Юридические услуги
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[25px] mt-[49px] sm:px-[0] w-[100%]">
                          <Column
                            className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                            style={{
                              backgroundImage:
                                "url('images/img__gray_502.svg')",
                            }}
                          >
                            <Text
                              className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Нет лого
                            </Text>
                          </Column>
                          <Column className="flex flex-col items-center justify-start mt-[105px] sm:mt-[41px] md:mt-[54px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Категория
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                    <Stack className="h-[274px] relative w-[24%]">
                      <Text
                        className="absolute bottom-[26%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                        variant="body9"
                      >
                        TUI
                      </Text>
                      <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                        <Column className="flex flex-col items-center justify-start sm:mt-[15px] md:mt-[20px] mt-[39px] sm:px-[0] w-[100%]">
                          <Img
                            src="images/img_group167.svg"
                            className="max-w-[100%] sm:w-[100%] w-[53%]"
                            alt="Group167"
                          />
                          <Column className="flex flex-col items-center justify-start sm:mt-[37px] md:mt-[48px] mt-[94px] w-[100%]">
                            <Line className="bg-black_900 h-[1px] w-[100%]" />
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                              <Text
                                className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                Категория
                              </Text>
                              <Text
                                className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                                variant="body14"
                              >
                                4 этаж
                              </Text>
                            </Row>
                          </Column>
                        </Column>
                      </Column>
                    </Stack>
                  </Row>
                </List>
                <Grid className="sm:gap-[14px] md:gap-[19px] gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] sm:mt-[14px] md:mt-[18px] mt-[36px] w-[100%]">
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Жилищный кооператив
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[28px] mt-[55px] sm:px-[0] w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                          style={{
                            backgroundImage: "url('images/img__gray_502.svg')",
                          }}
                        >
                          <Text
                            className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Нет лого
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[99px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Сороканюк
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[28px] mt-[55px] sm:px-[0] w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                          style={{
                            backgroundImage: "url('images/img__gray_502.svg')",
                          }}
                        >
                          <Text
                            className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Нет лого
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[99px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      ООО «Лизинг-Трейд»
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[43px] sm:px-[0] w-[100%]">
                        <Img
                          src="images/img_image92.png"
                          className="max-w-[100%] sm:w-[100%] w-[61%]"
                          alt="imageNinetyTwo"
                        />
                        <Column className="flex flex-col items-center justify-start sm:mt-[35px] md:mt-[45px] mt-[88px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[26%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      ИНФОРКОМ
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[21px] md:mt-[28px] mt-[55px] sm:px-[0] w-[100%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                          style={{
                            backgroundImage: "url('images/img__gray_502.svg')",
                          }}
                        >
                          <Text
                            className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Нет лого
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start sm:mt-[39px] md:mt-[51px] mt-[99px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[25%] font-normal inset-x-[0] mx-[auto] not-italic text-black_900 w-[max-content]"
                      variant="body9"
                    >
                      Федеральная лаборатория судеб...
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[15px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start md:mt-[11px] mt-[23px] sm:mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Img
                          src="images/img_flselogotip.png"
                          className="max-w-[100%] sm:w-[100%] w-[58%]"
                          alt="FLSElogotip"
                        />
                        <Column className="flex flex-col items-center justify-start sm:mt-[25px] md:mt-[33px] mt-[64px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                  <Stack className="h-[274px] relative w-[100%]">
                    <Text
                      className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                      variant="body9"
                    >
                      Подбор персонала
                    </Text>
                    <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[15px] sm:p-[5px] md:p-[7px] w-[100%]">
                      <Column className="flex flex-col items-center justify-start sm:mt-[23px] md:mt-[29px] mt-[58px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[97%]">
                        <Column
                          className="bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] p-[14px] sm:p-[5px] md:p-[7px] sm:w-[100%] w-[59%]"
                          style={{
                            backgroundImage: "url('images/img__gray_502.svg')",
                          }}
                        >
                          <Text
                            className="font-normal mb-[2px] not-italic text-gray_502 w-[auto]"
                            variant="body14"
                          >
                            Нет лого
                          </Text>
                        </Column>
                        <Column className="flex flex-col items-center justify-start mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
                          <Line className="bg-black_900 h-[1px] w-[100%]" />
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                            <Text
                              className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              Категория
                            </Text>
                            <Text
                              className="font-normal not-italic text-gray_502 w-[auto]"
                              variant="body14"
                            >
                              4 этаж
                            </Text>
                          </Row>
                        </Column>
                      </Column>
                    </Column>
                  </Stack>
                </Grid>
              </Column>
              <Column className="absolute flex flex-col font-circe inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[80%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <List
                    className="sm:gap-[111px] md:gap-[144px] gap-[279px] grid min-h-[auto] w-[100%]"
                    orientation="vertical"
                  >
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[12px] sm:px-[4px] md:px-[6px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        1
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        2
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        3
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        4
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        5
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        6
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[11px] sm:px-[4px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        7
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        8
                      </Text>
                    </Row>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between my-[0] w-[100%]">
                      <Text
                        className="bg-black_900 flex font-bold items-center px-[10px] sm:px-[3px] md:px-[5px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        9
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        10
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center sm:px-[3px] md:px-[4px] px-[8px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        11
                      </Text>
                      <Text
                        className="bg-black_900 flex font-bold items-center sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                        variant="body13"
                      >
                        12
                      </Text>
                    </Row>
                  </List>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[111px] md:mt-[144px] mt-[279px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[36%]">
                    <Text
                      className="bg-black_900 flex font-bold items-center sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                      variant="body13"
                    >
                      13
                    </Text>
                    <Text
                      className="bg-black_900 flex font-bold items-center sm:ml-[137px] md:ml-[177px] ml-[343px] sm:px-[2px] md:px-[3px] px-[7px] rounded-radius50 text-white_A700 w-[31px]"
                      variant="body13"
                    >
                      14
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Stack>
          </Column>
          <Column className="bg-white_A700 flex flex-col items-center justify-end sm:mt-[11px] md:mt-[15px] mt-[30px] sm:p-[15px] md:p-[33px] p-[65px] w-[100%]">
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

export default RentsPage;
