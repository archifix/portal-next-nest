"use strict";
exports.__esModule = true;
var react_1 = require("react");
var link_1 = require("next/link");
var Header_module_scss_1 = require("@/styles/Header.module.scss");
var Header = function () {
    return (react_1["default"].createElement("div", { className: Header_module_scss_1["default"].header },
        react_1["default"].createElement(link_1["default"], { href: "/" },
            react_1["default"].createElement("img", { src: "/yuo.png", alt: "logo", className: Header_module_scss_1["default"].logo })),
        react_1["default"].createElement("div", { className: Header_module_scss_1["default"].title },
            react_1["default"].createElement("h1", { className: "" }, "\u044E\u0436\u043D\u044B\u0439 \u043E\u043A\u0440\u0443\u0433"),
            react_1["default"].createElement("h2", null, "\u0432\u043E\u0439\u0441\u043A \u043D\u0430\u0446\u0438\u043E\u043D\u0430\u043B\u044C\u043D\u043E\u0439 \u0433\u0432\u0430\u0440\u0434\u0438\u0438"))));
};
exports["default"] = Header;
