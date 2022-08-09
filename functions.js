const { isNull } = require("util");

const functions = {
    add: (num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (x) => x,
    createUser: () => {
        const user = { firstName: 'Greg' };
        user['lastName'] = 'Flaherty';
        return user;
    }
};

module.exports = functions;