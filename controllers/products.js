export const getAllProductsStatic = async(req, res, next) => {
    res.status(200).json({ message: 'product testing route' });
};



export const getAllProducts = async(req, res, next) => {
    res.status(200).json({ message: 'product  route' });
};