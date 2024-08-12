import { NextResponse } from 'next/server';
import dbConnect from '@/app/lib/dbConnect';
import User from '@/app/models/User';
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  const { customerInfo, orderItems, total } = await req.json();
  await dbConnect();

  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ message: 'Not authenticated' }, { status: 401 });
  }

  try {
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    user.orders.push({ customerInfo, orderItems, total });
    await user.save();

    return NextResponse.json({ message: 'Order submitted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error submitting order:', error);
    return NextResponse.json({ message: 'Failed to submit order' }, { status: 500 });
  }
}
