
export const validar=(input)=>{
    let errors={}
    if(!input.name){
        errors.name="A name is required*"
    }else if(input.name.length>32){
        errors.name="The name is too long*"
    }
    if(!input.description_raw){
        errors.description_raw="A description is required*"
    }
    if(!input.platforms){
        errors.platforms="A plataform is required*"
    }
    if(!input.genres){
        errors.genres="A plataform is required"
    }
    
    if(input.rating){
        
        if(isNaN(input.rating)){ 

            errors.rating="Rating must be a number*"
        }else if(input.rating>5){
            errors.rating="Rating cant be more than 5*"
    }else if(input.rating<1){
        errors.rating="Rating must be more than 1*"
    }
}else{
    errors.rating="A Rating is required*"
}
    if(!input.genres[0]){
        errors.genres="Minimum one gender is required*"

    }
    if(!input.platforms[0]){
        errors.platforms="Minimum one platform is required*"

    }
    if(input.released){
      var array=  input.released.split("-")
      console.log(array)
      if(array.length===3){
        if(isNaN(array[0])){
            errors.released="The way to enter the date must be year - month - day numerically "
        }else if(array[0]<1958){
            errors.released="The first video game was created by William Higinbotham in 1958, I don't think the date is correct"
        }
        if(isNaN(array[1])){
            errors.released="The way to enter the date must be year - month - day numerically "
        }else if(array[1]>12||array[1]<1){
            errors.released="The date is misspelled"
        }
        if(isNaN(array[2])){
            errors.released="The way to enter the date must be year - month - day numerically "
        }else if(array[2]>31||array[2]<1){
            errors.released="The date is misspelled"
        }
      }else{
          errors.released="The way to enter the date must be year - month - day numerically "
      }
    }
    
    

return errors
} 