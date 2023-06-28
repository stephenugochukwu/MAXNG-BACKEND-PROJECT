export const errorHandler = (err, _req, res) => {
    res.status(500).json({ message: err.message });
};
