import axios from 'axios'
import cheerio from 'cheerio'


const scraper = (url, func) => {
  axios({
      method: 'get',
      url: url
    })
    .then(response => {
      const html = response.data
      const $ = cheerio.load(html)
      const songtable = $('.chart-list__elements > li')
      const topsongs = []
      songtable.each(function () {
        const rank = $(this).find('.chart-element__rank__number').text()
        if (rank == 11) return false;
        const name = $(this).find('.chart-element__information__song').text()
        const artist = $(this).find('.chart-element__information__artist').text()

        topsongs.push({
          rank,
          name,
          artist
        })
      })
      //data loaded
      func(topsongs)

      return topsongs;
    })
}

export default scraper;
