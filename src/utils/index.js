export const typeHandle = (types) => {
    if (types[1]){
      return "Type: " + types[0].type.name + " and " + types[1].type.name;
    }
    return "Type: " + types[0].type.name;
  };