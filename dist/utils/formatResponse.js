export function success(res, statusCode, data) {
    return res.status(statusCode || 304).json({
        status: "success",
        body: data,
    });
}
export function failed(res, statusCode, data) {
    return res.status(statusCode).json({
        status: "error",
        reason: data,
    });
}
