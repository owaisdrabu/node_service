const AWS = require('aws-sdk');
const sns = new AWS.SNS();

export class SnsService {

  constructor() {
    AWS.config.update({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
   }

  public async sendThankYouMessage(userId: number): Promise<void> {
    const topicArn = process.env.TOPIC_ARN;
    const message = `Thank you for your continued support, ${userId}!`;
    const params = {
        Message: message,
        TopicArn: topicArn,
      };


    await sns.publish(params, (err:any, data: any) => {
            if (err) {
              console.error('Error publishing message to SNS:', err);
            } else {
              console.log('Message published to SNS:', data.MessageId);
            }
        });
  }
}
