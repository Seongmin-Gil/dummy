const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const records = new Array();

//csv 파일 세팅
const csvWriter = createCsvWriter({
  path: "../mockData.csv",
  header: [
    { id: "flow", title: "Flow" },
    { id: "static", title: "Static" },
    { id: "diff", title: "Diff" },
    { id: "casing", title: "Casing" },
    { id: "temp", title: "Temp" },
    { id: "roads", title: "Roads" },
  ],
});

//MockData 생성
const createMuckData = () => {
  let flow = createNum();
  let static = createNum();
  let diff = createNum();
  let casing = createNum();
  let temp = createNum();
  let roads = createNum();
  records.push({
    flow: flow,
    static: static,
    diff: diff,
    casing: casing,
    temp: temp,
    roads: roads,
  });
};

//난수 발생
const createNum = () => {
  //100이하 소숫점 둘째짜리 난수 발생
  let randomNum = Math.round(Math.random() * 10000) / 100;
  return randomNum;
};

//MockData 100개 생성
for (i = 0; i < 100; i++) {
  createMuckData();
}

//csv 파일 생성
csvWriter.writeRecords(records).then(() => {
  console.log("Done");
});
