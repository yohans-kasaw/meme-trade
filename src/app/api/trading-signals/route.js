import { NextResponse } from 'next/server';
import TradingSignals from './trading-signals.json';

export async function GET() {
    return NextResponse.json(TradingSignals);
}
