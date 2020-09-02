/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/naming-convention */
import { CacheManager } from "@lib/structures/CacheManager";
import { PREFIX } from "@root/config";
import { SapphireClient } from "@sapphire/framework";
import { ClientOptions, Message } from "discord.js";
import Redis, { Redis as IRedis } from "ioredis";
import { join } from "path";
import { container } from "tsyringe";

import "@scp/in17n/register";

export class PenguClient extends SapphireClient {

    public readonly redis: IRedis = new Redis();
    public readonly cache: CacheManager;

    public constructor(options?: ClientOptions) {
        super(options);

        this.cache = new CacheManager(this);

        this.fetchPrefix = (message: Message) => message.guild ? this.cache.getPrefix(message.guild.id) : PREFIX;
        this.fetchLanguage = (message: Message) => message.guild ? this.cache.getLanguage(message.guild.id) : "en-US";

        this.arguments.registerPath(join(__dirname, "..", "arguments"));
        this.commands.registerPath(join(__dirname, "..", "commands"));
        this.events.registerPath(join(__dirname, "..", "events"));

        container.registerInstance(PenguClient, this);
    }

}
