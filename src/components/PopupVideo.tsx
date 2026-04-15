export default function PopupVideo() {
    return (
        <div id="videoPopup" className="video-popup-iframe">
            <div className="video-content">
                <span className="close-btn" id="videoCloseButton"><i className="ti ti-x"></i></span>
                <div className="ratio ratio-16x9">
                    <iframe id="videoFrame" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    )
}