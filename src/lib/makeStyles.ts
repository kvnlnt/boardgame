export const makeStyles = <T, P extends boolean[]>(styles: T) => {
  return (ifs: [keyof T, ...P][]) =>
    ifs.reduce((acc, [key, ...conditions]) => {
      acc = {
        ...acc,
        ...(conditions.every((condition) => condition) ? styles[key] : {}),
      };
      return acc;
    }, {});
};
