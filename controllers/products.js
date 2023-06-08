import ProductChema from "../models/product";
import ChemeCategory from "../models/category";
import joi from "joi";
const Checkvalidate = joi.object({
  name: joi.string().required(),
  content: joi.string().required(),
  description: joi.string().required(),
  image: joi.string().required(),
//   categoryId: joi.string(),
});
export const GetAll = async (req, res, next) => {
  try {
    const data = await ProductChema.find();
    return res.json(data);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
      
    });
  }
};
export const GetOne = async (req, res, next) => {
  try {
    const data = await ProductChema.findById(req.params.id);
    // return res.json({
    //   message: "Lấy dữ liệu thanh công",
    //   data: data,
    // });
    return res.json(data);
  } catch (error) {
    return res.status(401).json({
      message: error.message,
    });
  }
};

