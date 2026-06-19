import { useState } from "react";
import { Home, Map as MapIcon, Users2, User, Sparkles } from "lucide-react";

import HomeMapScreen from "./components/HomeMap.jsx";
import ClubsScreen from "./components/Clubs.jsx";
import ProfileSignupScreen from "./components/ProfileSignup.jsx";
import ExtraScreensScreen from "./components/ExtraScreens.jsx";

const tabs = [
  { id: "home", label: "Home & Map", icon: Home, Component: HomeMapScreen },
  { id: "clubs", label: "Clubs", icon: Users2, Component: ClubsScreen },
  { id: "more", label: "More Flows", icon: Sparkles, Component: ExtraScreensScreen },
  { id: "profile", label: "Profile", icon: User, Component: ProfileSignupScreen },
];

export default function App() {
  const [active, setActive] = useState("home");
  const ActiveComponent = tabs.find((t) => t.id === active).Component;

  return (
    <div
      style={{
        background: "#0a0e1a",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
      }}
    >
      {/* Render the active full screen (each screen manages its own internal layout) */}
      <div style={{ paddingBottom: 64 }}>
        <ActiveComponent />
      </div>

      {/* Global outer navigation to switch between the 4 prototype groups */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 480,
          background: "rgba(5,8,16,0.97)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(0,229,255,0.25)",
          display: "flex",
          padding: "8px 8px calc(8px + env(safe-area-inset-bottom))",
          zIndex: 999,
        }}
      >
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "5px 0",
            }}
          >
            <Icon size={18} color={active === id ? "#00e5ff" : "#455a64"} />
            <span style={{ fontSize: 9.5, fontWeight: 700, color: active === id ? "#00e5ff" : "#455a64" }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
