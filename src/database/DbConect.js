import React from 'react';
const { MongoClient, ServerApiVersion } = require('mongodb');

/**
 * @type {import('mongodb').Db}
 */
let db;
const DbConect = async () => {
  // bd-shop
  // NU7MopGUf9N8dLUd
  if (db) return db;
  const uri =
    'mongodb+srv://bd-shop:NU7MopGUf9N8dLUd@cluster0.mrvtr8q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  db = client.db('bd-shop');
  await client.db('admin').command({ ping: 1 });
  console.log('Pinged your deployment. You successfully connected to MongoDB!');
  return db;
};

export default DbConect;
