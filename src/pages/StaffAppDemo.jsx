import { useState } from 'react'
import { FONTS } from '../data/tokens'

const C = {
  bg:       '#040f11',
  surface:  '#071820',
  card:     '#0a2029',
  card2:    '#0d2535',
  border:   'rgba(74,248,212,0.08)',
  neon:     '#4af8d4',
  neonSoft: 'rgba(74,248,212,0.10)',
  neonMid:  'rgba(74,248,212,0.22)',
  text:     '#e8f6f5',
  muted:    '#7ab8b0',
  faint:    'rgba(232,246,245,0.40)',
  teal:     '#004F59',
  red:      '#f87171',
  yellow:   '#fbbf24',
  green:    '#34d399',
}

const TODAY = 'Wednesday, June 10'
const SHIFT = 'Morning · 7:00 AM – 2:00 PM'
const VOLUNTEER = 'Sarah M.'

const BRIEFING = {
  date: TODAY,
  shift: SHIFT,
  volunteer: VOLUNTEER,
  arrivals: [
    { room: 'Room 4', name: 'Emma & Tom', time: '14:00', nights: 3 },
    { room: 'Dorm B', name: 'Lucas R.', time: '16:30', nights: 7 },
  ],
  checkouts: [
    { room: 'Room 2', name: 'Priya K.', time: 'By 11:00' },
    { room: 'Room 6', name: 'Anders & Mia', time: 'By 10:30' },
  ],
  notes: [
    'Breakfast served 8:00–10:00 in the common room.',
    'Room 3 shower issue — Felix is handling it this morning.',
    'Highlight the sunset hike at Bealach na Bà — guests have been loving it.',
  ],
}

const INITIAL_TASKS = [
  { id: 1, priority: 'high',   room: 'Room 3',  title: 'Shower not draining properly', reported: '2 days ago', assignee: 'Felix', status: 'in_progress' },
  { id: 2, priority: 'medium', room: 'Room 6',  title: 'Extra towels requested', reported: 'Today 07:15', assignee: null, status: 'open' },
  { id: 3, priority: 'low',    room: 'Dorm A',  title: 'WiFi password question', reported: 'Today 06:55', assignee: null, status: 'open' },
  { id: 4, priority: 'low',    room: 'Common',  title: 'Restock coffee station', reported: 'Today 07:40', assignee: null, status: 'open' },
]

const CHECKLIST_ITEMS = [
  { id: 1, label: 'Walk through common areas — tidy and reset from overnight' },
  { id: 2, label: 'Set up breakfast (8:00 AM) — check supplies' },
  { id: 3, label: 'Check task list and assign open items' },
  { id: 4, label: "Prep welcome packs for today's arrivals (Room 4, Dorm B)" },
  { id: 5, label: 'Confirm Room 2 and Room 6 are vacated by checkout time' },
  { id: 6, label: 'Log any guest requests or issues in the task list' },
]

const TEAM = [
  { name: 'Jorge', role: 'Manager / Founder', phone: '+44 7700 123 456', available: true },
  { name: 'Felix', role: 'Maintenance & Ops', phone: '+44 7700 234 567', available: true },
  { name: 'Amara', role: 'Volunteer — Mornings', phone: null, available: false },
  { name: 'Tom',   role: 'Volunteer — Evenings', phone: null, available: false },
]

const Icon = {
  briefing: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>),
  tasks:    (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>),
  checklist:(<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
  team:     (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
}

const PRIORITY_COLOR = { high: '#f87171', medium: '#fbbf24', low: '#7ab8b0' }
const PRIORITY_LABEL = { high: 'Urgent', medium: 'Normal', low: 'Low' }

function BriefingTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: 18 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.neon, opacity: 0.7, marginBottom: 6 }}>Your shift</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: C.text, marginBottom: 4 }}>{BRIEFING.shift}</div>
        <div style={{ fontSize: 13, color: C.muted }}>{BRIEFING.date}</div>
      </div>
      <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px 12px', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.neon, opacity: 0.65 }}>Arrivals today · {BRIEFING.arrivals.length}</span>
        </div>
        {BRIEFING.arrivals.map((a, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', borderBottom: i < BRIEFING.arrivals.length - 1 ? `1px solid ${C.border}` : 'none' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{a.name}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{a.room} · {a.nights} nights</div>
            </div>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.neon, backgroundColor: C.neonSoft, border: `1px solid ${C.neonMid}`, padding: '4px 10px', borderRadius: 20 }}>{a.time}</div>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px 12px', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted }}>Check-outs today · {BRIEFING.checkouts.length}</span>
        </div>
        {BRIEFING.checkouts.map((c, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 18px', borderBottom: i < BRIEFING.checkouts.length - 1 ? `1px solid ${C.border}` : 'none' }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, color: C.text }}>{c.name}</div>
              <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{c.room}</div>
            </div>
            <div style={{ fontSize: 12, color: C.faint }}>{c.time}</div>
          </div>
        ))}
      </div>
      <div style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
        <div style={{ padding: '14px 18px 12px', borderBottom: `1px solid ${C.border}` }}>
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted }}>Notes for this shift</span>
        </div>
        <div style={{ padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {BRIEFING.notes.map((n, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
              <span style={{ color: C.neon, fontSize: 16, lineHeight: 1, flexShrink: 0, marginTop: 1 }}>·</span>
              <span style={{ fontSize: 13, color: C.muted, lineHeight: 1.55 }}>{n}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function TasksTab() {
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const toggle = (id) => setTasks(ts => ts.map(t => t.id === id ? { ...t, status: t.status === 'done' ? 'open' : 'done' } : t))
  const open = tasks.filter(t => t.status !== 'done')
  const done = tasks.filter(t => t.status === 'done')
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 12, fontWeight: 600, color: C.muted, marginBottom: 4 }}>{open.length} open · {done.length} resolved</div>
      {tasks.map(task => (
        <div key={task.id} onClick={() => toggle(task.id)} style={{ backgroundColor: task.status === 'done' ? 'rgba(10,32,41,0.5)' : C.card, border: `1px solid ${task.status === 'done' ? 'rgba(74,248,212,0.04)' : C.border}`, borderLeft: `3px solid ${task.status === 'done' ? 'rgba(52,211,153,0.3)' : PRIORITY_COLOR[task.priority]}`, borderRadius: 10, padding: '14px 16px', cursor: 'pointer', opacity: task.status === 'done' ? 0.55 : 1, transition: 'opacity 0.2s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: task.status === 'done' ? C.muted : C.text, marginBottom: 4, textDecoration: task.status === 'done' ? 'line-through' : 'none' }}>{task.title}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: 11, color: C.muted }}>{task.room}</span>
                <span style={{ fontSize: 11, color: C.faint }}>·</span>
                <span style={{ fontSize: 11, color: C.faint }}>{task.reported}</span>
                {task.assignee && (<><span style={{ fontSize: 11, color: C.faint }}>·</span><span style={{ fontSize: 11, color: C.neon, opacity: 0.7 }}>{task.assignee}</span></>)}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6, flexShrink: 0 }}>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: task.status === 'done' ? '#34d399' : PRIORITY_COLOR[task.priority] }}>{task.status === 'done' ? 'Done' : PRIORITY_LABEL[task.priority]}</span>
              <div style={{ width: 22, height: 22, borderRadius: 6, border: `1.5px solid ${task.status === 'done' ? '#34d399' : 'rgba(74,248,212,0.25)'}`, backgroundColor: task.status === 'done' ? 'rgba(52,211,153,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {task.status === 'done' && (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>)}
              </div>
            </div>
          </div>
        </div>
      ))}
      <p style={{ fontSize: 11, color: C.faint, textAlign: 'center', marginTop: 8 }}>Tap a task to mark it done</p>
    </div>
  )
}

function ChecklistTab() {
  const [checked, setChecked] = useState(new Set())
  const toggle = (id) => setChecked(prev => { const next = new Set(prev); next.has(id) ? next.delete(id) : next.add(id); return next })
  const count = checked.size
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: C.muted }}>Morning shift checklist</span>
        <span style={{ fontSize: 12, color: count === CHECKLIST_ITEMS.length ? '#34d399' : C.muted }}>{count}/{CHECKLIST_ITEMS.length} done</span>
      </div>
      <div style={{ height: 4, backgroundColor: 'rgba(74,248,212,0.08)', borderRadius: 4, marginBottom: 8, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${(count / CHECKLIST_ITEMS.length) * 100}%`, backgroundColor: count === CHECKLIST_ITEMS.length ? '#34d399' : C.neon, borderRadius: 4, transition: 'width 0.3s ease' }} />
      </div>
      {CHECKLIST_ITEMS.map(item => {
        const done = checked.has(item.id)
        return (
          <div key={item.id} onClick={() => toggle(item.id)} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', backgroundColor: done ? 'rgba(10,32,41,0.5)' : C.card, border: `1px solid ${done ? 'rgba(52,211,153,0.15)' : C.border}`, borderRadius: 10, padding: '14px 16px', cursor: 'pointer', opacity: done ? 0.6 : 1, transition: 'all 0.2s' }}>
            <div style={{ width: 22, height: 22, borderRadius: 6, flexShrink: 0, marginTop: 1, border: `1.5px solid ${done ? '#34d399' : 'rgba(74,248,212,0.25)'}`, backgroundColor: done ? 'rgba(52,211,153,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}>
              {done && (<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>)}
            </div>
            <span style={{ fontSize: 14, color: done ? C.muted : C.text, lineHeight: 1.45, textDecoration: done ? 'line-through' : 'none' }}>{item.label}</span>
          </div>
        )
      })}
    </div>
  )
}

function TeamTab() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 12, color: C.muted, marginBottom: 4 }}>On shift or reachable today</div>
      {TEAM.map((member, i) => (
        <div key={i} style={{ backgroundColor: C.card, border: `1px solid ${C.border}`, borderRadius: 12, padding: '16px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 40, height: 40, borderRadius: '50%', flexShrink: 0, backgroundColor: C.neonSoft, border: `1.5px solid ${C.neonMid}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15, fontWeight: 700, color: C.neon }}>{member.name[0]}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{member.name}</div>
            <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{member.role}</div>
          </div>
          {member.phone ? (
            <a href={`tel:${member.phone.replace(/\s/g, '')}`} style={{ fontSize: 12, fontWeight: 600, color: C.neon, backgroundColor: C.neonSoft, border: `1px solid ${C.neonMid}`, padding: '6px 12px', borderRadius: 20, textDecoration: 'none', whiteSpace: 'nowrap' }}>Call</a>
          ) : (
            <span style={{ fontSize: 11, color: C.faint }}>No phone</span>
          )}
        </div>
      ))}
    </div>
  )
}

const TABS = [
  { id: 'briefing',  label: 'Briefing',  icon: Icon.briefing  },
  { id: 'tasks',     label: 'Tasks',     icon: Icon.tasks     },
  { id: 'checklist', label: 'Checklist', icon: Icon.checklist },
  { id: 'team',      label: 'Team',      icon: Icon.team      },
]

export default function StaffAppDemo() {
  const [tab, setTab] = useState('briefing')
  const content = { briefing: <BriefingTab />, tasks: <TasksTab />, checklist: <ChecklistTab />, team: <TeamTab /> }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: C.bg, display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: FONTS.sans }}>
      <div style={{ width: '100%', maxWidth: 420, minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>

        <div style={{ backgroundColor: 'rgba(74,248,212,0.08)', borderBottom: '1px solid rgba(74,248,212,0.12)', padding: '8px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', backgroundColor: C.neon, color: C.bg, padding: '2px 8px', borderRadius: 20 }}>Demo</span>
          <span style={{ fontSize: 12, color: C.muted }}>Sample data — resets on refresh</span>
        </div>

        <div style={{ padding: '16px 20px 14px', borderBottom: `1px solid ${C.border}`, backgroundColor: C.surface, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs><linearGradient id="demoLogoGrad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop offset="0%" stopColor="#004F59" /><stop offset="100%" stopColor="#00BFB3" /></linearGradient></defs>
                <rect width="40" height="40" rx="9" fill="url(#demoLogoGrad)" />
                <rect x="7"  y="7"  width="11" height="11" rx="2.5" fill="white" fillOpacity="0.9" />
                <rect x="22" y="7"  width="11" height="11" rx="2.5" fill="white" fillOpacity="0.55" />
                <rect x="7"  y="22" width="11" height="11" rx="2.5" fill="white" fillOpacity="0.35" />
                <rect x="22" y="22" width="11" height="11" rx="2.5" fill="white" fillOpacity="0.7" />
              </svg>
              <span style={{ fontSize: 14, fontWeight: 700, color: C.text, letterSpacing: '-0.01em' }}>hostack</span>
            </div>
            <div style={{ fontSize: 11, color: C.muted }}>Torridonia · Scottish Highlands</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: C.neon }}>{VOLUNTEER}</div>
            <div style={{ fontSize: 11, color: C.muted }}>Staff App</div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '20px 16px 100px', overflowY: 'auto' }}>{content[tab]}</div>

        <div style={{ position: 'fixed', bottom: 0, width: '100%', maxWidth: 420, backgroundColor: C.surface, borderTop: `1px solid ${C.border}`, display: 'flex', paddingBottom: 'env(safe-area-inset-bottom, 8px)' }}>
          {TABS.map(t => {
            const active = tab === t.id
            return (
              <button key={t.id} onClick={() => setTab(t.id)} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, padding: '12px 0 10px', background: 'none', border: 'none', cursor: 'pointer', color: active ? C.neon : C.faint, fontFamily: FONTS.sans, transition: 'color 0.15s', borderTop: active ? `2px solid ${C.neon}` : '2px solid transparent' }}>
                {t.icon}
                <span style={{ fontSize: 10, fontWeight: active ? 600 : 400, letterSpacing: '0.04em' }}>{t.label}</span>
              </button>
            )
          })}
        </div>

      </div>

      <div style={{ position: 'fixed', top: 44, left: 'max(16px, calc(50% - 194px))', zIndex: 100 }}>
        <a href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: C.muted, backgroundColor: C.card, border: `1px solid ${C.border}`, padding: '6px 12px', borderRadius: 20, textDecoration: 'none', letterSpacing: '0.04em' }}>← hostack.co</a>
      </div>
    </div>
  )
}
