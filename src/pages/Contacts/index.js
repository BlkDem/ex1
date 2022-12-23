import React from "react";

import {
  Column,
  Row,
  Img,
  Stack,
  Button,
  Text,
  Line,
  Input,
  SelectBox,
} from "components";

const ContactsPage = () => {
  return (
    <>
      <Column className="bg-white_A700 flex flex-col font-pfdindisplaypro items-center justify-start mx-[auto] w-[100%]">
        <Column
          className="bg-cover bg-no-repeat flex flex-col items-center justify-start w-[100%]"
          style={{ backgroundImage: "url('images/img_group113.png')" }}
        >
          <Column className="bg-gray_900_ab flex flex-col items-center justify-start md:py-[15px] sm:py-[15px] py-[30px] w-[100%]">
            <Column className="flex flex-col items-center justify-start sm:mb-[20px] md:mb-[26px] mb-[51px] w-[100%]">
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
                  <Stack className="h-[42px] sm:ml-[12px] md:ml-[16px] ml-[32px] relative w-[37%]">
                    <Row className="absolute flex flex-row md:flex-wrap sm:flex-wrap h-[max-content] inset-y-[0] left-[0] sm:mx-[0] my-[auto] sm:px-[0] sm:w-[100%] w-[96%] common-row-list">
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
                      className="absolute cursor-pointer font-normal min-w-[23%] not-italic right-[0] text-[18px] text-black_900 text-center w-[max-content]"
                      size="md"
                      variant="FillWhiteA700"
                    >
                      Контакты
                    </Button>
                  </Stack>
                  <Button
                    className="flex items-center justify-center md:ml-[8px] min-w-[17%] ml-[17px] sm:ml-[6px] text-center w-[max-content]"
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
              <Column className="flex flex-col font-circe items-center justify-start sm:mt-[11px] md:mt-[14px] mt-[29px] w-[100%]">
                <Line className="bg-white_A700 h-[1px] w-[100%]" />
                <Column className="flex flex-col justify-start max-w-[1465px] ml-[auto] mr-[auto] mt-[16px] sm:mt-[6px] md:mt-[8px] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-start ml-[1px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[11%]">
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
                      Контакты
                    </Text>
                  </Row>
                  <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-start justify-between sm:mt-[27px] md:mt-[35px] mt-[68px] w-[100%]">
                    <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[27%]">
                      <Text
                        className="ml-[1px] not-italic text-white_A700 w-[auto]"
                        as="h3"
                        variant="h3"
                      >
                        Контакты
                      </Text>
                      <Column className="flex flex-col font-circe justify-start sm:mt-[12px] md:mt-[16px] mt-[32px] w-[100%]">
                        <Img
                          src="images/img_call_24X24.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="call One"
                        />
                        <Text
                          className="font-normal leading-[200.00%] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-white_A700 w-[100%]"
                          variant="body11"
                        >
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846) 372-72-72, 276-76-76
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            – Отдел аренды
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846) 372-70-70
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            {" "}
                            (внутр. *070) <br />– Рецепция{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            (информация по бизнес-центру)
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846) 225-44-44{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            – Управляющий офисным{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            центром
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            372-32-34
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            {" "}
                            (внутр. *234)
                            <br />–{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            Администратор
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            276-76-76
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            <br />– Приемная
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            372-35-05
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            <br />– Служба эксплуатации центра
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            372-35-10
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            <br />– Служба безопасности{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            центра
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            993-44-23,{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846){" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            993-44-33
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            {" "}
                            –{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            Операторы связи Регион Связь Консалт
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            8 (846) 276
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            -19-25,{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            975
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-bold">
                            -35-35, 975-35-38
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            {" "}
                            –{" "}
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            Операторы связи Жигули Телеком
                          </span>
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col font-circe justify-start mt-[111px] sm:mt-[44px] md:mt-[57px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[20%]">
                      <Column className="flex flex-col justify-start sm:mx-[0] sm:px-[0] sm:w-[100%] w-[81%]">
                        <Img
                          src="images/img_location_24X18.svg"
                          className="max-w-[100%] ml-[3px] w-[8%]"
                          alt="location One"
                        />
                        <a
                          href={"https://www.lockobank.ru/"}
                          target="_blank"
                          className="font-normal leading-[160.00%] sm:mt-[1px] md:mt-[2px] mt-[5px] not-italic text-[18px] text-white_A700 w-[100%]"
                          rel="noreferrer"
                        >
                          Адрес:
                          <br />
                          443080, Россия, г. Самара,
                          <br />
                          Московское шоссе, 41
                          <br />
                        </a>
                      </Column>
                      <Column className="flex flex-col justify-start sm:mt-[34px] md:mt-[44px] mt-[87px] w-[100%]">
                        <Img
                          src="images/img_clock.svg"
                          className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] md:w-[12px] w-[24px] sm:w-[9px]"
                          alt="clock"
                        />
                        <Text
                          className="font-bold leading-[160.00%] sm:mt-[1px] md:mt-[2px] mt-[5px] text-white_A700 w-[100%]"
                          variant="body11"
                        >
                          <span className="text-white_A700 text-[18px] font-circe">
                            Время работы:
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            Пн-Пт
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-normal not-italic">
                            {" "}
                            — с 7:00 до 20:00
                            <br />
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-normal not-italic">
                            (возможно согласование иного
                            <br />
                            режима, в БЦ есть арендаторы
                            <br />с круглосуточным графиком работы)
                            <br />
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe">
                            Сб-Вс
                          </span>
                          <span className="text-white_A700 text-[18px] font-circe font-normal not-italic">
                            {" "}
                            — выходной
                          </span>
                        </Text>
                      </Column>
                    </Column>
                    <Column className="flex flex-col font-pfdindisplaypro items-center justify-start mt-[109px] sm:mt-[43px] md:mt-[56px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[47%]">
                      <Column className="flex flex-col justify-start w-[100%]">
                        <Text
                          className="not-italic text-white_A700 w-[auto]"
                          variant="body4"
                        >
                          Обратная связь
                        </Text>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[13px] md:mt-[17px] mt-[34px] w-[100%]">
                          <Input
                            className="font-normal not-italic p-[0] text-[20px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                            wrapClassName="sm:mx-[0] sm:w-[100%] w-[48%]"
                            name="One"
                            placeholder="Ваше имя"
                          ></Input>
                          <Input
                            className="font-normal not-italic p-[0] text-[20px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                            wrapClassName="sm:mx-[0] sm:w-[100%] w-[48%]"
                            name="Two"
                            placeholder="Ваш телефон"
                            size="md"
                          ></Input>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between sm:mt-[20px] md:mt-[26px] mt-[52px] w-[100%]">
                          <Input
                            className="font-normal not-italic p-[0] text-[20px] placeholder:text-white_A700 text-white_A700 w-[100%]"
                            wrapClassName="sm:mx-[0] sm:w-[100%] w-[48%]"
                            type="email"
                            name="Three"
                            placeholder="Ваш e-mail"
                          ></Input>
                          <SelectBox
                            className="font-normal sm:mx-[0] not-italic text-[20px] text-white_A700 sm:w-[100%] w-[48%]"
                            placeholderClassName="text-white_A700"
                            name="Four"
                            placeholder="Выберите тему вопроса"
                            isSearchable={false}
                            isMulti={false}
                            indicator={
                              <Img
                                src="images/img_arrowdown_amber_A400.svg"
                                className="w-[13px] mr-[0] sm:w-[5px] md:w-[6px] max-w-[100%]"
                                alt="arrow_down"
                              />
                            }
                            size="lg"
                          ></SelectBox>
                        </Row>
                        <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center sm:mt-[20px] md:mt-[26px] mt-[52px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[90%]">
                          <Button
                            className="cursor-pointer font-bold min-w-[46%] text-[16px] text-amber_A400 text-center uppercase w-[max-content]"
                            variant="OutlineAmberA400"
                          >
                            ОТправить письмо
                          </Button>
                          <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center md:ml-[42px] ml-[82px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
                            <div className="border-2 border-amber_A400 border-solid sm:h-[13px] md:h-[17px] h-[31px] sm:w-[12px] md:w-[16px] w-[31px]"></div>
                            <Text
                              className="font-normal leading-[130.00%] ml-[15px] md:ml-[7px] sm:mx-[0] not-italic text-white_A700 sm:w-[100%] w-[82%]"
                              variant="body14"
                            >
                              Я согласен на обработку моих
                              <br />
                              персональных данных
                            </Text>
                          </Row>
                        </Row>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </Column>
            </Column>
          </Column>
        </Column>
        <Column
          className="bg-cover bg-no-repeat flex flex-col justify-start p-[149px] sm:p-[15px] md:p-[76px] w-[100%]"
          style={{ backgroundImage: "url('images/img_map_930X1920.png')" }}
        >
          <Column className="flex flex-col justify-start max-w-[1142px] sm:mb-[105px] md:mb-[136px] mb-[265px] md:ml-[40px] ml-[auto] mr-[auto] sm:mx-[0] sm:pl-[15px] sm:pr-[15px] sm:px-[0] w-[100%]">
            <Column className="bg-white_A700 border border-black_900 border-solid flex flex-col justify-start md:mr-[395px] mr-[767px] sm:mx-[0] md:p-[15px] sm:p-[15px] p-[30px] sm:w-[100%] w-[33%]">
              <Text
                className="mt-[1px] not-italic text-black_900 w-[auto]"
                variant="body4"
              >
                Как проехать
              </Text>
              <Text
                className="font-normal sm:mt-[13px] md:mt-[17px] mt-[34px] not-italic text-black_900 w-[auto]"
                variant="body9"
              >
                г. Самара, Московское шоссе, 41
                <br />
              </Text>
              <Button className="cursor-pointer font-bold mb-[1px] min-w-[73%] sm:mt-[13px] md:mt-[17px] mt-[34px] text-[16px] text-black_900 text-center uppercase w-[max-content]">
                Проложить маршрут
              </Button>
            </Column>
            <Img
              src="images/img_location_66X49.svg"
              className="max-w-[100%] ml-[1093px] sm:ml-[436px] md:ml-[564px] sm:mt-[20px] md:mt-[26px] mt-[51px] w-[5%]"
              alt="location Two"
            />
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

export default ContactsPage;
