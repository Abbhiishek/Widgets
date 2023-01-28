

export default function UserProfile({ login,
    avatar_url,
    name,
    bio,
    location,
    blog,
    twitter_username,
    public_repos,
    public_gists,
    email,
    followers,
    following,
    html_url,
    created_at, Theme, orgLength }: any) {
    return (
        `
        <svg width="642" height="274" viewBox="0 0 642 274" fill="${Theme.bg_color || "none"}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <title id="titleId">${name}</title>

    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap');

        text {
            font-family: 'Cormorant', monospace -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
        .profile_image{
            clip-path: circle(100px at center);
        }

        ;
    </style>

    
    <rect x="0" y="0" width="642" height="274" rx="22" fill="${Theme.bg_color || "#fff"}" />
    <text font-size="32" textLength="0" x="38" y="61.2" fill="${Theme.title_color || "#000000"}">
    ${name}
    </text>
    <text font-size="14" textLength="0" x="38" y="85.2" fill="${Theme.text_color || "#000000"}">
    ${bio}
    </text>
    <text font-size="12" textLength="0" x="38" y="109.2" fill="${Theme.text_color || "#000000"}">
    ${twitter_username}
    </text>
    <text font-size="10" textLength="0" x="181" y="107.2" fill="${Theme.text_color || "#000000"}">
    ${email ? email : ""}
    </text>
    <text font-size="18" x="38" y="139.5" fill="${Theme.text_color || "#000000"}">
    ${followers} Followers | ${following} Following
    </text>

    <text font-size="12" x="38" y="177.9" fill="${Theme.text_color || "#000000"}">Joined at :  ${(new Date(created_at)).toDateString()}</text>
    <text font-size="18" x="38" y="233.5" fill="${Theme.text_color || "#000000"}">
    ${public_repos} 📕
    </text>
    <text fill="${Theme.text_color || "#000000"}" font-size="18" x="147.7" y="233.5">
    ${public_gists} 📑
    </text>
    <text fill="${Theme.text_color || "#000000"}" font-size="18" x="263.7" y="233.5">
    ${orgLength} 🧑‍💻
    </text>
</svg>`
    )
};