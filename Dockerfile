# Use a Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port
EXPOSE 5000

# Start the server
CMD ["npm", "run", "start"]
# The backend Dockerfile is similar to the frontend Dockerfile, but with a few key differences:
# The backend Dockerfile uses a different base image: node:18. This image includes Node.js, which is required to run the backend server.
# The backend Dockerfile does not build the app. Instead, it copies the backend code and starts the server using npm run start.