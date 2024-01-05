FROM openjdk:11-jdk-slim

WORKDIR /app

# Only COPY's Operation , Base on docker-compose file location. 
COPY . .

#Carriage Return Error Fix ( Different Between Unix(\r\n) And Window (\n))
RUN sed -i 's/\r$//' gradlew

# RUN's Operation is Base on Current File's location. 
RUN chmod +x ./gradlew
RUN ./gradlew clean build

ENV JAR_PATH=/app/build/libs
RUN mv ${JAR_PATH}/*.jar /app/app.jar

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=prod", "app.jar"]