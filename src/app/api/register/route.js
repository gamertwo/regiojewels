import dbConnect from '@/lib/dbConnect';
import User from '@/models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const { name, email, password } = await request.json();
  
  await dbConnect();
  
  const existingUser = await User.findOne({ email });
  
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 422 });
  }
  
  const hashedPassword = bcrypt.hashSync(password, 12);
  
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });

  await user.save();
  
  return NextResponse.json({ message: 'User created', userId: user._id }, { status: 201 });
}
