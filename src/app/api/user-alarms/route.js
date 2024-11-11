import { NextResponse } from 'next/server';
import Alarms from './alarms.json';

export async function GET() {
    return NextResponse.json(Alarms);
}
