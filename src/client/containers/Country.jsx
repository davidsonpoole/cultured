import React, { Component } from 'react'
import flag from '../images/usflag.png'
import map from '../images/usmap.jpg'
import scraper from '../scraper.js'

class Country extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topsongs: [],
      loaded: false
    }

    this.dataLoaded = this.dataLoaded.bind(this)
    this.createList = this.createList.bind(this)

  }

  componentDidMount() {
    const top_songs = scraper('https://cors-anywhere.herokuapp.com/https://www.billboard.com/charts/hot-100', this.dataLoaded)

  }

  dataLoaded(top_songs) {
    this.setState({
      topsongs: top_songs,
      loaded: true
    })
    console.log(this.state.topsongs)
  }

  createList() {
    var ol = document.getElementById('songList')
    for (var i = 0; i < 10; i++) {
      var listItem = document.createElement('li')
      listItem.innerHTML = this.state.topsongs[i].name + ' by ' + this.state.topsongs[i].artist
      ol.appendChild(listItem)
    }
  }

  render() {

    return(
      <div>
      <h1>The United States of America</h1>
      <img src={flag} width="500px" />
      <img src={map} width="500px" />
      <p>The United States of America (USA), commonly known as the United States
      or America, is a country consisting of 50 states, a federal district,
      five major self-governing territories, and various possessions. At
      3.8 million square miles (9.8 million km2), it is the world's third-
      or fourth-largest country by total area.Most of the country is located
      in central North America between the countries of Canada and Mexico.
      With an estimated population of over 328 million, the U.S. is the third
      most populous country in the world. The capital is Washington, D.C., and
      the most populous city is New York City.</p>
      <ol>Imports
      <li>Refined and Crude Petroleum ($149.2B)</li>
      <li>Lumber ($20.3B)</li>
      <li>Gold ($16.5B)</li>
      <li>Aluminum ($8.2B)</li>
      <li>Coffee ($5.75B)</li>
      </ol>
      <ol>Exports
      <li>Petroleum ($71.3B)</li>
      <li>Soybeans ($22.3B)</li>
      <li>Gold ($17.7B)</li>
      <li>Corn ($9.8B)</li>
      <li>Wheat ($5.3B)</li>
      </ol>
      <ol>Trading Partners
      <li>China</li>
      <li>Canada</li>
      <li>Mexico</li>
      <li>Japan</li>
      <li>Germany</li>
      <li>South Korea</li>
      <li>United Kingdom</li>
      <li>France</li>
      <li>India</li>
      <li>Italy</li>
      </ol>
      <ol id="songList">Top Songs
      {this.state.loaded ? this.createList() : ''}
      </ol>

      <ol>Largest Cities
      <li>New York City, New York</li>
      <li>Los Angeles, California</li>
      <li>Chicago, Illinois</li>
      <li>Houston, Texas</li>
      <li>Phoenix, Arizona</li>
      <li>Philadelphia, Pennysylvania</li>
      <li>San Antonio, Texas</li>
      <li>San Diego, California</li>
      <li>Dallas, Texas</li>
      <li>San Jose, California</li>
      </ol>
      <ol>Top Companies
      <li>Walmart (Retail)</li>
      <li>ExxonMobil (Oil and Gas)</li>
      <li>Apple (Electronics)</li>
      <li>Berkshire Hathaway (Conglomerate)</li>
      <li>Amazon (Retail)</li>
      <li>UnitedHealth Group (Healthcare)</li>
      <li>McKesson (Healthcare)</li>
      <li>CVS Health (Healthcare)</li>
      <li>AT&T (Telecommunications)</li>
      <li>AmerisouceBergen (Pharmaceuticals)</li>
      </ol>
      <h2>Travel</h2>
      <p>Traveling to the United States is a great experience full of lectus
      proin nibh nisl. Risus feugiat in ante metus dictum at tempor. Pharetra
      convallis posuere morbi leo urna molestie at elementum eu. Cursus sit
      amet dictum sit amet justo donec enim. Ut diam quam nulla porttitor massa
      id neque aliquam. Consectetur libero id faucibus nisl tincidunt eget
      nullam non nisi. Auctor augue mauris augue neque gravida in fermentum.
      At auctor urna nunc id cursus metus aliquam eleifend. Et ligula ullam
      corper malesuada proin libero nunc. morbi leo urna molestie at elementum eu. Cursus sit
      amet dictum sit amet justo donec enim. Ut diam quam nulla porttitor massa
      id neque aliquam. Consectetur libero id faucibus nisl tincidunt eget
      nullam non nisi. Auctor augue mauris augue neque gravida in fermentum.
      At auctor urna nunc id cursus metus aliquam eleifend. Et ligula ullam
      corper malesuada proin libero nunc. morbi leo urna molestie at elementum eu. Cursus sit
      amet dictum sit amet justo donec enim. Ut diam quam nulla porttitor massa
      id neque aliquam. Consectetur libero id faucibus nisl tincidunt eget
      nullam non nisi. Auctor augue mauris augue neque gravida in fermentum.
      At auctor urna nunc id cursus metus aliquam eleifend. Et ligula ullam
      corper malesuada proin libero nunc.</p>
      </div>
    )
  }
}

export default Country;
