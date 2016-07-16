import ALL_TYPES from '../data/types';

export default {
  filterMatchup(types){
    if(! Array.isArray(types)) return types;
    let matchups = {
      strengths: [],
      weaknesses: [],
      immunes: []
    }

    for(let t of types){
      for(let type of ALL_TYPES){
        if(t.toLowerCase() === type.name.toLowerCase()){
          Array.prototype.push.apply(matchups.strengths, type.strengths)
          Array.prototype.push.apply(matchups.weaknesses, type.weaknesses)
          Array.prototype.push.apply(matchups.immunes, type.immunes)
        }
      }
    }

    return matchups;
  }
}
