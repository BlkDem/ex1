import React from "react";

import { Column, Row, Img, Button, Text, Line, Stack, Input } from "components";

const ParkingPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_header.png')" }}
        >
          <Column className="bg-gray_900_a2 flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mb-[1px] md:mb-[2px] mb-[5px] w-[100%]">
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
              <Column className="flex flex-col justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                <Line className="bg-white_A700 h-[1px] w-[100%]" />
                <Column className="flex flex-col justify-start max-w-[247px] md:ml-[118px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
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
                      Паркинг
                    </Text>
                  </Row>
                  <Text
                    className="font-pfdindisplaypro sm:mt-[25px] md:mt-[33px] mt-[65px] not-italic text-white_A700 w-[auto]"
                    as="h3"
                    variant="h3"
                  >
                    Паркинг
                  </Text>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column className="bg-white_A700 flex flex-col justify-start w-[100%]">
          <Column className="flex flex-col items-center justify-start max-w-[1613px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between w-[100%]">
              <Column
                className="bg-cover bg-no-repeat flex flex-col items-center sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[59%]"
                style={{ backgroundImage: "url('images/img_group132.png')" }}
              >
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[274px] md:mt-[354px] mt-[687px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
                  <Text
                    className="font-normal not-italic text-black_900 w-[auto]"
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
                    8
                  </Text>
                </Row>
              </Column>
              <Column className="flex flex-col items-center sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                <Text
                  className="font-normal font-pfdindisplaypro leading-[140.00%] not-italic text-black_900 w-[100%]"
                  variant="body1"
                >
                  У РДЦ расположена малая парковка для арендаторов на 382
                  машиноместа + большая парковка на 500 машиномест
                </Text>
                <Text
                  className="font-circe leading-[160.00%] md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[99%]"
                  variant="body10"
                >
                  <span className="text-gray_900 text-[19px] font-normal">
                    Парковка для арендаторов оснащена системой автоматического
                    распознавания госномеров автомобилей.
                    <br />
                    <br />
                    <br />
                    Арендаторы могут разместить на закрепленные за ними
                    парковочные места автомобили своих гостей.
                    <br />
                    <br />
                    <br />
                    Администрация БЦ производит чистку и вывоз снега с парковки
                    и прилегающей территории в зимний период.
                    <br />
                    <br />
                    <br />
                  </span>
                  <span className="text-gray_900 text-[19px] font-bold">
                    На каждые 50 м
                  </span>
                  <span className="text-gray_900 text-[19px] font-bold">2</span>
                  <span className="text-gray_900 text-[19px] font-bold">
                    {" "}
                    арендуемых площадей мы предоставляем 1 льготное парковочное
                    место.
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    {" "}
                    В случае, если арендатору требуются дополнительные
                    парковочные места (сверх предоставленных), мы готовы
                    предоставить их по фиксированной цене.
                  </span>
                </Text>
              </Column>
            </Row>
          </Column>
        </Column>
        <Stack
          className="bg-cover bg-no-repeat h-[930px] relative w-[100%]"
          style={{ backgroundImage: "url('images/img_plan.png')" }}
        >
          <Column className="absolute flex flex-col h-[max-content] inset-[0] justify-center m-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[85%]">
              <Text
                className="font-bold mt-[17px] sm:mt-[6px] md:mt-[8px] rotate-[58deg] text-white_A700 w-[auto]"
                variant="body9"
              >
                ул. Санфирова
              </Text>
              <Text
                className="leading-[130.00%] md:ml-[26px] ml-[52px] sm:mx-[0] rotate-[-31deg] text-white_A700 sm:w-[100%] w-[42%]"
                variant="body12"
              >
                Въезд/Выезд
              </Text>
            </Row>
            <Text
              className="ml-[4px] sm:mt-[274px] md:mt-[355px] mt-[688px] not-italic text-white_A700 w-[auto]"
              variant="body3"
            >
              Московское шоссе
            </Text>
          </Column>
          <Stack
            className="absolute bg-cover bg-no-repeat h-[930px] sm:p-[15px] p-[18px] md:p-[9px] w-[100%]"
            style={{ backgroundImage: "url('images/img_group129.png')" }}
          >
            <Stack className="absolute h-[783px] inset-x-[0] mx-[auto] top-[2%] sm:w-[100%] w-[44%]">
              <Stack className="absolute h-[783px] w-[100%]">
                <Stack className="absolute h-[783px] left-[0] w-[100%]">
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start sm:mx-[0] sm:p-[3px] md:p-[4px] p-[8px] right-[0] top-[0] sm:w-[100%] w-[63%]"
                    style={{
                      backgroundImage: "url('images/img_group130.svg')",
                    }}
                  >
                    <Stack className="h-[579px] mb-[1px] sm:mt-[17px] md:mt-[22px] mt-[44px] pb-[1px] relative sm:w-[100%] w-[98%]">
                      <Stack className="absolute h-[578px] w-[100%]">
                        <Stack className="absolute h-[578px] w-[100%]">
                          <Stack className="absolute h-[578px] w-[100%]">
                            <Stack className="absolute h-[578px] w-[100%]">
                              <Stack className="absolute bottom-[0] h-[379px] left-[0] sm:w-[100%] w-[80%]">
                                <Stack className="absolute bottom-[0] h-[360px] right-[0] sm:w-[100%] w-[82%]">
                                  <Stack className="absolute h-[360px] w-[100%]">
                                    <Stack className="absolute h-[360px] w-[100%]">
                                      <Stack className="absolute h-[360px] w-[100%]">
                                        <Column className="absolute flex flex-col items-center justify-start w-[100%]">
                                          <Column className="flex flex-col justify-start w-[100%]">
                                            <Column className="flex flex-col justify-start w-[100%]">
                                              <Text
                                                className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                154
                                              </Text>
                                              <Column className="flex flex-col justify-start ml-[15px] md:ml-[7px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[96%]">
                                                <Text
                                                  className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  153
                                                </Text>
                                                <Text
                                                  className="ml-[11px] sm:ml-[4px] md:ml-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  152
                                                </Text>
                                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[11px] ml-[23px] md:mr-[133px] mr-[259px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                                                  <Text
                                                    className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    151
                                                  </Text>
                                                  <Text
                                                    className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    150
                                                  </Text>
                                                </Row>
                                                <Stack className="h-[11px] sm:ml-[18px] md:ml-[24px] ml-[47px] md:mr-[121px] mr-[236px] sm:mr-[94px] relative w-[8%]">
                                                  <Text
                                                    className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    148
                                                  </Text>
                                                  <Text
                                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    149
                                                  </Text>
                                                </Stack>
                                                <Text
                                                  className="sm:ml-[27px] md:ml-[36px] ml-[70px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  147
                                                </Text>
                                                <Text
                                                  className="sm:ml-[32px] md:ml-[42px] ml-[82px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  146
                                                </Text>
                                                <Text
                                                  className="sm:ml-[37px] md:ml-[48px] ml-[94px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  145
                                                </Text>
                                                <Text
                                                  className="ml-[106px] sm:ml-[42px] md:ml-[54px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  144
                                                </Text>
                                                <Text
                                                  className="ml-[118px] sm:ml-[47px] md:ml-[60px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  143
                                                </Text>
                                                <Text
                                                  className="ml-[129px] sm:ml-[51px] md:ml-[66px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  142
                                                </Text>
                                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[8%]">
                                                  <Text
                                                    className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    141
                                                  </Text>
                                                  <Text
                                                    className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    140
                                                  </Text>
                                                </Row>
                                                <Text
                                                  className="ml-[165px] sm:ml-[65px] md:ml-[85px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  139
                                                </Text>
                                                <Text
                                                  className="ml-[177px] sm:ml-[70px] md:ml-[91px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  138
                                                </Text>
                                                <Text
                                                  className="ml-[189px] sm:ml-[75px] md:ml-[97px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  137
                                                </Text>
                                                <Text
                                                  className="md:ml-[103px] ml-[200px] sm:ml-[79px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  136
                                                </Text>
                                                <Text
                                                  className="md:ml-[109px] ml-[212px] sm:ml-[84px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  135
                                                </Text>
                                                <Text
                                                  className="md:ml-[115px] ml-[224px] sm:ml-[89px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  134
                                                </Text>
                                                <Text
                                                  className="md:ml-[121px] ml-[236px] sm:ml-[94px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  133
                                                </Text>
                                                <Text
                                                  className="md:ml-[128px] ml-[248px] sm:ml-[99px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  132
                                                </Text>
                                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mr-[11px] mr-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[8%]">
                                                  <Text
                                                    className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    131
                                                  </Text>
                                                  <Text
                                                    className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    130
                                                  </Text>
                                                </Row>
                                                <Text
                                                  className="sm:ml-[113px] md:ml-[146px] ml-[283px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  129
                                                </Text>
                                                <Text
                                                  className="sm:ml-[117px] md:ml-[152px] ml-[295px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  128
                                                </Text>
                                              </Column>
                                            </Column>
                                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[13px] ml-[26px] md:mt-[11px] mt-[22px] sm:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                                              <Column className="flex flex-col justify-start mb-[16px] sm:mb-[6px] md:mb-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                                                <Column className="flex flex-col justify-start mr-[19px] md:mr-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[53%]">
                                                  <Text
                                                    className="flex items-center mr-[13px] sm:mr-[5px] md:mr-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    16
                                                  </Text>
                                                  <Column className="flex flex-col sm:h-[4px] md:h-[5px] h-[8px] items-center justify-start ml-[3px] mr-[10px] sm:mr-[3px] md:mr-[5px] mt-[4px] sm:w-[3px] md:w-[4px] w-[8px]">
                                                    <Text
                                                      className="flex items-center not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                      as="h1"
                                                      variant="h1"
                                                    >
                                                      15
                                                    </Text>
                                                  </Column>
                                                  <Text
                                                    className="flex items-center mt-[4px] sm:mx-[2px] md:mx-[3px] mx-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    14
                                                  </Text>
                                                  <Text
                                                    className="flex items-center sm:ml-[3px] md:ml-[4px] ml-[9px] mr-[4px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    13
                                                  </Text>
                                                  <Text
                                                    className="flex items-center ml-[12px] sm:ml-[4px] md:ml-[6px] mr-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    12
                                                  </Text>
                                                  <Text
                                                    className="ml-[15px] sm:ml-[5px] md:ml-[7px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    11
                                                  </Text>
                                                </Column>
                                                <Column className="flex flex-col items-end justify-start ml-[18px] md:ml-[9px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[43%]">
                                                  <Text
                                                    className="flex items-center sm:mr-[3px] md:mr-[4px] mr-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    10
                                                  </Text>
                                                  <Text
                                                    className="mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    9
                                                  </Text>
                                                  <Text
                                                    className="mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    8
                                                  </Text>
                                                  <Text
                                                    className="mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    7
                                                  </Text>
                                                  <Text
                                                    className="mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    6
                                                  </Text>
                                                </Column>
                                                <Column className="flex flex-col justify-start md:ml-[17px] ml-[34px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[17%]">
                                                  <Text
                                                    className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    5
                                                  </Text>
                                                  <Text
                                                    className="ml-[3px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                    as="h1"
                                                    variant="h1"
                                                  >
                                                    4
                                                  </Text>
                                                </Column>
                                              </Column>
                                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between ml-[19px] md:ml-[9px] mt-[154px] sm:mt-[61px] md:mt-[79px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[37%]">
                                                <Text
                                                  className="mt-[13px] sm:mt-[5px] md:mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  3
                                                </Text>
                                                <Text
                                                  className="mb-[1px] mt-[13px] sm:mt-[5px] md:mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  2
                                                </Text>
                                                <Text
                                                  className="mb-[13px] sm:mb-[5px] md:mb-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                                  as="h1"
                                                  variant="h1"
                                                >
                                                  1
                                                </Text>
                                              </Row>
                                            </Row>
                                          </Column>
                                        </Column>
                                        <Row className="absolute bottom-[2%] flex flex-row md:flex-wrap sm:flex-wrap inset-x-[0] items-start justify-center sm:mx-[0] mx-[auto] sm:px-[0] sm:w-[100%] w-[25%]">
                                          <Text
                                            className="flex items-center sm:mb-[13px] md:mb-[17px] mb-[34px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            55
                                          </Text>
                                          <Text
                                            className="flex items-center sm:mb-[11px] md:mb-[14px] mb-[28px] ml-[2px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            54
                                          </Text>
                                          <Text
                                            className="flex items-center md:mb-[11px] mb-[22px] sm:mb-[8px] ml-[2px] mt-[11px] sm:mt-[4px] md:mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            53
                                          </Text>
                                          <Text
                                            className="flex items-center ml-[2px] my-[17px] sm:my-[6px] md:my-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            52
                                          </Text>
                                          <Text
                                            className="mb-[11px] sm:mb-[4px] md:mb-[5px] ml-[2px] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            51
                                          </Text>
                                          <Text
                                            className="flex items-center sm:mb-[1px] md:mb-[2px] mb-[5px] ml-[4px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            50
                                          </Text>
                                          <Text
                                            className="flex items-center ml-[2px] sm:mt-[13px] md:mt-[17px] mt-[34px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            49
                                          </Text>
                                        </Row>
                                      </Stack>
                                      <Row className="absolute bottom-[11%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] right-[18%] sm:w-[100%] w-[50%]">
                                        <Text
                                          className="flex items-center sm:mb-[29px] md:mb-[37px] mb-[73px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          69
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[26px] md:mb-[34px] mb-[67px] ml-[2px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          68
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[24px] md:mb-[31px] mb-[61px] ml-[2px] mt-[11px] sm:mt-[4px] md:mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          67
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[22px] md:mb-[28px] mb-[56px] ml-[2px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          66
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[19px] md:mb-[25px] mb-[50px] ml-[2px] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          65
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[17px] md:mb-[23px] mb-[45px] ml-[2px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          64
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[15px] md:mb-[20px] mb-[39px] ml-[2px] sm:mt-[13px] md:mt-[17px] mt-[33px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          63
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[13px] md:mb-[17px] mb-[33px] ml-[2px] sm:mt-[15px] md:mt-[20px] mt-[39px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          62
                                        </Text>
                                        <Text
                                          className="sm:mb-[11px] md:mb-[14px] mb-[28px] ml-[2px] sm:mt-[17px] md:mt-[23px] mt-[45px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          61
                                        </Text>
                                        <Text
                                          className="flex items-center md:mb-[11px] mb-[22px] sm:mb-[8px] ml-[4px] sm:mt-[19px] md:mt-[25px] mt-[50px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          60
                                        </Text>
                                        <Text
                                          className="flex items-center mb-[16px] sm:mb-[6px] md:mb-[8px] ml-[2px] sm:mt-[22px] md:mt-[28px] mt-[56px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          59
                                        </Text>
                                        <Text
                                          className="flex items-center mb-[11px] sm:mb-[4px] md:mb-[5px] ml-[2px] sm:mt-[24px] md:mt-[31px] mt-[61px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          58
                                        </Text>
                                        <Text
                                          className="flex items-center sm:mb-[1px] md:mb-[2px] mb-[5px] ml-[2px] sm:mt-[26px] md:mt-[34px] mt-[67px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          57
                                        </Text>
                                        <Text
                                          className="flex items-center ml-[2px] sm:mt-[29px] md:mt-[37px] mt-[73px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          56
                                        </Text>
                                      </Row>
                                    </Stack>
                                    <Row className="absolute bottom-[17%] flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mx-[0] sm:px-[0] right-[15%] sm:w-[100%] w-[58%]">
                                      <Text
                                        className="flex items-center sm:mb-[33px] md:mb-[43px] mb-[84px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        85
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[31px] md:mb-[40px] mb-[78px] ml-[2px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        84
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[28px] md:mb-[37px] mb-[72px] ml-[2px] mt-[11px] sm:mt-[4px] md:mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        83
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[26px] md:mb-[34px] mb-[67px] ml-[2px] mt-[16px] sm:mt-[6px] md:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        82
                                      </Text>
                                      <Text
                                        className="sm:mb-[24px] md:mb-[31px] mb-[61px] ml-[2px] md:mt-[11px] mt-[22px] sm:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        81
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[22px] md:mb-[28px] mb-[56px] ml-[4px] sm:mt-[11px] md:mt-[14px] mt-[28px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        80
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[19px] md:mb-[25px] mb-[50px] ml-[2px] sm:mt-[13px] md:mt-[17px] mt-[33px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        79
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[17px] md:mb-[22px] mb-[44px] ml-[2px] sm:mt-[15px] md:mt-[20px] mt-[39px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        78
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[15px] md:mb-[20px] mb-[39px] ml-[2px] sm:mt-[17px] md:mt-[22px] mt-[44px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        77
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[13px] md:mb-[17px] mb-[33px] ml-[2px] sm:mt-[19px] md:mt-[25px] mt-[50px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        76
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[10px] md:mb-[13px] mb-[27px] ml-[2px] sm:mt-[22px] md:mt-[28px] mt-[56px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        75
                                      </Text>
                                      <Text
                                        className="flex items-center md:mb-[11px] mb-[22px] sm:mb-[8px] ml-[2px] sm:mt-[24px] md:mt-[31px] mt-[61px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        74
                                      </Text>
                                      <Text
                                        className="flex items-center mb-[16px] sm:mb-[6px] md:mb-[8px] ml-[2px] sm:mt-[26px] md:mt-[34px] mt-[67px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        73
                                      </Text>
                                      <Text
                                        className="flex items-center mb-[11px] sm:mb-[4px] md:mb-[5px] ml-[2px] sm:mt-[28px] md:mt-[37px] mt-[72px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        72
                                      </Text>
                                      <Text
                                        className="sm:mb-[1px] md:mb-[2px] mb-[5px] ml-[2px] sm:mt-[31px] md:mt-[40px] mt-[78px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        71
                                      </Text>
                                      <Text
                                        className="flex items-center ml-[4px] sm:mt-[33px] md:mt-[43px] mt-[84px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        70
                                      </Text>
                                    </Row>
                                  </Stack>
                                  <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[4%] top-[26%] sm:w-[100%] w-[81%]">
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-evenly w-[100%]">
                                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[32%]">
                                        <Stack className="h-[23px] sm:mr-[13px] md:mr-[17px] mr-[33px] relative sm:w-[100%] w-[59%]">
                                          <Stack className="absolute bottom-[0] h-[16px] right-[0] sm:w-[100%] w-[75%]">
                                            <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                              <Text
                                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                124
                                              </Text>
                                              <Text
                                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                125
                                              </Text>
                                            </Stack>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              126
                                            </Text>
                                          </Stack>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            127
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="sm:ml-[18px] md:ml-[24px] ml-[47px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          123
                                        </Text>
                                        <Text
                                          className="sm:ml-[23px] md:ml-[30px] ml-[59px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          122
                                        </Text>
                                        <Text
                                          className="sm:ml-[27px] md:ml-[36px] ml-[70px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          121
                                        </Text>
                                      </Column>
                                      <Column className="flex flex-col justify-start sm:mt-[15px] md:mt-[20px] mt-[39px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[69%]">
                                        <Stack className="h-[12px] relative w-[14%]">
                                          <Text
                                            className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            119
                                          </Text>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            120
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="md:ml-[11px] ml-[23px] sm:ml-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          118
                                        </Text>
                                        <Stack className="h-[16px] sm:ml-[13px] md:ml-[18px] ml-[35px] relative w-[21%]">
                                          <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                            <Text
                                              className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              115
                                            </Text>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              116
                                            </Text>
                                          </Stack>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            117
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="sm:ml-[27px] md:ml-[36px] ml-[70px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          114
                                        </Text>
                                        <Text
                                          className="sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          113
                                        </Text>
                                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mr-[11px] mr-[23px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                          <Stack className="h-[12px] relative w-[39%]">
                                            <Text
                                              className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              111
                                            </Text>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              112
                                            </Text>
                                          </Stack>
                                          <Stack className="h-[18px] ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[9px] relative sm:w-[100%] w-[60%]">
                                            <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                              <Text
                                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                108
                                              </Text>
                                              <Text
                                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                109
                                              </Text>
                                            </Stack>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              110
                                            </Text>
                                          </Stack>
                                        </Row>
                                        <Stack className="h-[12px] ml-[153px] sm:ml-[61px] md:ml-[78px] relative w-[14%]">
                                          <Text
                                            className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            106
                                          </Text>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            107
                                          </Text>
                                        </Stack>
                                      </Column>
                                    </Row>
                                  </Column>
                                </Stack>
                                <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[26%]">
                                  <Text
                                    className="flex items-center sm:mr-[37px] md:mr-[48px] mr-[93px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    33
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[1px] md:ml-[2px] ml-[5px] sm:mr-[34px] md:mr-[44px] mr-[87px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    32
                                  </Text>
                                  <Text
                                    className="ml-[11px] sm:ml-[4px] md:ml-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    31
                                  </Text>
                                  <Text
                                    className="flex items-center ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mr-[29px] md:mr-[38px] mr-[75px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    30
                                  </Text>
                                  <Text
                                    className="flex items-center md:ml-[11px] ml-[23px] sm:ml-[9px] sm:mr-[27px] md:mr-[35px] mr-[69px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    29
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[11px] md:ml-[14px] ml-[29px] sm:mr-[25px] md:mr-[33px] mr-[64px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    28
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[13px] md:ml-[17px] ml-[34px] sm:mr-[23px] md:mr-[29px] mr-[58px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    27
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[15px] md:ml-[20px] ml-[40px] sm:mr-[20px] md:mr-[26px] mr-[52px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    26
                                  </Text>
                                  <Text
                                    className="flex items-center mt-[3px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    25
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[20px] md:ml-[26px] ml-[52px] sm:mr-[15px] md:mr-[20px] mr-[40px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    24
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[23px] md:ml-[29px] ml-[58px] sm:mr-[13px] md:mr-[17px] mr-[34px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    23
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[25px] md:ml-[33px] ml-[64px] sm:mr-[11px] md:mr-[14px] mr-[29px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    22
                                  </Text>
                                  <Text
                                    className="sm:ml-[27px] md:ml-[35px] ml-[69px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    21
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[29px] md:ml-[38px] ml-[75px] mr-[17px] sm:mr-[6px] md:mr-[8px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    20
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[32px] md:ml-[41px] ml-[81px] mr-[11px] sm:mr-[4px] md:mr-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    19
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[34px] md:ml-[44px] ml-[87px] sm:mr-[1px] md:mr-[2px] mr-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    18
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[37px] md:ml-[48px] ml-[93px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    17
                                  </Text>
                                </Column>
                                <Column className="absolute bottom-[31%] flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[7%] sm:w-[100%] w-[60%]">
                                  <Column className="flex flex-col justify-start w-[100%]">
                                    <Text
                                      className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      105
                                    </Text>
                                    <Stack className="h-[11px] ml-[11px] sm:ml-[4px] md:ml-[5px] relative w-[11%]">
                                      <Text
                                        className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        103
                                      </Text>
                                      <Text
                                        className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        104
                                      </Text>
                                    </Stack>
                                    <Text
                                      className="sm:ml-[13px] md:ml-[18px] ml-[35px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      102
                                    </Text>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                                      <Text
                                        className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        101
                                      </Text>
                                      <Text
                                        className="sm:mb-[31px] md:mb-[40px] mb-[78px] ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        100
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[28px] md:mb-[37px] mb-[72px] ml-[1px] sm:mt-[3px] md:mt-[4px] mt-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        99
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[26px] md:mb-[34px] mb-[67px] ml-[3px] mt-[15px] sm:mt-[5px] md:mt-[7px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        98
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[24px] md:mb-[31px] mb-[61px] ml-[3px] md:mt-[10px] mt-[21px] sm:mt-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        97
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[22px] md:mb-[28px] mb-[56px] ml-[3px] sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        96
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[19px] md:mb-[25px] mb-[50px] ml-[3px] sm:mt-[12px] md:mt-[16px] mt-[32px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        95
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[17px] md:mb-[22px] mb-[44px] ml-[3px] sm:mt-[14px] md:mt-[19px] mt-[37px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        94
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[15px] md:mb-[20px] mb-[39px] ml-[3px] sm:mt-[17px] md:mt-[22px] mt-[43px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        93
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[13px] md:mb-[17px] mb-[33px] ml-[3px] sm:mt-[19px] md:mt-[25px] mt-[49px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        92
                                      </Text>
                                      <Text
                                        className="sm:mb-[11px] md:mb-[14px] mb-[28px] ml-[3px] sm:mt-[21px] md:mt-[27px] mt-[54px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        91
                                      </Text>
                                      <Text
                                        className="flex items-center md:mb-[11px] mb-[22px] sm:mb-[8px] ml-[4px] sm:mt-[23px] md:mt-[30px] mt-[60px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        90
                                      </Text>
                                      <Text
                                        className="flex items-center mb-[16px] sm:mb-[6px] md:mb-[8px] ml-[3px] sm:mt-[25px] md:mt-[33px] mt-[65px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        89
                                      </Text>
                                      <Text
                                        className="flex items-center mb-[11px] sm:mb-[4px] md:mb-[5px] ml-[3px] sm:mt-[28px] md:mt-[36px] mt-[71px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        88
                                      </Text>
                                      <Text
                                        className="flex items-center sm:mb-[1px] md:mb-[2px] mb-[5px] ml-[3px] sm:mt-[30px] md:mt-[39px] mt-[77px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        87
                                      </Text>
                                      <Text
                                        className="flex items-center ml-[3px] sm:mt-[32px] md:mt-[42px] mt-[82px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        86
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Stack>
                              <Column className="absolute bottom-[15%] flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[19%]">
                                <Text
                                  className="sm:ml-[31px] md:ml-[41px] ml-[80px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  326
                                </Text>
                                <Text
                                  className="sm:ml-[29px] md:ml-[38px] ml-[75px] sm:mr-[1px] md:mr-[2px] mr-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  325
                                </Text>
                                <Text
                                  className="sm:ml-[27px] md:ml-[36px] ml-[70px] mr-[10px] sm:mr-[3px] md:mr-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  324
                                </Text>
                                <Text
                                  className="sm:ml-[25px] md:ml-[33px] ml-[65px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  323
                                </Text>
                                <Text
                                  className="sm:ml-[23px] md:ml-[30px] ml-[60px] md:mr-[10px] mr-[20px] sm:mr-[7px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  322
                                </Text>
                                <Text
                                  className="sm:ml-[21px] md:ml-[28px] ml-[55px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  321
                                </Text>
                                <Text
                                  className="sm:ml-[19px] md:ml-[25px] ml-[50px] sm:mr-[11px] md:mr-[15px] mr-[30px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  320
                                </Text>
                                <Text
                                  className="sm:ml-[17px] md:ml-[23px] ml-[45px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  319
                                </Text>
                                <Text
                                  className="mt-[3px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  318
                                </Text>
                                <Text
                                  className="sm:ml-[13px] md:ml-[18px] ml-[35px] sm:mr-[17px] md:mr-[23px] mr-[45px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  317
                                </Text>
                                <Text
                                  className="sm:ml-[11px] md:ml-[15px] ml-[30px] sm:mr-[19px] md:mr-[25px] mr-[50px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  316
                                </Text>
                                <Text
                                  className="md:ml-[12px] ml-[25px] sm:ml-[9px] sm:mr-[21px] md:mr-[28px] mr-[55px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  315
                                </Text>
                                <Text
                                  className="md:ml-[10px] ml-[20px] sm:ml-[7px] sm:mr-[23px] md:mr-[30px] mr-[60px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  314
                                </Text>
                                <Text
                                  className="ml-[15px] sm:ml-[5px] md:ml-[7px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  313
                                </Text>
                                <Text
                                  className="ml-[10px] sm:ml-[3px] md:ml-[5px] sm:mr-[27px] md:mr-[36px] mr-[70px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  312
                                </Text>
                                <Text
                                  className="sm:ml-[1px] md:ml-[2px] ml-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  311
                                </Text>
                                <Text
                                  className="sm:mr-[31px] md:mr-[41px] mr-[80px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  310
                                </Text>
                              </Column>
                              <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap items-start justify-between left-[0] sm:mx-[0] sm:px-[0] top-[0] sm:w-[100%] w-[90%]">
                                <Column className="flex flex-col justify-start mt-[10px] sm:mt-[3px] md:mt-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                                  <Text
                                    className="flex items-center sm:ml-[37px] md:ml-[49px] ml-[95px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    48
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[35px] md:ml-[45px] ml-[88px] sm:mr-[2px] md:mr-[3px] mr-[6px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    47
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[32px] md:ml-[41px] ml-[81px] mr-[13px] sm:mr-[5px] md:mr-[6px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    46
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[29px] md:ml-[38px] ml-[75px] md:mr-[10px] mr-[20px] sm:mr-[7px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    45
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[27px] md:ml-[35px] ml-[68px] sm:mr-[10px] md:mr-[13px] mr-[27px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    44
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[24px] md:ml-[31px] ml-[61px] sm:mr-[13px] md:mr-[17px] mr-[34px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    43
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[21px] md:ml-[27px] ml-[54px] sm:mr-[15px] md:mr-[20px] mr-[40px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    42
                                  </Text>
                                  <Text
                                    className="sm:ml-[18px] md:ml-[24px] ml-[47px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    41
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[15px] md:ml-[20px] ml-[40px] sm:mr-[21px] md:mr-[27px] mr-[54px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    40
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[13px] md:ml-[17px] ml-[34px] sm:mr-[24px] md:mr-[31px] mr-[61px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    39
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[10px] md:ml-[13px] ml-[27px] sm:mr-[27px] md:mr-[35px] mr-[68px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    38
                                  </Text>
                                  <Text
                                    className="flex items-center md:ml-[10px] ml-[20px] sm:ml-[7px] sm:mr-[29px] md:mr-[38px] mr-[75px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    37
                                  </Text>
                                  <Text
                                    className="flex items-center ml-[13px] sm:ml-[5px] md:ml-[6px] sm:mr-[32px] md:mr-[41px] mr-[81px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    36
                                  </Text>
                                  <Text
                                    className="flex items-center sm:ml-[2px] md:ml-[3px] ml-[6px] sm:mr-[35px] md:mr-[45px] mr-[88px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    35
                                  </Text>
                                  <Text
                                    className="flex items-center sm:mr-[37px] md:mr-[49px] mr-[95px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    34
                                  </Text>
                                </Column>
                                <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[58%]">
                                  <Text
                                    className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    309
                                  </Text>
                                  <Text
                                    className="md:ml-[11px] ml-[22px] sm:ml-[8px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    308
                                  </Text>
                                  <Column className="flex flex-col justify-start md:ml-[20px] ml-[40px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[84%]">
                                    <Text
                                      className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      307
                                    </Text>
                                    <Text
                                      className="ml-[11px] sm:ml-[4px] md:ml-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      306
                                    </Text>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end md:ml-[11px] ml-[23px] mr-[117px] md:mr-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[34%]">
                                      <Stack className="h-[29px] mb-[4px] relative sm:w-[100%] w-[81%]">
                                        <Stack className="absolute bottom-[0] h-[23px] right-[0] sm:w-[100%] w-[80%]">
                                          <Stack className="absolute bottom-[0] h-[18px] right-[0] sm:w-[100%] w-[77%]">
                                            <Stack className="absolute bottom-[0] h-[12px] right-[0] sm:w-[100%] w-[66%]">
                                              <Text
                                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                301
                                              </Text>
                                              <Text
                                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                                as="h1"
                                                variant="h1"
                                              >
                                                302
                                              </Text>
                                            </Stack>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              303
                                            </Text>
                                          </Stack>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            304
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          305
                                        </Text>
                                      </Stack>
                                      <Text
                                        className="ml-[1px] sm:mt-[10px] md:mt-[13px] mt-[26px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        300
                                      </Text>
                                    </Row>
                                    <Stack className="h-[16px] sm:ml-[37px] md:ml-[48px] ml-[94px] relative w-[17%]">
                                      <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                        <Text
                                          className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          297
                                        </Text>
                                        <Text
                                          className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          298
                                        </Text>
                                      </Stack>
                                      <Text
                                        className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        299
                                      </Text>
                                    </Stack>
                                    <Text
                                      className="ml-[129px] sm:ml-[51px] md:ml-[66px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      296
                                    </Text>
                                    <Text
                                      className="ml-[141px] sm:ml-[56px] md:ml-[72px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      295
                                    </Text>
                                    <Text
                                      className="ml-[153px] sm:ml-[61px] md:ml-[78px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      294
                                    </Text>
                                    <Stack className="h-[11px] ml-[165px] sm:ml-[65px] md:ml-[85px] relative w-[12%]">
                                      <Text
                                        className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        292
                                      </Text>
                                      <Text
                                        className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        293
                                      </Text>
                                    </Stack>
                                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                                      <Text
                                        className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        291
                                      </Text>
                                      <Text
                                        className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        290
                                      </Text>
                                    </Row>
                                  </Column>
                                </Column>
                              </Row>
                            </Stack>
                            <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[12%] top-[20%] sm:w-[100%] w-[70%]">
                              <Column className="flex flex-col justify-start w-[100%]">
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                                  <Text
                                    className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    241
                                  </Text>
                                  <Stack className="h-[12px] ml-[1px] sm:mt-[1px] md:mt-[2px] mt-[5px] relative sm:w-[100%] w-[67%]">
                                    <Text
                                      className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      239
                                    </Text>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      240
                                    </Text>
                                  </Stack>
                                </Row>
                                <Text
                                  className="sm:ml-[13px] md:ml-[18px] ml-[35px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  238
                                </Text>
                                <Text
                                  className="sm:ml-[18px] md:ml-[24px] ml-[47px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  237
                                </Text>
                                <Text
                                  className="sm:ml-[23px] md:ml-[30px] ml-[59px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  236
                                </Text>
                                <Text
                                  className="sm:ml-[27px] md:ml-[36px] ml-[70px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  235
                                </Text>
                                <Stack className="h-[11px] sm:ml-[32px] md:ml-[42px] ml-[82px] relative w-[7%]">
                                  <Text
                                    className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    233
                                  </Text>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    234
                                  </Text>
                                </Stack>
                                <Text
                                  className="ml-[106px] sm:ml-[42px] md:ml-[54px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  232
                                </Text>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[118px] md:ml-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                                  <Text
                                    className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    231
                                  </Text>
                                  <Text
                                    className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    230
                                  </Text>
                                </Row>
                                <Stack className="h-[11px] ml-[141px] sm:ml-[56px] md:ml-[72px] relative w-[7%]">
                                  <Text
                                    className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    228
                                  </Text>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    229
                                  </Text>
                                </Stack>
                                <Text
                                  className="ml-[165px] sm:ml-[65px] md:ml-[85px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  227
                                </Text>
                                <Text
                                  className="ml-[177px] sm:ml-[70px] md:ml-[91px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  226
                                </Text>
                                <Text
                                  className="ml-[189px] sm:ml-[75px] md:ml-[97px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  225
                                </Text>
                                <Text
                                  className="md:ml-[103px] ml-[200px] sm:ml-[79px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  224
                                </Text>
                                <Text
                                  className="md:ml-[109px] ml-[212px] sm:ml-[84px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  223
                                </Text>
                                <Text
                                  className="md:ml-[115px] ml-[224px] sm:ml-[89px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  222
                                </Text>
                                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                                  <Text
                                    className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    221
                                  </Text>
                                  <Text
                                    className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    220
                                  </Text>
                                </Row>
                                <Stack className="h-[11px] sm:ml-[103px] md:ml-[134px] ml-[260px] relative w-[7%]">
                                  <Text
                                    className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    218
                                  </Text>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    219
                                  </Text>
                                </Stack>
                                <Stack className="h-[22px] sm:ml-[113px] md:ml-[146px] ml-[283px] mr-[11px] sm:mr-[4px] md:mr-[5px] relative w-[14%]">
                                  <Stack className="absolute bottom-[0] h-[16px] right-[0] sm:w-[100%] w-[75%]">
                                    <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                      <Text
                                        className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        214
                                      </Text>
                                      <Text
                                        className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        215
                                      </Text>
                                    </Stack>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      216
                                    </Text>
                                  </Stack>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    217
                                  </Text>
                                </Stack>
                                <Text
                                  className="sm:ml-[131px] md:ml-[170px] ml-[330px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  213
                                </Text>
                              </Column>
                            </Column>
                          </Stack>
                          <Column className="absolute flex flex-col inset-x-[0] items-center justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[24%] sm:w-[100%] w-[70%]">
                            <Column className="flex flex-col justify-start w-[100%]">
                              <Text
                                className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                212
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[11px] md:ml-[5px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[7%]">
                                <Text
                                  className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  211
                                </Text>
                                <Text
                                  className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  210
                                </Text>
                              </Row>
                              <Stack className="h-[16px] sm:ml-[13px] md:ml-[18px] ml-[35px] relative w-[11%]">
                                <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                  <Text
                                    className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    207
                                  </Text>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    208
                                  </Text>
                                </Stack>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  209
                                </Text>
                              </Stack>
                              <Text
                                className="sm:ml-[27px] md:ml-[36px] ml-[70px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                206
                              </Text>
                              <Stack className="h-[11px] sm:ml-[32px] md:ml-[42px] ml-[82px] relative w-[7%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  204
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  205
                                </Text>
                              </Stack>
                              <Stack className="h-[11px] ml-[106px] sm:ml-[42px] md:ml-[54px] relative w-[7%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  202
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  203
                                </Text>
                              </Stack>
                              <Column className="flex flex-col items-center justify-start ml-[129px] md:ml-[66px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[63%]">
                                <Column className="flex flex-col justify-start w-[100%]">
                                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[12%]">
                                    <Text
                                      className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      201
                                    </Text>
                                    <Text
                                      className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      200
                                    </Text>
                                  </Row>
                                  <Text
                                    className="md:ml-[11px] ml-[23px] sm:ml-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    199
                                  </Text>
                                  <Stack className="h-[11px] sm:ml-[13px] md:ml-[18px] ml-[35px] mt-[1px] relative w-[12%]">
                                    <Text
                                      className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      197
                                    </Text>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      198
                                    </Text>
                                  </Stack>
                                  <Column className="flex flex-col items-center justify-start md:ml-[30px] ml-[59px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[73%]">
                                    <Column className="flex flex-col justify-start w-[100%]">
                                      <Text
                                        className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        196
                                      </Text>
                                      <Text
                                        className="ml-[11px] sm:ml-[4px] md:ml-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        195
                                      </Text>
                                      <Stack className="h-[16px] md:ml-[11px] ml-[23px] sm:ml-[9px] sm:mr-[37px] md:mr-[48px] mr-[94px] relative w-[24%]">
                                        <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                          <Text
                                            className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            192
                                          </Text>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            193
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          194
                                        </Text>
                                      </Stack>
                                      <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[30px] ml-[59px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[16%]">
                                        <Text
                                          className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          191
                                        </Text>
                                        <Text
                                          className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          190
                                        </Text>
                                      </Row>
                                      <Text
                                        className="sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        189
                                      </Text>
                                      <Stack className="h-[16px] sm:ml-[37px] md:ml-[48px] ml-[94px] md:mr-[11px] mr-[23px] sm:mr-[9px] relative w-[24%]">
                                        <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                          <Text
                                            className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            186
                                          </Text>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            187
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          188
                                        </Text>
                                      </Stack>
                                      <Text
                                        className="ml-[129px] sm:ml-[51px] md:ml-[66px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        185
                                      </Text>
                                      <Text
                                        className="ml-[141px] sm:ml-[56px] md:ml-[72px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        184
                                      </Text>
                                    </Column>
                                  </Column>
                                </Column>
                              </Column>
                            </Column>
                          </Column>
                        </Stack>
                        <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[17%] top-[11%] sm:w-[100%] w-[58%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Text
                              className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              265
                            </Text>
                            <Text
                              className="ml-[11px] sm:ml-[4px] md:ml-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              264
                            </Text>
                            <Stack className="h-[11px] md:ml-[11px] ml-[23px] sm:ml-[9px] md:mr-[121px] mr-[236px] sm:mr-[94px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                262
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                263
                              </Text>
                            </Stack>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[24px] ml-[47px] md:mr-[109px] mr-[212px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                              <Text
                                className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                261
                              </Text>
                              <Text
                                className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                260
                              </Text>
                            </Row>
                            <Text
                              className="sm:ml-[27px] md:ml-[36px] ml-[70px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              259
                            </Text>
                            <Stack className="h-[11px] sm:ml-[32px] md:ml-[42px] ml-[82px] mr-[177px] sm:mr-[70px] md:mr-[91px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                257
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                258
                              </Text>
                            </Stack>
                            <Text
                              className="ml-[106px] sm:ml-[42px] md:ml-[54px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              256
                            </Text>
                            <Text
                              className="ml-[118px] sm:ml-[47px] md:ml-[60px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              255
                            </Text>
                            <Text
                              className="ml-[129px] sm:ml-[51px] md:ml-[66px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              254
                            </Text>
                            <Stack className="h-[11px] ml-[141px] sm:ml-[56px] md:ml-[72px] mr-[118px] sm:mr-[47px] md:mr-[60px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                252
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                253
                              </Text>
                            </Stack>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] md:mr-[48px] mr-[94px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                              <Text
                                className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                251
                              </Text>
                              <Text
                                className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                250
                              </Text>
                            </Row>
                            <Text
                              className="ml-[188px] sm:ml-[75px] md:ml-[97px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              249
                            </Text>
                            <Stack className="h-[11px] md:ml-[103px] ml-[200px] sm:ml-[79px] sm:mr-[23px] md:mr-[30px] mr-[59px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                247
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                248
                              </Text>
                            </Stack>
                            <Text
                              className="md:ml-[115px] ml-[224px] sm:ml-[89px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              246
                            </Text>
                            <Text
                              className="md:ml-[121px] ml-[236px] sm:ml-[94px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              245
                            </Text>
                            <Text
                              className="md:ml-[127px] ml-[247px] sm:ml-[98px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              244
                            </Text>
                            <Text
                              className="sm:ml-[103px] md:ml-[133px] ml-[259px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              243
                            </Text>
                            <Text
                              className="sm:ml-[108px] md:ml-[139px] ml-[271px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              242
                            </Text>
                          </Column>
                        </Column>
                      </Stack>
                      <Column className="absolute flex flex-col inset-x-[0] justify-start sm:mx-[0] mx-[auto] sm:px-[0] top-[7%] sm:w-[100%] w-[73%]">
                        <Column className="flex flex-col items-center justify-start md:ml-[38px] ml-[75px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[79%]">
                          <Column className="flex flex-col justify-start w-[100%]">
                            <Stack className="h-[12px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                288
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                289
                              </Text>
                            </Stack>
                            <Text
                              className="md:ml-[11px] ml-[23px] sm:ml-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              287
                            </Text>
                            <Stack className="h-[11px] sm:ml-[13px] md:ml-[18px] ml-[35px] mt-[1px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                285
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                286
                              </Text>
                            </Stack>
                            <Stack className="h-[11px] sm:ml-[23px] md:ml-[30px] ml-[59px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                283
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                284
                              </Text>
                            </Stack>
                            <Text
                              className="sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              282
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start md:ml-[48px] ml-[94px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                              <Text
                                className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                281
                              </Text>
                              <Text
                                className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                280
                              </Text>
                            </Row>
                            <Stack className="h-[11px] ml-[118px] sm:ml-[47px] md:ml-[60px] mt-[1px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                278
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                279
                              </Text>
                            </Stack>
                            <Stack className="h-[11px] ml-[141px] sm:ml-[56px] md:ml-[72px] mt-[1px] relative w-[9%]">
                              <Text
                                className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                276
                              </Text>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                277
                              </Text>
                            </Stack>
                            <Text
                              className="ml-[165px] sm:ml-[65px] md:ml-[85px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              275
                            </Text>
                            <Text
                              className="ml-[177px] sm:ml-[70px] md:ml-[91px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              274
                            </Text>
                            <Text
                              className="ml-[188px] sm:ml-[75px] md:ml-[97px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              273
                            </Text>
                            <Text
                              className="md:ml-[103px] ml-[200px] sm:ml-[79px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              272
                            </Text>
                            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                              <Text
                                className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                271
                              </Text>
                              <Text
                                className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                270
                              </Text>
                            </Row>
                            <Stack className="h-[16px] md:ml-[121px] ml-[236px] sm:ml-[94px] mr-[11px] sm:mr-[4px] md:mr-[5px] relative w-[13%]">
                              <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  267
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  268
                                </Text>
                              </Stack>
                              <Text
                                className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                269
                              </Text>
                            </Stack>
                            <Text
                              className="sm:ml-[108px] md:ml-[139px] ml-[271px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              266
                            </Text>
                          </Column>
                        </Column>
                        <Stack className="h-[165px] mr-[17px] sm:mr-[6px] md:mr-[8px] mt-[12px] sm:mt-[4px] md:mt-[6px] relative sm:w-[100%] w-[96%]">
                          <Column className="absolute flex flex-col justify-start w-[100%]">
                            <Column className="flex flex-col justify-start md:mr-[37px] mr-[72px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[80%]">
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                                <Stack className="h-[19px] mb-[15px] sm:mb-[5px] md:mb-[7px] relative sm:w-[100%] w-[49%]">
                                  <Stack className="absolute bottom-[0] h-[12px] right-[0] sm:w-[100%] w-[66%]">
                                    <Text
                                      className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      181
                                    </Text>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      182
                                    </Text>
                                  </Stack>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    183
                                  </Text>
                                </Stack>
                                <Stack className="h-[18px] ml-[1px] mt-[16px] sm:mt-[6px] md:mt-[8px] relative sm:w-[100%] w-[50%]">
                                  <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                    <Text
                                      className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      178
                                    </Text>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      179
                                    </Text>
                                  </Stack>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    180
                                  </Text>
                                </Stack>
                              </Row>
                              <Text
                                className="sm:ml-[27px] md:ml-[36px] ml-[70px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                177
                              </Text>
                              <Text
                                className="sm:ml-[32px] md:ml-[42px] ml-[82px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                176
                              </Text>
                              <Stack className="h-[11px] sm:ml-[37px] md:ml-[48px] ml-[94px] mt-[1px] relative w-[9%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  174
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  175
                                </Text>
                              </Stack>
                              <Text
                                className="ml-[117px] sm:ml-[46px] md:ml-[60px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                173
                              </Text>
                              <Text
                                className="ml-[129px] sm:ml-[51px] md:ml-[66px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                as="h1"
                                variant="h1"
                              >
                                172
                              </Text>
                              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                                <Text
                                  className="mb-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  171
                                </Text>
                                <Text
                                  className="ml-[1px] mt-[4px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  170
                                </Text>
                              </Row>
                              <Stack className="h-[51px] ml-[165px] sm:ml-[65px] md:ml-[85px] relative w-[39%]">
                                <Stack className="absolute h-[39px] inset-[0] justify-center m-[auto] sm:w-[100%] w-[80%]">
                                  <Stack className="absolute bottom-[0] h-[33px] right-[0] sm:w-[100%] w-[87%]">
                                    <Stack className="absolute bottom-[0] h-[28px] right-[0] sm:w-[100%] w-[84%]">
                                      <Stack className="absolute bottom-[0] h-[22px] right-[0] sm:w-[100%] w-[80%]">
                                        <Stack className="absolute bottom-[0] h-[16px] right-[0] sm:w-[100%] w-[75%]">
                                          <Stack className="absolute bottom-[0] h-[11px] right-[0] sm:w-[100%] w-[67%]">
                                            <Text
                                              className="absolute bottom-[0] not-italic right-[0] rotate-[-1deg] text-white_A700 w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              162
                                            </Text>
                                            <Text
                                              className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                              as="h1"
                                              variant="h1"
                                            >
                                              163
                                            </Text>
                                          </Stack>
                                          <Text
                                            className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                            as="h1"
                                            variant="h1"
                                          >
                                            164
                                          </Text>
                                        </Stack>
                                        <Text
                                          className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                          as="h1"
                                          variant="h1"
                                        >
                                          165
                                        </Text>
                                      </Stack>
                                      <Text
                                        className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                        as="h1"
                                        variant="h1"
                                      >
                                        166
                                      </Text>
                                    </Stack>
                                    <Text
                                      className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                      as="h1"
                                      variant="h1"
                                    >
                                      167
                                    </Text>
                                  </Stack>
                                  <Text
                                    className="absolute left-[0] not-italic rotate-[-1deg] text-white_A700 top-[0] w-[auto]"
                                    as="h1"
                                    variant="h1"
                                  >
                                    168
                                  </Text>
                                </Stack>
                                <Text
                                  className="absolute not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  169
                                </Text>
                                <Text
                                  className="absolute not-italic rotate-[-2deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  161
                                </Text>
                              </Stack>
                            </Column>
                            <Column className="flex flex-col justify-start md:ml-[151px] ml-[294px] sm:mt-[3px] md:mt-[4px] mt-[9px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[14%]">
                              <Stack className="h-[11px] md:mr-[11px] mr-[23px] sm:mr-[9px] relative sm:w-[100%] w-[53%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-2deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  157
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-2deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  158
                                </Text>
                              </Stack>
                              <Stack className="h-[12px] md:ml-[11px] ml-[23px] sm:ml-[9px] relative sm:w-[100%] w-[53%]">
                                <Text
                                  className="absolute bottom-[0] not-italic right-[0] rotate-[-2deg] text-white_A700 w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  155
                                </Text>
                                <Text
                                  className="absolute left-[0] not-italic rotate-[-2deg] text-white_A700 top-[0] w-[auto]"
                                  as="h1"
                                  variant="h1"
                                >
                                  156
                                </Text>
                              </Stack>
                            </Column>
                          </Column>
                          <Stack className="absolute bottom-[14%] h-[12px] right-[14%] w-[7%]">
                            <Text
                              className="absolute bottom-[0] not-italic right-[0] rotate-[-2deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              159
                            </Text>
                            <Text
                              className="absolute left-[0] not-italic rotate-[-2deg] text-white_A700 top-[0] w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              160
                            </Text>
                          </Stack>
                        </Stack>
                      </Column>
                    </Stack>
                  </Column>
                  <Column
                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col justify-start left-[0] sm:mx-[0] p-[12px] sm:p-[4px] md:p-[6px] sm:w-[100%] w-[51%]"
                    style={{
                      backgroundImage: "url('images/img_group131.svg')",
                    }}
                  >
                    <Stack className="h-[293px] mb-[145px] sm:mb-[57px] md:mb-[74px] ml-[2px] pb-[1px] relative sm:w-[100%] w-[93%]">
                      <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                        <Text
                          className="not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          21
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[1px] md:ml-[2px] ml-[5px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          22
                        </Text>
                        <Text
                          className="flex items-center ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          23
                        </Text>
                        <Text
                          className="flex items-center ml-[15px] sm:ml-[5px] md:ml-[7px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          24
                        </Text>
                        <Column className="flex flex-col justify-start md:ml-[10px] ml-[20px] mt-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[21%]">
                          <Text
                            className="flex items-center sm:mr-[1px] md:mr-[2px] mr-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            25
                          </Text>
                          <Text
                            className="flex items-center sm:ml-[1px] md:ml-[2px] ml-[5px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            26
                          </Text>
                        </Column>
                        <Column className="flex flex-col justify-start md:ml-[15px] ml-[30px] sm:mt-[2px] md:mt-[3px] mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[56%]">
                          <Column className="flex flex-col justify-start mr-[13px] md:mr-[6px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[64%]">
                            <Text
                              className="flex items-center mr-[16px] sm:mr-[6px] md:mr-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              27
                            </Text>
                            <Text
                              className="flex items-center ml-[2px] mr-[13px] sm:mr-[5px] md:mr-[6px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              28
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[1px] md:ml-[2px] ml-[5px] mr-[10px] sm:mr-[3px] md:mr-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              29
                            </Text>
                            <Text
                              className="flex items-center mt-[3px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              30
                            </Text>
                            <Text
                              className="ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              31
                            </Text>
                            <Text
                              className="flex items-center ml-[13px] sm:ml-[5px] md:ml-[6px] mr-[2px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              32
                            </Text>
                            <Text
                              className="flex items-center ml-[16px] sm:ml-[6px] md:ml-[8px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              33
                            </Text>
                          </Column>
                          <Column className="flex flex-col justify-start ml-[18px] md:ml-[9px] mt-[3px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[50%]">
                            <Text
                              className="flex items-center mr-[10px] sm:mr-[3px] md:mr-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              34
                            </Text>
                            <Text
                              className="flex items-center ml-[2px] sm:mr-[3px] md:mr-[4px] mr-[8px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              35
                            </Text>
                            <Text
                              className="flex items-center mt-[3px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              36
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[3px] md:ml-[4px] ml-[8px] mr-[2px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              37
                            </Text>
                            <Text
                              className="flex items-center ml-[10px] sm:ml-[3px] md:ml-[5px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              38
                            </Text>
                          </Column>
                        </Column>
                      </Column>
                      <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[18%] top-[0] sm:w-[100%] w-[15%]">
                        <Text
                          className="flex items-center sm:mr-[17px] md:mr-[23px] mr-[45px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          13
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[2px] md:ml-[3px] ml-[6px] sm:mr-[15px] md:mr-[19px] mr-[38px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          14
                        </Text>
                        <Text
                          className="flex items-center ml-[12px] sm:ml-[4px] md:ml-[6px] sm:mr-[12px] md:mr-[16px] mr-[32px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          15
                        </Text>
                        <Text
                          className="flex items-center ml-[19px] sm:ml-[7px] md:ml-[9px] md:mr-[12px] mr-[25px] sm:mr-[9px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          16
                        </Text>
                        <Text
                          className="flex items-center md:ml-[12px] ml-[25px] sm:ml-[9px] mr-[19px] sm:mr-[7px] md:mr-[9px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          17
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[12px] md:ml-[16px] ml-[32px] mr-[12px] sm:mr-[4px] md:mr-[6px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          18
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[15px] md:ml-[19px] ml-[38px] sm:mr-[2px] md:mr-[3px] mr-[6px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          19
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[17px] md:ml-[23px] ml-[45px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          20
                        </Text>
                      </Column>
                      <Column className="absolute bottom-[0] flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[22%] sm:w-[100%] w-[13%]">
                        <Text
                          className="sm:mr-[15px] md:mr-[19px] mr-[38px] not-italic rotate-[-3deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          44
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[3px] md:ml-[4px] ml-[8px] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          43
                        </Text>
                        <Text
                          className="flex items-center ml-[16px] sm:ml-[6px] md:ml-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          42
                        </Text>
                        <Text
                          className="md:ml-[12px] ml-[24px] sm:ml-[9px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          41
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[12px] md:ml-[16px] ml-[31px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          40
                        </Text>
                        <Text
                          className="flex items-center sm:ml-[15px] md:ml-[19px] ml-[38px] sm:mt-[2px] md:mt-[3px] mt-[7px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                          as="h1"
                          variant="h1"
                        >
                          39
                        </Text>
                      </Column>
                      <Column className="absolute flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] top-[3%] sm:w-[100%] w-[67%]">
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[24%]">
                          <Text
                            className="mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            9
                          </Text>
                          <Text
                            className="flex items-center ml-[10px] sm:ml-[3px] md:ml-[5px] my-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            10
                          </Text>
                          <Text
                            className="sm:ml-[3px] md:ml-[4px] ml-[8px] my-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            11
                          </Text>
                          <Text
                            className="flex items-center mb-[2px] sm:ml-[3px] md:ml-[4px] ml-[9px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            12
                          </Text>
                        </Row>
                        <Column className="flex flex-col justify-start md:ml-[29px] ml-[58px] mt-[2px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
                          <Text
                            className="ml-[16px] sm:ml-[6px] md:ml-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            8
                          </Text>
                          <Text
                            className="mt-[3px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            7
                          </Text>
                          <Text
                            className="mr-[16px] sm:mr-[6px] md:mr-[8px] mt-[3px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            6
                          </Text>
                        </Column>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-end sm:mt-[10px] md:mt-[13px] mt-[26px] w-[100%]">
                          <Column className="flex flex-col justify-start sm:mb-[12px] md:mb-[16px] mb-[31px] mt-[15px] sm:mt-[5px] md:mt-[7px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
                            <Text
                              className="md:ml-[11px] ml-[22px] sm:ml-[8px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              1
                            </Text>
                            <Text
                              className="ml-[15px] sm:ml-[5px] md:ml-[7px] sm:mr-[2px] md:mr-[3px] mr-[6px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              2
                            </Text>
                            <Text
                              className="sm:ml-[2px] md:ml-[3px] ml-[7px] mr-[14px] sm:mr-[5px] md:mr-[7px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              3
                            </Text>
                            <Text
                              className="md:mr-[10px] mr-[21px] sm:mr-[8px] sm:mt-[2px] md:mt-[3px] mt-[6px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              4
                            </Text>
                          </Column>
                          <Text
                            className="sm:mb-[12px] md:mb-[16px] mb-[32px] sm:ml-[11px] md:ml-[15px] ml-[30px] sm:mt-[22px] md:mt-[29px] mt-[57px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                            as="h1"
                            variant="h1"
                          >
                            5
                          </Text>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start justify-center sm:mb-[35px] md:mb-[45px] mb-[89px] md:ml-[40px] ml-[79px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[15%]">
                            <Text
                              className="flex items-center mb-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              56
                            </Text>
                            <Text
                              className="flex items-center ml-[4px] my-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              55
                            </Text>
                            <Text
                              className="flex items-center ml-[3px] mt-[1px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              54
                            </Text>
                          </Row>
                          <Column className="flex flex-col justify-start ml-[14px] md:ml-[7px] mt-[4px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[23%]">
                            <Text
                              className="flex items-center sm:mr-[17px] md:mr-[23px] mr-[45px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              53
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[1px] md:ml-[2px] ml-[5px] sm:mr-[15px] md:mr-[20px] mr-[40px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              52
                            </Text>
                            <Text
                              className="ml-[11px] sm:ml-[4px] md:ml-[5px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              51
                            </Text>
                            <Text
                              className="flex items-center ml-[17px] sm:ml-[6px] md:ml-[8px] sm:mr-[11px] md:mr-[14px] mr-[28px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              50
                            </Text>
                            <Text
                              className="flex items-center mt-[2px] mx-[auto] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              49
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[11px] md:ml-[14px] ml-[28px] mr-[17px] sm:mr-[6px] md:mr-[8px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              48
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[13px] md:ml-[17px] ml-[34px] mr-[11px] sm:mr-[4px] md:mr-[5px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              47
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[15px] md:ml-[20px] ml-[40px] sm:mr-[1px] md:mr-[2px] mr-[5px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              46
                            </Text>
                            <Text
                              className="flex items-center sm:ml-[17px] md:ml-[23px] ml-[45px] mt-[2px] not-italic rotate-[-1deg] text-white_A700 w-[auto]"
                              as="h1"
                              variant="h1"
                            >
                              45
                            </Text>
                          </Column>
                        </Row>
                      </Column>
                    </Stack>
                  </Column>
                </Stack>
                <Img
                  src="images/img_rdc.svg"
                  className="absolute bottom-[15%] h-[241px] left-[0] max-w-[100%] w-[35%]"
                  alt="RDC"
                />
              </Stack>
              <Column className="absolute flex flex-col justify-start sm:mx-[0] sm:px-[0] right-[5%] top-[2%] sm:w-[100%] w-[85%]">
                <Text
                  className="leading-[100.00%] md:ml-[292px] ml-[567px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[20%]"
                  variant="body3"
                >
                  Большая
                  <br />
                  парковка
                </Text>
                <Text
                  className="leading-[100.00%] md:mr-[292px] mr-[567px] mt-[150px] sm:mt-[59px] md:mt-[77px] sm:mx-[0] not-italic text-center text-white_A700 sm:w-[100%] w-[20%]"
                  variant="body3"
                >
                  Малая
                  <br />
                  парковка
                </Text>
                <Text
                  className="font-normal ml-[19px] sm:ml-[7px] md:ml-[9px] md:mt-[115px] mt-[224px] sm:mt-[89px] not-italic text-black_900 w-[auto]"
                  variant="body1"
                >
                  РДЦ
                </Text>
              </Column>
            </Stack>
          </Stack>
        </Stack>
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

export default ParkingPage;
