function solve() {
    const spanL = document.querySelector('#result').firstElementChild;
    const spanR = document.querySelector('#result').lastElementChild;
    const history = document.querySelector('#history');
    let first;
    let second;
   
    function handler(ev){
        if(ev.target.nodeName === 'IMG'){
            ev.target.src = 'images/whiteCard.jpg';
            if (ev.target.parentElement.id === 'player1Div'){
                spanL.innerHTML = ev.target.name;
                first = ev.target;
            }else if (ev.target.parentElement.id === 'player2Div'){
                spanR.innerHTML = ev.target.name;
                second = ev.target;
            }
   
            if (spanR.textContent !=='' && spanL.textContent !== ''){
                if (Number(first.name) > Number(second.name)){
                    first.style.border = '2px solid green';
                    second.style.border = '2px solid red';
   
                }else {
                    second.style.border = '2px solid green';
                    first.style.border = '2px solid red';
                }
                history.textContent += `[${first.name} vs ${second.name}] `;
                spanR.textContent = '';
                spanL.textContent = '';
            }
        }
    }
       
    document.addEventListener('click', handler);
}
