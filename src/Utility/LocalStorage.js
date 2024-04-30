// import swal from 'sweetalert';

const getSavedTheme = () => {
    const saveTheme = localStorage.getItem('themes');
    if (saveTheme) {
        return JSON.parse(saveTheme);
    } else {
        return [];
    }
}

const setLocalTheme = (color) => {
    
    localStorage.setItem('themes',JSON.stringify(color));
    // const savedID = getSavedEstate();
    // const exist = savedID.find(estateID => estateID === id);
    // if (!exist) {
    //     savedID.push(id);
    //     localStorage.setItem('Estate', JSON.stringify(savedID));
    // }
    // else {
    //     swal({
    //         title: "It will not add here",
    //         text: "Already in the cart",
    //         icon: "warning",
    //         dangerMode: true,
    //     });
    // }
}

export { getSavedTheme, setLocalTheme }