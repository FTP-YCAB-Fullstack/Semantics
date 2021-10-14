const authorization = (roles) => (req, res, next) => {
  try {
    const currentUser = req.currentUser;

    if (!roles.includes(currentUser.role)) {
      next({ code: 403, message: "Unauthorized Access" });
      return;
    }

    next();
  } catch (error) {
    next(error);
  }
};

modul.exports = authorization;
