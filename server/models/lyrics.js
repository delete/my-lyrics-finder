module.exports = app => {
  return {
    findAll: (params, callback) => {
      return callback([
        {
            type:"exact",
            art:{
              id: "3ade68b3g1f86eda3",
              name:"Madonna",
              url :"http://www.vagalume.com.br/madonna/"
            },
            mus:[{
              id:"3ade68b6g8e27fda3",
              name:"Holiday",
              lang:2,
              url:"http://www.vagalume.com.br/madonna/holiday.html",
              text:"Holiday Celebrate\nHoliday Celebrate(..cut..)",
              translate:[{
                id:"3ade68b6g417afda3",
                lang:1,
                url:"http://www.vagalume.com.br/madonna/holiday-traducao.html",
                text:"[Feriado]\nFeriado, comemore\nFeriado comemore(..cut..)"
              }]
            }]
          },
          {
            type:"exact",
            art:{
              id: "3ade68b3g1f86eda3",
              name:"Pearl Jam",
              url :"http://www.vagalume.com.br/pearl-jam/"
            },
            mus:[{
              id:"5ade68b6g8e27fda5",
              name:"Last Kiss",
              lang:2,
              url:"http://www.vagalume.com.br/pearl-jam/last-kiss.html",
              text:"oh where, oh where....",
              translate:[{
                id:"3ade68b6g417afda3",
                lang:1,
                url:"http://www.vagalume.com.br/pearl-jam/last-kiss-traducao.html",
                text:"onde esta, onde esta..."
              }]
            }]
          }
      ]);
    }
  };
};
