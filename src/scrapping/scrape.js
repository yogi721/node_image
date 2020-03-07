const request = require('request');
const cheerio = require('cheerio');

request('https://free-proxy-list.net/', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);

    //const siteHeading = $('.text-center');

    //console.log(siteHeading.html());

    // const output = siteHeading
    //   .children('h1')
    //   .parent()
    //   .html();
    // console.log(output);

    $('.table table-striped table-bordered dataTable').each((i, el) => {
      const item = $(el).html();
      console.log(item);
    });
  }
});
