import selfcore from "selfcore";

const client = new selfcore();
const gateway = new selfcore.Gateway(
  "NDE4NDU2OTAzOTcwOTc5ODYw.G58YwL.O40V0I-4XKmhMLeCw8VXl2XlMbZxddWs1FFCLc"
);

gateway.on("message", (m) => {
  if (m.channel_id === "974767565895270430" || m.channel_id === "1003744266964701294" ) {
    let content = m.content ? m.content : { embeds: [{ image:  m.image }, m.embeds[0]]};




     client.sendWebhook(
      "https://ptb.discord.com/api/webhooks/1032297645567397918/6rBBKYONos0VQKoqIV70Ww6yI7odVXgKHzTSttvqnUPYjyUxspoZZ4_Udrbiwts5eIwc",
      content, m.image, m.attachments.url
      );



    console.log(content)
    console.log(m.image)
    


  }
});