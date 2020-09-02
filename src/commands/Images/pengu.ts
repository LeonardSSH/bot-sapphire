import { Command } from "@sapphire/framework";
import { Message, MessageEmbed } from "discord.js";

export class PenguCommand extends Command {

    public readonly images: Array<string> = [
        "http://i.imgur.com/Urfp335.png", "http://i.imgur.com/gC8v9fp.jpg", "http://i.imgur.com/DZ6YtvT.jpg",
        "http://i.imgur.com/LdWARAL.jpg", "http://i.imgur.com/7uF0u9Q.jpg", "http://i.imgur.com/0vgVnpr.png",
        "http://i.imgur.com/1GKlyH2.png", "http://i.imgur.com/jlzSELQ.png", "https://i.imgur.com/Vm98hJq.png",
        "https://i.imgur.com/RF4JeC8.png", "https://i.imgur.com/Co26qmr.png", "https://i.imgur.com/ixSGy7V.jpg",
        "https://i.imgur.com/WzsIIzN.png", "https://i.imgur.com/v8oxfHW.jpg", "https://i.imgur.com/RPxPRXV.png",
        "https://i.imgur.com/UVnwRMk.gif", "https://i.imgur.com/vfKwurE.gif", "https://i.imgur.com/XKukgBG.gif",
        "https://i.imgur.com/KohkQvr.gif", "https://i.imgur.com/uwdMmng.gif", "https://i.imgur.com/EOln62Q.gif",
        "https://i.imgur.com/8fcKsh1.gif", "https://i.imgur.com/jarmtai.png", "https://i.imgur.com/voKTcyv.gif"
    ];

    public run(message: Message) {
        const randomImage = this.images[Math.floor(Math.random() * this.images.length)];
        return message.send(new MessageEmbed()
            .setFooter("© PenguBot.com")
            .setTimestamp()
            .setColor("RANDOM")
            .setImage(randomImage));
    }
}
