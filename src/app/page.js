"use client";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchTokens } from "@/lib/slices/userTokenSlice";
import { fetchAlarms } from "@/lib/slices/userAlarmsSlice";
import { fetchSignals } from "@/lib/slices/tradingSignalSlice";
import TokenBoard from "@/components/TokenBoard";

export default function Home() {
  const dispatch = useDispatch();

  // Selectors for tokens, alarms, and signals
  const tokens = useSelector((state) => state.userTokens.items);
  const tokensStatus = useSelector((state) => state.userTokens.status);
  //const alarms = useSelector((state) => state.userAlarms.items);
  const alarmsStatus = useSelector((state) => state.userAlarms.status);
  //const signals = useSelector((state) => state.tradingSignals.items);
  const signalsStatus = useSelector((state) => state.tradingSignals.status);

  // Fetch tokens, alarms, and signals when each status is "idle"
  useEffect(() => {
    if (tokensStatus === "idle") {
      dispatch(fetchTokens());
    }
    if (alarmsStatus === "idle") {
      dispatch(fetchAlarms());
    }
    if (signalsStatus === "idle") {
      dispatch(fetchSignals());
    }
  }, [tokensStatus, alarmsStatus, signalsStatus, dispatch]);

  return (
    <div>
            <TokenBoard tokens={tokens} />
    </div>
  );
}
