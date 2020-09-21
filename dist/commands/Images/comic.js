"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PenguCommand = void 0;
const tslib_1 = require("tslib");
const framework_1 = require("@sapphire/framework");
const discord_js_1 = require("discord.js");
const util_1 = require("@utils/util");
const decorators_1 = require("@sapphire/decorators");
let PenguCommand = class PenguCommand extends framework_1.Command {
    async run(message) {
        const body = await util_1.fetch("https://xkcd.com/info.0.json");
        if (!body.num)
            return message.sendTranslated("basicError");
        const randomNum = Math.floor(Math.random() * body.num) + 1;
        const res = await util_1.fetch(`https://xkcd.com/${randomNum}/info.0.json`);
        if (!res.img)
            return message.sendTranslated("basicError");
        const embed = new discord_js_1.MessageEmbed()
            .setFooter(`PenguBot.com - ${await message.fetchLanguageKey("poweredBy")} xkcd.com`)
            .setTimestamp()
            .setAuthor(await message.fetchLanguageKey("commands/images:comic.embedTitle"), this.client.user?.displayAvatarURL(), "https://pengubot.com")
            .setColor("RANDOM")
            .setImage(res.img);
        return message.channel.send({ embed });
    }
};
PenguCommand = tslib_1.__decorate([
    decorators_1.ApplyOptions({
        description: "commands/images:comic.description",
        detailedDescription: "noDetailedDescription",
        aliases: ["randomcomic"],
        preconditions: ["Permissions"]
    })
], PenguCommand);
exports.PenguCommand = PenguCommand;
//# sourceMappingURL=comic.js.map