import { Client, Account } from 'appwrite';

const client = new Client();

client
  .setEndpoint('http://localhost:99/v1')  // Replace with your Appwrite instance URL
  .setProject('67eacc0d001fcb6964a4');     // Replace with your Appwrite Project ID

const account = new Account(client);

export { client, account };

