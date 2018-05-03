import { ConsoleAdapter } from "botbuilder";

new ConsoleAdapter().listen(ctx => {
    
    if (ctx.activity.text === 'message') 
        ctx.sendActivity(ctx.activity.text);
})
