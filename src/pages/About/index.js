import React from "react";

import {
  Column,
  Stack,
  Row,
  Img,
  Button,
  Text,
  Line,
  RatingBar,
  List,
  Input,
} from "components";

const AboutPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro justify-start mx-[auto] w-[100%]">
        <Column className="flex flex-col items-center w-[100%]">
          <Stack
            className="bg-cover bg-no-repeat h-[930px] relative w-[100%]"
            style={{ backgroundImage: "url('images/img_main_930X1920.png')" }}
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
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-circe items-start md:ml-[118px] ml-[229px] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[9%]">
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
                      О центре
                    </Text>
                  </Row>
                  <Text
                    className="font-pfdindisplaypro leading-[140.00%] md:ml-[118px] ml-[229px] sm:mt-[15px] md:mt-[20px] mt-[40px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[34%]"
                    variant="body2"
                  >
                    Основная задача РДЦ – обеспечить безупречный комфорт и
                    наилучшие условия для развития вашего бизнеса
                  </Text>
                  <Text
                    className="font-circe font-normal leading-[160.00%] md:ml-[118px] ml-[229px] sm:mt-[11px] md:mt-[15px] mt-[30px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[35%]"
                    variant="body11"
                  >
                    Время – самый ценный ресурс, которым располагает деловой
                    человек, а грамотно распоряжаться этим ресурсом – настоящее
                    искусство. «Региональный Деловой Центр» создан, чтобы
                    экономить ваше время. Оптимальное расположение в
                    географическом центре Самары и высокая транспортная
                    доступность дают возможность без труда добраться до РДЦ из
                    любой точки города. Инженерное оснащение здания и полный
                    комплекс услуг управляющей компании позволяют нашим
                    арендаторам сосредоточиться на бизнесе, а не на поддержании
                    комфорта в офисе. Грамотно сформированная инфраструктура
                    обеспечивает перспективное окружение и способствует росту
                    деловой активности.
                  </Text>
                  <Row className="bg-amber_A400_a7 flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center sm:mt-[29px] md:mt-[38px] mt-[74px] sm:p-[15px] md:p-[28px] p-[56px] w-[100%]">
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-center mb-[1px] ml-[173px] md:ml-[89px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[76%]">
                      <Text
                        className="font-normal leading-[140.00%] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[13%]"
                        variant="body1"
                      >
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          1
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          3
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          {" "}
                          500 м
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          2<br />
                        </span>
                        <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                          Общая площадь
                        </span>
                      </Text>
                      <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[25px] md:ml-[33px] ml-[64px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                      <Text
                        className="font-normal leading-[140.00%] md:ml-[33px] ml-[64px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[27%]"
                        variant="body1"
                      >
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          1 3
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          5
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          0 м
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          2<br />
                        </span>
                        <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                          Полезная площадь каждого этажа
                        </span>
                      </Text>
                      <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[25px] md:ml-[33px] ml-[64px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                      <Text
                        className="font-normal leading-[140.00%] md:ml-[33px] ml-[64px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[14%]"
                        variant="body1"
                      >
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          до 5,1 м<br />
                        </span>
                        <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                          Высота потолков
                        </span>
                      </Text>
                      <div className="bg-gray_900 sm:h-[4px] md:h-[5px] h-[8px] sm:ml-[25px] md:ml-[33px] ml-[64px] sm:my-[15px] md:my-[19px] my-[38px] rounded-radius50 sm:w-[3px] md:w-[4px] w-[8px]"></div>
                      <Text
                        className="font-normal leading-[140.00%] md:ml-[33px] ml-[64px] sm:mx-[0] not-italic text-gray_900 sm:w-[100%] w-[18%]"
                        variant="body1"
                      >
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          от 500 руб./м
                        </span>
                        <span className="text-gray_900 text-[40px] font-pfdindisplaypro sm:text-[15px] md:text-[20px]">
                          2<br />
                        </span>
                        <span className="text-gray_900 text-[25px] font-pfdindisplaypro sm:text-[21px] md:text-[23px]">
                          Аренда офисов
                        </span>
                      </Text>
                    </Row>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
        </Column>
        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start max-w-[1761px] ml-[auto] mr-[auto] sm:pl-[15px] sm:pr-[15px] w-[100%]">
          <Column
            className="bg-cover bg-no-repeat flex flex-col items-center justify-end mt-[1px] sm:mx-[0] sm:p-[15px] md:p-[25px] p-[50px] sm:w-[100%] w-[54%]"
            style={{
              backgroundImage: "url('images/img_group104_677X942.png')",
            }}
          >
            <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start sm:mt-[220px] md:mt-[285px] mt-[553px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[13%]">
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
          <Stack className="h-[619px] sm:ml-[30px] md:ml-[39px] ml-[76px] relative sm:w-[100%] w-[43%]">
            <Column className="absolute flex flex-col items-center justify-start sm:mx-[0] sm:px-[0] right-[0] sm:w-[100%] w-[49%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text className="text-gray_50 w-[auto]" as="h5" variant="h5">
                  А
                </Text>
                <Text className="text-gray_50 w-[auto]" as="h2" variant="h2">
                  КЛАСС•А
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-evenly mt-[18px] sm:mt-[7px] md:mt-[9px] sm:px-[0] w-[100%]">
                  <RatingBar
                    className=""
                    value={5}
                    starCount={5}
                    activeColor="#f8f8f8"
                    size={61}
                  ></RatingBar>
                </Row>
              </Column>
            </Column>
            <Column className="absolute bottom-[12%] flex flex-col justify-start left-[0] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[91%]">
              <Text
                className="font-pfdindisplaypro leading-[140.00%] not-italic text-black_900 w-[100%]"
                as="h6"
                variant="h6"
              >
                Мы предлагаем офисы, которые
                <br />
                подстраиваются под вас.
              </Text>
              <Text
                className="font-circe leading-[160.00%] sm:mt-[11px] md:mt-[15px] mt-[30px] not-italic text-gray_900 w-[100%]"
                variant="body10"
              >
                <span className="text-gray_900 text-[19px] font-normal">
                  Бизнес-центр «Региональный Деловой Центр» - это уникальное
                  пространство, созданное с учетом всех потребностей
                  современного бизнеса. Мы создаем максимально комфортные
                  условия для развития и укрепления вашего бизнеса, поднимаем на
                  новый уровень качество его обслуживания.
                  <br />
                </span>
                <span className="text-gray_900 text-[19px] font-bold">
                  Центр относится к коммерческой недвижимости самого высокого
                  «А»-класса.
                </span>
              </Text>
              <Row className="bg-amber_A400 flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-center sm:mt-[19px] md:mt-[25px] mt-[49px] sm:mx-[0] md:pr-[13px] sm:pr-[15px] pr-[26px] sm:w-[100%] w-[46%]">
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
            </Column>
          </Stack>
        </Row>
        <Column className="flex flex-col items-center w-[100%]">
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
                    Высота потолков от 3,3 до 5,1 метров соответствует
                    стандартам элитной коммерческой недвижимости.
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
                    позволяют разделить потоки резидентов центра и
                    соответствовать современным требованиям профилактики
                    инфекционных болезней.{" "}
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
                    Спринклерная водонаполненная система пожаротушения
                    «Grundfos», интеллектуальная система управления зданием
                    «Simens Building Technologies», видеомониторинг периметра и
                    внутренних зон эффективно обеспечивают безопасность.
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
                src="images/img_ill_673X707.svg"
                className="max-w-[100%] sm:ml-[14px] md:ml-[19px] ml-[37px] sm:w-[100%] w-[49%]"
                alt="ill"
              />
            </Row>
          </Row>
          <Stack className="bg-white_A700 font-circe h-[930px] relative w-[100%]">
            <div className="absolute bg-pink_800 bottom-[0] sm:h-[186px] md:h-[241px] h-[465px] left-[0] sm:w-[100%] w-[50%]"></div>
            <Img
              src="images/img_23.png"
              className="absolute h-[465px] max-w-[100%] right-[0] top-[0] sm:w-[100%] w-[50%]"
              alt="TwentyThree"
            />
            <Text
              className="absolute font-normal leading-[160.00%] left-[12%] sm:mx-[0] not-italic text-gray_900 top-[17%] sm:w-[100%] w-[36%]"
              variant="body11"
            >
              После ввода в эксплуатацию офисное здание «Регионального Делового
              Центра» стало настоящей жемчужиной Самары. Стильный фасад
              необычной формы и богатая входная группа. В вестибюле комплекса
              выполнена дорогая отделка с использованием натуральных и
              экологически чистых материалов. Этажи, зоны общего пользования и
              холлы также отделаны современными материалами.{" "}
            </Text>
            <Column className="absolute bg-white_A700 flex flex-col items-center justify-start w-[100%]">
              <Column className="flex flex-col items-center justify-start sm:px-[0] w-[100%]">
                <Column className="flex flex-col justify-start w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end ml-[auto] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Text
                      className="flex-grow leading-[160.00%] sm:mx-[0] not-italic text-gray_900"
                      variant="body10"
                    >
                      После ввода в эксплуатацию офисное здание «Регионального
                      Делового Центра» стало настоящей жемчужиной Самары.
                      Зеркальный фасад необычной формы находится в гармонии с
                      окружающей застройкой. Богатая входная группа призвана не
                      только эстетически радовать посетителей, но и служить
                      комфорту и безопасности. В вестибюле комплекса выполнена
                      дорогая отделка с использованием натуральных и
                      экологически чистых материалов. Этажи, зоны общего
                      пользования и холлы также имеют высококачественную
                      отделку.
                    </Text>
                    <Img
                      src="images/img_23.png"
                      className="flex-shrink-0 max-w-[100%] sm:ml-[23px] md:ml-[29px] ml-[58px] sm:w-[100%] w-[57%]"
                      alt="TwentyThree One"
                    />
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:mr-[116px] mr-[226px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[89%]">
                    <Img
                      src="images/img_rectangle34.png"
                      className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[57%]"
                      alt="RectangleThirtyFour One"
                    />
                    <Text
                      className="flex-grow leading-[160.00%] md:ml-[29px] ml-[58px] sm:mx-[0] not-italic text-gray_900"
                      variant="body10"
                    >
                      На 1 этаже размещена служба ресепшн, приветливо
                      встречающая сотрудников и посетителей РДЦ. Гости могут
                      воспользоваться услугами бесплатного Wi-Fi. Особое
                      внимание уделено безопасности пребывания: осуществляется
                      круглосуточный видеомониторинг периметра и общественных
                      зон здания. Задействованы цифровые системы связи 2
                      провайдеров.
                    </Text>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Stack>
          <Column className="bg-white_A700 flex flex-col font-circe items-center justify-start w-[100%]">
            <Column className="flex flex-col justify-start w-[100%]">
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-end max-w-[1692px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Text
                  className="flex-grow leading-[160.00%] sm:mx-[0] not-italic text-gray_900"
                  variant="body10"
                >
                  Для клиентов бизнес-центра «Региональный Деловой Центр»
                  представлены офисные пространства с открытой и смешанной
                  планировкой. Все помещения предлагаются в аренду уже с готовой
                  отделкой. Дизайн интерьеров выполнен в стильном
                  минималистичном ключе. Отделка соответствует современным
                  требованиям экологических стандартов.
                </Text>
                <Img
                  src="images/img_rectangle34_465X960.png"
                  className="flex-shrink-0 max-w-[100%] sm:ml-[31px] md:ml-[40px] ml-[78px] sm:w-[100%] w-[57%]"
                  alt="RectangleThirtyFour Two"
                />
              </Row>
              <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1692px] ml-[auto] md:mr-[117px] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                <Img
                  src="images/img_rectangle34_1.png"
                  className="flex-shrink-0 max-w-[100%] sm:w-[100%] w-[57%]"
                  alt="RectangleThirtyFour Three"
                />
                <Text
                  className="flex-grow leading-[160.00%] md:ml-[29px] ml-[58px] sm:mx-[0] not-italic text-gray_900"
                  variant="body10"
                >
                  <span className="text-gray_900 text-[19px] font-circe font-normal">
                    У РДЦ расположена собственная малая парковка для арендаторов
                    на 382 машиноместа + большая парковка на 500 машиномест.
                    Резидентам на каждые 50 м
                  </span>
                  <span className="text-gray_900 text-[19px] font-circe font-normal">
                    2{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-circe font-normal">
                    арендуемой площади выделяется одно льготное машиноместо на
                    собственной малой парковке. Приятным бонусом для
                    автомобилистов станет наличие автомойки и автозаправок в
                    непосредственной близости от РДЦ.
                  </span>
                </Text>
              </Row>
            </Column>
          </Column>
          <Column
            className="bg-cover bg-no-repeat flex flex-col font-pfdindisplaypro justify-end p-[148px] sm:p-[15px] md:p-[76px] w-[100%]"
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
          <Column className="flex flex-col font-pfdindisplaypro items-center justify-start w-[100%]">
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
                        города: Московское шоссе, ул. Авроры, ул. Советской
                        Армии, ул. Ново-Садовая, ул. Стара-Загора.
                        <br />
                        <br />
                        Удобное расположение в географическом и деловом центре
                        города обеспечивает перспективное бизнес-окружение.
                        Бизнес-центр также имеет прямой доступ к историческим и
                        промышленным районам города, междугороднему автовокзалу
                        и международному аэропорту Курумоч.
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
                            src="images/img__2.png"
                            className="absolute h-[803px] max-w-[100%] top-[0] w-[100%]"
                            alt="NinetyTwo"
                          />
                          <Img
                            src="images/img__5.png"
                            className="absolute bottom-[0] h-[803px] max-w-[100%] w-[100%]"
                            alt="NinetyThree"
                          />
                        </Stack>
                        <Img
                          src="images/img__6.png"
                          className="absolute h-[808px] inset-[0] justify-center m-[auto] max-w-[100%] sm:w-[100%] w-[98%]"
                          alt="NinetyFour"
                        />
                      </Stack>
                      <Img
                        src="images/img__8.png"
                        className="absolute bottom-[4%] h-[700px] inset-x-[0] max-w-[100%] w-[100%]"
                        alt="NinetyFive"
                      />
                    </Stack>
                    <Column
                      className="absolute bg-cover bg-no-repeat flex flex-col h-[max-content] inset-y-[0] justify-start sm:mx-[0] my-[auto] p-[10px] sm:p-[3px] md:p-[5px] sm:w-[100%] w-[92%]"
                      style={{
                        backgroundImage:
                          "url('images/img_group102_813X998.png')",
                      }}
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
          <Column
            className="bg-cover bg-no-repeat flex flex-col font-pfdindisplaypro items-center justify-start w-[100%]"
            style={{ backgroundImage: "url('images/img_review_930X1920.png')" }}
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
                    src="images/img_logow2_61X88.svg"
                    className="max-w-[100%] w-[10%]"
                    alt="logowTwo"
                  />
                  <Img
                    src="images/img__47X133.png"
                    className="max-w-[100%] w-[14%]"
                    alt="NinetyNine"
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
                    src="images/img_logowoma1_38X167.svg"
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
                    более восьми лет. За это время мы имели возможность оценить
                    не только качество помещений и инженерных решений, удобное
                    расположение и транспортную доступность, но и высокий
                    профессиональный уровень сотрудников арендодателя,
                    позволяющий оперативно решать любые вопросы»
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

export default AboutPage;
