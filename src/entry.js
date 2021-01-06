import React from 'react';
import ReactDOM from 'react-dom';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';



/* This is the entry file to the web project, it should display the navbar, the HeadlineBlock, the NewsGrid, and the Footer */

import Navbar from './components/Navbar/navbar';
import Home from './pages/Home/home';
import Sources from './pages/Sources/sources';
import { makeRequest } from './controllers/helperFunctions/requests';



import 'bootstrap/dist/css/bootstrap.min.css';
const defaultConfig = {
    headers: {
        'Content-Type': 'application/json', 
        'Authorization': '9c6963310bad43209ced74318e40b0a8'
    }, params: {
        'country': 'us'
    }
}
class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: [
                {
                    "source": {
                        "id": "nbc-news",
                        "name": "NBC News"
                    },
                    "author": "Lauren Egan, Kasie Hunt, Frank Thorp V, Leigh Ann Caldwell",
                    "title": "GOP senators threaten to object to Electoral College results if commission is not formed - NBC News",
                    "description": "GOP senators threaten to vote against Electoral College results if commission is not formed",
                    "url": "https://www.nbcnews.com/politics/2020-election/gop-senators-threaten-object-electoral-college-results-if-commission-not-n1252667",
                    "urlToImage": "https://media4.s-nbcnews.com/j/newscms/2021_53/3439167/210102-ted-cruz-mn-1245_066456cb6a9f6af3b2253a2a6d68dbcb.nbcnews-fp-1200-630.jpg",
                    "publishedAt": "2021-01-02T20:01:00Z",
                    "content": "Nearly a dozen Republican senators and senators-elect on Saturday demanded a commission to audit the results of the 2020 election, and said they would otherwise object to the Electoral College votes … [+2975 chars]"
                    },
                    {
                    "source": {
                        "id": null,
                        "name": "TMZ"
                    },
                    "author": "TMZ Staff",
                    "title": "'Mr. Disneyland' Ron Dominguez Dead at 85 - TMZ",
                    "description": "One of Disneyland's original Cast Members -- and perhaps one of the most important ones -- has passed away.",
                    "url": "https://www.tmz.com/2021/01/02/mr-disneyland-ron-dominguez-dead-dies-disney-legend/",
                    "urlToImage": "https://imagez.tmz.com/image/33/16by9/2021/01/02/332011451f3346d589f5734624490bce_xl.jpg",
                    "publishedAt": "2021-01-02T19:56:00Z",
                    "content": "Ron Dominguez -- one of Disney's homegrown executives, quite literally -- has died.\r\nDominguez, also known as \"Mr. Disneyland,\" passed away Friday ... this according to the Disneyland Alumni Club. A … [+1832 chars]"
                    },
                    {
                    "source": {
                        "id": null,
                        "name": "Slate Magazine"
                    },
                    "author": "Daniel Politi",
                    "title": "Homes of McConnell and Pelosi Vandalized With Messages on Stimulus Checks - Slate",
                    "description": "The Senate adjourned Friday night without approving a measure to increase stimulus checks from $600 to $2,000.",
                    "url": "https://slate.com/news-and-politics/2021/01/homes-mcconnell-pelosi-vandalized-stimulus-checks.html",
                    "urlToImage": "https://compote.slate.com/images/cddba793-47e1-475c-9707-7bf000725098.jpeg?width=780&height=520&rect=3310x2207&offset=0x0",
                    "publishedAt": "2021-01-02T19:34:00Z",
                    "content": "Senate Majority Leader Mitch McConnell (R-KY) talks to reporters following the weekly Senate Republican policy luncheon in the Hart Senate Office Building on Capitol Hill on September 30, 2020 in Was… [+2997 chars]"
                },
                {
                "source": {
                    "id": null,
                    "name": "The Denver Post"
                },
                "author": "Ryan O’Halloran",
                "title": "Floyd Little, Broncos Hall of Fame running back, dies at age 78 - The Denver Post",
                "description": "The first great player in Broncos history has passed away. Floyd Little, the franchise’s star during years of struggles in the 1960s and ‘70s, died at his home in Las Vegas.",
                "url": "https://www.denverpost.com/2021/01/02/floyd-little-dies-broncos-hall-of-famer/",
                "urlToImage": "https://www.denverpost.com/wp-content/uploads/2017/12/161154074.jpg?w=1024&h=681",
                "publishedAt": "2021-01-02T19:18:00Z",
                "content": "The first great player in Broncos history has passed away.\r\nFloyd Little, the franchises star during years of struggles in the 1960s and 70s, died Friday night following a battle with a rare form of … [+9837 chars]"
                },
                {
                "source": {
                    "id": "the-verge",
                    "name": "The Verge"
                },
                "author": "Kim Lyons",
                "title": "The delightful Ratatouille TikTok musical has already sold more than $1 million in tickets - The Verge",
                "description": "Ratatouille: The TikTok Musical— aka the Ratatousical— debuted online on New Year’s Day and has already sold more than $1 million in tickets. A portion of the ticket sales will benefit The Actors Fund, which supports performers and workers in the entertainmen…",
                "url": "https://www.theverge.com/2021/1/2/22210416/ratatouille-tiktok-musical-1-million-actors-fund-disney-pixar-broadway",
                "urlToImage": "https://cdn.vox-cdn.com/thumbor/q_t3-txBeQVyt4RL5UuB67CjrXc=/0x8:1869x987/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22209692/ratatouille_tituss.jpg",
                "publishedAt": "2021-01-02T19:08:49Z",
                "content": "This is an excellent way to start 2021\r\nTitus Burgess as Remy in Ratatouille: The TikTok Musical\r\nThe TikTok Ratatouille musical aka the Ratatousical debuted online on New Years Day and has already s… [+2427 chars]"
                },
                {
                "source": {
                    "id": null,
                    "name": "New York Post"
                },
                "author": "Reed Tucker",
                "title": "A Harvard professor says an alien visited in 2017 — and more are coming - New York Post ",
                "description": "A Harvard professor says we were visited by an alien life form in 2017 — and we should be ready for more.",
                "url": "https://nypost.com/2021/01/02/a-harvard-professor-says-an-alien-visited-in-2017/",
                "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2020/12/Watch-This-Space.jpg?quality=90&strip=all&w=1200",
                "publishedAt": "2021-01-02T18:41:00Z",
                "content": "When the first sign of intelligent life first visits us from space, it wont be a giant saucer hovering over New York. More likely, it will be an alien civilizations trash. \r\nAvi Loeb, the chair of Ha… [+9516 chars]"
                },
                {
                "source": {
                    "id": null,
                    "name": "CBS Sports"
                },
                "author": "",
                "title": "Will Ohio State's perseverance or Alabama's season-long dominance prevail in the national title game? - CBS Sports",
                "description": "The Crimson Tide have been a juggernaut all season, but the Buckeyes more than match up",
                "url": "https://www.cbssports.com/college-football/news/will-ohio-states-perseverance-or-alabamas-season-long-dominance-prevail-in-the-national-title-game/",
                "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/01/02/8f8575e3-be9d-4280-a814-be56cbec4d4b/thumbnail/1200x675/9ac5b0b1ff936a9eabaa8ebb63ac1a52/fields.jpg",
                "publishedAt": "2021-01-02T18:33:00Z",
                "content": "We now know the real power of something as trivial as a Coaches Poll ballot. It seemed to be enough to push No. 3 Ohio State all the way to the College Football Playoff National Championship\r\nOK, so … [+5659 chars]"
                },
                {
                "source": {
                    "id": null,
                    "name": "NPR"
                },
                "author": "",
                "title": "Contagious Coronavirus Variant Has Spread To Dozens Of Countries : Coronavirus Updates - NPR",
                "description": "The new strain, which likely originated in the U.K. in September, has spread to more than 30 countries across several continents. Meanwhile, the U.S. saw record COVID-19 deaths in December.",
                "url": "https://www.npr.org/sections/coronavirus-live-updates/2021/01/02/952842631/new-covid-19-variant-spreads-to-dozens-of-countries",
                "urlToImage": "https://media.npr.org/assets/img/2021/01/02/gettyimages-1230381246_wide-95d2457c39d9012a8bc8f189c10bb695106dbfac.jpg?s=1400",
                "publishedAt": "2021-01-02T18:32:46Z",
                "content": "Ambulances are parked outside the NHS Nightingale hospital at the ExCeL center in east London on Friday. Hospitals in the U.K. are preparing for an influx of patients as the coronavirus continues to … [+3500 chars]"
                },
                {
                "source": {
                    "id": null,
                    "name": "MacRumors"
                },
                "author": "Hartley Charlton",
                "title": "Apple Backtracks After Popular Mac App 'Amphetamine' Threatened With Removal Over Branding - MacRumors",
                "description": "Popular Mac app \"Amphetamine\" will remain on the Mac App Store after reportedly being threatened with removal over its name and branding,...",
                "url": "https://www.macrumors.com/2021/01/02/amphetamine-app-store-removal-threat/",
                "urlToImage": "https://images.macrumors.com/t/tcXbijFGnxajsX7d7TiTVxxLsEg=/1890x/https://images.macrumors.com/article-new/2021/01/amphetamine.jpg",
                "publishedAt": "2021-01-02T18:25:00Z",
                "content": "Popular Mac app \"Amphetamine\" will remain on the Mac App Store after reportedly being threatened with removal over its name and branding, which Apple had said breached App Store guidelines.\r\nAmphetam… [+2838 chars]"
                }
            ]
        }
    }
    
    render() {
        return (
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/sources/:name" component={Sources}></Route>
                    <Route path="/buzzfeed">
                        <p>Buzzfeed</p>
                    </Route>
                    <Route path="/all">
                        <p>All Sources</p>
                    </Route>
                    <Route path="/" exact>
                        <Home message="Hello" articles={this.state.articles} />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDOM.render(<Root />, document.getElementById('root'));