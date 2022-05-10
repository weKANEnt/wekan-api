"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("positions", [
      {
        positionTitle: "Guild President",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Vice President (SSP)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Vice President (PSI)",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Secretary",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Treasurer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Games Committee Chairperson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Public Relations Officer",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Cultural & Entertainment Affairs Chairperson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "External Affairs Chairperson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "FST Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Medical Sciences Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "FSS Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "HUMED Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "IGDS Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Sport Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Post Graduate Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Commuting Students Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Law Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Engineering Representative",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "ABC Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "ABC Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "A.Z Preston Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "A.Z Preston Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Chancellor Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Chancellor Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "ELR Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "ELR Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Irvine Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Irvine Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Mary Seacole Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Mary Seacole Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Rex Nettleford Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Rex Nettleford Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Taylor Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Taylor Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "WJC Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "WJC Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Leslie Robinson Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "Leslie Robinson Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "George Alleyne Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        positionTitle: "George Alleyne Deputy Hall Chairman",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("positions", null, {});
  },
};
