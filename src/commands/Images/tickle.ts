import { Command, Args } from "@sapphire/framework";
import { Message, MessageEmbed } from "discord.js";
import { fetch } from "@utils/util";

export class PenguCommand extends Command {

    public async run(message: Message, args: Args) {
        const mentioned = await args.pick("user");

        const { url } = await fetch("https://nekos.life/api/v2/img/tickle");
        if (!url) return message.sendTranslated("default:BASIC_ERROR");

        const embed = new MessageEmbed()
            .setFooter("© PenguBot.com")
            .setTimestamp()
            .setColor("RANDOM")
            .setImage(url);

        return message.channel.send(await message.fetchLanguageKey("commands/images:TICKLE", { from: `${message.author}`, to: `${mentioned}` }), { embed });
    }
}
