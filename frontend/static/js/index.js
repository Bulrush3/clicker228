function call_click() {
    console.log('click')
const counter = document.getElementById('counter')
counter.innerText = parseInt(counter.innerText) + 1

 fetch('/api/call_click/', {
     method: 'GET'
 }).then(response => {
     console.log(response)
     if (response.ok) return response.json()
     else return Promise.reject(response)
 }).then(data => {
     console.log(data)
 }).catch(err => console.log(err))
}
