/*global fetch*/
document.getElementById("locationSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
   const lat= document.getElementById("latInput").value;
   const long= document.getElementById("longInput").value;
   
  if (lat === "latitude"|| long === "longitude" || lat === ""|| long === "" )
    return;
  console.log("Lat:" + lat + "  Long: " + long);
  const url = "https://api.sunrise-sunset.org/json?lat=" +lat + "&lng="+  long + "&date=today";
  fetch(url)
    .then(function(response) {
        
      return response.json();
    }).then(function(json) {
        console.log("test2");
        console.log(json.results.sunrise);
        console.log(json.results.sunset);
        document.getElementById("rise").innerHTML = ('<h2>Sunrise</h2><p>' + json.results.sunrise + '</p></div>'); 
        document.getElementById("set").innerHTML = ('<h2>Sunset</h2><p>' + json.results.sunset + '</p></div>');
        
    });
    
});
