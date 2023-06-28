// import { fromZodError } from "zod-validation-error";
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        return next();
    }
    catch (error) {
        const validationError = error;
        console.error(validationError);
        return res.status(400).json(validationError);
    }
};
export default validate;
