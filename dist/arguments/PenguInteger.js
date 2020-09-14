"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenguArgument = void 0;
const framework_1 = require("@sapphire/framework");
class PenguArgument extends framework_1.Argument {
    constructor(context) {
        super(context, { name: "integer" });
    }
    async run(argument, context) {
        const parsed = Number(argument);
        if (!Number.isSafeInteger(parsed)) {
            return framework_1.err(new framework_1.UserError("ArgumentIntegerInvalidNumber", await context.message.fetchLanguageKey("arguments/core:float.invalidNumber")));
        }
        if (typeof context.minimum === "number" && parsed < context.minimum) {
            return framework_1.err(new framework_1.UserError("ArgumentIntegerTooSmall", await context.message.fetchLanguageKey("arguments/core:float.tooSmall")));
        }
        if (typeof context.maximum === "number" && parsed > context.maximum) {
            return framework_1.err(new framework_1.UserError("ArgumentIntegerTooBig", await context.message.fetchLanguageKey("arguments/core:float.tooBig")));
        }
        return framework_1.ok(parsed);
    }
}
exports.PenguArgument = PenguArgument;
//# sourceMappingURL=PenguInteger.js.map