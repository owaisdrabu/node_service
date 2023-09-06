# To Run On Local

Step 1: Clone Project, and run npm install.

Step 2: Add .env file with the necessary credentials.

Step 3: Run the command 'npm dev run' to start the server.

Step 4: API url: http://localhost:3000/donate.

    payload = {
        "userId": 1
    }.

# Deploying on AWS Elastic Beanstalk

Step 1: Install AWS CLI and run 'aws configure' to configure AWS credentials. 

Step 2: Initialize Elastic Beanstalk Environment, Run: eb init -p nodejs.

Step 3: Create Elastic Beanstalk Application, Run: eb create 'app-name'.

Step 4: Configure Environment Variables.

Step 5: Deploy Your Application, Run: eb deploy

Step 6: Access API from the URL generated from AWS Elastic Beanstalk.

# Scale Application
 Here I have used in memory but for better efficiency, we can use Redis which is fast, has less latency, and can easily recover if the server crashes.
 
 For scaling we can use Redis cluster which uses sharding and replication, connection pooling, replication etc.
 
 For a high number of requests, we can use AWS load balancer which can distribute traffic to different instances
 
 We can also use monitoring tools to monitor the health of the server like AWS CloudWatch or Prometheus which can help in tracking system behavior etc
 

 


