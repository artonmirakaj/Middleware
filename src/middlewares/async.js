export default function({ dispatch }) {
    return next => action => {
        // if action does not have payload
        // or if payload does not have .then property
        // send it on
        // if we dont have a promise
        if (!action.payload | !action.payload.then) {
            // send this action to the next middleware stack
            // if no other middlewares, forward onto reducers
            return next(action);
        }
        
        // make sure action's promise resolves - .then
        action.payload
            .then(function(response){
                // create a new action with the old type, but
                // replace the promise with the response data
                const newAction = { ...action, payload: response };
                // take action, send it through top most reducer
                dispatch(newAction);
            });
    }
}