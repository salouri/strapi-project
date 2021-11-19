module.exports = async (ctx, next) => {
  await next();

  // the code below will be executed after the controller's action (next())
  if (ctx.status === 404) {
    ctx.body = "We cannot find the resource.";
  }
};
