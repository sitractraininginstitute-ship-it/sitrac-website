"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactInfoSection() {
    const [name,    setName]    = useState("");
    const [email,   setEmail]   = useState("");
    const [service, setService] = useState("");
    const [message, setMessage] = useState("");

    const [status,       setStatus]       = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // ── Client-side validation ───────────────────────────────────────────
        if (!name.trim() || !email.trim() || !message.trim()) {
            setStatus("error");
            setErrorMessage("Please fill in your name, email, and message.");
            return;
        }

        setStatus("submitting");
        setErrorMessage("");

        try {
            const res = await fetch("/api/contact", {
                method:  "POST",
                headers: { "Content-Type": "application/json" },
                body:    JSON.stringify({
                    name:    name.trim(),
                    email:   email.trim(),
                    service: service.trim() || undefined,
                    message: message.trim(),
                }),
            });

            const data = await res.json();

            if (res.ok) {
                // Clear fields and show success
                setName("");
                setEmail("");
                setService("");
                setMessage("");
                setStatus("success");
            } else {
                // Show API-returned validation message
                setStatus("error");
                setErrorMessage(data?.error ?? "Something went wrong. Please try again.");
            }
        } catch {
            setStatus("error");
            setErrorMessage("Network error — please check your connection and try again.");
        }
    }

    return (
        <section className="contact-info-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="contact-info-wrapper">
                    {/*-- Contact Info Card --*/}
                    <div className="contact-info-card">
                        <div className="section-heading">
                            <h2 className="mb-3">Partner With SITRAC for Institutional Transformation</h2>
                            <p className="mb-5">The Skills Innovis Training and Capacity Building Institute (SITRAC)
                            works with governments, county assemblies, parastatals, NGOs, and private sector organizations
                            to deliver impactful training, consultancy, and capacity-building solutions across Africa.
                            We focus on strengthening governance systems, leadership capacity, and institutional performance
                            through practical, evidence-based approaches.</p>
                        </div>

                        <div className="d-flex flex-column gap-5">
                            {/*-- Contact Card --*/}
                            <div className="contact-sm-card">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                         fill="none">
                                        <g clipPath="url(#clip0_1_7202)">
                                            <path
                                                d="M47.8045 20.4712L39.7706 10.0349C39.4732 9.64891 38.9308 9.55369 38.5196 9.81517L33.3326 13.114H26.5676C26.48 13.114 26.3929 13.1327 26.3087 13.1572L21.0634 14.6671L15.6208 13.1784L10.3323 9.81517C9.92803 9.55809 9.39556 9.64525 9.0949 10.018L0.208795 21.0249C-0.110541 21.4204 -0.0578071 21.9979 0.327447 22.3293L4.98492 26.3375L9.16339 31.9684C7.94134 33.2702 7.96514 35.3236 9.23663 36.5954C9.80023 37.1587 10.5169 37.4769 11.2541 37.5509C11.2284 37.7179 11.2153 37.8874 11.2153 38.0596C11.2153 38.948 11.5613 39.7833 12.1894 40.4114C12.8178 41.0398 13.6531 41.3859 14.5416 41.3859C14.5536 41.3859 14.5654 41.3851 14.5771 41.3848C14.5767 41.4075 14.5756 41.4298 14.5756 41.4525C14.5756 42.3409 14.9217 43.1763 15.5497 43.8047C16.1782 44.4327 17.0135 44.7788 17.9019 44.7788C18.0773 44.7788 18.2509 44.7645 18.4212 44.7381C18.4933 45.4779 18.8123 46.1979 19.3777 46.7633C20.0259 47.4119 20.8777 47.736 21.7295 47.736C22.5814 47.736 23.4332 47.4119 24.0817 46.7633L24.5904 46.2546L24.8039 46.4267C25.447 47.0497 26.2819 47.361 27.1169 47.361C27.9687 47.361 28.8205 47.0369 29.4687 46.3883C30.1304 45.7266 30.4545 44.8531 30.441 43.9841C31.3096 43.9973 32.1834 43.6736 32.8452 43.0122C33.5062 42.3508 33.8303 41.4781 33.8174 40.6095C34.7224 40.6238 35.5807 40.2762 36.2213 39.6357C36.883 38.974 37.2071 38.1006 37.1935 37.2316C38.0629 37.2447 38.936 36.921 39.5977 36.2593C40.7271 35.1299 40.8725 33.3841 40.035 32.0954L43.0859 25.7058L47.6727 21.7588C48.0517 21.4325 48.1096 20.867 47.8045 20.4712ZM10.0313 11.8546L13.834 14.2727L5.5617 24.3508L2.24676 21.4977L10.0313 11.8546ZM10.5678 33.2223L11.7155 32.0746C11.7503 32.0398 11.7869 32.0068 11.8243 31.9761C12.0488 31.793 12.3205 31.6838 12.6083 31.6578C12.6164 31.6571 12.6248 31.6571 12.6329 31.6567C12.6739 31.6534 12.7149 31.6512 12.7563 31.6516C13.1496 31.6571 13.5151 31.8179 13.7861 32.1039C14.3178 32.666 14.2892 33.5845 13.7223 34.1514L12.6094 35.2643C12.0466 35.8271 11.1307 35.8271 10.5678 35.2643C10.0049 34.701 10.0049 33.7851 10.5678 33.2223ZM13.5206 39.0802C13.2477 38.8077 13.0976 38.4452 13.0976 38.0596C13.0976 37.6739 13.2477 37.3114 13.5206 37.0386L15.746 34.8131C16.1723 34.3868 16.8425 34.27 17.3874 34.5296C17.9492 34.7973 18.2652 35.4071 18.1828 36.0205C18.1389 36.3479 17.9865 36.6562 17.7529 36.8902L15.5626 39.0802C15.2897 39.353 14.9272 39.5032 14.5416 39.5032C14.1559 39.5032 13.7934 39.353 13.5206 39.0802ZM16.8809 42.4731C16.6081 42.2007 16.4579 41.8381 16.4579 41.4525C16.4579 41.0669 16.6081 40.7043 16.8809 40.4315L19.106 38.206C19.5619 37.7505 20.2933 37.6523 20.8514 37.9772C21.3611 38.2738 21.6281 38.8561 21.5406 39.4361C21.4926 39.7551 21.341 40.055 21.1129 40.2832L18.9229 42.4731C18.6501 42.746 18.2875 42.8961 17.9019 42.8961C17.5163 42.8961 17.1537 42.746 16.8809 42.4731ZM20.7086 45.4321C20.1457 44.8693 20.1457 43.9534 20.7086 43.3905L21.8563 42.2428C21.891 42.208 21.9273 42.1754 21.9647 42.1446C21.9658 42.1439 21.9665 42.1432 21.9672 42.1424C22.154 41.9908 22.3733 41.8894 22.6074 41.8451C22.6129 41.8443 22.6183 41.8436 22.6238 41.8429C22.6641 41.8356 22.7051 41.8297 22.7462 41.826C22.7626 41.8246 22.7791 41.8246 22.796 41.8235C22.8296 41.8216 22.863 41.8194 22.897 41.8198C23.29 41.8253 23.6558 41.9857 23.9268 42.2721C23.9601 42.3072 23.9913 42.3439 24.0198 42.3816C24.4527 42.9474 24.3945 43.7878 23.8572 44.3254L22.7502 45.4325C22.1873 45.9953 21.2714 45.995 20.7086 45.4321ZM38.2665 34.9281C37.7037 35.4913 36.7878 35.491 36.2249 34.9281C36.2044 34.9076 36.1828 34.8885 36.1608 34.8706L30.1088 28.7549C29.743 28.3854 29.1472 28.3824 28.7776 28.7483C28.4081 29.1138 28.4052 29.7096 28.7707 30.0791L34.8882 36.2604C34.889 36.2611 34.8897 36.2618 34.8904 36.2626C35.4533 36.8254 35.4533 37.7417 34.8904 38.3046C34.6176 38.5774 34.2551 38.7275 33.8694 38.7275C33.4835 38.7275 33.1209 38.5774 32.8484 38.3046L28.756 34.1697C28.3906 33.8002 27.7947 33.7972 27.4252 34.1627C27.0557 34.5286 27.0528 35.1244 27.4183 35.4939L31.4481 39.5654C31.4686 39.5911 31.4905 39.6156 31.514 39.639C32.0768 40.2019 32.0768 41.1182 31.514 41.681C30.9507 42.2439 30.0345 42.2435 29.4716 41.6807L27.2381 39.4237C26.8723 39.0542 26.2764 39.0509 25.9069 39.4167C25.5374 39.7822 25.5345 40.378 25.9 40.7475L28.0712 42.9412C28.0917 42.9668 28.1137 42.9917 28.1375 43.0151C28.7004 43.578 28.7004 44.4943 28.1375 45.0571C27.5746 45.6203 26.6588 45.62 26.0959 45.0571C26.0311 44.9923 25.9549 44.9425 25.8824 44.8868C25.8209 44.84 25.8047 44.8074 25.8355 44.7327C25.8666 44.6568 25.9131 44.5884 25.9443 44.5122C25.9787 44.4272 26.0065 44.3397 26.0336 44.2518C26.1779 43.7867 26.2204 43.2865 26.1556 42.8038C26.0311 41.8777 25.5217 41.042 24.7497 40.5132C24.3326 40.2279 23.8499 40.0408 23.3497 39.9704C23.5921 38.9011 23.301 37.7417 22.5436 36.9415C21.9203 36.2831 21.0784 35.9136 20.1728 35.9011C20.1398 35.9007 20.1069 35.9007 20.0735 35.9011C20.0937 35.0369 19.7795 34.1781 19.1837 33.5486C18.56 32.8901 17.7181 32.5206 16.8128 32.5082C16.5436 32.5045 16.2719 32.5331 16.0097 32.5935C15.8976 31.8138 15.5047 31.0924 14.9096 30.5764C14.3182 30.0644 13.5744 29.7803 12.7823 29.7693C11.9484 29.7572 11.1292 30.0648 10.5099 30.624L6.87164 25.7215L15.5757 15.1175L18.3498 15.8763L14.7269 22.2693C14.2889 23.0423 14.1783 23.9396 14.4152 24.7958C14.6522 25.6523 15.2081 26.365 15.9811 26.803C16.0295 26.8304 16.0782 26.8564 16.1276 26.8813C16.1313 26.8832 16.1349 26.885 16.139 26.8868C16.269 26.9516 16.4026 27.0073 16.5381 27.0542C17.1691 27.2728 17.8506 27.2966 18.508 27.115C19.3642 26.878 20.0768 26.3218 20.5148 25.5491L22.8692 21.3944L27.0729 21.6925L38.2669 32.8861C38.8294 33.4493 38.8294 34.3652 38.2665 34.9281ZM38.6566 30.6138L28.1555 20.113C28.1357 20.0929 28.1148 20.0738 28.0932 20.0559C27.942 19.9299 27.7545 19.8537 27.5567 19.8398L22.4096 19.4747C22.0536 19.4502 21.6999 19.6395 21.5241 19.9497L18.8771 24.6211C18.6871 24.9565 18.3776 25.1979 18.0059 25.3008C17.6346 25.4037 17.2449 25.3553 16.9091 25.1653C16.5737 24.9752 16.3323 24.6658 16.2294 24.2941C16.1265 23.9223 16.1745 23.5327 16.3649 23.1972L19.8985 16.961L21.3304 16.5491C21.3399 16.5461 21.3491 16.5425 21.3586 16.5395L26.7027 14.9963H33.1597L41.2208 25.2436L38.6566 30.6138ZM42.4538 23.7663L34.9992 14.2848L38.8038 11.8652L45.7695 20.9132L42.4538 23.7663Z"
                                                fill="white"/>
                                            <path
                                                d="M29.0779 11.3467C29.3188 11.3467 29.5598 11.2548 29.7437 11.0709L36.1729 4.64172C36.5405 4.27405 36.5405 3.67822 36.1729 3.31055C35.8052 2.94287 35.2094 2.94287 34.8417 3.31055L28.4125 9.73975C28.0448 10.1074 28.0448 10.7032 28.4125 11.0709C28.5963 11.2548 28.8373 11.3467 29.0779 11.3467Z"
                                                fill="white"/>
                                            <path
                                                d="M18.2518 11.0708C18.4357 11.2546 18.6766 11.3466 18.9176 11.3466C19.1582 11.3466 19.3992 11.2546 19.583 11.0708C19.9507 10.7031 19.9507 10.1073 19.583 9.73963L13.1538 3.31042C12.7861 2.94275 12.1903 2.94275 11.8226 3.31042C11.455 3.6781 11.455 4.27393 11.8226 4.6416L18.2518 11.0708Z"
                                                fill="white"/>
                                            <path
                                                d="M23.9998 11.3466C24.5194 11.3466 24.9409 10.925 24.9409 10.4054V5.08472C24.9409 4.56506 24.5194 4.14355 23.9998 4.14355C23.4801 4.14355 23.0586 4.56506 23.0586 5.08472V10.4054C23.0586 10.925 23.4801 11.3466 23.9998 11.3466Z"
                                                fill="white"/>
                                            <path
                                                d="M23.1326 1.67358C23.282 2.03576 23.6545 2.27343 24.0474 2.25292C24.4356 2.23278 24.7765 1.97057 24.8967 1.60107C25.0171 1.22863 24.886 0.804191 24.574 0.566886C24.2558 0.324455 23.8119 0.310905 23.4791 0.530998C23.1077 0.776359 22.9638 1.26488 23.1326 1.67358Z"
                                                fill="white"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_7202">
                                                <rect width="48" height="48" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h5>Institutional Capacity Strengthening</h5>
                                    <p className="mb-0">We enhance governance, leadership, and operational efficiency through practical, results-oriented training programs designed to improve institutional performance and public service delivery.
                                    </p>
                                </div>
                            </div>

                            {/*-- Contact Card --*/}
                            <div className="contact-sm-card">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"
                                         fill="none">
                                        <g clipPath="url(#clip0_1_7213)">
                                            <mask id="mask0_1_7213" style={{maskType:'luminance'}}
                                                  maskUnits="userSpaceOnUse" x="0" y="0"
                                                  width="48" height="48">
                                                <path d="M0 3.8147e-06H48V48H0V3.8147e-06Z" fill="white"/>
                                            </mask>
                                            <g mask="url(#mask0_1_7213)">
                                                <path
                                                    d="M28.1942 5.14404C36.8436 7.05935 43.3125 14.7741 43.3125 23.9999C43.3125 34.6658 34.666 43.3124 24 43.3124C13.3341 43.3124 4.6875 34.6658 4.6875 23.9999C4.6875 14.7742 11.1564 7.05945 19.8058 5.14404"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M31.6875 27.5624C31.6875 31.808 28.2457 35.2499 24 35.2499C19.7543 35.2499 16.3125 31.808 16.3125 27.5624H31.6875Z"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M13.4688 19.3126C13.4688 17.6989 14.7769 16.3907 16.3907 16.3907C18.0044 16.3907 19.3125 17.6989 19.3125 19.3126"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M34.5312 19.3124C34.5312 17.6987 33.223 16.3905 31.6093 16.3905C29.9956 16.3905 28.6875 17.6987 28.6875 19.3124"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M4.33594 0.937501L7.73437 4.33594L4.33594 7.73438L0.9375 4.33594L4.33594 0.937501Z"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                                <path
                                                    d="M43.6641 40.2657L47.0625 43.6642L43.6641 47.0626L40.2656 43.6642L43.6641 40.2657Z"
                                                    stroke="white" strokeWidth="1.875" strokeMiterlimit="10"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"/>
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_7213">
                                                <rect width="48" height="48" fill="white"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div>
                                    <h5>Request Training or Consultation</h5>
                                    <p className="mb-0">Fill in the form below and our SITRAC team will respond with a tailored capacity-building or consultancy solution that meets your organizational needs.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*-- Hero Form --*/}
                    <div className="hero-form bg-dark mt-0 fadeInUp" data-delay="1.25">
                        <h4 className="text-white">Make an Appointment</h4>
                        <p className="mb-4 text-white">Feel free to contact with us</p>

                        {/* ── Success state ── */}
                        {status === "success" ? (
                            <div className="alert alert-success d-flex align-items-center gap-2" role="alert">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                     className="bi bi-check-circle-fill flex-shrink-0" viewBox="0 0 16 16">
                                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                                </svg>
                                <div>
                                    <strong>Message sent!</strong> Thanks — we&apos;ll be in touch soon.
                                </div>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="contact-form">
                                <div className="row g-3">
                                    {/* ── Inline error alert ── */}
                                    {status === "error" && errorMessage && (
                                        <div className="col-12">
                                            <div className="alert alert-danger alert-dismissible mb-0" role="alert">
                                                {errorMessage}
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    aria-label="Close"
                                                    onClick={() => { setStatus("idle"); setErrorMessage(""); }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <div className="col-12">
                                        <input
                                            type="text"
                                            id="contact-name"
                                            name="name"
                                            className="form-control"
                                            placeholder="First Name *"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="email"
                                            id="contact-email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Email Here *"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <input
                                            type="text"
                                            id="contact-service"
                                            name="service"
                                            className="form-control"
                                            placeholder="Service (optional)"
                                            value={service}
                                            onChange={(e) => setService(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            className="form-control"
                                            placeholder="Your Message *"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="col-12">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            disabled={status === "submitting"}
                                        >
                                            <span>{status === "submitting" ? "Sending…" : "Send Message"}</span>
                                            <span>{status === "submitting" ? "Sending…" : "Send Message"}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </section>
    )
}