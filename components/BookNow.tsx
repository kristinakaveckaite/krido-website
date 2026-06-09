import { site } from "@/lib/content";

// Single Book Now control used across the site. Opens Vagaro in a new tab.
// If you later embed Vagaro's in-page widget, swap the href logic here only.
export default function BookNow({
  className = "",
  label = "Book Now",
}: {
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={site.bookingUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {label}
    </a>
  );
}
