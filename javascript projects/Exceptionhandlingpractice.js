function throwsException(){
    throw new Error('Problem');
}

function catchesException(){
    try{
        throwsException();
    }catch(err){
        AuthenticatorAssertionResponse.ok(err instanceof Error);
        console.log(err.message);
    }
}