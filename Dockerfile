# ==========================================
# Stage 1: Install Dependencies
# ==========================================
FROM node:20-alpine AS dependencies

WORKDIR /app

COPY package*.json ./

RUN npm ci


# ==========================================
# Stage 2: Production Image
# ==========================================
FROM node:20-alpine AS production

WORKDIR /app

ENV NODE_ENV=production

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# Copy application files
COPY package*.json ./
COPY src ./src

# Create a non-root user
RUN addgroup -S appgroup && \
    adduser -S appuser -G appgroup

# Run application as non-root user
USER appuser

# Application port
EXPOSE 3000

# Start application
CMD ["node", "src/server.js"]