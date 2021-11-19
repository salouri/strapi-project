module.exports = async (ctx, next) => {
  if (ctx.state.user.role.name === "Administrator") {
    return await next();
  }
  ctx.unauthorized(`Only admins are allowed to perform this action!`);
};
