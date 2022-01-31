//logger
import log4js from 'log4js'
log4js.configure({
    appenders: {
      fileWarnAppender: { type: "file", filename: 'warn.log' },
      fileErrorAppender: { type: "file", filename: 'error.log' },
      justWarns: { type: 'logLevelFilter', appender: 'fileWarnAppender', level: 'warn' },
      consoleAppender: { type: "console" }
    },
    categories: {
      default: { appenders: ["consoleAppender"], level: "info" },
      console: { appenders: ["consoleAppender"], level: "info" },
      file: { appenders: ["justWarns"], level: "warn"},
    }
  });

  export const logger = log4js.getLogger();//default
  export const loggerFile = log4js.getLogger('file');//solo warn

