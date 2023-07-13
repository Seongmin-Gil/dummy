const createCsvWriter = require("csv-writer").createObjectCsvWriter;

const records = new Array();

const csvWriter = createCsvWriter({
  path: "./mockData.csv",
  header: [
    { id: "flow", title: "Flow" },
    { id: "static", title: "Static" },
    { id: "diff", title: "Diff" },
    { id: "casing", title: "Casing" },
    { id: "temp", title: "Temp" },
    { id: "roads", title: "Roads" },
  ],
});

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

const createNum = () => {
  let randomNum = Math.round(Math.random() * 10000) / 100;
  return randomNum;
};

for (i = 0; i < 100; i++) {
  createMuckData();
}

csvWriter.writeRecords(records).then(() => {
  console.log("Done");
});
