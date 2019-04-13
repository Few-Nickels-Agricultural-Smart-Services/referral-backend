'use strict';

/**
 * Participant.js controller
 *
 * @description: A set of functions called "actions" for managing `Participant`.
 */

module.exports = {

  /**
   * Retrieve participant records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.participant.search(ctx.query);
    } else {
      return strapi.services.participant.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a participant record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.participant.fetch(ctx.params);
  },

  /**
   * Count participant records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.participant.count(ctx.query);
  },

  /**
   * Create a/an participant record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.participant.add(ctx.request.body);
  },

  /**
   * Update a/an participant record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.participant.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an participant record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.participant.remove(ctx.params);
  }
};
