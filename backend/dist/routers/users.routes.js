"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const users_controller_1 = require("../controllers/users.controller");
const ensureDataIsValid_middleware_1 = require("../middlewares/ensureDataIsValid.middleware");
const users_schema_1 = require("../schemas/users.schema");
const getAllusers_controller_1 = require("../controllers/getAllusers.controller");
const updateUser_controller_1 = require("../controllers/updateUser.controller");
const deleteUser_controller_1 = require("../controllers/deleteUser.controller");
const contact_controller_1 = require("../controllers/Contact/contact.controller");
const contactGetAll_controller_1 = require("../controllers/Contact/contactGetAll.controller");
const contactDelete_controller_1 = require("../controllers/Contact/contactDelete.controller");
const contactUpdate_controller_1 = require("../controllers/Contact/contactUpdate.controller");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.post("", (0, ensureDataIsValid_middleware_1.ensureDataIsValid)(users_schema_1.userSchemaRequest), users_controller_1.createUserController);
userRoutes.get("", getAllusers_controller_1.getAllUsersController);
userRoutes.patch("/:id", updateUser_controller_1.updateUserController);
userRoutes.delete("/:id", deleteUser_controller_1.deleteUserController);
userRoutes.post("/contact", contact_controller_1.createContactController);
userRoutes.get("/contact", contactGetAll_controller_1.getAllContactsController);
userRoutes.patch("/contact/:email", contactUpdate_controller_1.updateContactController);
userRoutes.delete("/contact/:email", contactDelete_controller_1.deleteContactController);