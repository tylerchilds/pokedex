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
        if(t === type.name){
          Array.prototype.push.apply(matchups.strengths, type.strengths)
          Array.prototype.push.apply(matchups.weaknesses, type.weaknesses)
          Array.prototype.push.apply(matchups.immunes, type.immunes)
        }
      }
    }

    matchups.strengths = [...new Set(matchups.strengths)]
    matchups.weaknesses = [...new Set(matchups.weaknesses)]
    matchups.immunes = [...new Set(matchups.immunes)]

    return matchups;
  }

}
