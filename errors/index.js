class productError extends Error{}

class InvalidBody extends productError{
    constructor(fields){
        super()
        this.fields=fields
        this.message=`Invalid body, required field:${this.fields.join(",")}`
        this.errorCode=400
    }
}

class InvalidCredentials extends productError{
    constructor(){
        super()
        this.message=`Invalid credentials`
        this.errorCode=403
    } 
}
class unauthorized extends productError{
    constructor(){
        super()
        this.message=`Unauthorized`
        this.errorCode=401
    }
}
class Forbidden extends productError{
    constructor(){
        super()
        this.message=`Forbidden`
        this.errorCode=403
    }
}
class tokenExpired extends productError{
    constructor(){
        super()
        this.message=`Token expired,please login again`
        this.errorCode=401
    }
}
class productNotFound extends productError{
    constructor(login){
        super()
        this.message=`product with login ${login} not found`
        this.errorCode=404
    }
}


module.exports={ productError,InvalidBody,InvalidCredentials,unauthorized,tokenExpired,productNotFound,Forbidden }