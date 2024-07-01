'use strict';

/**
 * bracelet service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::bracelet.bracelet');
