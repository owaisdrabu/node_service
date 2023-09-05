# To Run On Local

Step 1: Clone Project, and hit npm install
Step 2: Add .env file with necessary credentials
Step 3: run command 'npm dev run' to start the server.
Step 4: API url: http://localhost:3000/donate
    payload = {
        "userId": 1
    }

# Deploying on AWS Elastic Beanstalk

Step 1: Install AWS CLI and run 'aws configure' to configure aws credentials. 

Step 2: Initialize Elastic Beanstalk Environment, Run: eb init -p nodejs.

Step 3: Create Elastic Beanstalk Application, Run: eb create 'app-name'.

Step 4: Configure Environment Variables.

Step 5: Deploy Your Application, Run: eb deploy

Step 6: Access API from the url generated from AWS Elastic Beanstalk.


