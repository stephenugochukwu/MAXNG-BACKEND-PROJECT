# Use a Node.js LTS (Long Term Support) version as the base image
FROM node:lts-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the TypeScript code into JavaScript
RUN npm run build

# Expose the port the application will listen on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
