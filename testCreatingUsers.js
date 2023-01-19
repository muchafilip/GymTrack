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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var app_1 = require("firebase/app"); // no compat for new SDK
var firestore_1 = require("firebase/firestore");
var firebaseConfig = {
    apiKey: "AIzaSyDtKxNUx7GiMcHTy4HIDaYaSFjUAj-RNIM",
    authDomain: "dogmap-fe1c5.firebaseapp.com",
    databaseURL: "https://dogmap-fe1c5.firebaseio.com",
    projectId: "dogmap-fe1c5",
    storageBucket: "dogmap-fe1c5.appspot.com",
    messagingSenderId: "945257816849",
    appId: "1:945257816849:web:474b58e49c9e1bec0ba2b0",
    measurementId: "G-R3PK8WXGF8"
};
var app = (0, app_1.initializeApp)(firebaseConfig);
var db = (0, firestore_1.getFirestore)(app);
function createTestUser(username) {
    return __awaiter(this, void 0, void 0, function () {
        var docRef, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(db, "users"), {
                            first: username,
                            last: "lst",
                            born: 1999
                        })];
                case 1:
                    docRef = _a.sent();
                    console.log("Document written with ID: ", docRef.id);
                    return [2 /*return*/, docRef.id];
                case 2:
                    e_1 = _a.sent();
                    console.error("Error adding document: ", e_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function createSet() {
    return __awaiter(this, void 0, void 0, function () {
        var docRef, e_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, (0, firestore_1.addDoc)((0, firestore_1.collection)(db, "sets"), {
                            weight: 100,
                            repetitions: 8,
                            restInSeconds: 90
                        })];
                case 1:
                    docRef = _a.sent();
                    console.log("Document written with ID: ".concat(docRef.id, ", ").concat(docRef.path, ", ").concat(docRef.type));
                    return [2 /*return*/, docRef.id];
                case 2:
                    e_2 = _a.sent();
                    console.error("Error adding document: ", e_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
for (var index = 0; index < 4; index++) {
    createSet();
    console.log(index);
}
// try {
//     const docRef = await addDoc(collection(db, "users"), {
//         first: "fst",
//         last: "lst",
//         born: 1999
//     });
//     console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//     console.error("Error adding document: ", e);
// }
// function createExercise(exercise: Exercise): string {
//     set(ref(database),
//         {
//             name: exercise.name,
//             date: exercise.date,
//             sets: exercise.sets
//         }
//     );
//     return `${exercise.name} ${exercise.date}`;
// }
// export default createExercise;
