import { useState } from "react";
import {
  ArrowLeft, Camera, ChevronRight, Send, Smile, MoreVertical,
  Users2, MapPin, Tag, FileText, CheckCircle2, Shield, Lock,
  UserPlus, Clock, X, Heart, Image as ImageIcon
} from "lucide-react";

function LivePulse({ size = 8, color = "#00e676" }) {
  return (
    <span style={{ position: "relative", display: "inline-flex", width: size, height: size }}>
      <span style={{ position: "absolute", inset: 0, borderRadius: "50%", background: color, animation: "pulse-ring 1.8s cubic-bezier(0.4,0,0.6,1) infinite" }} />
      <span style={{ position: "relative", width: size, height: size, borderRadius: "50%", background: color }} />
    </span>
  );
}

const categories = ["Music", "Sports", "Arts", "Business", "Gaming", "Travel", "Cultural", "Fitness"];

/* ───────────────────────── CLUB CREATION ───────────────────────── */

function FieldShell({ icon: Icon, label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: "#90caf9", marginBottom: 7, display: "block" }}>
        {label}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 10,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14,
          padding: "13px 14px",
        }}
      >
        <Icon size={16} color="#5c8a9e" style={{ marginTop: 1, flexShrink: 0 }} />
        {children}
      </div>
    </div>
  );
}

const inputStyle = {
  background: "transparent",
  border: "none",
  outline: "none",
  color: "#e8f6fb",
  fontSize: 14,
  flex: 1,
  fontFamily: "inherit",
  resize: "none",
};

function CreateClubScreen({ onBack, onCreated }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [desc, setDesc] = useState("");
  const [step, setStep] = useState("form"); // form | success

  const canSubmit = name && category && city && desc;

  if (step === "success") {
    return (
      <div style={{ padding: "80px 28px", textAlign: "center" }}>
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "rgba(0,230,118,0.12)",
            border: "1px solid rgba(0,230,118,0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 20px",
          }}
        >
          <CheckCircle2 size={32} color="#69f0ae" />
        </div>
        <h2 style={{ fontSize: 20, fontWeight: 800, color: "#e8f6fb", margin: "0 0 8px" }}>
          Club Created!
        </h2>
        <p style={{ fontSize: 13.5, color: "#78909c", marginBottom: 28, lineHeight: 1.6 }}>
          "{name}" is now live. People in {city} can find and join it on the map.
        </p>
        <button
          onClick={onCreated}
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(90deg, #00bcd4, #1e90ff)",
            color: "#fff",
            fontSize: 14.5,
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          View My Club
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "20px 20px 100px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
        <button
          onClick={onBack}
          style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <ArrowLeft size={17} color="#90caf9" />
        </button>
        <h1 style={{ fontSize: 19, fontWeight: 800, color: "#e8f6fb", margin: 0 }}>Create a Club</h1>
      </div>

      {/* Cover upload */}
      <div
        style={{
          height: 110,
          borderRadius: 16,
          background: "rgba(255,255,255,0.03)",
          border: "2px dashed rgba(0,188,212,0.35)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          marginBottom: 20,
          cursor: "pointer",
        }}
      >
        <Camera size={22} color="#5c8a9e" />
        <span style={{ fontSize: 12, color: "#5c8a9e" }}>Add a cover image</span>
      </div>

      <FieldShell icon={Tag} label="Club Name">
        <input style={inputStyle} placeholder="e.g. Lisbon Surf & Sunset Club" value={name} onChange={(e) => setName(e.target.value)} />
      </FieldShell>

      <FieldShell icon={MapPin} label="City">
        <input style={inputStyle} placeholder="Where is this club based?" value={city} onChange={(e) => setCity(e.target.value)} />
      </FieldShell>

      <FieldShell icon={FileText} label="Description">
        <textarea
          style={{ ...inputStyle, minHeight: 70 }}
          placeholder="What's this club about? Who should join?"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </FieldShell>

      <label style={{ fontSize: 12, fontWeight: 700, color: "#90caf9", marginBottom: 9, display: "block" }}>
        Category
      </label>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              padding: "9px 16px",
              borderRadius: 20,
              border: category === c ? "1px solid #00e5ff" : "1px solid rgba(255,255,255,0.1)",
              background: category === c ? "rgba(0,188,212,0.12)" : "rgba(255,255,255,0.03)",
              color: category === c ? "#00e5ff" : "#90a4ae",
              fontSize: 12.5,
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      <div
        style={{
          display: "flex", gap: 8, alignItems: "flex-start",
          background: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.2)",
          borderRadius: 12, padding: 12, marginBottom: 24,
        }}
      >
        <Shield size={14} color="#00e5ff" style={{ marginTop: 1, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: "#90caf9", lineHeight: 1.5 }}>
          As the creator, you're responsible for moderating this club within community guidelines.
        </span>
      </div>

      <button
        disabled={!canSubmit}
        onClick={() => setStep("success")}
        style={{
          width: "100%",
          padding: "14px 0",
          borderRadius: 14,
          border: "none",
          background: canSubmit ? "linear-gradient(90deg, #00bcd4, #1e90ff)" : "rgba(255,255,255,0.06)",
          color: canSubmit ? "#fff" : "#546e7a",
          fontSize: 14.5,
          fontWeight: 700,
          cursor: canSubmit ? "pointer" : "not-allowed",
        }}
      >
        Create Club
      </button>
    </div>
  );
}

/* ───────────────────────── CHAT ───────────────────────── */

const initialMessages = [
  { id: 1, from: "them", text: "Hey! Saw you joined the Music Collective 🎵", time: "10:02 AM" },
  { id: 2, from: "me", text: "Yeah! Excited for the jam night Thursday", time: "10:03 AM" },
  { id: 3, from: "them", text: "Same, it's always a great crowd. Do you play anything?", time: "10:04 AM" },
  { id: 4, from: "me", text: "Guitar mostly, some piano", time: "10:05 AM" },
];

function ChatScreen({ onBack }) {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");

  const send = () => {
    if (!draft.trim()) return;
    setMessages([...messages, { id: Date.now(), from: "me", text: draft, time: "Now" }]);
    setDraft("");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Header */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 12,
          padding: "18px 16px", borderBottom: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(13,27,46,0.6)",
        }}
      >
        <button
          onClick={onBack}
          style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
          }}
        >
          <ArrowLeft size={16} color="#90caf9" />
        </button>
        <div
          style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(135deg, #7c4dff, #00bcd4)",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16,
          }}
        >
          🎸
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: "#e8f6fb" }}>Jordan</div>
          <div style={{ fontSize: 11.5, color: "#69f0ae", display: "flex", alignItems: "center", gap: 4 }}>
            <LivePulse size={6} /> Active now
          </div>
        </div>
        <MoreVertical size={18} color="#78909c" />
      </div>

      {/* Privacy notice */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 8, justifyContent: "center",
          padding: "8px 16px", background: "rgba(255,255,255,0.02)",
          fontSize: 11, color: "#546e7a",
        }}
      >
        <Lock size={11} /> Contact details stay private until you both connect
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "16px", display: "flex", flexDirection: "column", gap: 10 }}>
        {messages.map((m) => (
          <div key={m.id} style={{ display: "flex", justifyContent: m.from === "me" ? "flex-end" : "flex-start" }}>
            <div style={{ maxWidth: "75%" }}>
              <div
                style={{
                  padding: "10px 14px",
                  borderRadius: m.from === "me" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  background: m.from === "me" ? "linear-gradient(90deg, #00bcd4, #1e90ff)" : "rgba(255,255,255,0.06)",
                  color: m.from === "me" ? "#fff" : "#e8f6fb",
                  fontSize: 14,
                  lineHeight: 1.4,
                }}
              >
                {m.text}
              </div>
              <div
                style={{
                  fontSize: 10.5, color: "#546e7a", marginTop: 3,
                  textAlign: m.from === "me" ? "right" : "left",
                }}
              >
                {m.time}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 10,
          padding: "12px 14px calc(12px + env(safe-area-inset-bottom))",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          background: "rgba(13,27,46,0.6)",
        }}
      >
        <button style={{ background: "none", border: "none", cursor: "pointer" }}>
          <Smile size={20} color="#78909c" />
        </button>
        <div
          style={{
            flex: 1, display: "flex", alignItems: "center",
            background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 20, padding: "9px 14px",
          }}
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            style={{ ...inputStyle, fontSize: 13.5 }}
          />
        </div>
        <button
          onClick={send}
          style={{
            width: 38, height: 38, borderRadius: "50%",
            background: "linear-gradient(90deg, #00bcd4, #1e90ff)",
            border: "none", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
            flexShrink: 0,
          }}
        >
          <Send size={16} color="#fff" />
        </button>
      </div>
    </div>
  );
}

/* ───────────────────────── CONNECTION REQUEST ───────────────────────── */

function ConnectionRequestScreen({ onBack }) {
  const [stage, setStage] = useState("profile"); // profile | request_sent | accepted | unlock_offer | unlocked

  const Header = ({ title }) => (
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 24 }}>
      <button
        onClick={onBack}
        style={{
          width: 38, height: 38, borderRadius: "50%",
          background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        }}
      >
        <ArrowLeft size={17} color="#90caf9" />
      </button>
      <h1 style={{ fontSize: 18, fontWeight: 800, color: "#e8f6fb", margin: 0 }}>{title}</h1>
    </div>
  );

  return (
    <div style={{ padding: "20px 20px 60px" }}>
      <Header title="Connect" />

      {/* Mini profile card, always visible */}
      <div
        style={{
          background: "rgba(255,255,255,0.03)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 18,
          padding: 20,
          textAlign: "center",
          marginBottom: 24,
        }}
      >
        <div
          style={{
            width: 80, height: 80, borderRadius: "50%",
            background: "linear-gradient(135deg, #1a2332, #0d1b2e)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 32, margin: "0 auto 12px",
          }}
        >
          👤
        </div>
        <div style={{ fontSize: 17, fontWeight: 800, color: "#e8f6fb" }}>Sam Chen</div>
        <div style={{ fontSize: 12.5, color: "#78909c", marginTop: 2, display: "flex", alignItems: "center", justifyContent: "center", gap: 4 }}>
          <MapPin size={11} /> Berlin, Germany
        </div>
        <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 10 }}>
          {["Music", "Travel", "Photography"].map((t) => (
            <span key={t} style={{ fontSize: 10.5, fontWeight: 600, color: "#00e5ff", background: "rgba(0,188,212,0.1)", padding: "3px 9px", borderRadius: 12 }}>
              {t}
            </span>
          ))}
        </div>
        <div
          style={{
            marginTop: 14, display: "inline-flex", alignItems: "center", gap: 6,
            fontSize: 11, color: "#546e7a", background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "5px 12px",
          }}
        >
          <Lock size={11} /> Contact details hidden until you both connect
        </div>
      </div>

      {/* Stage: initial — send request */}
      {stage === "profile" && (
        <>
          <div
            style={{
              background: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.2)",
              borderRadius: 14, padding: 16, marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#00e5ff", marginBottom: 6 }}>
              Step 1 of 2 — Send a Request
            </div>
            <div style={{ fontSize: 12.5, color: "#90a4ae", lineHeight: 1.5 }}>
              A small $2 fee sends Sam a connection request. Nothing is shared yet — they choose whether to accept.
            </div>
          </div>
          <button
            onClick={() => setStage("request_sent")}
            style={{
              width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: "linear-gradient(90deg, #00bcd4, #1e90ff)", color: "#fff",
              fontSize: 14.5, fontWeight: 700, cursor: "pointer",
              display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
            }}
          >
            <UserPlus size={17} /> Send Request — $2
          </button>
        </>
      )}

      {/* Stage: request sent, waiting */}
      {stage === "request_sent" && (
        <div style={{ textAlign: "center", padding: "20px 0" }}>
          <div
            style={{
              width: 60, height: 60, borderRadius: "50%",
              background: "rgba(255,152,0,0.12)", border: "1px solid rgba(255,152,0,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px",
            }}
          >
            <Clock size={26} color="#ffb74d" />
          </div>
          <div style={{ fontSize: 15, fontWeight: 700, color: "#e8f6fb", marginBottom: 6 }}>
            Request sent!
          </div>
          <div style={{ fontSize: 13, color: "#78909c", marginBottom: 24, lineHeight: 1.5 }}>
            We'll notify you when Sam responds. This usually takes less than a day.
          </div>
          {/* Demo-only button to simulate acceptance */}
          <button
            onClick={() => setStage("accepted")}
            style={{
              width: "100%", padding: "12px 0", borderRadius: 14,
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              color: "#90a4ae", fontSize: 13, fontWeight: 600, cursor: "pointer",
            }}
          >
            (Demo) Simulate Sam Accepting →
          </button>
        </div>
      )}

      {/* Stage: accepted, can unlock */}
      {stage === "accepted" && (
        <>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 10,
              background: "rgba(0,230,118,0.1)", border: "1px solid rgba(0,230,118,0.3)",
              borderRadius: 14, padding: 14, marginBottom: 20,
            }}
          >
            <CheckCircle2 size={20} color="#69f0ae" />
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 700, color: "#69f0ae" }}>Sam accepted your request!</div>
              <div style={{ fontSize: 11.5, color: "#a5d6a7" }}>You can now unlock contact details</div>
            </div>
          </div>
          <div
            style={{
              background: "rgba(0,188,212,0.06)", border: "1px solid rgba(0,188,212,0.2)",
              borderRadius: 14, padding: 16, marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 13, fontWeight: 700, color: "#00e5ff", marginBottom: 6 }}>
              Step 2 of 2 — Unlock Contact Info
            </div>
            <div style={{ fontSize: 12.5, color: "#90a4ae", lineHeight: 1.5 }}>
              One flat $15 fee — same price for everyone. Either of you can unlock; both then see each other's contact details.
            </div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button
              onClick={() => setStage("profile")}
              style={{
                flex: 1, padding: "13px 0", borderRadius: 14,
                background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
                color: "#90a4ae", fontSize: 13.5, fontWeight: 600, cursor: "pointer",
              }}
            >
              Maybe Later
            </button>
            <button
              onClick={() => setStage("unlocked")}
              style={{
                flex: 2, padding: "13px 0", borderRadius: 14, border: "none",
                background: "linear-gradient(90deg, #00bcd4, #1e90ff)", color: "#fff",
                fontSize: 13.5, fontWeight: 700, cursor: "pointer",
              }}
            >
              Unlock — $15
            </button>
          </div>
        </>
      )}

      {/* Stage: unlocked */}
      {stage === "unlocked" && (
        <>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <div
              style={{
                width: 60, height: 60, borderRadius: "50%",
                background: "rgba(0,230,118,0.12)", border: "1px solid rgba(0,230,118,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px",
              }}
            >
              <CheckCircle2 size={26} color="#69f0ae" />
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#e8f6fb" }}>Connected!</div>
            <div style={{ fontSize: 12.5, color: "#78909c", marginTop: 4 }}>
              You can now message Sam directly and see their contact details.
            </div>
          </div>
          <div
            style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 14, padding: 16, marginBottom: 20,
            }}
          >
            <div style={{ fontSize: 11, color: "#78909c", marginBottom: 4 }}>Phone</div>
            <div style={{ fontSize: 13.5, color: "#e8f6fb", fontWeight: 600, marginBottom: 12 }}>+49 •••• ••42</div>
            <div style={{ fontSize: 11, color: "#78909c", marginBottom: 4 }}>Email</div>
            <div style={{ fontSize: 13.5, color: "#e8f6fb", fontWeight: 600 }}>sam.c••••@email.com</div>
          </div>
          <button
            style={{
              width: "100%", padding: "14px 0", borderRadius: 14, border: "none",
              background: "linear-gradient(90deg, #00bcd4, #1e90ff)", color: "#fff",
              fontSize: 14.5, fontWeight: 700, cursor: "pointer",
            }}
          >
            Send a Message
          </button>
        </>
      )}
    </div>
  );
}

/* ───────────────────────── MAIN APP SHELL ───────────────────────── */

export default function ExtraScreensScreen() {
  const [screen, setScreen] = useState("menu");

  const screens = [
    { id: "create", label: "Create a Club", icon: Users2, color: "#00bcd4" },
    { id: "chat", label: "Club Chat", icon: Send, color: "#7c4dff" },
    { id: "connect", label: "Connection Request Flow", icon: UserPlus, color: "#00e676" },
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
          70% { transform: scale(2.4); opacity: 0; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        input::placeholder, textarea::placeholder { color: #546e7a; }
      `}</style>

      {screen === "menu" && (
        <div style={{ padding: "40px 24px" }}>
          <h1
            style={{
              fontSize: 24, fontWeight: 900, margin: "0 0 6px",
              background: "linear-gradient(90deg, #00e5ff, #ffffff)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            }}
          >
            Remaining Screens
          </h1>
          <p style={{ fontSize: 13, color: "#78909c", margin: "0 0 28px" }}>
            Pick a flow to preview
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {screens.map((s) => (
              <button
                key={s.id}
                onClick={() => setScreen(s.id)}
                style={{
                  display: "flex", alignItems: "center", gap: 14,
                  background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 16, padding: 18, cursor: "pointer", textAlign: "left",
                }}
              >
                <div
                  style={{
                    width: 46, height: 46, borderRadius: 12,
                    background: `${s.color}22`, border: `1px solid ${s.color}44`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <s.icon size={20} color={s.color} />
                </div>
                <span style={{ flex: 1, fontSize: 14.5, fontWeight: 700, color: "#e8f6fb" }}>{s.label}</span>
                <ChevronRight size={18} color="#546e7a" />
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === "create" && (
        <CreateClubScreen onBack={() => setScreen("menu")} onCreated={() => setScreen("menu")} />
      )}
      {screen === "chat" && <ChatScreen onBack={() => setScreen("menu")} />}
      {screen === "connect" && <ConnectionRequestScreen onBack={() => setScreen("menu")} />}
    </div>
  );
}
