FROM node:20-alpine
RUN useradd higia \
    && addgroup -S higia \
    && adduser -S higia -G higia
USER higia
WORKDIR /app
EXPOSE 3000