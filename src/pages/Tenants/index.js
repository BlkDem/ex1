import React from "react";

import {
  Column,
  Row,
  Img,
  Stack,
  Button,
  Text,
  Line,
  SelectBox,
  Grid,
  Input,
} from "components";

const TenantsPage = () => {
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
              <Column className="flex flex-col font-circe justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                <Line className="bg-white_A700 h-[1px] w-[100%]" />
                <Column className="flex flex-col justify-start max-w-[594px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
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
                      Наши арендаторы
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center justify-between sm:mt-[27px] md:mt-[35px] mt-[68px] w-[100%]">
                    <Text
                      className="not-italic text-white_A700 w-[auto]"
                      as="h3"
                      variant="h3"
                    >
                      Арендаторы
                    </Text>
                    <Text
                      className="not-italic text-amber_A400 w-[auto]"
                      variant="body3"
                    >
                      80 компании
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
        <Stack className="h-[78px] relative w-[100%]">
          <Row className="absolute bg-gray_50 bottom-[3%] flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end md:px-[117px] sm:px-[15px] px-[227px] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:px-[0] w-[100%]">
              <Row className="bg-amber_A400 flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center justify-between sm:mx-[0] md:p-[10px] sm:p-[15px] p-[20px] sm:w-[100%] w-[33%]">
                <Text
                  className="flex-grow font-normal mb-[3px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic text-black_900"
                  variant="body9"
                >
                  Поиск арендатора
                </Text>
                <Img
                  src="images/img_search.svg"
                  className="flex-shrink-0 max-w-[100%] mr-[1px] w-[6%]"
                  alt="search"
                />
              </Row>
              <Text
                className="font-circe sm:ml-[287px] md:ml-[371px] ml-[719px] not-italic text-gray_502 uppercase w-[auto]"
                variant="body18"
              >
                Показывать:
              </Text>
              <Text
                className="font-normal font-pfdindisplaypro sm:ml-[2px] md:ml-[3px] ml-[7px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                от А до Я
              </Text>
              <Text
                className="font-normal font-pfdindisplaypro ml-[18px] sm:ml-[7px] md:ml-[9px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                от Я до А
              </Text>
            </Row>
          </Row>
          <SelectBox
            className="absolute bottom-[0] font-normal left-[39%] sm:mx-[0] not-italic text-[20px] text-black_900 sm:w-[100%] w-[13%]"
            placeholderClassName="text-black_900"
            name="Group149"
            placeholder="Все категории"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                className="w-[13px] h-[6px] mr-[0] sm:w-[5px] md:w-[6px] max-w-[100%] right-[0] absolute"
                alt="arrow_down"
              />
            }
          ></SelectBox>
          <SelectBox
            className="absolute bottom-[0] font-normal sm:mx-[0] not-italic right-[33%] text-[20px] text-black_900 sm:w-[100%] w-[13%]"
            placeholderClassName="text-black_900"
            name="Group149 One"
            placeholder="Все этажи"
            isSearchable={false}
            isMulti={false}
            indicator={
              <Img
                src="images/img_arrowdown.svg"
                className="w-[13px] h-[6px] mr-[0] sm:w-[5px] md:w-[6px] max-w-[100%] right-[0] absolute"
                alt="arrow_down"
              />
            }
            size="md"
          ></SelectBox>
          <Line className="absolute bg-black_900 bottom-[0] h-[2px] right-[17%] w-[5%]" />
        </Stack>
        <Column className="flex flex-col items-center justify-start max-w-[1462px] ml-[auto] mr-[auto] sm:mt-[19px] md:mt-[24px] mt-[48px] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Grid className="sm:gap-[14px] md:gap-[19px] gap-[37px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 min-h-[auto] w-[100%]">
            <Stack className="h-[274px] relative w-[100%]">
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
            <Stack className="h-[274px] relative w-[100%]">
              <Text
                className="absolute bottom-[26%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                ООО «СК АССЕТ»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[20px] md:mt-[26px] mt-[51px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_00205a6859a3.png"
                    className="max-w-[100%] sm:w-[100%] w-[75%]"
                    alt="00205a6859aThree"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[111px] sm:mt-[44px] md:mt-[57px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Строительство
                      </Text>
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        7 этаж
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
            <Stack className="h-[274px] relative w-[100%]">
              <Text
                className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                АО «Банк Русский Стандарт»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[16px] md:mt-[21px] mt-[42px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_20210625093.png"
                    className="max-w-[100%] sm:w-[100%] w-[75%]"
                    alt="20210625093"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[100px] sm:mt-[39px] md:mt-[51px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Туризм
                      </Text>
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        1 этаж
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
                Бутик парфюмерии ParfumVsamare
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[17px] md:mt-[22px] mt-[43px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_logo1.png"
                    className="max-w-[100%] sm:w-[100%] w-[77%]"
                    alt="logoOne"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[102px] sm:mt-[40px] md:mt-[52px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Розничная торговля
                      </Text>
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        1 этаж
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
                АО «КБ ЛОКО-БАНК»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[3px] md:mt-[4px] mt-[8px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_lockobanklogo_118X176.png"
                    className="max-w-[100%] sm:w-[100%] w-[60%]"
                    alt="LockoBankLogo"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[29px] md:mt-[38px] mt-[74px] w-[100%]">
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
                        1 этаж
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
            <Stack className="h-[274px] relative w-[100%]">
              <Text
                className="absolute bottom-[25%] font-normal left-[6%] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                ООО «Промперфоратор»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start mt-[11px] sm:mt-[4px] md:mt-[5px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img__121X121.png"
                    className="h-[121px] sm:h-[49px] md:h-[63px] max-w-[100%] w-[121px] sm:w-[48px] md:w-[62px]"
                    alt="OneHundredFiftyNine"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[27px] md:mt-[36px] mt-[70px] w-[100%]">
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
                        5 этаж
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
                АН «Магазин новостроек»{" "}
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start mt-[19px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_group145.svg"
                    className="max-w-[100%] w-[31%]"
                    alt="Group145"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[30px] md:mt-[39px] mt-[76px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Продажа квартир{" "}
                      </Text>
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Цоколь
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
                ООО «ППФ Страхование жизни»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[22px] md:mt-[28px] mt-[56px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_group146.svg"
                    className="max-w-[100%] sm:w-[100%] w-[75%]"
                    alt="Group146"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[112px] sm:mt-[44px] md:mt-[57px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Text
                        className="font-normal mt-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Страхование
                      </Text>
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        7 этаж
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
                ООО «МКК «ПРОФИРЕАЛ»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[19px] md:mt-[24px] mt-[48px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img_group147.svg"
                    className="max-w-[100%] sm:w-[100%] w-[75%]"
                    alt="Group147"
                  />
                  <Column className="flex flex-col items-center justify-start mt-[106px] sm:mt-[42px] md:mt-[54px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]">
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
                        Цоколь
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
                ООО «Своя Тарелка»
              </Text>
              <Column className="absolute border border-gray_300 border-solid flex flex-col font-circe items-center justify-end p-[19px] md:p-[9px] sm:px-[15px] sm:py-[7px] w-[100%]">
                <Column className="flex flex-col items-center justify-start sm:mt-[13px] md:mt-[17px] mt-[34px] sm:px-[0] w-[100%]">
                  <Img
                    src="images/img__76X215.png"
                    className="max-w-[100%] sm:w-[100%] w-[73%]"
                    alt="OneHundredSixtyEight"
                  />
                  <Column className="flex flex-col items-center justify-start sm:mt-[36px] md:mt-[46px] mt-[91px] w-[100%]">
                    <Line className="bg-black_900 h-[1px] w-[100%]" />
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between mt-[15px] sm:mt-[5px] md:mt-[7px] w-[100%]">
                      <Text
                        className="font-normal mb-[1px] not-italic text-gray_502 w-[auto]"
                        variant="body14"
                      >
                        Питание
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
            </Stack>
          </Grid>
        </Column>
        <Button
          className="flex items-center justify-center md:mt-[35px] min-w-[19%] mt-[69px] sm:mt-[27px] text-center w-[max-content]"
          leftIcon={
            <Img
              src="images/img_refresh.svg"
              className="mr-[16px] sm:mr-[6px] md:mr-[8px] text-center"
              alt="refresh"
            />
          }
        >
          <div className="bg-transparent cursor-pointer font-bold text-[16px] text-black_900 uppercase">
            Загрузить еще арендаторов
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

export default TenantsPage;
