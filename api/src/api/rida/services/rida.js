'use strict';

/**
 * rida service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rida.rida');
