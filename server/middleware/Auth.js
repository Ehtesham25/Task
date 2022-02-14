import jwt from "jsonwebtoken";

const secret = "myNameIsKhan";
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const customAuth = token?.length;
    let decoderData;
    if (token && customAuth) {
      decoderData = jwt.verify(token, secret);
      req.userId = decoderData?.id;
    } else {
      console.log("decode data");
      decoderData = jwt.decode(token);
      req.userId = decoderData?.sub;
    }
    next();
  } catch (error) {
    console.log("Error in middleWare", error);
  }
};
export default auth;
