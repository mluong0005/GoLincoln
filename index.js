main();

// this is where the program starts
function main() {
  for (var i=0; i < 200; i++) {
    console.log(i);
    LHS();
  }
}

function L() {
  console.log("LLL");
  console.log("LLL");
  console.log("LLL");
  console.log("LLL");
  console.log("LLL");
  console.log("LLL");
  console.log("LLL")
  console.log("LLLLLLLLLLL");
  console.log("LLLLLLLLLLL");
  console.log(" ");
}

function H() {
  console.log("HHH     HHH");
  console.log("HHH     HHH");
  console.log("HHH     HHH");
  console.log("HHHHHHHHHHH");
  console.log("HHHHHHHHHHH");
  console.log("HHH     HHH");
  console.log("HHH     HHH");
  console.log("HHH     HHH");
  console.log(" ");
}

function S() {
  console.log("SSSSSSSSSSS");
  console.log("SSS        ");
  console.log("SSS        ");
  console.log("SSS        ");
  console.log("SSSSSSSSSSS");
  console.log("        SSS");
  console.log("        SSS");
  console.log("        SSS");
  console.log("SSSSSSSSSSS");
  console.log(" ");
}

function LHS() {
  L();
  H();
  S();
}
