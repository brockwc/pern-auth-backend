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
        benefitId: "3",
        teaId: "43",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "43",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "18",
        teaId: "43",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "43",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "68",
        teaId: "44",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "44",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "28",
        teaId: "44",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "44",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "2",
        teaId: "44",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "45",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "11",
        teaId: "45",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "18",
        teaId: "45",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "46",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "46",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "46",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "46",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "47",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "47",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "48",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "48",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "49",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "49",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "62",
        teaId: "49",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "50",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "51",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "51",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "51",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "52",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "19",
        teaId: "52",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "10",
        teaId: "52",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "53",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "53",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "53",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "54",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "55",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "55",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "55",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "57",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "59",
        teaId: "57",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "57",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "57",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "58",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "58",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "58",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "59",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "59",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "60",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "60",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "61",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "28",
        teaId: "61",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "61",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "61",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "62",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "62",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "62",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "62",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "63",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "44",
        teaId: "63",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "59",
        teaId: "63",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "64",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "64",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "64",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "65",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "65",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "65",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "53",
        teaId: "66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "66",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "67",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "67",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "67",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "68",
        teaId: "67",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "68",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "68",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "21",
        teaId: "68",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "69",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "69",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "70",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "70",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "71",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "71",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "31",
        teaId: "71",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "72",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "72",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "73",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "73",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "59",
        teaId: "73",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "73",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "74",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "74",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "75",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "75",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "75",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "75",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "76",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "76",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "15",
        teaId: "76",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "77",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "77",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "77",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "77",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "78",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "44",
        teaId: "78",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "79",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "79",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "79",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "80",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "80",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "80",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "81",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "81",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "82",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "82",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "83",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "83",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "83",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "84",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "84",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "57",
        teaId: "84",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "85",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "85",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "86",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "86",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "86",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "87",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "87",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "12",
        teaId: "87",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "87",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "87",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "88",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "88",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "88",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "89",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "89",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "89",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "90",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "90",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "90",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "57",
        teaId: "91",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "91",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "91",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "44",
        teaId: "91",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "92",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "92",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "92",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "92",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "93",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "93",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "93",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "94",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "94",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "94",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "94",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "94",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "95",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "95",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "95",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "12",
        teaId: "95",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "57",
        teaId: "96",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "96",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "96",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "96",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "44",
        teaId: "96",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "57",
        teaId: "97",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "9",
        teaId: "97",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "13",
        teaId: "97",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "97",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "97",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "98",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "98",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "99",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "99",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "99",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "100",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "100",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "100",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "63",
        teaId: "101",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "102",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "102",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "103",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "103",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "103",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "40",
        teaId: "104",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "71",
        teaId: "104",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "105",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "105",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "20",
        teaId: "105",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "105",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "106",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "106",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "106",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "106",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "107",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "107",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "21",
        teaId: "107",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "34",
        teaId: "107",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "60",
        teaId: "108",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "108",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "108",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "108",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "57",
        teaId: "109",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "50",
        teaId: "109",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "0",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "110",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "49",
        teaId: "110",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "111",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "111",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "111",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "49",
        teaId: "112",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "12",
        teaId: "112",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "45",
        teaId: "112",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "112",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "113",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "113",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "113",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "113",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "114",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "114",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "48",
        teaId: "115",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "115",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "14",
        teaId: "115",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "116",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "116",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "116",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "117",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "117",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "78",
        teaId: "117",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "22",
        teaId: "118",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "118",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "72",
        teaId: "118",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "119",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "119",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "27",
        teaId: "120",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "120",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "6",
        teaId: "120",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "121",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "3",
        teaId: "121",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "37",
        teaId: "121",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "67",
        teaId: "121",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "122",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "122",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "122",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "30",
        teaId: "122",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "123",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "4",
        teaId: "124",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "25",
        teaId: "124",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "124",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "124",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "124",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "42",
        teaId: "125",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "125",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "125",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "125",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "17",
        teaId: "126",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "126",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "126",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "126",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "126",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "76",
        teaId: "127",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "7",
        teaId: "127",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "8",
        teaId: "127",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "128",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "51",
        teaId: "128",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "29",
        teaId: "129",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "68",
        teaId: "129",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "61",
        teaId: "130",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "41",
        teaId: "130",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "64",
        teaId: "56",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "56",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "56",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "36",
        teaId: "56",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "77",
        teaId: "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "56",
        teaId: "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "5",
        teaId: "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        benefitId: "16",
        teaId: "7",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};