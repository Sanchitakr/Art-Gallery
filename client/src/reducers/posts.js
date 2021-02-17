// have to specify state in redux reducer
//since it is a list of posts, initialise to []
export default(posts = [] , action) =>{
    switch (action.type) {
        case 'FETCH_ALL':
            
            return action.payload;
        case 'CREATE':
            return [...posts,action.payload];
     
        default:
            return posts;;
    }
}