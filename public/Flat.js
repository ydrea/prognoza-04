export default function Flat({ api }) {
  const flattenObject = (api) => {
    const flattened = {};

    Object.keys(api).forEach((key) => {
      const value = api[key];

      if (
        typeof value === "object" &&
        value !== null &&
        !Array.isArray(value)
      ) {
        Object.assign(flattened, flattenObject(value));
      } else {
        flattened[key] = value;
      }

      const Flat = JSON.stringify(flattened);
    });
    // return flattened;
    // console.log("a", Flatt);
  };

  return <div>{Flat}</div>;
}
