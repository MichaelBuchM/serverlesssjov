'use strict';

// const msg = '___________.__.__  .__          __    __                               .___   _____          .___            .__             .___                                  ___.         ___.           \n' +
//     '\\__    ___/|__|  | |  | ___.__.|  | _|  | __ ____     _____   ____   __| _/ _/ ____\\____   __| _/______ ____ |  |   ______ __| _/____     ____   ____   ____       \\_ |__ _____ \\_ |__   ____  \n' +
//     '  |    |   |  |  | |  |<   |  ||  |/ /  |/ // __ \\   /     \\_/ __ \\ / __ |  \\   __\\/  _ \\ / __ |/  ___// __ \\|  |  /  ___// __ |\\__  \\   / ___\\_/ __ \\ /    \\       | __ \\\\__  \\ | __ \\_/ __ \\ \n' +
//     '  |    |   |  |  |_|  |_\\___  ||    <|    <\\  ___/  |  Y Y  \\  ___// /_/ |   |  | (  <_> ) /_/ |\\___ \\\\  ___/|  |__\\___ \\/ /_/ | / __ \\_/ /_/  >  ___/|   |  \\      | \\_\\ \\/ __ \\| \\_\\ \\  ___/ \n' +
//     '  |____|   |__|____/____/ ____||__|_ \\__|_ \\\\___  > |__|_|  /\\___  >____ |   |__|  \\____/\\____ /____  >\\___  >____/____  >____ |(____  /\\___  / \\___  >___|  / /\\   |___  (____  /___  /\\___  >\n' +
//     '                        \\/          \\/    \\/    \\/        \\/     \\/     \\/                    \\/    \\/     \\/          \\/     \\/     \\//_____/      \\/     \\/  )/       \\/     \\/    \\/     \\/ ';

// const msg = 'Michael\nelsker\nMaria!';

const msg = '                       .__          _____  __              _________ \n' +
    '  ______ ____ ___  ___ |__| _____ _/ ____\\/  |_  ____   ___\\_____   \\\n' +
    ' /  ___// __ \\\\  \\/  / |  | \\__  \\\\   __\\\\   __\\/ __ \\ /    \\ /   __/\n' +
    ' \\___ \\\\  ___/ >    <  |  |  / __ \\|  |   |  | \\  ___/|   |  \\   |   \n' +
    '/____  >\\___  >__/\\_ \\ |__| (____  /__|   |__|  \\___  >___|  /___|   \n' +
    '     \\/     \\/      \\/           \\/                 \\/     \\/<___>   ';
exports.handler = (event, context, callback) => {
    return respond(msg, 200, callback);
};

function respond (body, statusCode, callback) {
    const response = {
        statusCode: statusCode && !isNaN(statusCode) ? statusCode : 500,
        body: body,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true
        }
    };
    return Promise.resolve(callback(null, response));
}
