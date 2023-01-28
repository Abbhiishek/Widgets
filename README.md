

Only Api endpoint you need for GitHub widgets

![Demo](https://wiidgets.vercel.app//api/banner?title=Widgets&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets)

### The problem Widgets solves


Our API endpoint provides a simple and easy way to display various types of data from GitHub in a visual and interactive manner. With our API endpoint, users can easily create beautiful widgets that display data such as repository information, user activity, and much more.

One of the main benefits of our API endpoint is that it allows users to quickly and easily gain insights into their GitHub data. For example, a developer could use our widgets to track the progress of their repositories, see how many people are contributing to their projects, or view statistics about their commits and pull requests. This can be especially useful for open-source projects, as it provides a way for contributors and maintainers to quickly see the activity on a project at a glance.

Our API endpoint also makes it easy for users to customize the appearance of the widgets. By using SVG and JavaScript, we were able to create visualizations that are highly customizable and can be easily styled to match the look and feel of the user's website or application.

Additionally, our API endpoint is built with performance and scalability in mind. By using Next.js, we were able to create a server-rendered application that can handle a large number of requests and provide a fast and responsive user experience.

Overall, our API endpoint provides a simple and powerful way to display GitHub data in a visual and interactive manner, making it a great tool for developers, open-source projects and anyone who wants to gain insights into their GitHub data.


### Challenges we ran into

- `SVG OVER HTML`

![Demo](https://wiidgets.vercel.app//api/banner?title=SVG%20OVER%20HTML&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets)


First challenge we encountered was determining the best format to send the data in the API response. We initially considered using JSON, but found that it wasn't the best option for displaying the visualizations. After some experimentation, we found that using SVG (Scalable Vector Graphics) provided the most flexibility and allowed us to create high-quality visualizations that could be easily rendered on different devices and screen sizes. Additionally, SVG is a widely supported format, making it easy to display the visualizations in a variety of contexts.
To implement this, we used some SVG Design Tools to create the SVG elements and then used JavaScript to bind the data and update the visualizations in real time as the data changed. This allowed us to create interactive and dynamic visualizations that provided a great user experience.

- The Framework Game

![Demo](https://wiidgets.vercel.app//api/banner?title=The%20Framework%20Game&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets)

Another challenge we encountered while building the API endpoint was choosing the best framework for handling the API requests. Initially, we considered using a Python framework such as Flask or Django, as they are popular and well-established options for building web applications. However, we soon realized that using a JavaScript framework would be more suitable for our project as it would allow us to easily handle network requests and interact with the front-end of the application.

After evaluating several options, we decided to use Next.js, a framework for building server-rendered React applications. Next.js made it easy to handle the API requests and allowed us to easily integrate the widgets into the front-end of the application. Additionally, Next.js has built-in support for server-side rendering, which allowed us to improve the performance of the application and provide a better user experience.

Furthermore, Next.js has built-in features like automatic code splitting and optimized production builds which made it easy for us to manage the project and make it production ready.

Overall, using Next.js was a great choice for our project as it allowed us to easily handle the API requests and create a high-performance and user-friendly application.

- Customizable Styles

![Demo](https://wiidgets.vercel.app//api/banner?title=Customizable%20Styles&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets)

One of the main features of our API endpoint is that it allows users to easily customize the appearance of the widgets. To implement this, we used CSS variables to allow users to easily change the colors and styles of the widgets. This allowed us to create highly customizable widgets that could be easily styled to match the look and feel of the user's website or application.
Another challenge we faced was making sure that the widgets were responsive and looked good on different screen sizes. We solved this by using CSS media queries to adjust the layout of the widgets based on the screen size.

Overall, we faced some challenges but by utilizing different libraries, techniques and testing the project multiple time we were able to overcome them and completed the project successfully.

### Technologies we used

![Demo](https://wiidgets.vercel.app//api/banner?title=Tech%20That%20Matters&bio=Nextjs-CSS-SVG-Github%20API-Nextra&twitter=widgets)


- Next.js
- CSS
- SVG
- GitHub API
- Vercel
- Nextra
- Replit



# Welcome to the BUY ME A COFFEE API Endpoint!

![](https://wiidgets.vercel.app/api/buymeacoffee?slug=abbhishek)

## What is this API endpoint for?
Banner API Endpoint provides a simple card for your buymeacoffee 🍵.

## UseCase
You can use this API endpoint to create a card for your github profile or any other website.

## How to use this API endpoint?

To get started, simply make a GET request to the following URL:


```bash
https://wiidgets.vercel.app/api/buymeacoffee?
```
### Query Parameters
The following query parameters are available for use in the API endpoint:

- `slug (string)`   : The handle for your buymeacoffee Profile.


### Example

Here's an example of how you might use the API to create a widget with the slug "abbhishek":

```link
https://wiidgets.vercel.app/api/buymeacoffee?slug=abbhishek
```
### Responses
The API endpoint returns a SVG file as response which can be directly used on website or application.

![](https://wiidgets.vercel.app/api/buymeacoffee?slug=abbhishek)



### Happy Coding!


### Disclaimer
We are not affiliated with buymeacoffee in any way. Use this API on your own risk.


# Welcome to the Banner API Endpoint!

![](https://wiidgets.vercel.app/api/banner?title=Banner%20API%20Endpoint&bio=title%C2%B7bio%C2%B7twitter&twitter=widgets)

## What is this API endpoint for?
Banner API Endpoint provides a `1500 X 500` banner with title , bio and twitter handle.

## UseCase
You can use this API endpoint to create a banner for your github profile or any other website.

## How to use this API endpoint?

To get started, simply make a GET request to the following URL:


```bash
https://wiidgets.vercel.app/api/banner?
```
### Query Parameters
The following query parameters are available for use in the API endpoint:

- `title (string)`   : The title of the widget. This can be any string up to 100 characters in length.
- `bio (string)`     : The bio of the widget. This can be any string up to 200 characters in length.
- `twitter (string)` : The Twitter handle of the user. This should be a string without the '@' symbol.


### Example

Here's an example of how you might use the API to create a widget with the title "Contact Us", bio "Api Endpoint For Github Widgets" and twitter handle "widgets":

```perl
https://wiidgets.vercel.app/api/banner?title=Contact%20Us&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets
```
### Responses
The API endpoint returns a SVG file as response which can be directly used on website or application.

![](https://wiidgets.vercel.app/api/banner?title=Contact%20Us&bio=Api%20Endpoint%20For%20Github%20Widgets&twitter=widgets)

## Note
Please make sure that you are passing all the parameter otherwise it will fail to create a svg.
If you want to use your own `css styling` please use svg class and do not change the structure of svg as it may break the widget.


### Happy Coding!


### Disclaimer
We are not affiliated with Github in any way. Use this API on your own risk.


# Welcome to the Github REPO CARD API Endpoint!

![](https://wiidgets.vercel.app/api/github/repocard?owner=Abbhiishek&repo=Widgets&theme=transparent?)

## What is this API endpoint for?

This API endpoint is used to create a card for your github repository. You can use this API endpoint to create a card for your github profile or any other website.

## UseCase
You can use this API endpoint to create a card for your github profile or any other website.

## How to use this API endpoint?

To get started, simply make a GET request to the following URL:


```bash
https://wiidgets.vercel.app/api/github/repocard?owner=Abbhiishek&repo=Widgets&theme=transparent?
```
### Query Parameters
The following query parameters are available for use in the API endpoint:

- `owner (string)`   : The owner of the Repo
- `repo (string)`   :  The Repo Name
- `theme (string) || Optional`   : Themes


### Example

Here's an example of how you might use the API to create a widget with the slug "abbhishek":

```link
https://wiidgets.vercel.app/api/github/repocard?owner=Abbhiishek&repo=Widgets&theme=transparent
```
### Responses
The API endpoint returns a SVG file as response which can be directly used on website or application.

![](https://wiidgets.vercel.app/api/github/repocard?owner=Abbhiishek&repo=Widgets&theme=transparent)



### Happy Coding!


### Disclaimer
We are not affiliated with Github in any way. Use this API on your own risk.



## Themes Availables for Github API Endpoint




With inbuilt themes, you can customize the look of the card without doing any manual customization.

Use `?theme=THEME_NAME` parameter like so :-

```md
![WebDev's GitHub stats](https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=transparent)
```

{/* ## Stats

> These themes work both for the Stats Card and Repo Card.

| | | |
| :--: | :--: | :--: |
| `default` ![default][default] | `transparent` ![transparent][transparent] | `dark` ![dark][dark] |
| `radical` ![radical][radical] | `merko` ![merko][merko] | `gruvbox` ![gruvbox][gruvbox] |
| `gruvbox_light` ![gruvbox_light][gruvbox_light] | `tokyonight` ![tokyonight][tokyonight] | `onedark` ![onedark][onedark] |
| `cobalt` ![cobalt][cobalt] | `synthwave` ![synthwave][synthwave] | `highcontrast` ![highcontrast][highcontrast] |
| `dracula` ![dracula][dracula] | `prussian` ![prussian][prussian] | `monokai` ![monokai][monokai] |
| `vue` ![vue][vue] | `vue-dark` ![vue-dark][vue-dark] | `shades-of-purple` ![shades-of-purple][shades-of-purple] |
| `nightowl` ![nightowl][nightowl] | `buefy` ![buefy][buefy] | `blue-green` ![blue-green][blue-green] |
| `algolia` ![algolia][algolia] | `great-gatsby` ![great-gatsby][great-gatsby] | `darcula` ![darcula][darcula] |
| `bear` ![bear][bear] | `solarized-dark` ![solarized-dark][solarized-dark] | `solarized-light` ![solarized-light][solarized-light] |
| `chartreuse-dark` ![chartreuse-dark][chartreuse-dark] | `nord` ![nord][nord] | `gotham` ![gotham][gotham] |
| `material-palenight` ![material-palenight][material-palenight] | `graywhite` ![graywhite][graywhite] | `vision-friendly-dark` ![vision-friendly-dark][vision-friendly-dark] |
| `ayu-mirage` ![ayu-mirage][ayu-mirage] | `midnight-purple` ![midnight-purple][midnight-purple] | `calm` ![calm][calm] |
| `flag-india` ![flag-india][flag-india] | `omni` ![omni][omni] | `react` ![react][react] |
| `jolly` ![jolly][jolly] | `maroongold` ![maroongold][maroongold] | `yeblu` ![yeblu][yeblu] |
| `blueberry` ![blueberry][blueberry] | `slateorange` ![slateorange][slateorange] | `kacho_ga` ![kacho_ga][kacho_ga] |
| `outrun` ![outrun][outrun] | `ocean_dark` ![ocean_dark][ocean_dark] | `city_lights` ![city_lights][city_lights] |
| `github_dark` ![github_dark][github_dark] | `discord_old_blurple` ![discord_old_blurple][discord_old_blurple] | `aura_dark` ![aura_dark][aura_dark] |
| `panda` ![panda][panda] | `noctis_minimus` ![noctis_minimus][noctis_minimus] | `cobalt2` ![cobalt2][cobalt2] |
| `swift` ![swift][swift] | `aura` ![aura][aura] | `apprentice` ![apprentice][apprentice] |
| `moltack` ![moltack][moltack] | `codeSTACKr` ![codeSTACKr][codeSTACKr] | `rose_pine` ![rose_pine][rose_pine] |
| [Add your theme][add-theme] | | | */}

## Repo Card

> These themes work both for the Stats Card and Repo Card.

| | | |
| :--: | :--: | :--: |
| `default_repocard` ![default_repocard][default_repocard_repo] | `transparent` ![transparent][transparent_repo] | `dark` ![dark][dark_repo] |
| `radical` ![radical][radical_repo] | `merko` ![merko][merko_repo] | `gruvbox` ![gruvbox][gruvbox_repo] |
| `gruvbox_light` ![gruvbox_light][gruvbox_light_repo] | `tokyonight` ![tokyonight][tokyonight_repo] | `onedark` ![onedark][onedark_repo] |
| `cobalt` ![cobalt][cobalt_repo] | `synthwave` ![synthwave][synthwave_repo] | `highcontrast` ![highcontrast][highcontrast_repo] |
| `dracula` ![dracula][dracula_repo] | `prussian` ![prussian][prussian_repo] | `monokai` ![monokai][monokai_repo] |
| `vue` ![vue][vue_repo] | `vue-dark` ![vue-dark][vue-dark_repo] | `shades-of-purple` ![shades-of-purple][shades-of-purple_repo] |
| `nightowl` ![nightowl][nightowl_repo] | `buefy` ![buefy][buefy_repo] | `blue-green` ![blue-green][blue-green_repo] |
| `algolia` ![algolia][algolia_repo] | `great-gatsby` ![great-gatsby][great-gatsby_repo] | `darcula` ![darcula][darcula_repo] |
| `bear` ![bear][bear_repo] | `solarized-dark` ![solarized-dark][solarized-dark_repo] | `solarized-light` ![solarized-light][solarized-light_repo] |
| `chartreuse-dark` ![chartreuse-dark][chartreuse-dark_repo] | `nord` ![nord][nord_repo] | `gotham` ![gotham][gotham_repo] |
| `material-palenight` ![material-palenight][material-palenight_repo] | `graywhite` ![graywhite][graywhite_repo] | `vision-friendly-dark` ![vision-friendly-dark][vision-friendly-dark_repo] |
| `ayu-mirage` ![ayu-mirage][ayu-mirage_repo] | `midnight-purple` ![midnight-purple][midnight-purple_repo] | `calm` ![calm][calm_repo] |
| `flag-india` ![flag-india][flag-india_repo] | `omni` ![omni][omni_repo] | `react` ![react][react_repo] |
| `jolly` ![jolly][jolly_repo] | `maroongold` ![maroongold][maroongold_repo] | `yeblu` ![yeblu][yeblu_repo] |
| `blueberry` ![blueberry][blueberry_repo] | `slateorange` ![slateorange][slateorange_repo] | `kacho_ga` ![kacho_ga][kacho_ga_repo] |
| `outrun` ![outrun][outrun_repo] | `ocean_dark` ![ocean_dark][ocean_dark_repo] | `city_lights` ![city_lights][city_lights_repo] |
| `github_dark` ![github_dark][github_dark_repo] | `discord_old_blurple` ![discord_old_blurple][discord_old_blurple_repo] | `aura_dark` ![aura_dark][aura_dark_repo] |
| `panda` ![panda][panda_repo] | `noctis_minimus` ![noctis_minimus][noctis_minimus_repo] | `cobalt2` ![cobalt2][cobalt2_repo] |
| `swift` ![swift][swift_repo] | `aura` ![aura][aura_repo] | `apprentice` ![apprentice][apprentice_repo] |
| `moltack` ![moltack][moltack_repo] | `codeSTACKr` ![codeSTACKr][codeSTACKr_repo] | `rose_pine` ![rose_pine][rose_pine_repo] |


[default]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=default
[default_repocard]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=default_repocard
[transparent]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=transparent
[dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=dark
[radical]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=radical
[merko]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=merko
[gruvbox]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gruvbox
[gruvbox_light]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gruvbox_light
[tokyonight]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=tokyonight
[onedark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=onedark
[cobalt]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=cobalt
[synthwave]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=synthwave
[highcontrast]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=highcontrast
[dracula]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=dracula
[prussian]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=prussian
[monokai]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=monokai
[vue]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vue
[vue-dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vue-dark
[shades-of-purple]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=shades-of-purple
[nightowl]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=nightowl
[buefy]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=buefy
[blue-green]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=blue-green
[algolia]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=algolia
[great-gatsby]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=great-gatsby
[darcula]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=darcula
[bear]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=bear
[solarized-dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=solarized-dark
[solarized-light]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=solarized-light
[chartreuse-dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=chartreuse-dark
[nord]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=nord
[gotham]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gotham
[material-palenight]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=material-palenight
[graywhite]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=graywhite
[vision-friendly-dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vision-friendly-dark
[ayu-mirage]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=ayu-mirage
[midnight-purple]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=midnight-purple
[calm]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=calm
[flag-india]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=flag-india
[omni]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=omni
[react]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=react
[jolly]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=jolly
[maroongold]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=maroongold
[yeblu]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=yeblu
[blueberry]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=blueberry
[slateorange]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=slateorange
[kacho_ga]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=kacho_ga
[outrun]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=outrun
[ocean_dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=ocean_dark
[city_lights]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=city_lights
[github_dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=github_dark
[discord_old_blurple]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=discord_old_blurple
[aura_dark]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=aura_dark
[panda]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=panda
[noctis_minimus]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=noctis_minimus
[cobalt2]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=cobalt2
[swift]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=swift
[aura]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=aura
[apprentice]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=apprentice
[moltack]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=moltack
[codeSTACKr]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=codeSTACKr
[rose_pine]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=rose_pine


[default_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=default
[default_repocard_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=default_repocard
[transparent_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=transparent
[dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=dark
[radical_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=radical
[merko_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=merko
[gruvbox_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gruvbox
[gruvbox_light_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gruvbox_light
[tokyonight_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=tokyonight
[onedark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=onedark
[cobalt_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=cobalt
[synthwave_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=synthwave
[highcontrast_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=highcontrast
[dracula_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=dracula
[prussian_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=prussian
[monokai_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=monokai
[vue_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vue
[vue-dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vue-dark
[shades-of-purple_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=shades-of-purple
[nightowl_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=nightowl
[buefy_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=buefy
[blue-green_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=blue-green
[algolia_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=algolia
[great-gatsby_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=great-gatsby
[darcula_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=darcula
[bear_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=bear
[solarized-dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=solarized-dark
[solarized-light_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=solarized-light
[chartreuse-dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=chartreuse-dark
[nord_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=nord
[gotham_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=gotham
[material-palenight_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=material-palenight
[graywhite_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=graywhite
[vision-friendly-dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=vision-friendly-dark
[ayu-mirage_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=ayu-mirage
[midnight-purple_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=midnight-purple
[calm_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=calm
[flag-india_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=flag-india
[omni_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=omni
[react_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=react
[jolly_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=jolly
[maroongold_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=maroongold
[yeblu_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=yeblu
[blueberry_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=blueberry
[slateorange_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=slateorange
[kacho_ga_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=kacho_ga
[outrun_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=outrun
[ocean_dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=ocean_dark
[city_lights_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=city_lights
[github_dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=github_dark
[discord_old_blurple_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=discord_old_blurple
[aura_dark_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=aura_dark
[panda_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=panda
[noctis_minimus_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=noctis_minimus
[cobalt2_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=cobalt2
[swift_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=swift
[aura_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=aura
[apprentice_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=apprentice
[moltack_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=moltack
[codeSTACKr_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=codeSTACKr
[rose_pine_repo]: https://wiidgets.vercel.app/api/github/repocard?owner=dscjisu&repo=WebDev&theme=rose_pine