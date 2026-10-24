import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { db, auth, googleProvider } from '../firebase';

// ── Admin email — only this Google account can access the panel
const ADMIN_EMAIL = 'sonamkorade25@gmail.com';

export default function Admin() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authLoading, setAuthLoading] = useState(true);

  // Watch auth state
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  // Subscribe to Firestore messages when signed in as admin
  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;

    setLoading(true);
    const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return unsub;
  }, [user]);

  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSignOut = () => signOut(auth);

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;
    await deleteDoc(doc(db, 'messages', id));
  };

  const fmt = (ts) =>
    ts?.toDate
      ? ts.toDate().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })
      : '—';

  // ── Loading auth
  if (authLoading) {
    return (
      <div className="admin-center">
        <div className="spinner-large" />
      </div>
    );
  }

  // ── Not signed in
  if (!user) {
    return (
      <div className="admin-center">
        <motion.div
          className="admin-login-card"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="admin-lock-icon">🔐</div>
          <h1 className="admin-title">Admin Panel</h1>
          <p className="admin-sub">Sign in with your Google account to view messages.</p>
          <button className="admin-google-btn" onClick={handleSignIn} id="admin-google-signin">
            <svg viewBox="0 0 24 24" width="20" height="20">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Sign in with Google
          </button>
        </motion.div>
      </div>
    );
  }

  // ── Signed in but wrong account
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div className="admin-center">
        <div className="admin-login-card">
          <div className="admin-lock-icon">⛔</div>
          <h1 className="admin-title">Access Denied</h1>
          <p className="admin-sub">
            This panel is only accessible to the portfolio owner.<br />
            Signed in as <strong>{user.email}</strong>.
          </p>
          <button className="admin-google-btn" onClick={handleSignOut}>
            Sign out
          </button>
        </div>
      </div>
    );
  }

  // ── Admin view
  return (
    <div className="admin-panel">
      {/* Header */}
      <div className="admin-header">
        <div>
          <h1 className="admin-title">📬 Inbox</h1>
          <p className="admin-sub">{messages.length} message{messages.length !== 1 ? 's' : ''} received</p>
        </div>
        <div className="admin-user-row">
          <img
            src={user.photoURL}
            alt={user.displayName}
            className="admin-avatar"
          />
          <span className="admin-username">{user.displayName}</span>
          <button className="admin-signout-btn" onClick={handleSignOut} id="admin-signout">
            Sign out
          </button>
        </div>
      </div>

      {/* Message list */}
      {loading ? (
        <div className="admin-center" style={{ marginTop: '60px' }}>
          <div className="spinner-large" />
        </div>
      ) : messages.length === 0 ? (
        <div className="admin-empty">
          <span>📭</span>
          <p>No messages yet. Share your portfolio to get started!</p>
        </div>
      ) : (
        <AnimatePresence>
          <div className="admin-messages">
            {messages.map((msg, i) => (
              <motion.div
                key={msg.id}
                className="admin-msg-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ delay: i * 0.05, duration: 0.3 }}
              >
                <div className="msg-meta">
                  <span className="msg-name">{msg.name}</span>
                  <span className="msg-email">
                    <a href={`mailto:${msg.email}`}>{msg.email}</a>
                  </span>
                  <span className="msg-date">{fmt(msg.createdAt)}</span>
                </div>
                <p className="msg-body">{msg.message}</p>
                <div className="msg-actions">
                  <a
                    href={`mailto:${msg.email}?subject=Re: Your message&body=Hi ${msg.name},`}
                    className="msg-reply-btn"
                  >
                    Reply
                  </a>
                  <button
                    className="msg-delete-btn"
                    onClick={() => handleDelete(msg.id)}
                  >
                    Delete
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      )}
    </div>
  );
}
