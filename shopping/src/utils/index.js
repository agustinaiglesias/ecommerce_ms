/*const amqplib = require('amqplib');

MSG_BROKER_URL = 'amqp://localhost'
EXCHANGE_NAME = 'ONLINE_SHOPPING'
SHOPPING_BINDING_KEY = 'SHOPPING_SERVICE'
CUSTOMER_BINDING_KEY = 'CUSTOMER_SERVICE'

//message broker

//Message Broker

module.exports.CreateChannel = async () => {
    try {
      const connection = await amqplib.connect(MSG_BROKER_URL);
      const channel = await connection.createChannel();
      await channel.assertExchange(EXCHANGE_NAME, "direct",false);
      return channel;
    } catch (err) {
      throw err;
    }
  };
  
  module.exports.PublishMessage = async(channel, binding_key, msg) => {
    try {
        await channel.publish(EXCHANGE_NAME, binding_key, Buffer.from(msg));

    } catch (error) {
        throw error
    }

    console.log("Sent: ", msg);
  };

//suscribe
module.exports.SuscribeMessage = async(channel, service, binding_key) => {
    const appQueue = await channel.assertQueue(QUEUE_NAME);
    
    channel.bindQueue(appQueue.queue, EXCHANGE_NAME, binding_key);

    channel.consume(appQueue.queue, data => {
        console.log('Recieved data');
        console.log(data.content, toString());
        channel.ack(data);
    })
}*/