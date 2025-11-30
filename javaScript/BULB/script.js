function on()
{
    document.getElementById("bulb").style.backgroundColor = "yellow"

}
function off()
{
    document.getElementById("bulb").style.backgroundColor = "white";

}
function red()
{
    document.getElementById("bulb").style.backgroundColor = "red";
}

function blue()
{
    document.getElementById("bulb").style.backgroundColor = "blue";

}
function black()
{
    document.getElementById("bulb").style.backgroundColor = "black";

}

const userColor = document.getElementById("color");

userColor.addEventListener("change",() => changeBulbColour(userColor.value));

function changeBulbColour(color)
{
     document.getElementById("bulb").style.backgroundColor = color;
}


function SB_Control()
{
    const btn = document.getElementById("SB_btn");
    if(btn.innerText === "On")
        {
            document.getElementById("SB_btn").innerText = "Off";
                document.getElementById("smartBulb").classList.add("on");

        }
        else
            {
                document.getElementById("SB_btn").innerText = "On";
                document.getElementById("smartBulb").classList.remove("on");
            }
}





function SB_Control2()
{
    document.getElementById("smartBulb").classList.toggle("on");
}


document.getElementById("bgColor").addEventListener("input", function () {
    document.getElementById("box").style.backgroundColor = this.value;
  });

  document.getElementById("headingColor").addEventListener("input", function () {
    document.getElementById("heading").style.color = this.value;
  });

  document.getElementById("paraColor").addEventListener("input", function () {
    document.getElementById("para").style.color = this.value;
  });