import { NextResponse } from 'next/server';
import Tokens from './tokens.json';

export async function GET() {
    return NextResponse.json(Tokens);
}
