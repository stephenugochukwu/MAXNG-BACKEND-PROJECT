var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { characterDTO } from "../dto/characterDto.js";
import apiCall from "../utils/apiCall.js";
export const getCharacters = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let people;
        const response = yield apiCall("people");
        if (query.gender) {
            people = response.results.filter((person) => person.gender === query.gender);
        }
        else {
            people = response.results;
        }
        if (query.sort_by) {
            const sortType = query.sort_by;
            people.sort((a, b) => {
                if (sortType === "height") {
                    return Number(a.height) - Number(b.height);
                }
                return a.name.localeCompare(b.name);
            });
            if (query.order_by === "desc") {
                people.sort((a, b) => {
                    if (sortType === "height") {
                        return Number(a.height) - Number(b.height);
                    }
                    return b.name.localeCompare(a.name);
                });
            }
        }
        const characters = characterDTO(people);
        return { statusCode: 200, message: characters };
    }
    catch (error) {
        console.error(error);
        throw {
            statusCode: 500,
            message: "Internal Server Error",
        };
    }
});
