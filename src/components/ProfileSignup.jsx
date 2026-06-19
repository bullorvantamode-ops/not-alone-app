import { useState } from "react";
import {
  User, Mail, Phone, MapPin, Calendar, Camera, ChevronRight, ChevronLeft,
  Shield, CheckCircle2, Wallet, Settings, Bell, LogOut, Edit3, Users2,
  Star, Award, Lock
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

function ProgressDots({ step, total }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: "center", marginBottom: 28 }}>
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          style={{
            width: i === step ? 22 : 7,
            height: 7,
            borderRadius: 4,
            background: i === step ? "linear-gradient(90deg, #00bcd4, #1e90ff)" : "rgba(255,255,255,0.12)",
            transition: "all 0.25s ease",
          }}
        />
      ))}
    </div>
  );
}

function FieldShell({ icon: Icon, label, children }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: "#90caf9", marginBottom: 7, display: "block" }}>
        {label}
      </label>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 14,
          padding: "13px 14px",
        }}
      >
        <Icon size={16} color="#5c8a9e" />
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
};

function SignUpFlow({ onComplete }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    city: "",
    gender: "",
  });

  const update = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const steps = [
    // Step 0: Basic info
    {
      title: "Let's get you set up",
      subtitle: "Just the basics to create your account",
      content: (
        <>
          <FieldShell icon={User} label="Full Name">
            <input style={inputStyle} placeholder="Your name" value={form.name} onChange={(e) => update("name", e.target.value)} />
          </FieldShell>
          <FieldShell icon={Calendar} label="Age">
            <input style={inputStyle} placeholder="18+" type="number" value={form.age} onChange={(e) => update("age", e.target.value)} />
          </FieldShell>
          <FieldShell icon={Mail} label="Email">
            <input style={inputStyle} placeholder="you@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} />
          </FieldShell>
        </>
      ),
    },
    // Step 1: Contact + location
    {
      title: "Where can people find you?",
      subtitle: "Your contact stays private until you choose to share it",
      content: (
        <>
          <FieldShell icon={Phone} label="Phone Number">
            <input style={inputStyle} placeholder="+1 555 000 0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
          </FieldShell>
          <FieldShell icon={MapPin} label="City">
            <input style={inputStyle} placeholder="e.g. Berlin, Germany" value={form.city} onChange={(e) => update("city", e.target.value)} />
          </FieldShell>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              background: "rgba(0,230,118,0.06)",
              border: "1px solid rgba(0,230,118,0.2)",
              borderRadius: 12,
              padding: 12,
              marginTop: 4,
            }}
          >
            <Lock size={14} color="#69f0ae" style={{ marginTop: 1, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#a5d6a7", lineHeight: 1.5 }}>
              Your exact address is never shown. Other members only see your city until you both agree to connect.
            </span>
          </div>
        </>
      ),
    },
    // Step 2: Gender + photo
    {
      title: "Almost there",
      subtitle: "Add a photo and a few last details",
      content: (
        <>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 20 }}>
            <div
              style={{
                width: 92,
                height: 92,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.04)",
                border: "2px dashed rgba(0,188,212,0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <Camera size={26} color="#5c8a9e" />
            </div>
          </div>
          <label style={{ fontSize: 12, fontWeight: 700, color: "#90caf9", marginBottom: 9, display: "block" }}>
            Gender
          </label>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {["Male", "Female", "Transgender"].map((g) => (
              <button
                key={g}
                onClick={() => update("gender", g)}
                style={{
                  flex: 1,
                  padding: "11px 0",
                  borderRadius: 12,
                  border: form.gender === g ? "1px solid #00e5ff" : "1px solid rgba(255,255,255,0.1)",
                  background: form.gender === g ? "rgba(0,188,212,0.12)" : "rgba(255,255,255,0.03)",
                  color: form.gender === g ? "#00e5ff" : "#90a4ae",
                  fontSize: 12.5,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                {g}
              </button>
            ))}
          </div>
          <div
            style={{
              display: "flex",
              gap: 8,
              alignItems: "flex-start",
              background: "rgba(0,188,212,0.06)",
              border: "1px solid rgba(0,188,212,0.2)",
              borderRadius: 12,
              padding: 12,
            }}
          >
            <Shield size={14} color="#00e5ff" style={{ marginTop: 1, flexShrink: 0 }} />
            <span style={{ fontSize: 12, color: "#90caf9", lineHeight: 1.5 }}>
              ID verification happens after sign up to keep the community real and safe.
            </span>
          </div>
        </>
      ),
    },
  ];

  const isLast = step === steps.length - 1;

  return (
    <div style={{ padding: "32px 24px 40px", minHeight: "100vh" }}>
      <ProgressDots step={step} total={steps.length} />
      <h1 style={{ fontSize: 22, fontWeight: 800, color: "#e8f6fb", margin: "0 0 6px", textAlign: "center" }}>
        {steps[step].title}
      </h1>
      <p style={{ fontSize: 13, color: "#78909c", textAlign: "center", margin: "0 0 28px" }}>
        {steps[step].subtitle}
      </p>

      <div>{steps[step].content}</div>

      <div style={{ display: "flex", gap: 10, marginTop: 28 }}>
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            style={{
              width: 50,
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.03)",
              color: "#90a4ae",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <ChevronLeft size={18} />
          </button>
        )}
        <button
          onClick={() => (isLast ? onComplete(form) : setStep(step + 1))}
          style={{
            flex: 1,
            padding: "14px 0",
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(90deg, #00bcd4, #1e90ff)",
            color: "#fff",
            fontSize: 14.5,
            fontWeight: 700,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
          }}
        >
          {isLast ? "Create Account — It's Free" : "Continue"}
          {!isLast && <ChevronRight size={16} />}
        </button>
      </div>

      <p style={{ textAlign: "center", fontSize: 11, color: "#546e7a", marginTop: 16 }}>
        By continuing you agree to our Terms & Privacy Policy
      </p>
    </div>
  );
}

function ProfileScreen({ user, onEditAgain }) {
  const stats = [
    { label: "Clubs Joined", value: "4", icon: Users2 },
    { label: "Connections", value: "12", icon: Star },
    { label: "Member Since", value: "2026", icon: Award },
  ];

  return (
    <div style={{ padding: "0 0 100px" }}>
      {/* Cover */}
      <div
        style={{
          height: 130,
          background: "linear-gradient(135deg, #00bcd4 0%, #1e90ff 60%, #7c4dff 100%)",
          position: "relative",
        }}
      >
        <button
          style={{
            position: "absolute",
            top: 18,
            right: 16,
            width: 36,
            height: 36,
            borderRadius: "50%",
            background: "rgba(10,14,26,0.5)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          <Settings size={16} color="#fff" />
        </button>
      </div>

      <div style={{ padding: "0 22px" }}>
        {/* Avatar */}
        <div style={{ marginTop: -44, marginBottom: 12 }}>
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: "50%",
              background: "linear-gradient(135deg, #1a2332, #0d1b2e)",
              border: "4px solid #0a0e1a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              position: "relative",
            }}
          >
            👤
            <div
              style={{
                position: "absolute",
                bottom: 2,
                right: 2,
                background: "#00e676",
                borderRadius: "50%",
                width: 22,
                height: 22,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "3px solid #0a0e1a",
              }}
            >
              <CheckCircle2 size={11} color="#0a0e1a" />
            </div>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <h1 style={{ fontSize: 21, fontWeight: 800, color: "#e8f6fb", margin: 0 }}>
              {user.name || "Alex Rivera"}
            </h1>
            <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, color: "#78909c", marginTop: 3 }}>
              <MapPin size={12} /> {user.city || "Berlin, Germany"}
            </div>
          </div>
          <button
            onClick={onEditAgain}
            style={{
              width: 36,
              height: 36,
              borderRadius: 10,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Edit3 size={14} color="#90caf9" />
          </button>
        </div>

        {/* Verified badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            marginTop: 12,
            background: "rgba(0,230,118,0.1)",
            border: "1px solid rgba(0,230,118,0.3)",
            borderRadius: 20,
            padding: "5px 12px",
            fontSize: 11.5,
            fontWeight: 700,
            color: "#69f0ae",
          }}
        >
          <Shield size={12} /> Verified Member
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            marginTop: 22,
            padding: "16px 0",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {stats.map((s, i) => (
            <div key={s.label} style={{ flex: 1, textAlign: "center", position: "relative" }}>
              <s.icon size={16} color="#00e5ff" style={{ marginBottom: 6 }} />
              <div style={{ fontSize: 17, fontWeight: 800, color: "#e8f6fb" }}>{s.value}</div>
              <div style={{ fontSize: 10.5, color: "#78909c", marginTop: 2 }}>{s.label}</div>
              {i < stats.length - 1 && (
                <div style={{ position: "absolute", right: 0, top: 4, bottom: 4, width: 1, background: "rgba(255,255,255,0.08)" }} />
              )}
            </div>
          ))}
        </div>

        {/* Wallet */}
        <div
          style={{
            marginTop: 20,
            background: "linear-gradient(135deg, rgba(0,188,212,0.1), rgba(124,77,255,0.08))",
            border: "1px solid rgba(0,188,212,0.25)",
            borderRadius: 16,
            padding: 16,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: "rgba(0,229,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Wallet size={18} color="#00e5ff" />
            </div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#e8f6fb" }}>Wallet Balance</div>
              <div style={{ fontSize: 11, color: "#78909c" }}>Linked via Binance Pay</div>
            </div>
          </div>
          <div style={{ fontSize: 16, fontWeight: 800, color: "#00e5ff" }}>$0.00</div>
        </div>

        {/* Menu */}
        <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4 }}>
          {[
            { icon: Bell, label: "Notifications" },
            { icon: Lock, label: "Privacy & Safety" },
            { icon: Wallet, label: "Payments & Transactions" },
            { icon: Settings, label: "Account Settings" },
          ].map((m) => (
            <button
              key={m.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 4px",
                background: "transparent",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <m.icon size={17} color="#90caf9" />
              <span style={{ fontSize: 14, color: "#cfd8dc", flex: 1 }}>{m.label}</span>
              <ChevronRight size={15} color="#546e7a" />
            </button>
          ))}
          <button
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 4px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              textAlign: "left",
              marginTop: 8,
            }}
          >
            <LogOut size={17} color="#ff6d6d" />
            <span style={{ fontSize: 14, color: "#ff6d6d" }}>Log Out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProfileSignupScreen() {
  const [phase, setPhase] = useState("signup"); // signup | profile
  const [userData, setUserData] = useState({});

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
        input::placeholder { color: #546e7a; }
      `}</style>

      {phase === "signup" ? (
        <SignUpFlow
          onComplete={(form) => {
            setUserData(form);
            setPhase("profile");
          }}
        />
      ) : (
        <ProfileScreen user={userData} onEditAgain={() => setPhase("signup")} />
      )}
    </div>
  );
}
