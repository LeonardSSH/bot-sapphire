import { Command, Args, CommandOptions } from "@sapphire/framework";
import { Message, MessageEmbed } from "discord.js";
import { fetch } from "@utils/util";
import { ApplyOptions } from "@sapphire/decorators";

@ApplyOptions<CommandOptions>({
    description: "commands/images:kiss.description",
    detailedDescription: "commands/images:kiss.detailedDescription",
    preconditions: ["permissions"]
})
export class PenguCommand extends Command {

    public async run(message: Message, args: Args) {
        const mentioned = await args.pick("user");

        const { url } = await fetch("https://nekos.life/api/v2/img/kiss");
        if (!url) return message.sendTranslated("basicError");

        const embed = new MessageEmbed()
            .setFooter("PenguBot.com")
            .setTimestamp()
            .setColor("RANDOM")
            .setImage(url);

        return message.channel.send(await message.fetchLanguageKey("commands/images:kiss.response", { from: `${message.author}`, to: `${mentioned}` }), { embed });
    }
}
