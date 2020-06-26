const Vue = require('vue');

module.exports = function createApp () {
    return new Vue({
        data: {
            name: "Okubanjo Oluwafunsho"
        },
        template: `<div>My name is: {{ name }}</div>`
    });
};