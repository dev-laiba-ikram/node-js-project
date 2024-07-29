const jwt = require("jsonwebtoken");
const secretKey = "NOTE";

const jwtAuthMiddleWare = (req, res, next) => {
  const header = req.headers.authorization;

  if (header) {
    const token = header.split(" ")[1];
    try {
      const decoded = jwt.verify(token, secretKey);
      req.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ error: "Invalid Token" });
    }
  } else {
    return res.status(401).json({ error: "No Token Provided" });
  }
};

//   if (!header) {
//     return res
//       .status(401)
//       .json({ error: true, message: "Token is not provided" });
//   }

//   jwt.verify(token, secretKey, (err, decoded) => {
//     if (err) {
//       return res
//         .status(401)
//         .json({ error: true, message: "Invalid token provided" });
//     }

//     // Set the decoded user information on the request object for future use
//     req.user = decoded;

//     next();
//   });
// };
// const checkTokenExpiration = (req, res, next) => {
//   const token = req.header("Authorization");

//   try {
//     jwt.verify(token, secretKey);
//     next();
//   } catch (error) {
//     if (error.name === "TokenExpiredError") {
//       res.status(401).json({ message: "Token has expired" });
//     } else {
//       res.status(403).json({ message: "Token verification failed" });
//     }
//   }
// };

module.exports = jwtAuthMiddleWare;
