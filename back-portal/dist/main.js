"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
const passport = require("passport");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function start() {
    const PORT = process.env.PORT;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(session({
        secret: 'keyword',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Back-end server')
        .setDescription('api documentation')
        .setVersion('1.0')
        .addTag('api')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}
start();
//# sourceMappingURL=main.js.map