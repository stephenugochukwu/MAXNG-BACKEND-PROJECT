export const characterDTO = (people: Record<string, any>)=>{
 
  const charactersObj = people.map((person: Record<string, any>) => {
    return {
      name: person.name,
      height: person.height,
      gender: person.gender,
      birthYear: person.birth_year,
      films: person.films,
    };
  });


  const totalCount = people.length
  const  totalHeightCm = people.reduce((total: number, current: { height: string; })=>{
      return (total += parseInt(current.height));
   }, 0)
  

  const totalHeightInches = totalHeightCm / 2.54;
  const totalHeightFeet = `${Math.floor(totalHeightInches / 12)}ft ${(
    totalHeightInches % 12
  ).toFixed(2)}in`;

  return{
    totalCount,
    totalHeightCm,
    totalHeightFeet,
    charactersObj
  }
}