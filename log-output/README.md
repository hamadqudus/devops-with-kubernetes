# Log output

Exercise 1.1 from the DevOps with Kubernetes course.

The application generates a random string when it starts, stores the string in memory, and outputs the same string with a timestamp every 5 seconds.

## Running locally

\`\`\`bash
node app.js
\`\`\`

## Building the Docker image

\`\`\`bash
docker build -t log-output:1.0 .
\`\`\`

Run the container:

\`\`\`bash
docker run --rm log-output:1.0
\`\`\`

## Kubernetes

The application is deployed using the Kubernetes manifest:

\`\`\`
manifests/deployment.yaml
\`\`\`

Apply it with:

\`\`\`bash
kubectl apply -f manifests/deployment.yaml
\`\`\`

Check the deployment:

\`\`\`bash
kubectl get deployments
kubectl get pods
\`\`\`

View the application logs:

\`\`\`bash
kubectl logs <pod-name>
\`\`\`

The application should output the same random string every 5 seconds with a timestamp.
