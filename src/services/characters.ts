import { characterDTO } from "../dto/characterDto.js";
import apiCall from "../utils/apiCall.js";
import { characterType } from "../utils/validationSchemas.js";

export const getCharacters = async (query: characterType) => {
  try {
    let people;
    const response = await apiCall("people");
    if (query.gender) {
      people = response.results.filter(
        (person: Record<string, any>) => person.gender === query.gender
      )
     
    }else{
      people = response.results
    }
    
    if (query.sort_by) {
      const sortType = query.sort_by;
      people.sort((a: any, b: any) => {
        if (sortType === "height") {
          return Number(a.height) - Number(b.height);
        }
        return a.name.localeCompare(b.name);
      });
      if (query.order_by === "desc") {
        people.sort((a: any, b: any) => {
          if (sortType === "height") {
            return Number(a.height) - Number(b.height);
          }
          return b.name.localeCompare(a.name);
        });
      }
    }
  
    const characters =  characterDTO(people);

    return { statusCode: 200, message: characters };
  } catch (error) {
    console.error(error);
    throw {
      statusCode: 500,
      message: "Internal Server Error",
    };
  }
};
