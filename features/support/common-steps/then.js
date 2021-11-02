const {Then} = require('cucumber')
const assert = require('assert').strict
const restHelper = require('./../../util/restHelper');


Then(/^I should see the Student Record (.*)$/, async function (expectedResponse) {
    assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
})

Then('I get response code {int}', async function (code) {
    assert.equal(this.context['response'].status, code);
});

Then(/^I should see message (.*)$/, async function (expectedResponse) {
    assert.deepEqual(this.context['response'].data, JSON.parse(expectedResponse));
})