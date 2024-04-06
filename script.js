window.addEventListener('DOMContentLoaded', () =>{
    const loader = document.querySelector('.loader')
    setTimeout(()=>{
        loader.style.display = 'none'
 
    }, 2000)

    const btn = document.querySelector('.btn'),
        zara = document.querySelectorAll('.zara')

     

    btn.addEventListener('click', ()=>{
        loader.style.display = 'block'
        setTimeout(()=>{
            loader.style.display = 'none'
            zara.style.display = 'block'
        },3000)
    })
})





// window.addEventListener('DOMContentLoaded', () =>{
  

//     const btn = document.querySelector('.btn'),
//         element = document.querySelector('.box1')
//     btn.addEventListener('click', () => {
//         element.style.display = 'block';
//     });
// })





