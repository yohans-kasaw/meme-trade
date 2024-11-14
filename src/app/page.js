"use client";
import AppBar from "@/components/AppBar/AppBar";
import TokenBoard from "@/components/DashBoard/TokenBoard";
import { fetchSignals } from "@/lib/slices/tradingSignalSlice";
import { fetchAlarms } from "@/lib/slices/userAlarmsSlice";
import { fetchTokens } from "@/lib/slices/userTokenSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();

  // Selectors for tokens, alarms, and signals
  const tokens = useSelector((state) => state.userTokens.items);
  const tokensStatus = useSelector((state) => state.userTokens.status);
  //const alarms = useSelector((state) => state.userAlarms.items);
  const alarmsStatus = useSelector((state) => state.userAlarms.status);
  const signals = useSelector((state) => state.tradingSignals.items);
  const signalsStatus = useSelector((state) => state.tradingSignals.status);

  // bagdeCounts
  const badgeCounts = {
    fireCall: tokens.reduce((acc, token) => acc + (token.alert ? 1 : 0), 0),
    signalsCount: signals.length,
    pump: tokens.reduce((acc, token) => acc + (token.pump_fun ? 1 : 0), 0),
    message: tokens.reduce((acc, token) => acc + (token.user_alarm ? 1 : 0), 0),
  };

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
    <div className="h-screen overflow-hidden">
      <div>
        <AppBar
          user={{ profile_picture: "/images/profile_avatar_fallback.jpg" }}
          onSearch={(searchTerm) => {
            // Handle the search term here
            console.log("Searching for:", searchTerm);
          }}
          badgeCounts={badgeCounts}
        />
      </div>
      <TokenBoard tokens={tokens} signals={signals} />
    </div>
  );
}
