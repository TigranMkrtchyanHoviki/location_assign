console.log(location.href)

console.log(location.protocol)

console.log(location.host)

const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
     location.assign("https://github.com/")
    // location.href = "https://github.com/"
    // location.replace("https://github.com/")

    // location.reload("https://github.com/")
})