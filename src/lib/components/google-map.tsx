type GoogleMapProps = {
  className?: string
}

export default function GoogleMap({ className = "" }: GoogleMapProps) {
  return (
    <iframe
      title="Map to Maria's Mediterranean"
      src="https://www.google.com/maps?q=38-11%20Bell%20Blvd%2C%20Bayside%2C%20NY%2011361&output=embed"
      className={`h-full min-h-[280px] w-full border-0 ${className}`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
