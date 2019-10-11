document.getElementById("locationSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  
   const lat= document.getElementById("latInput").value;
   const long= document.getElementById("longInput").value;
   
  if (lat === ""|| long === "")
    return;
  console.log("Lat:" + lat + "  Long: " + long);
});