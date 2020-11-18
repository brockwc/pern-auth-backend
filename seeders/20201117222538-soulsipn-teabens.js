'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('benefit_teas', null, { truncate: true, cascade: true, restartIdentity: true });

    const bulkTeaBen = await queryInterface.bulkInsert('benefit_teas', [
      {
        benefitId: "49",
        teaId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "45",
        teaId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "1",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "2",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        benefitId: "25",
        teaId: "3",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        benefitId: "5",
        teaId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "53",
        teaId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        benefitId: "52",
        teaId: "4",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        benefitId: "14",
        teaId: "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "5",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "26",
        teaId: "6",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "8",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "72",
        teaId: "10",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "11",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "55",
        teaId: "11",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "11",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "54",
        teaId: "12",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "69",
        teaId: "13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "2",
        teaId: "13",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "28",
        teaId: "14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "24",
        teaId: "14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "14",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "66",
        teaId: "15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "65",
        teaId: "15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "11",
        teaId: "15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "33",
        teaId: "15",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "18",
        teaId: "16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "31",
        teaId: "16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "16",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "73",
        teaId: "17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "38",
        teaId: "17",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "32",
        teaId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "42",
        teaId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "74",
        teaId: "18",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "47",
        teaId: "19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "38",
        teaId: "19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "19",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "28",
        teaId: "20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "36",
        teaId: "20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "55",
        teaId: "20",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "21",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "47",
        teaId: "22",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "70",
        teaId: "23",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "58",
        teaId: "23",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "69",
        teaId: "24",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "18",
        teaId: "25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "25",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "1",
        teaId: "26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "43",
        teaId: "26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "72",
        teaId: "26",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "24",
        teaId: "27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "23",
        teaId: "27",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "39",
        teaId: "28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "2",
        teaId: "28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "36",
        teaId: "28",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "74",
        teaId: "29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "29",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "30",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "30",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "31",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "18",
        teaId: "31",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "31",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "2",
        teaId: "32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "26",
        teaId: "32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "58",
        teaId: "32",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "1",
        teaId: "33",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "33",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "46",
        teaId: "33",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "62",
        teaId: "33",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "36",
        teaId: "34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "34",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "26",
        teaId: "35",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "36",
        teaId: "36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "36",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "37",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "35",
        teaId: "37",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "37",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "75",
        teaId: "38",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "31",
        teaId: "38",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "38",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "38",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "55",
        teaId: "39",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "26",
        teaId: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "40",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "41",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "41",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "41",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "26",
        teaId: "41",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "41",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "21",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "42",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      



    ])
  }

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
