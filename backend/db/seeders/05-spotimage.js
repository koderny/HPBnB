'use strict';

const { SpotImage } = require('../models');

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await SpotImage.bulkCreate([
      {
        spotId: 1,
        url: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
        preview: true
      },
      {
        spotId: 2,
        url: "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg",
        preview: true
      },
      {
        spotId: 3,
        url: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg",
        preview: true
      },
      {
        spotId: 4,
        url: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
        preview: true
      },
      {
        spotId: 5,
        url: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg",
        preview: true
      },

    ], { validate: true });
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
    }, {});
  }
};
