import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import Collection from '@/app/models/Collection';

export async function DELETE(request, { params }) {
  await dbConnect();
  try {
    const deletedCollection = await Collection.deleteOne({ _id: params.id });
    if (deletedCollection.deletedCount === 0) {
      return NextResponse.json({ success: false, message: 'Collection not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, message: 'Collection deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, message: error.message }, { status: 400 });
  }
}
