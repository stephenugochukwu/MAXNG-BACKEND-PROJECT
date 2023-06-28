var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import db from "../config/dbConfig.js";
import ip from "ip";
export const newComment = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield db.comment.create({
            data: {
                ipAddress: ip.address(),
                text: payload.text,
                filmId: payload.filmId,
            },
        });
        return { statusCode: 201, message: response };
    }
    catch (error) {
        console.error(error);
        throw { statusCode: 500, message: error };
    }
});
export const getComments = (filmId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield db.comment.findMany({
            where: {
                filmId,
            },
        });
        return { statusCode: 200, message: comments };
    }
    catch (error) {
        console.error(error);
        throw { statusCode: 500, message: error };
    }
});
export const listComments = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comments = yield db.comment.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return { statusCode: 200, message: comments };
    }
    catch (error) {
        console.error(error);
        throw { statusCode: 500, message: error };
    }
});
