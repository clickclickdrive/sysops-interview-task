# Overall info

This exercise should show your Devops/Sysops skills. 
Requirements will give you lot of options for the solution. 

You can choose your preferred technologies and frameworks, only condition is that it have to be under GCP. And we strongly prefer kubernetes. When deciding, assume you are setting up real life production project, which might grow in future a lot.  

Beside the setup itself, we would appreciate documentation explaining why you chosen your solutions and possibly you can describe what can be improved (especially in case the full solution would be extremely time consuming). 

Anytime you can contact us for questions and specific details of the test. 

Here is link to empty GCP project: https://console.cloud.google.com/kubernetes/list?project=test-project-michael&organizationId=963752445145 



# Requirements: 

## 1. Setup applications to run on GC 
- use ping and pong applications 
- adapt them so each service is possible to be deployed separately by automation 
- deployment should cause no downtime/unavailability of the services 
## 2. Setup separate solution for static files serving 
- should be able to serve images etc
- upload there few images and make them publicly accessible 
## 3. Setup reverse proxy
- route traffic to each service separated by path 
- e.g. https://DOMAIN/service1/ANY-STRING to one service 
- https://DOMAIN/service2/ANY-STRING to second service
- https://DOMAIN/static/ANY-STRING to static files location 
- deployment of reverse proxy should be automated 
## 4. Services and static files should be possible to access by HTTPS (SSL) 
## 5. Set up alerts on services so we can get notified when there is a downtime. 
