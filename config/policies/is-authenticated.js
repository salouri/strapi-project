"use strict";

/**
 * `is-authenticated` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  if (ctx.state.user) {
    console.log("In is-authenticated policy.");

    return await next();
  }
  ctx.unauthorized("You are not logged in!"); // 401 error is returned
};
