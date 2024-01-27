var n = 1
function change() {
    var img = document.getElementById("image")
    img.src = ''
    img.src = "https://moe.jitsu.top/api?" + n.toString()
    n++
}