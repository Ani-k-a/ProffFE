function getLocaleStorage(){
    for (const i = 0; i < localStorage; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        console.log( `${key} >>>> ${value}`)
    }
}
getLocaleStorage();