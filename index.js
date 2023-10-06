function submitForm() {
  console.log("submit");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var x = document.getElementById("dateinput");
  var date = x.value;
  var datearray = date.split("-");
  var year = datearray[0];
  var month = datearray[1];
  var day = datearray[2];


  // Getting the Date
  var monthname = monthNames[parseInt(month) - 1].substring(0, 3).toUpperCase();
  var reportID = day + "" + monthname + "" + year;
  console.log(reportID)
  
  // Getting the Browser name 
  var browser = document.getElementById("browserinput");
  var browser_name = browser.value;
  console.log(browser_name);
  
  fetchReport(reportID, browser_name);

}

// v2 Url with browser name 
//    .get(`https://rohitfrugal.github.io/Bottle-Allure-Results/${browser_name}/${reportID}/`)


const fetchReport = (reportID) => {
  axios
    .get("https://Rohit-134.github.io/latido-report-archives/" + reportID + "/")  // Chnage this url for the post 
    .then((response) => {
      console.log(response);
      window.open(
        "https://Rohit-134.github.io/latido-report-archives/" + reportID + "/"
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Report not found");
    });
};
