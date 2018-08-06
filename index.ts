import { BotFrameworkAdapter } from 'botbuilder';
import * as restify from 'restify';

let server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log(`${server.name} listening to ${server.url}`);
});

const adapter = new BotFrameworkAdapter();

server.post('/api/messages', async (req, res) => {
    adapter.processActivity(req, res, async ctx => {
        if (ctx.activity.type === 'message') {
            await ctx.sendActivity(ctx.activity.text);
        }
    });
});