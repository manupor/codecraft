"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/50683442522"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 16px rgba(37,211,102,0.45)",
        transition: "transform 0.2s, box-shadow 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 24px rgba(37,211,102,0.65)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 16px rgba(37,211,102,0.45)";
      }}
    >
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 2C8.268 2 2 8.268 2 16c0 2.478.668 4.799 1.832 6.794L2 30l7.41-1.81A13.94 13.94 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.54 11.54 0 01-5.88-1.608l-.42-.252-4.398 1.074 1.122-4.27-.276-.44A11.56 11.56 0 014.4 16C4.4 9.594 9.594 4.4 16 4.4S27.6 9.594 27.6 16 22.406 27.6 16 27.6zm6.36-8.664c-.348-.174-2.058-1.014-2.376-1.128-.318-.114-.55-.174-.782.174-.232.348-.9 1.128-1.104 1.362-.204.234-.406.262-.754.088-.348-.174-1.47-.542-2.8-1.726-1.034-.922-1.732-2.062-1.936-2.41-.204-.348-.022-.536.154-.71.158-.156.348-.406.522-.61.174-.202.232-.348.348-.58.116-.232.058-.436-.028-.61-.086-.174-.782-1.886-1.072-2.582-.282-.678-.568-.586-.782-.596l-.666-.012c-.232 0-.61.086-.928.436-.318.348-1.216 1.188-1.216 2.898 0 1.71 1.244 3.362 1.418 3.594.174.232 2.448 3.736 5.932 5.24.83.358 1.478.572 1.982.732.832.264 1.59.226 2.188.138.668-.1 2.058-.842 2.348-1.656.29-.814.29-1.512.204-1.656-.086-.144-.318-.232-.666-.406z"
          fill="white"
        />
      </svg>
    </a>
  );
}
