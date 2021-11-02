const {Given} = require('cucumber')
const assert = require('assert').strict
const restHelper = require('./../../util/restHelper');

Given('User opens {string}', (url) => {
    console.log(url)
})

Given('I have student ID #{int} to view', async function (id) {
    this.context['id'] = id;
})

Given('A new student {}', function (request) {
    this.context['request'] = JSON.parse(request);
})

Given('A student with ID #{int} to be updated', async function (id) {
    this.context['id'] = id;
})

Given('A student with ID #{int} to be deleted', async function (id) {
    this.context['id'] = id;
})
