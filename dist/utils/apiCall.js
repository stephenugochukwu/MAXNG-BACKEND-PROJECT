var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import CONFIG from "../config/index.js";
const API_BASE_URL = CONFIG.API_BASE_URL;
const apiCall = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("API call: ", API_BASE_URL + endpoint);
    const response = yield fetch(API_BASE_URL + endpoint);
    const data = yield response.json();
    return data;
});
export default apiCall;
