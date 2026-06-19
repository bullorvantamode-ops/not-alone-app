import { useState } from "react";
import { Users, MapPin, Calendar, ArrowLeft, Search, Plus, Heart, MessageCircle, Share2, Clock, CheckCircle2 } from "lucide-react";

const categories = ["All", "Music", "Sports", "Arts", "Business", "Gaming", "Travel", "Cultural", "Fitness"];

const clubs = [
  {
    id: 0,
    name: "Berlin Underground Music Collective",
    category: "Music",
    cover: "linear-gradient(135deg, #7c4dff 0%, #00bcd4 100%)",
    icon: "🎵",
    members: 1932,
    liveNow: 38,
    city: "Berlin, Germany",
    description:
      "Live jam sessions, vinyl listening nights, and meetups for producers, DJs, and anyone who just loves music. All genres welcome — from techno to acoustic folk.",
    nextEvent: { title: "Open Mic & Jam Night", date: "Thu, Jun 25 · 8:00 PM", attending: 64 },
    tags: ["Live Music", "Jam Sessions", "All Genres"],
  },
  {
    id: 1,
    name: "Sunrise Runners NYC",
    category: "Fitness",
    cover: "linear-gradient(135deg, #ff6d6d 0%, #ff9d6d 100%)",
    icon: "🏃",
    members: 1284,
    liveNow: 23,
    city: "New York, USA",
    description:
      "Early morning running crew across Central Park and the Hudson River greenway. All paces welcome, from first 5K to marathon training.",
    nextEvent: { title: "Saturday Sunrise 10K", date: "Sat, Jun 21 · 6:00 AM", attending: 41 },
    tags: ["Running", "Morning", "All Levels"],
  },
  {
    id: 2,
    name: "Tokyo Photography Collective",
    category: "Arts",
    cover: "linear-gradient(135deg, #7c4dff 0%, #1e90ff 100%)",
    icon: "📷",
    members: 856,
    liveNow: 12,
    city: "Tokyo, Japan",
    description:
      "Street, film, and night photography walks through Shibuya, Shinjuku, and the back alleys most guidebooks miss.",
    nextEvent: { title: "Night Market Photo Walk", date: "Fri, Jun 20 · 8:00 PM", attending: 19 },
    tags: ["Photography", "Street", "Film"],
  },
  {
    id: 3,
    name: "London Startup Founders",
    category: "Business",
    cover: "linear-gradient(135deg, #00bcd4 0%, #00e676 100%)",
    icon: "💼",
    members: 2103,
    liveNow: 47,
    city: "London, UK",
    description:
      "Weekly founder meetups, pitch practice, and honest talk about building something from zero. No pitch decks required to show up.",
    nextEvent: { title: "Founder Office Hours", date: "Tue, Jun 24 · 7:00 PM", attending: 33 },
    tags: ["Startups", "Networking", "Pitch Practice"],
  },
  {
    id: 4,
    name: "Berlin Board Game Nights",
    category: "Gaming",
    cover: "linear-gradient(135deg, #ff9800 0%, #ff6d6d 100%)",
    icon: "🎲",
    members: 642,
    liveNow: 8,
    city: "Berlin, Germany",
    description:
      "Strategy games, party games, and everything in between. Bring a game or just bring yourself — tables fill up fast.",
    nextEvent: { title: "Game Night: Catan Tournament", date: "Wed, Jun 25 · 6:30 PM", attending: 27 },
    tags: ["Board Games", "Strategy", "Social"],
  },
  {
    id: 5,
    name: "São Paulo Backpackers",
    category: "Travel",
    cover: "linear-gradient(135deg, #00e5ff 0%, #7c4dff 100%)",
    icon: "🎒",
    members: 1567,
    liveNow: 31,
    city: "São Paulo, Brazil",
    description:
      "For travelers passing through and locals who love showing their city. Trip planning, hostel meetups, and weekend trips.",
    nextEvent: { title: "Weekend Trip: Ilhabela", date: "Fri, Jun 27 · 7:00 AM", attending: 15 },
    tags: ["Backpacking", "Weekend Trips", "Locals"],
  },
  {
    id: 6,
    name: "Seoul Language Exchange",
    category: "Cultural",
    cover: "linear-gradient(135deg, #1e90ff 0%, #00bcd4 100%)",
    icon: "🗣️",
    members: 934,
    liveNow: 18,
    city: "Seoul, South Korea",
    description:
      "Practice Korean, English, Japanese, and more over coffee. Structured exchange rounds, then open conversation.",
    nextEvent: { title: "Coffee & Conversation Exchange", date: "Sun, Jun 22 · 3:00 PM", attending: 52 },
    tags: ["Language", "Korean", "English"],
  },
];

function LivePulse({ size = 8 }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size }}>
      <span
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "50%",
          background: "#00e676",
          animation: "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite",
        }}
      />
      <span
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          background: "#00e676",
        }}
      />
    </span>
  );
}

function ClubCard({ club, onOpen }) {
  return (
    <div
      onClick={() => onOpen(club)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 18,
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.15s ease, border-color 0.15s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.borderColor = "rgba(0,229,255,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
      }}
    >
      <div
        style={{
          height: 88,
          background: club.cover,
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
          padding: 14,
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: "rgba(10,14,26,0.85)",
            backdropFilter: "blur(6px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 26,
            border: "1px solid rgba(255,255,255,0.15)",
            transform: "translateY(26px)",
          }}
        >
          {club.icon}
        </div>
        <div
          style={{
            marginLeft: "auto",
            background: "rgba(10,14,26,0.7)",
            backdropFilter: "blur(6px)",
            borderRadius: 20,
            padding: "4px 10px",
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 11,
            fontWeight: 700,
            color: "#69f0ae",
          }}
        >
          <LivePulse size={6} />
          {club.liveNow} active now
        </div>
      </div>
      <div style={{ padding: "32px 16px 16px" }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#e8f6fb", marginBottom: 4 }}>
          {club.name}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            fontSize: 12,
            color: "#78909c",
            marginBottom: 10,
          }}
        >
          <MapPin size={12} />
          {club.city}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "#90caf9" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Users size={13} /> {club.members.toLocaleString()}
          </span>
          <span
            style={{
              background: "rgba(0,188,212,0.12)",
              color: "#00e5ff",
              padding: "2px 9px",
              borderRadius: 20,
              fontSize: 10.5,
              fontWeight: 700,
            }}
          >
            {club.category}
          </span>
        </div>
      </div>
    </div>
  );
}

function ClubDetail({ club, onBack }) {
  const [joined, setJoined] = useState(false);

  return (
    <div>
      {/* Cover */}
      <div style={{ position: "relative", height: 200, background: club.cover }}>
        <button
          onClick={onBack}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(10,14,26,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <ArrowLeft size={18} />
        </button>
        <button
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            width: 38,
            height: 38,
            borderRadius: "50%",
            background: "rgba(10,14,26,0.6)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
          }}
        >
          <Share2 size={16} />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: -32,
            left: 20,
            width: 72,
            height: 72,
            borderRadius: 20,
            background: "rgba(10,14,26,0.9)",
            border: "1px solid rgba(255,255,255,0.15)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
          }}
        >
          {club.icon}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "44px 20px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: "#e8f6fb", margin: "0 0 4px" }}>
              {club.name}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 13, color: "#78909c" }}>
              <MapPin size={13} /> {club.city}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              background: "rgba(0,230,118,0.1)",
              border: "1px solid rgba(0,230,118,0.3)",
              borderRadius: 20,
              padding: "5px 12px",
              fontSize: 12,
              fontWeight: 700,
              color: "#69f0ae",
            }}
          >
            <LivePulse size={7} />
            {club.liveNow} active
          </div>
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
          {club.tags.map((t) => (
            <span
              key={t}
              style={{
                background: "rgba(0,188,212,0.1)",
                color: "#00e5ff",
                border: "1px solid rgba(0,188,212,0.25)",
                borderRadius: 20,
                padding: "4px 12px",
                fontSize: 11.5,
                fontWeight: 600,
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 20,
            padding: "16px 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#e8f6fb" }}>
              {club.members.toLocaleString()}
            </div>
            <div style={{ fontSize: 11, color: "#78909c" }}>Members</div>
          </div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#e8f6fb" }}>
              {club.nextEvent.attending}
            </div>
            <div style={{ fontSize: 11, color: "#78909c" }}>Going to next event</div>
          </div>
          <div style={{ width: 1, background: "rgba(255,255,255,0.08)" }} />
          <div style={{ flex: 1, textAlign: "center" }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#e8f6fb" }}>{club.category}</div>
            <div style={{ fontSize: 11, color: "#78909c" }}>Category</div>
          </div>
        </div>

        {/* About */}
        <div style={{ marginTop: 20 }}>
          <h3 style={{ fontSize: 13, fontWeight: 700, color: "#90caf9", margin: "0 0 8px", textTransform: "uppercase", letterSpacing: 0.5 }}>
            About this club
          </h3>
          <p style={{ fontSize: 14, color: "#b0bec5", lineHeight: 1.6, margin: 0 }}>
            {club.description}
          </p>
        </div>

        {/* Next event */}
        <div
          style={{
            marginTop: 22,
            background: "rgba(0,188,212,0.06)",
            border: "1px solid rgba(0,188,212,0.2)",
            borderRadius: 14,
            padding: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
            <Calendar size={15} color="#00e5ff" />
            <span style={{ fontSize: 12, fontWeight: 700, color: "#00e5ff", textTransform: "uppercase", letterSpacing: 0.5 }}>
              Next Event
            </span>
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#e8f6fb", marginBottom: 4 }}>
            {club.nextEvent.title}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#90a4ae" }}>
            <Clock size={13} />
            {club.nextEvent.date}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#90a4ae", marginTop: 4 }}>
            <Users size={13} />
            {club.nextEvent.attending} people going
          </div>
        </div>

        {/* Join button */}
        <button
          onClick={() => setJoined(!joined)}
          style={{
            width: "100%",
            marginTop: 24,
            padding: "15px 0",
            borderRadius: 14,
            border: "none",
            fontSize: 15,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            background: joined
              ? "rgba(0,230,118,0.12)"
              : "linear-gradient(90deg, #00bcd4, #1e90ff)",
            color: joined ? "#69f0ae" : "#fff",
            border: joined ? "1px solid rgba(0,230,118,0.4)" : "none",
            transition: "all 0.2s ease",
          }}
        >
          {joined ? (
            <>
              <CheckCircle2 size={18} /> Joined
            </>
          ) : (
            <>
              <Plus size={18} /> Join Club
            </>
          )}
        </button>

        <div style={{ display: "flex", gap: 10, marginTop: 12 }}>
          <button
            style={{
              flex: 1,
              padding: "12px 0",
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#cfd8dc",
              fontSize: 13,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <MessageCircle size={15} /> Club Chat
          </button>
          <button
            style={{
              flex: 1,
              padding: "12px 0",
              borderRadius: 12,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#cfd8dc",
              fontSize: 13,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              cursor: "pointer",
            }}
          >
            <Heart size={15} /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ClubsScreen() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = clubs.filter((c) => {
    const matchCategory = activeCategory === "All" || c.category === activeCategory;
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

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
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
      `}</style>

      {selectedClub ? (
        <ClubDetail club={selectedClub} onBack={() => setSelectedClub(null)} />
      ) : (
        <div style={{ padding: "24px 20px 32px" }}>
          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
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
                Clubs
              </h1>
              <p style={{ fontSize: 13, color: "#78909c", margin: "2px 0 0" }}>
                Find your people, anywhere in the world
              </p>
            </div>
            <button
              style={{
                width: 42,
                height: 42,
                borderRadius: 12,
                background: "linear-gradient(135deg, #00bcd4, #1e90ff)",
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Plus size={20} color="#fff" />
            </button>
          </div>

          {/* Search */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 14,
              padding: "12px 14px",
              marginBottom: 16,
            }}
          >
            <Search size={16} color="#78909c" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search clubs or cities..."
              style={{
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#e8f6fb",
                fontSize: 14,
                flex: 1,
              }}
            />
          </div>

          {/* Category pills */}
          <div
            style={{
              display: "flex",
              gap: 8,
              overflowX: "auto",
              paddingBottom: 4,
              marginBottom: 20,
              scrollbarWidth: "none",
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  flexShrink: 0,
                  padding: "8px 16px",
                  borderRadius: 20,
                  border: activeCategory === cat ? "1px solid transparent" : "1px solid rgba(255,255,255,0.12)",
                  background:
                    activeCategory === cat
                      ? "linear-gradient(90deg, #00bcd4, #1e90ff)"
                      : "rgba(255,255,255,0.03)",
                  color: activeCategory === cat ? "#fff" : "#90a4ae",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Live summary strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 16,
              fontSize: 12.5,
              color: "#69f0ae",
              fontWeight: 600,
            }}
          >
            <LivePulse size={7} />
            {clubs.reduce((a, c) => a + c.liveNow, 0)} people active across all clubs right now
          </div>

          {/* Club grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {filtered.map((club) => (
              <ClubCard key={club.id} club={club} onOpen={setSelectedClub} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", color: "#546e7a" }}>
              <div style={{ fontSize: 32, marginBottom: 10 }}>🔍</div>
              <div style={{ fontSize: 14 }}>No clubs match your search yet.</div>
              <div style={{ fontSize: 12.5, marginTop: 4 }}>Try a different city or category — or start your own club.</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
