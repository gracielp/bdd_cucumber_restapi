const {When} = require('cucumber')
const assert = require('assert').strict
const restHelper = require('./../../util/restHelper');

When('I send GET request to {}', async function (path) {
    const response = await restHelper.getData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
    this.context['response'] = response;
})

When('I send POST request to {}', async function (path) {
    this.context['response'] = await restHelper.postData(`${process.env.SERVICE_URL}${path}`, this.context['request']);
})
 
When('I send PUT request with a {} to {}', async function (classgroup, path) {
    const response = await restHelper.putData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`, JSON.parse(classgroup));
    this.context['response'] = response;
})

When('I send DELETE request to {}', async function (path) {
    const response = await restHelper.deleteData(`${process.env.SERVICE_URL}${path}/${this.context['id']}`);
    this.context['response'] = response;
})