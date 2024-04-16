const { default: DbConect } = require('@/database/DbConect');
const { NextResponse } = require('next/server');

export const GET = async () => {
  const db = await DbConect();
  const productCollection = db.collection('products');
  const result = await productCollection.find().toArray();
  return NextResponse.json(result);
};
