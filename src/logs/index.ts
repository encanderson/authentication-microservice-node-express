import { createLogger, format, transports } from "winston";

const { combine, timestamp, label, prettyPrint } = format;

const logger = createLogger({
  format: combine(timestamp(), prettyPrint(), label({ label: "right meow!" })),
  transports: [
    new transports.Console(),
    new transports.File({ filename: "./src/logs/server.log" }),
  ],
});

export default logger;
