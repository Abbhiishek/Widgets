// pages/api/_svg.ts

interface IOwner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    site_admin: boolean;
}

interface ITheme {
    title_color: string;
    icon_color: string;
    text_color: string;
    bg_color: string;
}

interface IRepo {
    name: string;
    owner: IOwner;
    description: string;
    created_at: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    open_issues: number;
    homepage: string;
    watchers_count: number;
    Theme: ITheme;

}

export default function getRepo({ owner, name, description, homepage, created_at, language, stargazers_count, forks_count, watchers_count, open_issues, Theme }: IRepo) {


    return (
        `
        <svg xmlns="http://www.w3.org/2000/svg" width="611px" height="249px" fill="${Theme.bg_color || "#000000"} ">
        <style>
        .login {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }

        .reponame {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }

        .description , text {
            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
            width: ;
        }
        .homepage{
            cursor: pointer;
        }
    </style>
    <script>
            function homepage() {
        window.open("${homepage}" , "_blank");
        }
        </script>
    <rect x="0" y="0" width="611" rx="15" height="249" fill="${Theme.bg_color || "#fff"}" />
    <g>
        <text class="login" font-size="13" textLength="0" x="29.2" y="33.1" fill="${Theme.text_color || "#000000"}">
            ${owner.login}
        </text>

        <text class="reponame" textLength="0" font-size="33" x="21.3" y="70" fill="${Theme.title_color || "#000000"}">
            ${name}
        </text>
        <text class="description" font-size="13" textLength="0" x="31.6" y="108.2" fill="${Theme.text_color || "#000000"}">
            ${description}
        </text>
        <text x="35.9" y="174.1" fill="${Theme.text_color || "#000000"}" onclick="homepage()" class="homepage">
            🏠 Homepage
        </text>
        <text x="34.9" y="196.1" fill="${Theme.text_color || "#000000"}">
            ⌚ ${(new Date(created_at)).toDateString()}
        </text>
        <text x="35.9" y="220.1" fill="${Theme.text_color || "#000000"}">
            👉${language}
        </text>
    </g>
    <g>
        <text textLength="0" font-size="23" x="540.3" y="77.8" fill="${Theme.text_color || "#000000"}">
            ${stargazers_count} ⭐ 
        </text>
        <text textLength="0" font-size="23" x="540.3" y="110.8" fill="${Theme.text_color || "#000000"}">
        ${forks_count} 🍴
        </text>
        <text textLength="0" font-size="23" x="540.3" y="143.8" fill="${Theme.text_color || "#000000"}">
        ${watchers_count} 👁️
        </text>
        <text textLength="0" font-size="23" x="540.3" y="177.8" fill="${Theme.text_color || "#000000"}">
        ${open_issues} 🤌
        </text>
    </g>
</svg>
        `

    )
}
