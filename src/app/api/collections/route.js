import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import Collection from '@/app/models/Collection';

export async function GET() {
  await dbConnect();
  try {
    const collections = await Collection.find({});
    return NextResponse.json({ success: true, data: collections });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}

export async function POST(request) {
  await dbConnect();
  try {
    const body = await request.json();
    console.log('Received body:', body);
    const collection = await Collection.create(body);
    return NextResponse.json({ success: true, data: collection }, { status: 201 });
  } catch (error) {
    console.error('Error creating collection:', error);
    return NextResponse.json({ success: false, message: error.message, stack: error.stack }, { status: 400 });
  }
}

