import Image from "next/image";
import bgImg78 from "@/assets/img/bg-img/78.jpg";
import bgImg79 from "@/assets/img/bg-img/79.jpg";
import bgImg80 from "@/assets/img/bg-img/80.jpg";
import bgImg81 from "@/assets/img/bg-img/81.jpg";
import bgImg70 from "@/assets/img/bg-img/70.jpg";
import bgImg71 from "@/assets/img/bg-img/71.jpg";
import bgImg72 from "@/assets/img/bg-img/72.jpg";
import bgImg73 from "@/assets/img/bg-img/73.jpg";
import Link from "next/link";

export default function BlogDetailSection() {
    return (
        <div className="blog-section">
            {/*-- Divider --*/}
            <div className="divider"></div>

            <div className="container">
                <div className="row g-4 g-xxl-5">
                    <div className="col-12 col-md-7 col-lg-8">
                        <div className="pe-lg-3">
                            {/*-- Single Blog Content --*/}
                            <div className="single-blog-content">
                                <Image src={bgImg78} alt="" className="h-auto"/>
                                {/*-- Blog Meta --*/}
                                <div className="blog-meta flex-wrap d-flex align-items-center gap-3 gap-lg-4">
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M21.6484 19.875C20.2206 17.4065 18.0203 15.6365 15.4525 14.7975C16.7226 14.0414 17.7094 12.8892 18.2614 11.5179C18.8134 10.1467 18.8999 8.63211 18.5078 7.20688C18.1157 5.78165 17.2666 4.52454 16.0909 3.6286C14.9151 2.73266 13.4778 2.24744 11.9996 2.24744C10.5215 2.24744 9.08414 2.73266 7.90842 3.6286C6.73269 4.52454 5.88358 5.78165 5.49146 7.20688C5.09935 8.63211 5.18592 10.1467 5.73788 11.5179C6.28984 12.8892 7.27668 14.0414 8.54683 14.7975C5.97902 15.6356 3.77871 17.4056 2.35089 19.875C2.29853 19.9604 2.2638 20.0554 2.24875 20.1544C2.2337 20.2534 2.23863 20.3544 2.26326 20.4515C2.28789 20.5486 2.33171 20.6397 2.39214 20.7196C2.45257 20.7995 2.52838 20.8664 2.6151 20.9165C2.70183 20.9666 2.79771 20.9988 2.89709 21.0113C2.99647 21.0237 3.09733 21.0161 3.19373 20.989C3.29012 20.9618 3.3801 20.9156 3.45835 20.8531C3.5366 20.7906 3.60154 20.713 3.64933 20.625C5.41558 17.5725 8.53746 15.75 11.9996 15.75C15.4618 15.75 18.5837 17.5725 20.35 20.625C20.3977 20.713 20.4627 20.7906 20.5409 20.8531C20.6192 20.9156 20.7092 20.9618 20.8056 20.989C20.902 21.0161 21.0028 21.0237 21.1022 21.0113C21.2016 20.9988 21.2975 20.9666 21.3842 20.9165C21.4709 20.8664 21.5467 20.7995 21.6072 20.7196C21.6676 20.6397 21.7114 20.5486 21.736 20.4515C21.7607 20.3544 21.7656 20.2534 21.7505 20.1544C21.7355 20.0554 21.7008 19.9604 21.6484 19.875ZM6.74964 8.99999C6.74964 7.96164 7.05755 6.9466 7.63443 6.08324C8.21131 5.21989 9.03124 4.54698 9.99056 4.14962C10.9499 3.75226 12.0055 3.64829 13.0239 3.85086C14.0423 4.05344 14.9777 4.55345 15.712 5.28768C16.4462 6.0219 16.9462 6.95736 17.1488 7.97576C17.3513 8.99416 17.2474 10.0498 16.85 11.0091C16.4527 11.9684 15.7797 12.7883 14.9164 13.3652C14.053 13.9421 13.038 14.25 11.9996 14.25C10.6077 14.2485 9.27322 13.6949 8.28898 12.7107C7.30473 11.7264 6.75113 10.3919 6.74964 8.99999Z"
                                                fill="#BDE162"/>
                                        </svg>
                                        Admin
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M10.8751 12C10.8751 12.2984 10.9937 12.5845 11.2046 12.7955C11.4156 13.0065 11.7018 13.125 12.0001 13.125C12.2985 13.125 12.5846 13.0065 12.7956 12.7955C13.0066 12.5845 13.1251 12.2984 13.1251 12C13.1251 11.7016 13.0066 11.4155 12.7956 11.2045C12.5846 10.9935 12.2985 10.875 12.0001 10.875C11.7018 10.875 11.4156 10.9935 11.2046 11.2045C10.9937 11.4155 10.8751 11.7016 10.8751 12ZM15.5626 12C15.5626 12.2984 15.6812 12.5845 15.8921 12.7955C16.1031 13.0065 16.3893 13.125 16.6876 13.125C16.986 13.125 17.2721 13.0065 17.4831 12.7955C17.6941 12.5845 17.8126 12.2984 17.8126 12C17.8126 11.7016 17.6941 11.4155 17.4831 11.2045C17.2721 10.9935 16.986 10.875 16.6876 10.875C16.3893 10.875 16.1031 10.9935 15.8921 11.2045C15.6812 11.4155 15.5626 11.7016 15.5626 12ZM6.18763 12C6.18763 12.2984 6.30616 12.5845 6.51714 12.7955C6.72812 13.0065 7.01426 13.125 7.31263 13.125C7.611 13.125 7.89715 13.0065 8.10813 12.7955C8.31911 12.5845 8.43763 12.2984 8.43763 12C8.43763 11.7016 8.31911 11.4155 8.10813 11.2045C7.89715 10.9935 7.611 10.875 7.31263 10.875C7.01426 10.875 6.72812 10.9935 6.51714 11.2045C6.30616 11.4155 6.18763 11.7016 6.18763 12ZM21.6845 7.93125C21.1548 6.67266 20.3954 5.54297 19.4275 4.57266C18.4663 3.60796 17.3252 2.84114 16.0689 2.31563C14.7798 1.77422 13.4111 1.5 12.0001 1.5H11.9533C10.5329 1.50703 9.15716 1.78828 7.86341 2.34141C6.61785 2.87232 5.48747 3.64049 4.53529 4.60312C3.5767 5.57109 2.82435 6.69609 2.30404 7.95C1.76498 9.24844 1.4931 10.6289 1.50013 12.0492C1.50809 13.6769 1.89316 15.2806 2.62513 16.7344V20.2969C2.62513 20.5828 2.73872 20.857 2.94091 21.0592C3.1431 21.2614 3.41732 21.375 3.70326 21.375H7.2681C8.72192 22.107 10.3256 22.492 11.9533 22.5H12.0025C13.4064 22.5 14.7681 22.2281 16.0501 21.6961C17.3001 21.1768 18.4369 20.419 19.397 19.4648C20.365 18.5063 21.1267 17.3859 21.6587 16.1367C22.2119 14.843 22.4931 13.4672 22.5001 12.0469C22.5072 10.6195 22.2306 9.23438 21.6845 7.93125ZM18.1431 18.1969C16.5001 19.8234 14.3204 20.7188 12.0001 20.7188H11.9603C10.547 20.7117 9.1431 20.3602 7.90326 19.6992L7.70638 19.5938H4.40638V16.2938L4.30091 16.0969C3.63998 14.857 3.28841 13.4531 3.28138 12.0398C3.27201 9.70312 4.16498 7.50937 5.80326 5.85703C7.4392 4.20469 9.62591 3.29062 11.9626 3.28125H12.0025C13.1744 3.28125 14.3111 3.50859 15.3822 3.95859C16.4275 4.39687 17.365 5.02734 18.1712 5.83359C18.9751 6.6375 19.6079 7.57734 20.0462 8.62266C20.5009 9.70547 20.7283 10.8539 20.7236 12.0398C20.7095 14.3742 19.7931 16.5609 18.1431 18.1969Z"
                                                fill="#BDE162"/>
                                        </svg>
                                        Comments (03)
                                    </a>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24"
                                             fill="none">
                                            <path
                                                d="M19.5 3H17.25V2.25C17.25 2.05109 17.171 1.86032 17.0303 1.71967C16.8897 1.57902 16.6989 1.5 16.5 1.5C16.3011 1.5 16.1103 1.57902 15.9697 1.71967C15.829 1.86032 15.75 2.05109 15.75 2.25V3H8.25V2.25C8.25 2.05109 8.17098 1.86032 8.03033 1.71967C7.88968 1.57902 7.69891 1.5 7.5 1.5C7.30109 1.5 7.11032 1.57902 6.96967 1.71967C6.82902 1.86032 6.75 2.05109 6.75 2.25V3H4.5C4.10218 3 3.72064 3.15804 3.43934 3.43934C3.15804 3.72064 3 4.10218 3 4.5V19.5C3 19.8978 3.15804 20.2794 3.43934 20.5607C3.72064 20.842 4.10218 21 4.5 21H19.5C19.8978 21 20.2794 20.842 20.5607 20.5607C20.842 20.2794 21 19.8978 21 19.5V4.5C21 4.10218 20.842 3.72064 20.5607 3.43934C20.2794 3.15804 19.8978 3 19.5 3ZM6.75 4.5V5.25C6.75 5.44891 6.82902 5.63968 6.96967 5.78033C7.11032 5.92098 7.30109 6 7.5 6C7.69891 6 7.88968 5.92098 8.03033 5.78033C8.17098 5.63968 8.25 5.44891 8.25 5.25V4.5H15.75V5.25C15.75 5.44891 15.829 5.63968 15.9697 5.78033C16.1103 5.92098 16.3011 6 16.5 6C16.6989 6 16.8897 5.92098 17.0303 5.78033C17.171 5.63968 17.25 5.44891 17.25 5.25V4.5H19.5V7.5H4.5V4.5H6.75ZM19.5 19.5H4.5V9H19.5V19.5ZM10.5 11.25V17.25C10.5 17.4489 10.421 17.6397 10.2803 17.7803C10.1397 17.921 9.94891 18 9.75 18C9.55109 18 9.36032 17.921 9.21967 17.7803C9.07902 17.6397 9 17.4489 9 17.25V12.4631L8.58563 12.6713C8.4076 12.7603 8.2015 12.7749 8.01268 12.712C7.82385 12.649 7.66776 12.5137 7.57875 12.3356C7.48974 12.1576 7.47509 11.9515 7.53803 11.7627C7.60097 11.5739 7.73635 11.4178 7.91437 11.3287L9.41437 10.5787C9.52876 10.5215 9.65589 10.4945 9.78367 10.5002C9.91145 10.506 10.0356 10.5443 10.1444 10.6116C10.2532 10.6788 10.343 10.7728 10.4052 10.8845C10.4675 10.9963 10.5001 11.1221 10.5 11.25ZM16.0463 14.1047L14.25 16.5H15.75C15.9489 16.5 16.1397 16.579 16.2803 16.7197C16.421 16.8603 16.5 17.0511 16.5 17.25C16.5 17.4489 16.421 17.6397 16.2803 17.7803C16.1397 17.921 15.9489 18 15.75 18H12.75C12.6107 18 12.4742 17.9612 12.3557 17.888C12.2372 17.8148 12.1415 17.71 12.0792 17.5854C12.0169 17.4608 11.9905 17.3214 12.003 17.1826C12.0155 17.0439 12.0664 16.9114 12.15 16.8L14.8481 13.2028C14.9095 13.1211 14.9535 13.0277 14.9775 12.9284C15.0015 12.8291 15.0049 12.7259 14.9876 12.6252C14.9703 12.5245 14.9325 12.4284 14.8767 12.3428C14.8209 12.2572 14.7482 12.1839 14.6631 12.1274C14.5779 12.0709 14.4821 12.0324 14.3816 12.0143C14.281 11.9961 14.1778 11.9987 14.0783 12.0219C13.9788 12.0451 13.885 12.0884 13.8028 12.1491C13.7206 12.2098 13.6517 12.2867 13.6003 12.375C13.5525 12.463 13.4876 12.5406 13.4093 12.6031C13.3311 12.6656 13.2411 12.7118 13.1447 12.739C13.0483 12.7661 12.9474 12.7737 12.8481 12.7613C12.7487 12.7489 12.6528 12.7166 12.5661 12.6665C12.4794 12.6165 12.4035 12.5495 12.3431 12.4696C12.2827 12.3898 12.2389 12.2986 12.2142 12.2015C12.1896 12.1044 12.1847 12.0034 12.1997 11.9044C12.2148 11.8054 12.2495 11.7104 12.3019 11.625C12.5496 11.1963 12.9319 10.8612 13.3894 10.6718C13.8469 10.4824 14.3541 10.4493 14.8324 10.5774C15.3107 10.7056 15.7333 10.988 16.0348 11.3808C16.3363 11.7736 16.4998 12.2548 16.5 12.75C16.5016 13.2391 16.3421 13.7152 16.0463 14.1047Z"
                                                fill="#BDE162"/>
                                        </svg>
                                        July 3, 2025
                                    </a>
                                </div>
                                {/*-- Post Title --*/}
                                <h2 className="post-title">How You Can Find A Design Job You Will Truly</h2>
                                <p>When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template for
                                    looking bare or minimizing the distractions of the draft copy. Second, use lorem
                                    ipsum if
                                    you think the placeholder text will distracting. in voluptate velit esse cillum doto
                                    fugiat. in voluptate velit esse cillum doto fugiat excepteur sint occaecat
                                    cupidatat.</p>
                                <p>Our commercial and industrial experience also advance work manship commercial compl
                                    installations such electrical systems usually have more complex engineering that
                                    caliber
                                    requires the of commercial elect ricians on our staff.</p>
                                {/*-- Blog Quote --*/}
                                <div className="quote-card">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="62" height="62" viewBox="0 0 62 62"
                                         fill="none">
                                        <path
                                            d="M14.5312 9.41235C6.51702 9.41235 0 15.9312 0 23.9436C0 31.2589 5.43154 37.3289 12.4771 38.3294C11.9131 42.427 10.3486 46.3258 7.90415 49.7068C7.42874 50.3666 7.44654 51.2607 7.9538 51.8992C8.4515 52.5275 9.31635 52.7657 10.0754 52.4456C21.6088 47.6315 29.0625 36.442 29.0625 23.9436C29.0625 15.9312 22.5455 9.41235 14.5312 9.41235ZM47.4688 9.41235C39.4545 9.41235 32.9375 15.9312 32.9375 23.9436C32.9375 31.2589 38.369 37.3289 45.4146 38.3294C44.8506 42.427 43.2861 46.3258 40.8417 49.7068C40.3662 50.3666 40.384 51.2607 40.8913 51.8992C41.389 52.5275 42.2538 52.7657 43.0129 52.4456C54.5463 47.6315 62 36.442 62 23.9436C62 15.9312 55.483 9.41235 47.4688 9.41235Z"
                                            fill="#BDE162"/>
                                    </svg>
                                    <h5>We appreciate the consistent high-quality service provided by their team goes
                                        above
                                        and beyond concerns promptly</h5>
                                </div>
                                <p>Among others, they had to shift their supplier strategies due to social distancin,
                                    introduce new and reposition their current products so that they correlated with the
                                    new,
                                    lockdown lifestyle, and introduce new, contactless delivery methods.</p>
                                <div className="row g-4">
                                    <div className="col-12 col-sm-6">
                                        <Image src={bgImg79} alt="" className="h-auto"/>
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <Image src={bgImg79} alt="" className="h-auto"/>
                                    </div>
                                </div>
                                <p>Among others, they had to shift their supplier strategies due to social distancing,
                                    introduce new and reposition their current products so that they correlated with the
                                    lockdown lifestyle, and introduce new, contactless delivery methods.</p>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            {/*-- Tag & Share --*/}
                            <div className="tag-share-wrap">
                                {/*-- Tag List --*/}
                                <ul className="list-unstyled tag-list">
                                    <li>Tags:</li>
                                    <li><a href="#">#Business</a></li>
                                    <li><a href="#">#IT Solution</a></li>
                                    <li><a href="#">#Technology</a></li>
                                </ul>
                                {/*-- Share List --*/}
                                <ul className="list-unstyled share-list">
                                    <li>Share:</li>
                                    <li><a href="#"><i className="ti ti-brand-facebook"></i></a></li>
                                    <li><a href="#"><i className="ti ti-brand-x"></i></a></li>
                                    <li><a href="#"><i className="ti ti-brand-linkedin"></i></a></li>
                                </ul>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            {/*-- Comments --*/}
                            <div className="blog-comments">
                                <h2 className="mb-5">2 Comments</h2>

                                <ul className="blog-comments-list">
                                    <li className="single-comment">
                                        <div className="comment-content">
                                            <Image src={bgImg80} alt="" className="h-auto"/>
                                            <div>
                                                <p>Legal expertise and is client focused we enhance entrepreneurial
                                                    environment
                                                    flexible supportive, allowing our lawyers introduced</p>
                                                <h5>Alexander Cameron</h5>
                                                <p className="mb-2">Jan 28, 2025</p>
                                                <a href="#" className="btn btn-link"><i
                                                    className="ti ti-message-circle"></i> Reply</a>
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="single-comment">
                                                <div className="comment-content">
                                                    <Image src={bgImg81} alt="" className="h-auto"/>
                                                    <div>
                                                        <p>Legal expertise and is client focused we enhance
                                                            entrepreneurial
                                                            environment flexible supportive, allowing our lawyers
                                                            introduced</p>
                                                        <h5>Brooklyn Simmons</h5>
                                                        <p className="mb-2">Jan 28, 2025</p>
                                                        <a href="#" className="btn btn-link"><i
                                                            className="ti ti-message-circle"></i>
                                                            Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="single-comment">
                                        <div className="comment-content">
                                            <Image src={bgImg80} alt="" className="h-auto"/>
                                            <div>
                                                <p>Legal expertise and is client focused we enhance entrepreneurial
                                                    environment
                                                    flexible supportive, allowing our lawyers introduced</p>
                                                <h5>John Doe</h5>
                                                <p className="mb-2">Jan 28, 2025</p>
                                                <a href="#" className="btn btn-link"><i
                                                    className="ti ti-message-circle"></i> Reply</a>
                                            </div>
                                        </div>
                                        <ul>
                                            <li className="single-comment">
                                                <div className="comment-content">
                                                    <Image src={bgImg81} alt="" className="h-auto"/>
                                                    <div>
                                                        <p>Legal expertise and is client focused we enhance
                                                            entrepreneurial
                                                            environment flexible supportive, allowing our lawyers
                                                            introduced</p>
                                                        <h5>Brooklyn Simmons</h5>
                                                        <p className="mb-2">Jan 28, 2025</p>
                                                        <a href="#" className="btn btn-link"><i
                                                            className="ti ti-message-circle"></i>
                                                            Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>

                            {/*-- Divider --*/}
                            <div className="divider-sm"></div>

                            {/*-- Comment Form --*/}
                            <div className="comment-form m-0 p-0">
                                <div className="mb-4">
                                    <h3 className="mb-0">Write Your Comment</h3>
                                </div>

                                {/*-- Form --*/}
                                <form action="#" method="get">
                                    <div className="row g-4">
                                        <div className="col-12 col-lg-6">
                                            <input type="text" className="form-control" placeholder="Your Name"/>
                                        </div>
                                        <div className="col-12 col-lg-6">
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                        </div>
                                        <div className="col-12">
                                            <input type="text" className="form-control" placeholder="Select Subject"/>
                                        </div>
                                        <div className="col-12">
                                        <textarea className="form-control" rows={20} cols={30}
                                        placeholder="Type your message"></textarea>
                                        </div>
                                        <div className="col-12">
                                            <button type="submit" className="btn btn-primary">
                                                <span>Send Message</span>
                                                <span>Send Message</span>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-5 col-lg-4">
                        <div className="d-flex flex-column gap-5">
                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Search Here</h4>

                                {/*-- Form --*/}
                                <form action="#" method="get">
                                    <input type="search" placeholder="Search..." className="form-control"/>
                                    <button type="submit">
                                        <i className="ti ti-search"></i>
                                    </button>
                                </form>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Categories</h4>
                                {/*-- Blog List --*/}
                                <ul className="blog-list">
                                    <li>
                                        <Link href="/blog-grid">
                                            Business
                                            <span>(2)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Uncategorized
                                            <span>(18)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Consulting
                                            <span>(4)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Cyber Security
                                            <span>(8)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Technology
                                            <span>(11)</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog-grid">
                                            Marketing
                                            <span>(5)</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Recent Posts</h4>

                                <div className="d-flex flex-column gap-4">
                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg70} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">How You Can Find A
                                                Design Job
                                                You Will Truly</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg71} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">The Missing Advice I
                                                Needed When
                                                Starting My Career</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg72} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">How to Craft The
                                                Perfect Web
                                                Design and Developer</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>

                                    {/*-- Widget Post --*/}
                                    <div className="widget-blog">
                                        <div className="blog-thumbnail">
                                            <Image src={bgImg73} alt="" className="h-auto"/>
                                        </div>
                                        <div className="blog-content">
                                            <Link href="/blog/details" className="post-title mb-2">Essential for
                                                Effective Market
                                                Research & Analysis</Link>
                                            <a href="#" className="post-date">July 9 2025</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/*-- Widget --*/}
                            <div className="widget-card">
                                <h4 className="h4 widget-title">Tags</h4>

                                {/*-- Tag List --*/}
                                <ul className="tag-list list-unstyled">
                                    <li><a href="#">All Project</a></li>
                                    <li><a href="#">Interiour</a></li>
                                    <li><a href="#">Planting</a></li>
                                    <li><a href="#">Daily Inspiration</a></li>
                                    <li><a href="#">Mobile</a></li>
                                    <li><a href="#">Trend</a></li>
                                    <li><a href="#">Design</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/*-- Divider --*/}
            <div className="divider"></div>
        </div>
    )
}