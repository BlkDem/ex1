import React from "react";
import ModalProvider from "react-modal";

import { Column, Row, Stack, Img, Text, Button } from "components";

const Rents1Modal = (props) => {
  return (
    <>
      <ModalProvider
        appElement={document.getElementById("root")}
        className="m-[auto] !w-[77%] sm:w-[100%] flex-col flex"
        overlayClassName="bg-black_900_99 fixed flex h-[100%] inset-y-[0] w-[100%]"
        {...props}
      >
        <div className="max-h-[97vh] overflow-y-auto">
          <Row className="bg-white_A700 flex flex-row md:flex-wrap sm:flex-wrap items-center max-w-[1464px] ml-[auto] mr-[auto] sm:mt-[2px] md:mt-[3px] mt-[6px] sm:pl-[15px] sm:pr-[15px] pr-[1px] pt-[1px] w-[100%]">
            <Stack className="bg-gray_50 h-[641px] relative sm:w-[100%] w-[49%]">
              <Img
                src="images/img__570X714.png"
                className="absolute h-[570px] max-w-[100%] top-[0] w-[100%]"
                alt="TwoHundredSixtyNine"
              />
              <Column
                className="absolute bg-cover bg-no-repeat flex flex-col items-center justify-start md:p-[14px] sm:p-[15px] p-[29px] w-[100%]"
                style={{ backgroundImage: "url('images/img_group109.svg')" }}
              >
                <Img
                  src="images/img_reply.svg"
                  className="max-w-[100%] w-[14%]"
                  alt="reply"
                />
                <Column className="flex flex-col items-center justify-start mb-[14px] sm:mb-[5px] md:mb-[7px] md:mt-[108px] mt-[211px] sm:mt-[84px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[31%]">
                  <Text
                    className="not-italic text-black_900 w-[auto]"
                    variant="body3"
                  >
                    <span className="text-black_900 text-[35px] font-pfdindisplaypro font-normal sm:text-[31px] md:text-[33px]">
                      126,1 м
                    </span>
                    <span className="text-black_900 text-[35px] font-pfdindisplaypro font-normal sm:text-[31px] md:text-[33px]">
                      2
                    </span>
                  </Text>
                  <Text
                    className="md:mt-[117px] mt-[228px] sm:mt-[91px] not-italic text-black_900 w-[auto]"
                    variant="body6"
                  >
                    Московское шоссе
                  </Text>
                </Column>
              </Column>
            </Stack>
            <Column className="flex flex-col items-center md:ml-[18px] ml-[36px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[41%]">
              <Column className="flex flex-col justify-start w-[100%]">
                <Text
                  className="font-pfdindisplaypro not-italic text-black_900 w-[auto]"
                  as="h6"
                  variant="h6"
                >
                  <span className="text-black_900 text-[45px] font-normal sm:text-[35px] md:text-[41px]">
                    126,1 м
                  </span>
                  <span className="text-black_900 text-[45px] font-normal sm:text-[35px] md:text-[41px]">
                    2
                  </span>
                </Text>
                <Text
                  className="font-circe leading-[160.00%] sm:mt-[16px] md:mt-[21px] mt-[42px] not-italic text-gray_900 w-[100%]"
                  variant="body10"
                >
                  <span className="text-gray_900 text-[19px] font-normal">
                    4 этаж, панорамное остекление с видом на запад, в сторону
                    Волги.
                    <br />
                    Открытая планировка{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    на{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    25
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    {" "}
                    сотрудников{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    (
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    при расчете{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    5
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    {" "}
                    м2 на человека
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    ).
                    <br />
                  </span>
                  <span className="text-gray_900 text-[19px] font-bold">
                    Высота потолков:{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    3,6 м.
                    <br />
                  </span>
                  <span className="text-gray_900 text-[19px] font-bold">
                    Отделка:{" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    Светло-бежевые стены, выполненные из
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    {" "}
                  </span>
                  <span className="text-gray_900 text-[19px] font-normal">
                    панелей Ирлайн, пол – гомогенное покрытие, потолок выполнен
                    из подвесной системы Armstrong. Освещение осуществляется
                    лампами дневного света.{" "}
                  </span>
                </Text>
                <Row className="flex flex-row md:flex-wrap sm:flex-wrap font-pfdindisplaypro items-start sm:mt-[23px] md:mt-[30px] mt-[60px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[87%]">
                  <Img
                    src="images/img_4_184X184.svg"
                    className="h-[184px] sm:h-[74px] md:h-[95px] max-w-[100%] w-[184px] sm:w-[73px] md:w-[94px]"
                    alt="Four"
                  />
                  <Column className="flex flex-col justify-start md:ml-[14px] ml-[29px] sm:mx-[0] sm:px-[0] sm:w-[100%] w-[59%]">
                    <Button className="cursor-pointer font-bold min-w-[72%] text-[16px] text-black_900 text-center uppercase w-[max-content]">
                      Подать заявку
                    </Button>
                    <Button
                      className="flex items-center justify-center md:mt-[10px] mt-[20px] sm:mt-[7px] text-center w-[100%]"
                      leftIcon={
                        <Img
                          src="images/img_printer.svg"
                          className="mr-[14px] sm:mr-[5px] md:mr-[7px] text-center"
                          alt="printer"
                        />
                      }
                      variant="OutlineBlack900"
                    >
                      <div className="bg-transparent cursor-pointer font-bold text-[16px] text-black_900 uppercase">
                        РАспечатать планировку
                      </div>
                    </Button>
                    <Row className="flex flex-row md:flex-wrap sm:flex-wrap items-center justify-between mt-[16px] sm:mt-[6px] md:mt-[8px] w-[100%]">
                      <Text
                        className="not-italic text-black_900 w-[auto]"
                        variant="body5"
                      >
                        +7 (846) 372-72-72
                      </Text>
                      <a
                        href={"javascript:"}
                        className="font-bold leading-[140.00%] sm:mx-[0] text-[14px] text-black_900 underline uppercase sm:w-[100%] w-[23%]"
                        rel="noreferrer"
                      >
                        Заказать
                        <br />
                        звонок
                      </a>
                    </Row>
                  </Column>
                </Row>
              </Column>
            </Column>
            <Img
              src="images/img_arrowdown_black_900.svg"
              className="sm:h-[10px] md:h-[13px] h-[24px] max-w-[100%] sm:ml-[26px] md:ml-[34px] ml-[67px] md:w-[12px] w-[24px] sm:w-[9px]"
              alt="arrowdown"
            />
          </Row>
        </div>
      </ModalProvider>
    </>
  );
};

export default Rents1Modal;
