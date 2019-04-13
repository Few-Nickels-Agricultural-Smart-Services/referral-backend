'use strict';

/**
 * Invitation.js controller
 *
 * @description: A set of functions called "actions" for managing `Invitation`.
 */

module.exports = {

  /**
   * Retrieve invitation records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.invitation.search(ctx.query);
    } else {
      return strapi.services.invitation.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a invitation record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.invitation.fetch(ctx.params);
  },

  /**
   * Count invitation records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.invitation.count(ctx.query);
  },

  /**
   * Create a/an invitation record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.invitation.add(ctx.request.body);
  },

  /**
   * Update a/an invitation record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.invitation.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an invitation record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.invitation.remove(ctx.params);
  }
};
