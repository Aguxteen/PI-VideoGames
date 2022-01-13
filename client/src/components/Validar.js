
export const validar=(input)=>{
    let errors={}
    if(!input.name){
        errors.name="A name is required"
    }else if(input.name.length>32){
        errors.name="The name is too long"
    }
    if(!input.description_raw){
        errors.description_raw="A description is required"
    }
    if(!input.platforms){
        errors.platforms="A plataform is required"
    }
    if(!input.genres){
        errors.genres="A plataform is required"
    }
    
    if(input){
        
        if(isNaN(input.rating)){ 

            errors.rating="Rating must be a number"
        }else if(input.rating>100){
            errors.rating="Rating must be less than 100"
    }else if(input.rating<1){
        errors.rating="Rating must be more than 1"
    }
    if(!input.genres[0]){
        errors.genres="Minimum one gender is required"

    }
    if(!input.platforms[0]){
        errors.platforms="Minimum one platform is required"

    }
    
    return errors
}} 