export const REQUEST_HELLO_WORLD = "REQUEST_HELLO_WORLD";
export const RECEIVE_HELLO_WORLD = "RECEIVE_HELLO_WORLD";




export const requestHelloWorld = () => {
    console.log('2. from Action inside requestHelloWorld function');
    return ({ 
        type: REQUEST_HELLO_WORLD 
    })
};
export const receiveHelloWorld = text => ({ type: RECEIVE_HELLO_WORLD, text });

export const REQUEST_API_DATA = "REQUEST_API_DATA";
export const RECEIVE_API_DATA = "RECEIVE_API_DATA";
export const requestApiData = () => {
    console.log('2. inside action requestApiData function');
    return ({ type: REQUEST_API_DATA });
};
export const receiveApiData = data => {
    console.log('3. inside action receiveApiData function');
    return ({ type: RECEIVE_API_DATA, data });
};