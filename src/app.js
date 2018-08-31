const csv = require('csv-parser')
const fs = require('fs')

const pgp = require('pg-promise')();
const cn = 'postgres://hnwkiavq:huAdwpIHJUGzHkAK2qIODKbH3CLW5bWF@horton.elephantsql.com:5432/hnwkiavq'

// const cn = {
//   // host: 'horton.elephantsql.com', // server name or IP address;
//   port: 5432,
//   database: 'elephantsql-ht6',
//   user: 'hnwkiavq',
//   password: 'oB5pWlcKdzHgYNtcVhrhjbNWwfj841op'
// };
const db = pgp(cn);

const stock = 'fb_clean';


fs.createReadStream(`./data/${stock}.csv`)
  .pipe(csv())
  .on('data', (data) => {
    // db.one
    // const query = `INSERT INTO "public"."sentiment"("id","stock_name","date","price","timestamp")
    //   VALUES
    //   (DEFAULT,E'${stock}',E'${data.Date.substring(0, 7)}',E'${data['Adj. Close']}', E'${data.Date}');`;
    // db.none(query);

    const query = `INSERT INTO
      "public"."sentiment"("id","date","timestamp","strength","stock_name")
      VALUES
      (DEFAULT,E'${data.date}',E'${data.date}',${data.rating + (0.001 * Math.random())},E'FB');`;
    db.none(query);


    // client.query(`INSERT INTO "public"."stock"("id","stock_name","date","price","timestamp")
    // VALUES
    // (DEFAULT,E'FB',E'${data.Date.substring(0, 7)}',E'${data['Adj. Close']}', E'${data.Date}');`);
    // client.query(`INSERT INTO "public"."stock"("id")
    // VALUES
    // (DEFAULT);`);
    // console.log(data);
  });

// client.end()
