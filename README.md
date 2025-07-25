# CI/CD pipeline automation

A fully automated CI/CD pipeline using industry standard tools like GitHub Actions, Docker, and Google Cloud Run 
# Tech Stack
- Node.js
- Express.js
- Jest + Supertest (for testing)
- Docker
- GitHub Actions (CI/CD pipelines)
- Google Cloud Run (hosting)
- Docker Hub (container registry)

## Features

- Automated tests on push and pull requests
- Dockerized Node.js app
- Builds and pushes Docker images to Docker Hub
- Deploys automatically to Google Cloud Run staging
- Main branch deploys to production (optional)
- Uses branching strategy to separate staging and production flows
