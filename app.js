import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "NDE4NDU2OTAzOTcwOTc5ODYw.G58YwL.O40V0I-4XKmhMLeCw8VXl2XlMbZxddWs1FFCLc"
);

gateway.on("message", (m) => {
  if (m.channel_id === "1003744870793494659" || m.channel_id === "1003744947578605769" || m.channel_id === "1017001782850891806" || m.channel_id === "1017001615145844797" || m.channel_id === "998554678407213066") {
    let content = m.content ? m.content : { embeds: [{ image:  m.image }, m.embeds[0]]};




     client.sendWebhook(
      "https://ptb.discord.com/api/webhooks/1032321186308292631/viHXhNuJTGUWWzgC1-vwkPLyJJyEdAT1kxdynPg-nedz24BR0hWHSwBB36c9tdIPg5js",
      content, m.image, m.attachments.url
      );



    console.log(content)
    console.log(m.image)
    


  }
});