const { default: DbConect } = require('@/database/DbConect');
const { NextResponse } = require('next/server');

export const GET = async () => {
  const db = await DbConect();
  const categoriesCollection = db.collection('categories');
  const result = await categoriesCollection.find().toArray();
  return NextResponse.json(result);
};
