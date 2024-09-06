import { createLogger, format, transports } from 'winston';

// Create a custom logger
const logger = createLogger({
  level: 'info', // Set the default log level
  format: format.combine(
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss',
    }),
    format.printf(
      (info) =>
        `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`
    ) // Customize the log format
  ),
  transports: [
    // Console logging
    new transports.Console(),

    // File logging
    new transports.File({ filename: 'logs/playwright.log', level: 'info' }),
  ],
});

// Export the logger for use in other files
export default logger;
