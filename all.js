// let data = [
//     {
//         "id": 0,
//         "name": "肥宅心碎賞櫻3日",
//         "imgUrl": "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1655&q=80",
//         "area": "高雄",
//         "description": "賞櫻花最佳去處。肥宅不得不去的超讚景點！",
//         "group": 87,
//         "price": 1400,
//         "rate": 10
//     },
//     {
//         "id": 1,
//         "name": "貓空纜車雙程票",
//         "imgUrl": "https://images.unsplash.com/photo-1501393152198-34b240415948?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         "area": "台北",
//         "description": "乘坐以透明強化玻璃為地板的「貓纜之眼」水晶車廂，享受騰雲駕霧遨遊天際之感",
//         "group": 99,
//         "price": 240,
//         "rate": 2
//     },
//     {
//         "id": 2,
//         "name": "台中谷關溫泉會1日",
//         "imgUrl": "https://images.unsplash.com/photo-1535530992830-e25d07cfa780?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
//         "area": "台中",
//         "description": "全館客房均提供谷關無色無味之優質碳酸原湯，並取用八仙山之山冷泉供蒞臨貴賓沐浴及飲水使用。",
//         "group": 20,
//         "price": 1765,
//         "rate": 7
//     }
// ];

// 使用套件 axios 要先載入  <script src="https://unpkg.com/axios/dist/axios.min.js"></script>

let data;
let url = 'https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json';

function init() {
  axios.get(url)
    .then(function (response) {
      data = response.data;
      console.log(data);
      renderC3(); // {高雄: 1, 台北: 1, 台中: 1}
      renderList()
    });
}


function renderC3() {
  let totalObj = {};
  data.forEach(function (item) {
    if (totalObj[item.area] == undefined) {
      totalObj[item.area] = 1;
    } else if (totalObj[item.area]) {
      totalObj[item.area] += 1;
    }
  })
  console.log(totalObj); // {高雄: 1, 台北: 1, 台中: 1}

  let newData = [];
  let area = Object.keys(totalObj);

  area.forEach(function (item) {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  })
  console.log(newData); //  ['高雄', 1] ['台北', 1]  ['台中', 1]


  const chart = c3.generate({
    bindto: "#chart",
    data: {
      columns: newData,
      type: 'donut',
    },
    donut: {
      title: "地區"
    }
  });
  // console.log(chart);

}

function renderList() {
  const list = document.querySelector('.list');
  let str = '';
  data.forEach(function (item) {
    str += `<li>${item.name}</li>`
  })
  list.innerHTML = str;
}

init();










