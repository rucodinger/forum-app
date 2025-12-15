export default function ForumLogo() {
    return (
        <div className="header__logo">
            <svg
                width="55"
                height="55"
                viewBox="0 0 70 70"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="70" height="70" rx="16" fill="#111" />

                <rect x="16" y="18" width="38" height="24" rx="6" fill="#fff" />
                <circle cx="24" cy="30" r="2" fill="#111" />
                <circle cx="35" cy="30" r="2" fill="#111" />
                <circle cx="46" cy="30" r="2" fill="#111" />

                <path
                    d="M28 42 L22 50 L34 44"
                    fill="#fff"
                />
            </svg></div>
    );
}