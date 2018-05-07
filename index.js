const Db = require("node-database");

//  #
//  #
//  #       ###    ## #   ## #   ###   # ##
//  #      #   #  #  #   #  #   #   #  ##  #
//  #      #   #   ##     ##    #####  #
//  #      #   #  #      #      #      #
//  #####   ###    ###    ###    ###   #
//                #   #  #   #
//                 ###    ###
/**
 * Defines the logger class.
 */
class Logger {
    //               #
    //               #
    //  ###    ##   ###   #  #  ###
    // ##     # ##   #    #  #  #  #
    //   ##   ##     #    #  #  #  #
    // ###     ##     ##   ###  ###
    //                          #
    /**
     * A setup function that creates the database to log to.
     * @param {object} settings The settings to use for the mssql module.
     */
    static setup(settings) {
        Logger.db = new Db(settings);
    }

    // ##
    //  #
    //  #     ##    ###
    //  #    #  #  #  #
    //  #    #  #   ##
    // ###    ##   #
    //              ###
    /**
     * Logs an error to the database.
     * @param {string} application The application.
     * @param {string} category The category.
     * @param {Error} err The error to log.
     */
    static log(application, category, err) {
        Logger.db.query(
            "INSERT INTO tblLog (Application, Category, Message) VALUES (@application, @category, @message)",
            {
                application: {type: Db.VARCHAR(255), value: application},
                category: {type: Db.VARCHAR(255), value: category},
                message: {type: Db.TEXT, value: err.message}
            }
        ).catch(() => {});
    }
}

module.exports = Logger;
