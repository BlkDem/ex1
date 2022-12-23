import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Button,
  Text,
  Line,
  List,
  Input,
} from "components";

const InfrastructurePage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Stack
          className="bg-cover bg-no-repeat h-[930px] relative w-[100%]"
          style={{ backgroundImage: "url('images/img_main_1.png')" }}
        >
          <div className="absolute bg-gray_900_ab sm:h-[293px] md:h-[378px] h-[732px] left-[0] top-[0] sm:w-[100%] w-[50%]"></div>
          <Column className="absolute bg-gradient  flex flex-col items-center justify-end sm:pt-[11px] md:pt-[15px] pt-[30px] w-[100%]">
            <Column className="flex flex-col items-center justify-start w-[100%]">
              <header className="sm:w-[100%] w-[77%]">
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
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start md:ml-[118px] ml-[229px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
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
                    Инфраструктура
                  </Text>
                </Row>
                <Text
                  className="font-pfdindisplaypro leading-[140.00%] md:ml-[118px] ml-[229px] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[36%]"
                  variant="body2"
                >
                  «Региональный Деловой Центр» находится в географическом центре
                  Самары
                </Text>
                <Text
                  className="font-circe font-normal leading-[160.00%] md:ml-[118px] ml-[229px] sm:mt-[13px] md:mt-[17px] mt-[34px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[35%]"
                  variant="body11"
                >
                  <span className="text-white_A700 text-[18px]">
                    Бизнес-центр «Региональный Деловой Центр» расположен по
                    адресу:
                    <br />
                  </span>
                  <span className="text-white_A700 text-[18px] font-bold">
                    г. Самара, Октябрьский район, Московское шоссе, д. 41.
                    <br />
                  </span>
                  <span className="text-white_A700 text-[18px]">
                    Развитая инфраструктура района позволяет нашим резидентам
                    успевать больше за меньшее время, повышать деловую
                    активность, легче устанавливать рабочие контакты. Всемирная
                    организация здравоохранения вывела правило «15 минут»: все
                    основные инфраструктурные точки и зоны досуга должны
                    находиться в 15 минутах пешей доступности от офиса или дома.
                    И расположение РДЦ на 100% соответствует этому правилу.
                  </span>
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[118px] ml-[229px] sm:mt-[13px] md:mt-[17px] mt-[34px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[19%]">
                  <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center sm:mx-[0] md:pr-[13px] sm:pr-[15px] pr-[26px] sm:w-[100%] w-[86%]">
                    <Img
                      src="images/img_20210623214.png"
                      className="flex-shrink-0 max-w-[100%] w-[30%]"
                      alt="20210623214"
                    />
                    <Text
                      className="flex-grow font-bold ml-[18px] sm:ml-[7px] md:ml-[9px] text-gray_900 uppercase"
                      variant="body14"
                    >
                      Скачать презентацию
                    </Text>
                  </Row>
                  <Text
                    className="font-circe font-normal ml-[18px] sm:ml-[7px] md:ml-[9px] not-italic text-gray_504 w-[auto]"
                    variant="body14"
                  >
                    .PDF
                  </Text>
                </Row>
                <Row className="bg-amber_A400_a7 flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center sm:mt-[23px] md:mt-[29px] mt-[58px] sm:p-[15px] md:p-[28px] p-[56px] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center mb-[1px] ml-[173px] md:ml-[89px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[78%]">
                    <Text
                      className="font-normal leading-[140.00%] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[13%]"
                      variant="body1"
                    >
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        700
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        {" "}
                        м<br />
                      </span>
                      <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                        До Автовокзала
                      </span>
                    </Text>
                    <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[36px] md:ml-[46px] ml-[91px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                    <Text
                      className="font-normal leading-[140.00%] md:ml-[46px] ml-[91px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[16%]"
                      variant="body1"
                    >
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        5,7
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        {" "}
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        к
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        м<br />
                      </span>
                      <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                        До пляжа у «Ладьи»
                      </span>
                    </Text>
                    <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[36px] md:ml-[46px] ml-[91px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                    <Text
                      className="font-normal leading-[140.00%] md:ml-[46px] ml-[91px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[13%]"
                      variant="body1"
                    >
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        7,6
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        {" "}
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        к
                      </span>
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        м<br />
                      </span>
                      <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                        До ЖД Вокзала
                      </span>
                    </Text>
                    <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[36px] md:ml-[46px] ml-[91px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                    <Text
                      className="font-normal leading-[140.00%] md:ml-[46px] ml-[91px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[20%]"
                      variant="body1"
                    >
                      <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                        46 км
                        <br />
                      </span>
                      <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                        До Аэропорта «Курумоч»
                      </span>
                    </Text>
                  </Row>
                </Row>
              </Column>
            </Column>
          </Column>
        </Stack>
        <Row className="bg-gray_50 flex flex-row md:flex-wrap sm:flex-wrap items-center md:px-[118px] sm:px-[15px] px-[229px] w-[100%]">
          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center max-w-[465px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Button
              className="cursor-pointer font-normal min-w-[52%] not-italic text-[20px] text-black_900 text-center w-[max-content]"
              size="xl"
            >
              Показать на карте
            </Button>
            <Text
              className="font-normal sm:ml-[17px] md:ml-[23px] ml-[45px] not-italic text-black_900 w-[auto]"
              variant="body9"
            >
              Показать карточками
            </Text>
          </Row>
        </Row>
        <Column
          className="bg-cover bg-no-repeat flex flex-col justify-end p-[148px] sm:p-[15px] md:p-[76px] w-[100%]"
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
                      alt="Seven"
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
                      alt="Three"
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
                      alt="One"
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
                        className="not-italic text-amber_A401 w-[auto]"
                        variant="body8"
                      >
                        1. До Автовокзала
                      </Text>
                      <Line className="bg-amber_A401 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
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
                          className="not-italic text-amber_A401 w-[auto]"
                          variant="body8"
                        >
                          2. До пляжа у «Ладьи»
                        </Text>
                        <Line className="bg-amber_A401 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
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
                          className="not-italic text-amber_A401 w-[auto]"
                          variant="body8"
                        >
                          3. До ЖД вокзала
                        </Text>
                        <Line className="bg-amber_A401 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
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
                        className="not-italic text-amber_A401 w-[auto]"
                        variant="body8"
                      >
                        4. До Аэропорта «Курумоч»
                      </Text>
                      <Line className="bg-amber_A401 h-[5px] sm:mt-[1px] md:mt-[2px] mt-[5px] w-[100%]" />
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
                          src="images/img__10.png"
                          className="absolute h-[803px] max-w-[100%] top-[0] w-[100%]"
                          alt="ThreeHundredFiftySeven"
                        />
                        <Img
                          src="images/img__11.png"
                          className="absolute bottom-[0] h-[803px] max-w-[100%] w-[100%]"
                          alt="ThreeHundredFiftyEight"
                        />
                      </Stack>
                      <Img
                        src="images/img__12.png"
                        className="absolute h-[808px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[98%]"
                        alt="ThreeHundredFiftyNine"
                      />
                    </Stack>
                    <Img
                      src="images/img__13.png"
                      className="absolute bottom-[4%] h-[700px] inset-x-[0] max-w-[100%] w-[100%]"
                      alt="ThreeHundredSixty"
                    />
                  </Stack>
                  <Column
                    className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[92%]"
                    style={{ backgroundImage: "url('images/img_group94.png')" }}
                  >
                    <Column className="flex flex-col items-end justify-start ml-[135px] md:ml-[69px] md:mr-[280px] mr-[543px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                      <Stack className="h-[72px] relative w-[9%]">
                        <Line className="absolute bg-amber_A401 sm:h-[26px] md:h-[34px] h-[64px] right-[42%] top-[0] w-[2px]" />
                        <Column
                          className="absolute bg-cover bg-no-repeat flex flex-col justify-start p-[2px] w-[100%]"
                          style={{
                            backgroundImage: "url('images/img_group95.svg')",
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
                            backgroundImage: "url('images/img_group95.svg')",
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
                            backgroundImage: "url('images/img_group95.svg')",
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
                        backgroundImage: "url('images/img_group95.svg')",
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

export default InfrastructurePage;
