"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactController = void 0;
const deleteCont_services_1 = require("../../services/Contact/deleteCont.services");
const deleteContactController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email } = req.params;
    yield (0, deleteCont_services_1.deleteContactService)(email);
    return res.status(204).json({ message: "Contact deleted successfully" });
});
exports.deleteContactController = deleteContactController;