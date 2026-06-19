import { useState } from "react";
import {
  MapPin, Users, Calendar, Bell, Search, Home, Map as MapIcon,
  Users2, User, Filter, X, Navigation, Star, Clock
} from "lucide-react";

function LivePulse({ size = 8, color = "#00e676" }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size }}>
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: color,
          animation: "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
      />
      <span style={{ position: "relative", width: size, height: size, borderRadius: "50%", background: color }} />
    </span>
  );
}

const feedItems = [
  {
    id: 1,
    type: "club_event",
    club: "Berlin Underground Music Collective",
    icon: "🎵",
    color: "#7c4dff",
    title: "Open Mic & Jam Night happening tonight",
    meta: "64 people going · Berlin, Germany",
    time: "Starts in 4 hours",
  },
  {
    id: 2,
    type: "new_club",
    club: "Lisbon Surf & Sunset Club",
    icon: "🏄",
    color: "#00bcd4",
    title: "New club just launched near you",
    meta: "12 members already joined",
    time: "2 hours ago",
  },
  {
    id: 3,
    type: "milestone",
    club: "London Startup Founders",
    icon: "💼",
    color: "#00e676",
    title: "Club just hit 2,000 members!",
    meta: "London, UK",
    time: "5 hours ago",
  },
  {
    id: 4,
    type: "club_event",
    club: "Seoul Language Exchange",
    icon: "🗣️",
    color: "#1e90ff",
    title: "Coffee & Conversation Exchange this weekend",
    meta: "52 people going · Seoul, South Korea",
    time: "Sun, Jun 22",
  },
];

const mapPins = [
  { id: 1, city: "New York", country: "USA", x: 24, y: 36, count: 1284, type: "club" },
  { id: 2, city: "London", country: "UK", x: 47, y: 30, count: 2103, type: "club" },
  { id: 3, city: "Berlin", country: "Germany", x: 51, y: 28, count: 1932, type: "club" },
  { id: 4, city: "Lisbon", country: "Portugal", x: 42, y: 38, count: 312, type: "club" },
  { id: 5, city: "Tokyo", country: "Japan", x: 85, y: 38, count: 856, type: "club" },
  { id: 6, city: "Seoul", country: "South Korea", x: 82, y: 32, count: 934, type: "club" },
  { id: 7, city: "São Paulo", country: "Brazil", x: 33, y: 68, count: 1567, type: "club" },
  { id: 8, city: "Sydney", country: "Australia", x: 90, y: 78, count: 488, type: "club" },
  { id: 9, city: "Mumbai", country: "India", x: 68, y: 48, count: 1102, type: "club" },
  { id: 10, city: "Cairo", country: "Egypt", x: 57, y: 42, count: 276, type: "club" },
];

function FeedScreen({ onNavigateMap }) {
  return (
    <div style={{ padding: "24px 20px 100px" }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 22 }}>
        <div>
          <h1
            style={{
              fontSize: 26,
              fontWeight: 900,
              margin: 0,
              background: "linear-gradient(90deg, #00e5ff, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Not Alone
          </h1>
          <p style={{ fontSize: 13, color: "#78909c", margin: "2px 0 0" }}>
            Good evening — here's what's happening
          </p>
        </div>
        <button
          style={{
            width: 42,
            height: 42,
            borderRadius: 12,
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            position: "relative",
          }}
        >
          <Bell size={18} color="#90caf9" />
          <span
            style={{
              position: "absolute",
              top: 8,
              right: 9,
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#ff6d6d",
            }}
          />
        </button>
      </div>

      {/* Live world snapshot card */}
      <div
        onClick={onNavigateMap}
        style={{
          background: "linear-gradient(135deg, rgba(0,188,212,0.12), rgba(30,144,255,0.08))",
          border: "1px solid rgba(0,188,212,0.3)",
          borderRadius: 18,
          padding: 18,
          marginBottom: 24,
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
          <LivePulse size={8} />
          <span style={{ fontSize: 12.5, fontWeight: 700, color: "#69f0ae" }}>
            12,847 people active right now
          </span>
        </div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#e8f6fb", marginBottom: 4 }}>
          See who's around the world
        </div>
        <div style={{ fontSize: 12.5, color: "#90a4ae", display: "flex", alignItems: "center", gap: 4 }}>
          Open Live Map <Navigation size={12} />
        </div>
      </div>

      {/* Feed */}
      <h3 style={{ fontSize: 13, fontWeight: 700, color: "#90caf9", margin: "0 0 14px", textTransform: "uppercase", letterSpacing: 0.5 }}>
        Your Feed
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {feedItems.map((item) => (
          <div
            key={item.id}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 16,
              padding: 14,
              display: "flex",
              gap: 12,
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                background: `${item.color}22`,
                border: `1px solid ${item.color}44`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
                flexShrink: 0,
              }}
            >
              {item.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: item.color, marginBottom: 3 }}>
                {item.club}
              </div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#e8f6fb", lineHeight: 1.4, marginBottom: 4 }}>
                {item.title}
              </div>
              <div style={{ fontSize: 12, color: "#78909c" }}>{item.meta}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, color: "#546e7a", marginTop: 6 }}>
                <Clock size={11} /> {item.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function MapScreen() {
  const [selectedPin, setSelectedPin] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      {/* Map background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(30,144,255,0.15), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(0,188,212,0.12), transparent 50%), #0a0e1a",
        }}
      >
        {/* simple world dot-grid texture */}
        <svg width="100%" height="100%" style={{ position: "absolute", inset: 0, opacity: 0.15 }}>
          <defs>
            <pattern id="dots" width="14" height="14" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#4fc3f7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>

        {/* Pins */}
        {mapPins.map((pin) => (
          <div
            key={pin.id}
            onClick={() => setSelectedPin(pin)}
            style={{
              position: "absolute",
              left: `${pin.x}%`,
              top: `${pin.y}%`,
              transform: "translate(-50%, -50%)",
              cursor: "pointer",
              zIndex: selectedPin?.id === pin.id ? 10 : 1,
            }}
          >
            <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  position: "absolute",
                  width: 30,
                  height: 30,
                  borderRadius: "50%",
                  background: "#00e5ff",
                  opacity: 0.25,
                  animation: "pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              />
              <div
                style={{
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: selectedPin?.id === pin.id ? "#fff" : "#00e5ff",
                  border: "2px solid #0a0e1a",
                  boxShadow: "0 0 10px #00e5ffaa",
                }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Top bar */}
      <div style={{ position: "absolute", top: 20, left: 16, right: 16, zIndex: 20 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "rgba(13,27,46,0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 14,
            padding: "12px 14px",
          }}
        >
          <Search size={16} color="#78909c" />
          <input
            placeholder="Search a city or club..."
            style={{ background: "transparent", border: "none", outline: "none", color: "#e8f6fb", fontSize: 14, flex: 1 }}
          />
          <button
            onClick={() => setFilterOpen(!filterOpen)}
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: "rgba(0,188,212,0.15)",
              border: "1px solid rgba(0,188,212,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <Filter size={14} color="#00e5ff" />
          </button>
        </div>

        {/* Live counter chip */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            marginTop: 10,
            background: "rgba(0,230,118,0.12)",
            border: "1px solid rgba(0,230,118,0.3)",
            borderRadius: 20,
            padding: "6px 12px",
            fontSize: 12,
            fontWeight: 700,
            color: "#69f0ae",
          }}
        >
          <LivePulse size={7} />
          12,847 active worldwide
        </div>
      </div>

      {/* Pin detail card */}
      {selectedPin && (
        <div
          style={{
            position: "absolute",
            bottom: 90,
            left: 16,
            right: 16,
            zIndex: 20,
            background: "rgba(13,27,46,0.95)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(0,188,212,0.3)",
            borderRadius: 18,
            padding: 18,
          }}
        >
          <button
            onClick={() => setSelectedPin(null)}
            style={{
              position: "absolute",
              top: 12,
              right: 12,
              background: "rgba(255,255,255,0.06)",
              border: "none",
              borderRadius: "50%",
              width: 26,
              height: 26,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <X size={13} color="#90a4ae" />
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
            <MapPin size={14} color="#00e5ff" />
            <span style={{ fontSize: 16, fontWeight: 800, color: "#e8f6fb" }}>{selectedPin.city}</span>
            <span style={{ fontSize: 13, color: "#78909c" }}>· {selectedPin.country}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#90caf9" }}>
              <Users2 size={14} /> {selectedPin.count.toLocaleString()} members
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#69f0ae" }}>
              <LivePulse size={6} /> Active community
            </span>
          </div>
          <button
            style={{
              width: "100%",
              padding: "12px 0",
              borderRadius: 12,
              border: "none",
              background: "linear-gradient(90deg, #00bcd4, #1e90ff)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Explore {selectedPin.city}
          </button>
        </div>
      )}
    </div>
  );
}

export default function HomeMapScreen() {
  const [tab, setTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", icon: Home },
    { id: "map", label: "Map", icon: MapIcon },
    { id: "clubs", label: "Clubs", icon: Users2 },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(180deg, #0a0e1a 0%, #0d1b2e 100%)",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', system-ui, sans-serif",
        maxWidth: 480,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.7; }
          70% { transform: scale(2.6); opacity: 0; }
          100% { transform: scale(2.6); opacity: 0; }
        }
      `}</style>

      {tab === "home" && <FeedScreen onNavigateMap={() => setTab("map")} />}
      {tab === "map" && <MapScreen />}
      {tab === "clubs" && (
        <div style={{ padding: "60px 20px", textAlign: "center", color: "#546e7a" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>🏛️</div>
          <div style={{ fontSize: 14 }}>Clubs screen lives in its own prototype.</div>
        </div>
      )}
      {tab === "profile" && (
        <div style={{ padding: "60px 20px", textAlign: "center", color: "#546e7a" }}>
          <div style={{ fontSize: 32, marginBottom: 10 }}>👤</div>
          <div style={{ fontSize: 14 }}>Profile screen coming next.</div>
        </div>
      )}

      {/* Bottom nav */}
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "100%",
          maxWidth: 480,
          background: "rgba(10,14,26,0.92)",
          backdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          padding: "10px 8px calc(10px + env(safe-area-inset-bottom))",
          zIndex: 30,
        }}
      >
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setTab(id)}
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px 0",
            }}
          >
            <Icon size={20} color={tab === id ? "#00e5ff" : "#546e7a"} />
            <span style={{ fontSize: 10.5, fontWeight: 600, color: tab === id ? "#00e5ff" : "#546e7a" }}>
              {label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
