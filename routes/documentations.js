const express = require("express");
const router = express.Router();
// You'll be creating this controller module next
const documentationsCtrl = require("../controllers/documentations");
const ensureLoggedIn = require("../config/ensureLoggedIn");

// // GET /documentations
router.get("/index", documentationsCtrl.index);

// Routes for languages
router.get("/languages", documentationsCtrl.indexLanguages);
router.get("/languages/new", ensureLoggedIn, documentationsCtrl.newLanguage);
router.get("/languages/:id", documentationsCtrl.showLanguage);
router.post("/languages", ensureLoggedIn, documentationsCtrl.createLanguage);
router.put("/languages/:id", documentationsCtrl.editLanguage);

// Routes for frameworks
router.get("/frameworks", documentationsCtrl.indexFrameworks);
router.get("/frameworks/new", ensureLoggedIn, documentationsCtrl.newFramework);
router.get("/frameworks/:id", documentationsCtrl.showFramework);
router.post("/frameworks", ensureLoggedIn, documentationsCtrl.createFramework);
router.put("/frameworks/:id", documentationsCtrl.editFramework);

// Routes for databasFramework.Frarouter.get("/databases", documentationsCtrl.indexDatabases);
router.get("/databases", documentationsCtrl.indexDatabases);
router.get("/databases/new", ensureLoggedIn, documentationsCtrl.newDatabase);
router.get("/databases/:id", documentationsCtrl.showDatabase);
router.post("/databases", ensureLoggedIn, documentationsCtrl.createDatabase);
router.put("/databases/:id", documentationsCtrl.editDatabase);

module.exports = router;
