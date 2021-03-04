console.log('CLIENT');

let search_result, searchBtn;

window.addEventListener('load', () => {
    search_result = document.querySelector('#search_result');
    searchBtn = document.querySelector('#search');

    searchBtn.addEventListener('click', onSearch);
});

function onSearch() {
    const userNameElem = document.querySelector('#userName');
    
    if (userNameElem.value.length > 2) {
        fetch(`/users/${userNameElem.value}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.length) {
                    search_result.value = data;
                } else {
                    search_result.value = 'Empty';
                }
                
            })
    }

    userNameElem.value = '';
}