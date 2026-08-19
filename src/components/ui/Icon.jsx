const paths = {
  male: <><circle cx="10" cy="14" r="5"/><path d="m13.6 10.4 6.4-6.4M15 4h5v5"/></>,
  bladder: <><path d="M8.2 5.5c.3 2.2.2 3.4-.7 4.8-1 1.6-1.2 3.6-.3 5.3 1 2 2.8 3.1 4.8 3.1s3.8-1.1 4.8-3.1c.9-1.7.7-3.7-.3-5.3-.9-1.4-1-2.6-.7-4.8"/><path d="M6 4.5c1.3 1 2.7 1.5 4.2 1.5h3.6c1.5 0 2.9-.5 4.2-1.5M12 18.7V22"/></>,
  intimate: <><path d="M9 5.5a3 3 0 0 1 6 0V9"/><path d="M8 9h8v7a4 4 0 0 1-8 0V9Z"/><path d="M10 13h4"/></>,
  vasectomy: <><circle cx="8" cy="18" r="3"/><circle cx="16" cy="18" r="3"/><path d="m10 16 6-12M14 16 8 4M18 6l2-2M19 9h3"/></>,
  info: <><circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7h.01"/></>,
  shield: <><path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z"/><path d="m9.5 12 1.7 1.7 3.5-4"/></>,
  lock: <><rect x="5" y="10" width="14" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
  pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
  stethoscope: <><path d="M6 3v5a5 5 0 0 0 10 0V3"/><path d="M4 3h4M14 3h4"/><path d="M11 13v2a5 5 0 0 0 10 0v-1"/><circle cx="21" cy="12" r="2"/></>,
  whatsapp: <><path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.6Z"/><path d="M8.4 7.8c.2-.4.4-.4.7-.4h.4c.2 0 .4.1.5.4l.8 1.8c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.5 0 .4-.2 1.2-.8 1.8-.6.6-1.5.9-2.4.7-1.5-.3-3.2-1.2-4.7-2.7-1.2-1.2-2.1-2.7-2.4-4-.2-.9.1-1.7.6-2.2.4-.4.9-.7 1.4-.7Z"/></>,
  moon: <path d="M19 15.5A7.5 7.5 0 0 1 8.5 5a7.5 7.5 0 1 0 10.5 10.5Z"/>,
  droplet: <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z"/>,
  target: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M15 9 21 3M18 3h3v3"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>,
  heart: <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z"/>,
  person: <><circle cx="12" cy="7" r="4"/><path d="M5 21a7 7 0 0 1 14 0"/></>,
  ribbon: <path d="M12 21c-3.7-3-6-6.8-6-10.5A6 6 0 0 1 12 4a6 6 0 0 1 6 6.5c0 3.7-2.3 7.5-6 10.5Zm0-17v17"/>,
  robot: <><rect x="7" y="8" width="10" height="8" rx="2"/><path d="M12 5v3M9 12h.01M15 12h.01M5 10H3v4h2M19 10h2v4h-2M9 18v2M15 18v2"/></>,
  building: <><path d="M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1M2 21h20"/></>,
  phone: <><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L9.1 10.6a16 16 0 0 0 4.3 4.3l1.2-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z"/></>,
  clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/></>,
  message: <><path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z"/><path d="M8 9h8M8 13h5"/></>,
  chair: <><path d="M7 12V6a3 3 0 0 1 6 0v6"/><path d="M5 12h12v5H5zM7 17v4M15 17v4M17 14h2v7"/></>,
  monitor: <><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/><path d="m7 11 3-3 2 2 3-4 2 2"/></>,
  star: <path d="m12 2 3 6 6.5 1-4.7 4.6 1.1 6.4-5.9-3.1L6.1 20l1.1-6.4L2.5 9 9 8l3-6Z"/>,
  menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
  close: <><path d="m6 6 12 12M18 6 6 18"/></>,
}

export default function Icon({ name, size = 24, strokeWidth = 1.7, className = '' }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] ?? paths.shield}
    </svg>
  )
}
