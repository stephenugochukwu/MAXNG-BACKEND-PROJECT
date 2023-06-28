var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { failed, success } from "../utils/formatResponse.js";
import { listComments, newComment } from "../services/comments.js";
export const addComment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payload = req.body;
        const response = yield newComment(payload);
        return success(res, response.statusCode, response.message);
    }
    catch (error) {
        console.error(error);
        return failed(res, error.statusCode, error.message);
    }
});
export const showComments = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield listComments();
        return success(res, response.statusCode, response.message);
    }
    catch (error) {
        console.error(error);
        return failed(res, error.statusCode, error.message);
    }
});
