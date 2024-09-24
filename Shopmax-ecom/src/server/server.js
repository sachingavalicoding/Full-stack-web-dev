import { Client , Account } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('666bdcba001b25441997');

const account = new Account(client);

const result = await account.createEmailPasswordSession(
    'email@example.com', // email
    'password' // password
);

console.log(result);
