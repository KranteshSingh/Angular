// In line annotations
let drawPoint = (point: { x: number; y: number }) => {
  //...
  console.log('Draw');
};

drawPoint({ x: 4, y: 3 });

// Using interfaces
// interface uses Pascal naming convention
interface Dress {
  x: string;
  y: string;
}
let doSpeak = (dress: Dress) => {
  //..
  console.log('Speaker is');
};
