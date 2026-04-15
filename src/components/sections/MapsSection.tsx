export default function MapsSection() {
    return (
        <div className="maps-section">
            <iframe
                src="https://www.google.com/maps?q=Kilimani,+Nairobi&output=embed"
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
            ></iframe>
        </div>
    )
}